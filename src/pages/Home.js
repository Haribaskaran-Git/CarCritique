import React, { useEffect, useRef, useState } from "react";
import NavBar from "./../components/NavBar";
import CarInfoPanel from "../components/CarInfoPanel";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import axios from "axios";

const client = axios.create({
  baseURL: "http://16.16.192.199:8000",
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
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState({ type: "", message: "" });
  const [timeId, setTimeId] = useState("");
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

        if (uniqueModels.length > 0) {
          setModelDetail(uniqueModels[0]);
        }
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
    if (brandName) queryParams.push(`carname=${encodeURIComponent(brandName)}`);
    if (filter) queryParams.push(`segment=${encodeURIComponent(filter)}`);
    if (modelName) queryParams.push(`model_name=${encodeURIComponent(modelName)}`);

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

          if (fetchedReviews.length > 0) {
            setModelDetail(fetchedReviews[0]);
          } else {
            setModelDetail({});
          }
        } catch (error) {
          setErrorStatus({ type: "not_found", message: "No models found." });
        } finally {
          setLoading(false);
        }
      };
      newFilteredModels();
    }
  }, [brandName, modelName, filter,models,reviews]);

  const handleCarClick = async (model) => {
    setModelDetail(model); 
    try {
      const response = await client.get(`/api/reviews/?model_name=${model.Model_Name}`);
      setFilteredReviews(response.data); 
      setErrorStatus({ type: "", message: "" });
    } catch (error) {
      setErrorStatus({ type: "fetch_error", message: "Failed to fetch reviews." });
    }
  };

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

    return Object.entries(modelRatings).map(([modelName, { id, totalRating, count, price }]) => ({
      id,
      Model_Name: modelName,
      Average_Rating: (totalRating / count).toFixed(2),
      Price: price,
    }));
  }

  const debounce = (func, delay) => {
    clearTimeout(timeId);
    let id = setTimeout(func, delay);
    setTimeId(id);
  };

  return (
    <div className="home">
      <NavBar setBrandName={setBrandName} setFilter={setFilter} debounce={debounce} />
      <CarInfoPanel
        brandName={brandName}
        filter={filter}
        modelName={modelName}
        models={filteredModels}
        modelDetail={modelDetail}
        loading={loading}
        handleScrollClick={() => titleRef.current.scrollIntoView({ behavior: "smooth" })}
        error={errorStatus}
        setModelName={setModelName}
        handleCarClick={handleCarClick} 
      />
      <Reviews title={titleRef} reviews={filteredReviews} loading={loading}/>
      <Footer />
    </div>
  );
}

export default Home;
