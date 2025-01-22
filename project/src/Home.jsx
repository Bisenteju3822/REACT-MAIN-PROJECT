import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [query, setQuery] = useState('');
  const [date, setDate] = useState('');
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search functionality
    navigate('./search');
  };

  

  const cities = [
    {
      city: 'Chennai',
      accommodations: '2,832',
      image: 'pexels-prakashq2-774282.jpg',
    },
    {
      city: 'Jaipur',
      accommodations: '3,082',
      image: 'pexels-mrudula-thakur-256463-784879.jpg',
    },
    {
      city: 'Kochi',
      accommodations: '2,165',
      image: 'pexels-tom-antony-571459500-20473499.jpg',
    },
    {
      city: 'Pondicherry',
      accommodations: '1,596',
      image: 'pexels-roman-odintsov-4870482.jpg',
    },
    {
      city: 'Varanasi',
      accommodations: '2,000',
      image: 'pexels-akash-kumar-2007768-30210504.jpg',
    },
    {
      city: 'Mumbai',
      accommodations: '2,000',
      image: 'mumbai.jpg',
    },
    {
      city: 'Patna',
      accommodations: '2,000',
      image: 'patna.jpg',
    },
    {
      city: 'Bhopal',
      accommodations: '2,000',
      image: 'bhopal.jpg',
    },
    {
      city: 'New York',
      accommodations: '2,000',
      image: 'pexels-galerieb-1148565.jpg',
    },
    {
      city: 'Bali',
      accommodations: '2,000',
      image: 'pexels-timrael-2474691.jpg',
    },
    {
      city: 'China',
      accommodations: '2,000',
      image: 'pexels-pixabay-247597.jpg',
    },
    {
      city: 'Thailand',
      accommodations: '2,000',
      image: 'pexels-tkirkgoz-11597056.jpg',
    }
  ];

  const promotions = [
    {
      destination: 'Singapore',
      offer: 'Up to 50% off on hotels plus top attractions',
      image: 'singapore.jpg',
    },
    {
      destination: 'India',
      offer: 'Up to 50% off on hotels and top attractions',
      image: 'pexels-masoodaslami-14388151.jpg',
    },
    {
      destination: 'Malaysia',
      offer: 'Up to 50% off on hotels and top attractions',
      image: 'pexels-ketut-subiyanto-4559772.jpg',
    }
  ];

  const nextSlide = () => {
    setCurrent(current === promotions.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? promotions.length - 1 : current - 1);
  };

  return (
    <div className="booking-form">
      <div className="container">
        <div className="main">
          <div className="form-img">
            <img src="pexels-oraelgomes-2274172.jpg" alt="Form Image" />
          </div>
          <div className="content">
            <h2 style={{ marginTop: "60px" }}>Search and Book</h2>
            <img src='th (5).jpeg' style={{ width: "170px" }} alt='Form Image' />
            <form id="search-form" onSubmit={handleSearch} style={{ marginTop: "60px" }}>
              <input
                type="text"
                placeholder="Search by city or activity"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <button className="btn" type="submit" style={{ backgroundColor: 'green' }}>
                SEARCH
              </button>
            </form>
        
          </div>
        </div>
    
        <h2>
          EXPLORE <span style={{ color: 'green' }}>CITIES INSIDE</span> AND OUTSIDE <span style={{ color: "green" }}>OF COUNTRY</span>
        </h2>
        <div className="cities-list">
          {cities.map((cityData, index) => (
            <div key={index} className="booking-card">
              <img src={cityData.image} alt={cityData.city} className="booking-card-image" />
              <div className="booking-card-info">
                <h2>{cityData.city}</h2>
                <p>{cityData.accommodations} accommodations</p>
                <button
                  className="btn"
                  onClick={() => navigate(`/city/${cityData.city}`)}
                  style={{ backgroundColor: 'green' }}
                >
                  VISIT
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="slider">
          <h2>Accommodation Promotions</h2>
          <div className="slider-inner">
            {promotions.map((promo, index) => (
              <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
                {index === current && (
                  <div className="promotion-card">
                    <img src="singpore.jpg" alt={promo.destination} className="promotion-image" />
                    <div className="promotion-info">
                      <h3>{promo.destination}</h3>
                      <p>{promo.offer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className="prev" onClick={prevSlide}>‹</button>
          <button className="next" onClick={nextSlide}>›</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
