import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./ActivityManager.css";

const ActivityManager = () => {
  const { state } = useLocation();
  const { activity, description, duration, itemsToBring, price } = state;

  const [activityDetails, setActivityDetails] = useState([]);
  const [form, setForm] = useState({
    activity,
    description,
    duration,
    itemsToBring,
    price: price || "", // Ensure price is set to an empty string if not provided
  });

  useEffect(() => {
    fetchActivityDetails();
  }, []);

  const fetchActivityDetails = async () => {
    try {
      const response = await axios.get("http://localhost:3000/activityDetails");
      setActivityDetails(response.data);
    } catch (error) {
      console.error("Error fetching activity details:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        await axios.put(
          `http://localhost:3000/activityDetails/${form.id}`,
          form
        );
        setActivityDetails(
          activityDetails.map((item) => (item.id === form.id ? form : item))
        );
      } else {
        const response = await axios.post(
          "http://localhost:3000/activityDetails",
          form
        );
        setActivityDetails([...activityDetails, response.data]);
      }
      resetForm();
    } catch (error) {
      console.error("Error saving activity detail:", error);
    }
  };

  const handleEdit = (detail) => {
    setForm(detail);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/activityDetails/${id}`);
      setActivityDetails(activityDetails.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting activity detail:", error);
    }
  };

  const resetForm = () => {
    setForm({ activity, description, duration, itemsToBring, price: "" });
  };

  return (
    <div className="activity-manager-container">
      <div className="activity-manager">
        <h3>Manage Activity Details</h3>
        <form onSubmit={handleSubmit} className="activity-form">
          <label>
            Activity:
            <input
              type="text"
              name="activity"
              value={form.activity}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label>
            Duration:
            <input
              type="text"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Items to Bring:
            <textarea
              name="itemsToBring"
              value={form.itemsToBring}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">{form.id ? "Update" : "Add"}</button>
        </form>
        <div className="activity-list">
          {activityDetails.length > 0 ? (
            activityDetails.map((detail) => (
              <div key={detail.id} className="activity-detail">
                <p>
                  <strong>Activity:</strong> {detail.activity}
                </p>
                <p>
                  <strong>Description:</strong> {detail.description}
                </p>
                <p>
                  <strong>Duration:</strong> {detail.duration}
                </p>
                <p>
                  <strong>Items to Bring:</strong> {detail.itemsToBring}
                </p>
                <p>
                  <strong>Price:</strong> {detail.price}
                </p>
                <button
                  onClick={() => handleEdit(detail)}
                  className="edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(detail.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No activities found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityManager;
