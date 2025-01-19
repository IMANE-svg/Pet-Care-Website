
import PropTypes from "prop-types"; // Import PropTypes
import "./HomePage.css";
import Art1 from "../assets/Art1.png";
import Art2 from "../assets/Art2.png";
import Art3 from "../assets/Art3.png";
import { Link } from "react-router-dom";
const HomePage = ({ user }) => {
  return (
    <div className="homepage-container">
      {/* Header */}
      <header className="header">
      <h1 className="logo">Pet Care </h1>
        <nav className="nav">
          <Link to="/shop">Shopping</Link>
          <Link to="/adoption">Adoption</Link>
          <Link to="/guide">Guide</Link>
          
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h2 className="main-title">Caring for Your Pets</h2>
        <div className="articles">
          <article className="article">
            <img
              src={Art1}
              alt="Happy dog"
            />
            <h3>Essential Items for Your Pet</h3>
            <p>
              Make sure your pets have the essentials: a comfortable bed, food,
              toys, and plenty of love.
            </p>
          </article>

          <article className="article">
            <img
              src={Art2}
              alt="Relaxing cat"
            />
            <h3>How to Keep Your Cat Happy</h3>
            <p>
              Cats love cozy spaces, scratching posts, and interactive play
              sessions.
            </p>
          </article>

          <article className="article">
            <img
              src={Art3}
              alt="Dog playing"
            />
            <h3>Benefits of Daily Walks</h3>
            <p>
              Regular walks not only keep your dog fit but also provide mental
              stimulation and bonding time.
            </p>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Pet Care Website. All rights reserved.</p>
        <p>Contact us at support@petcare.com</p>
      </footer>
    </div>
  );
};

// Add PropTypes validation
HomePage.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired, // Ensure user.email is a required string
  }).isRequired,
};

export default HomePage;