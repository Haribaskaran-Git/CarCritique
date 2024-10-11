import React, { useEffect, useRef, useState } from "react";
import NavBar from "./../components/NavBar";
import CarInfoPanel from "../components/CarInfoPanel";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import axios from "axios";

const client = axios.create({
  baseURL: "http://16.16.179.209:8000",
});

function Home() {
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [modelName, setModelName] = useState("");
  const [filter, setFilter] = useState("");
  const [modelDetail, setModelDetail] = useState({});
  const [timeId, setTimeId] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState({ type: "", message: "" });
  const titleRef = useRef(null);
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        let response = await client.get(`/api/reviews/`);
        let fetchedReviews = response.data;
        let uniqueModels = UniqueModels(fetchedReviews);
        setModels(uniqueModels);
        setReviews(fetchedReviews);
        setErrorStatus({ type: "", message: "" });
      } catch (error) {
        setErrorStatus({ type: "network", message: "Something went wrong with the network." });
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const queryParams = [];

    if (brandName) {
      queryParams.push(`carname=${encodeURIComponent(brandName)}`);
    }
    if (filter) {
      queryParams.push(`segment=${encodeURIComponent(filter)}`);
    }
    if (modelName) {
      queryParams.push(`model_name=${encodeURIComponent(modelName)}`);
    }

    const endPoint = `/api/reviews/?${queryParams.join("&")}`;

    if (queryParams.length === 0) {
      setFilteredModels(models);
      setFilteredReviews(reviews);
      setErrorStatus({ type: "", message: "" });
    } else {
      const newFilteredModels = async () => {
        setLoading(true);
        try {
          let response = await client.get(endPoint);

          let fetchedReviews = response.data;
          setFilteredModels(UniqueModels(fetchedReviews));
          setFilteredReviews(fetchedReviews);
          setErrorStatus({ type: "", message: "" });
        } catch (error) {

          setErrorStatus({ type: "not_found", message: "No models found." });
        } finally {
          setLoading(false);
        }
      };
      newFilteredModels();
    }
  }, [brandName, modelName, filter, models, reviews]);

  function handleScrollClick() {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function UniqueModels(fetchedReviews) {
    const modelRatings = fetchedReviews.reduce((acc, review) => {
      const modelName = review.Model_Name;
      if (!acc[modelName]) {
        acc[modelName] = { id: review._id, totalRating: 0, count: 0, price: review["Price_Range"] };
      }
      acc[modelName].totalRating += review.Rating;
      acc[modelName].count += 1;
      return acc;
    }, {});

    const uniqueModels = Object.entries(modelRatings).map(([modelName, { id, totalRating, count, price }]) => ({
      id: id,
      Model_Name: modelName,
      Average_Rating: (totalRating / count).toFixed(2),
      Price: price,
    }));
    return uniqueModels;
  }

  const debounce = function (func, delay) {
    clearTimeout(timeId);
    let id = setTimeout(func, delay);
    setTimeId(id);
  };

  return (
    <div className="home">
      <NavBar setBrandName={setBrandName} setFilter={setFilter} debounce={debounce}></NavBar>
      <CarInfoPanel
        brandName={brandName}
        filter={filter}
        modelName={modelName}
        models={filteredModels}
        modelDetail={modelDetail}
        loading={loading}
        handleScrollClick={handleScrollClick}
        error={errorStatus}
        setModelDetail={setModelDetail}
        setModelName={setModelName}
      ></CarInfoPanel>
      <Reviews title={titleRef} reviews={filteredReviews}></Reviews>
      <Footer></Footer>
    </div>
  );
}

export default Home;
