import React, { useEffect, useRef, useState } from "react";
import NavBar from "./../components/NavBar";
import CarInfoPanel from "../components/CarInfoPanel";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import axios from "axios";

const client = axios.create({
  baseURL: "http://13.50.248.88:8000",
});

function Home() {
  const [models, setModels] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [filter, setFilter] = useState("");
  const [timeId, setTimeId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const titleRef = useRef(null);
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        let response = await client.get(`/api/reviews/?carname=${brandName}&Segment=${filter}`);
        let fetchedReviews = response.data;

        const modelRatings = fetchedReviews.reduce((acc, review) => {
          const modelName = review.Model_Name;
          if (!acc[modelName]) {
            acc[modelName] = { id: review._id, totalRating: 0, count: 0 };
          }
          acc[modelName].totalRating += review.Rating;
          acc[modelName].count += 1;
          return acc;
        }, {});

        const uniqueModels = Object.entries(modelRatings).map(([modelName, { id, totalRating, count }]) => ({
          id: id,
          Model_Name: modelName,
          Average_Rating: (totalRating / count).toFixed(2),
        }));

        setReviews(fetchedReviews);
        setModels(uniqueModels);
      } catch (error) {
        console.log(error);
        setError(true);
        setModels([]);
      } finally {
        setError(false);
        setLoading(false);
      }
    };
    fetchPost();
  }, [brandName, filter]);

  function handleClick() {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
        loading={loading}
        handleClick={handleClick}
        models={models}
        reviews={reviews}
        error={error}
      ></CarInfoPanel>
      <Reviews title={titleRef} reviews={reviews}></Reviews>
      <Footer></Footer>
    </div>
  );
}

export default Home;
