import React, { useState } from "react";
import "../styles/Review.css";

function Reviews({ title, reviews, loading }) {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6; 
  const totalReviews = reviews.length;
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  const renderStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating); 
  };

  return (
    <div ref={title} id="reviews" className="reviews-page">
      <div className="reviews-wrapper">
        <h1>Customer Reviews</h1>

        {!loading && <div className="review-container">
          {currentReviews.map((review, index) => (
            <div className="review-item" key={index}>
              <h3>{review.Reviewer_Name}</h3>
              <div className="rating">
                {renderStars(review.Rating)} 
              </div>
              <p>{review.Review_Description}</p>
            </div>
          ))}
        </div>}

        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="pagination-info">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reviews;
