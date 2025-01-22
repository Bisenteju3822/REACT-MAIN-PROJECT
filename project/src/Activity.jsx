import { useNavigate } from "react-router-dom";
import "./Activity.css";

const Activity = () => {
  const navigate = useNavigate();

  const handleBookNowClick = (
    activity,
    description,
    duration,
    itemsToBring
  ) => {
    navigate(`/activity-manager`, {
      state: { activity, description, duration, itemsToBring },
    });
  };

  return (
    <div className="activity-details">
      <h2>Activities at Urban Retreat</h2>
      <div className="activity">
        <h3>Guided Tours</h3>
        <img src="guide.jpg" alt="Guided Tours" className="activity-image" />
        <p>
          Join our expert guides for immersive tours of the Urban Retreat area,
          covering historical landmarks, nature trails, and more.
        </p>
        <button
          className="book-button"
          onClick={() =>
            handleBookNowClick(
              "Guided Tours",
              "An immersive tour of Urban Retreat's historical landmarks and nature trails.",
              "2 hours",
              "Comfortable shoes, water bottle, sunscreen"
            )
          }
        >
          Book Now
        </button>
      </div>
      {/* Repeat the above structure for other activities */}
    </div>
  );
};

export default Activity;
