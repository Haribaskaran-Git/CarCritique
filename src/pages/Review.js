import React, { useState } from 'react';
import "../styles/Review.css"; 

const Review = () => {
  const initialReviews = [
    {
      name: "John Doe",
      rating: 4,
      comment: "The Renault Kwid is an excellent choice for city driving. It's compact and fuel-efficient!",
    },
    {
      name: "Jane Smith",
      rating: 5,
      comment: "I love the features and the overall design of the car. A great value for money!",
    },
    {
      name: "Mark Johnson",
      rating: 3,
      comment: "The mileage is impressive, but I wish it had more power on highways.",
    },
    {
      name: "Emily Davis",
      rating: 5,
      comment: "Absolutely love my Renault Kwid! Perfect for daily commutes and weekend trips.",
    },
    {
      name: "Chris Brown",
      rating: 4,
      comment: "Comfortable and stylish! I get compliments on it all the time.",
    },
    {
      name: "Patricia Wilson",
      rating: 2,
      comment: "It’s a decent car, but I expected more features for the price.",
    },
    {
      name: "David Lee",
      rating: 4,
      comment: "Great fuel efficiency and a smooth ride. I would recommend it!",
    },
    {
      name: "Sara Johnson",
      rating: 5,
      comment: "Perfect city car! Compact but spacious enough for my family.",
    },
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ name: '', rating: 1, comment: '' });

  // Calculate the overall rating
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const overallRating = (totalRating / reviews.length).toFixed(1);

  // Calculate percentage for each rating
  const ratingCounts = Array(5).fill(0);
  reviews.forEach(review => {
    ratingCounts[review.rating - 1]++;
  });

  const ratingPercentages = ratingCounts.map(count => ((count / reviews.length) * 100).toFixed(1));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', rating: 1, comment: '' }); // Reset the form
    }
  };

  return (
    <div className='review'>
      <h1>Customer Reviews for " Renault "</h1>
      <div className='overall-rating'>
        <h2>
          Overall Rating: {overallRating} 
          <span className="star-rating">{Array(Math.round(overallRating)).fill('⭐')}</span>
        </h2>
        <div className='rating-breakdown'>
          {ratingCounts.map((count, index) => (
            <div key={index}>
              <div>{5 - index} stars: {count} reviews ({ratingPercentages[index]}%)</div>
              <div className='progress-bar-container'>
                <div className='progress-bar'>
                  <div
                    className='progress-fill'
                    style={{ width: `${ratingPercentages[index]}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='review-container'>
        {reviews.map((review, index) => (
          <div className='review-item' key={index}>
            <h3>{review.name}</h3>
            <div className='rating'>{Array(review.rating).fill('⭐')}</div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className='review-form'>
        <h3>Add Your Review</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleInputChange}
          required
        />
        <select
          name="rating"
          value={newReview.rating}
          onChange={handleInputChange}
        >
          {[1, 2, 3, 4, 5].map(rating => (
            <option key={rating} value={rating}>{rating} Star</option>
          ))}
        </select>
        <textarea
          name="comment"
          placeholder="Your Comment"
          value={newReview.comment}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default Review;
