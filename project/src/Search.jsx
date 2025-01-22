import { useNavigate, useLocation } from 'react-router-dom';
import './Search.css';

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  const handleActivityClick = () => {
    navigate('/activity'); 
  };

  return (
    <div className="search-results">
      <h2>Search Results for {query}</h2>
      <div className="options">
        <div className="option" onClick={handleActivityClick}>
          <h3>Activities</h3>
          <img src="pexels-tkirkgoz-11597056.jpg" alt="Activities" />
          <p>Explore various activities available at Urban Retreat, such as guided tours, adventure sports, and wellness programs.</p>
        </div>
        <div className="option">
          <h3>Hotels</h3>
          <img src="pexels-pixabay-261102.jpg" alt="Hotels" />
          <p>Find a range of accommodations, from luxury hotels to budget-friendly options, all within Urban Retreat.</p>
        </div>
        <div className="option">
          <h3>About Urban Retreat</h3>
          <img src="pexels-rdne-6669854.jpg" alt="Urban Retreat" />
          <p>Urban Retreat is a serene getaway located near Acrsdvjdsdsbir erkgewtw  gnwitw  agwpew4 gjegnsddn agse gew sew  peg ej rte es r pfa d oe  rjb dfj t df id dl fpdfmfmlhk pkldfklbkltpotop rjtmlt po po  r fbjre g erer errehlt eh eh   erhoeh e e erpjjbs  bnr sre nte  ret </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
