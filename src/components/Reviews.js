import React from "react";
import "../styles/Review.css";

function Reviews({ title ,reviews}) {
  // const initialReviews = [
  //   {
  //     name: "John Doe",
  //     rating: 4,
  //     comment: "The Renault Kwid is an excellent choice for city driving. It's compact and fuel-efficient!",
  //   },
  //   {
  //     name: "Jane Smith",
  //     rating: 5,
  //     comment: "I love the features and the overall design of the car. A great value for money!",
  //   },
  //   {
  //     name: "Mark Johnson",
  //     rating: 3,
  //     comment: "The mileage is impressive, but I wish it had more power on highways.",
  //   },
  //   {
  //     name: "Emily Davis",
  //     rating: 5,
  //     comment: "Absolutely love my Renault Kwid! Perfect for daily commutes and weekend trips.",
  //   },
  //   { name: "Chris Brown", rating: 4, comment: "Comfortable and stylish! I get compliments on it all the time." },
  //   { name: "Patricia Wilson", rating: 2, comment: "It’s a decent car, but I expected more features for the price." },
  //   { name: "David Lee", rating: 4, comment: "Great fuel efficiency and a smooth ride. I would recommend it!" },
  //   { name: "Sara Johnson", rating: 5, comment: "Perfect city car! Compact but spacious enough for my family." },
  // ];

  

  // const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  // const overallRating = (totalRating / reviews.length).toFixed(1);

  // const ratingCounts = Array(5).fill(0);
  // reviews.forEach((review) => {
  //   ratingCounts[review.rating - 1]++;
  // });

  // const totalReviews = reviews.length;
  // const ratingPercentages = ratingCounts.map((count) => ((count / totalReviews) * 100).toFixed(1));

  return (
    <div ref={title} id="reviews" className="reviews-page">
      <div className="reviews-wrapper">
        <h1>Customer Reviews for "Renault"</h1>
        {/* <div className="overall-rating">
          <h2>
            Overall Rating: {overallRating}
            <span className="star-rating">{Array(Math.round(overallRating)).fill("⭐")}</span>
          </h2>
          <div className="rating-breakdown">
            {ratingCounts
              .map((count, index) => (
                <div key={index}>
                  <div>
                    {index + 1} stars: {count} reviews ({ratingPercentages[index]}%)
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${ratingPercentages[index]}%` }}></div>
                    </div>
                  </div>
                </div>
              ))
              .reverse()}
          </div>
          Array(review.Rating).fill("⭐")
        </div> */}

        <div className="review-container">
          {reviews.map((review, index) => (
            <div className="review-item" key={index}>
              <h3>{review.Reviewer_Name}</h3>
              <div className="rating">{review.Rating}</div>
              <p>{review.Review_Description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
