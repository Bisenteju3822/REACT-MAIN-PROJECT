import { useState, useEffect } from 'react';
import axios from 'axios';
import './PriceM.css';

const PriceM = () => {
  const [priceDetails, setPriceDetails] = useState([]);
  const [form, setForm] = useState({ id: null, activity: '', price: '', description: '', duration: '', itemsToBring: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/priceDetails')
      .then(response => setPriceDetails(response.data))
      .catch(error => console.error('Error fetching price details:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      axios.put(`http://localhost:5000/priceDetails/${form.id}`, form)
        .then(() => {
          setPriceDetails(priceDetails.map(item => (item.id === form.id ? form : item)));
          resetForm();
        })
        .catch(error => console.error('Error updating price detail:', error));
    } else {
      axios.post('http://localhost:5000/priceDetails', form)
        .then(response => {
          setPriceDetails([...priceDetails, response.data]);
          resetForm();
        })
        .catch(error => console.error('Error adding price detail:', error));
    }
  };

  const handleEdit = (detail) => {
    setForm(detail);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/priceDetails/${id}`)
      .then(() => setPriceDetails(priceDetails.filter(item => item.id !== id)))
      .catch(error => console.error('Error deleting price detail:', error));
  };

  const resetForm = () => {
    setForm({ id: null, activity: '', price: '', description: '', duration: '', itemsToBring: '' });
    setIsEditing(false);
  };

  return (
    <div className="price-manager">
      <h3>Manage Price Details</h3>
      <form onSubmit={handleSubmit} className="price-form">
        <label>
          Activity:
          <input type="text" name="activity" value={form.activity} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={form.price} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={form.description} onChange={handleChange} required></textarea>
        </label>
        <label>
          Duration:
          <input type="text" name="duration" value={form.duration} onChange={handleChange} required />
        </label>
        <label>
          Items to Bring:
          <textarea name="itemsToBring" value={form.itemsToBring} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
        {isEditing && <button type="button" onClick={resetForm} className="cancel-button">Cancel</button>}
      </form>
      <div className="price-list">
        {priceDetails.map(detail => (
          <div key={detail.id} className="price-detail">
            <p><strong>Activity:</strong> {detail.activity}</p>
            <p><strong>Price:</strong> ₹{detail.price}</p>
            <p><strong>Description:</strong> {detail.description}</p>
            <p><strong>Duration:</strong> {detail.duration}</p>
            <p><strong>What to Bring:</strong> {detail.itemsToBring}</p>
            <button onClick={() => handleEdit(detail)} className="edit-button">Edit</button>
            <button onClick={() => handleDelete(detail.id)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceM;
