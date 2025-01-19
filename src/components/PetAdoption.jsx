import { useState } from "react";
import "./Adoption.css";
import dogadopt1 from "../assets/dogadopt1.png";
import dogadopt2 from "../assets/dogadopt2.png";
import dogadopt3 from "../assets/dogadopt3.png";
import catadopt1 from "../assets/catadopt1.png";
import catadopt2 from "../assets/catadopt2.png";
import catadopt3 from "../assets/catadopt3.png";
import birdadop1 from "../assets/birdadop1.png";
import birdadopt2 from "../assets/birdadopt2.png";
import head from "../assets/head.png";


// Sample pet data
const pets = [
  {
    id: 1,
    name: "Bella",
    age: "2 years",
    status: "Healthy",
    description: "A friendly dog who loves to play and is great with kids.",
    image: dogadopt1,
  },
  {
    id: 2,
    name: "Whiskers",
    age: "1 year",
    status: "Healthy",
    description: "A calm and affectionate cat who loves cuddles.",
    image: catadopt1,
  },
  {
    id: 3,
    name: "Coco",
    age: "6 months",
    status: "Healthy",
    description: "A playful and colorful bird who sings beautifully in the morning.",
    image: birdadop1,
  },
  {
    id: 4,
    name: "Mimo",
    age: "8 months",
    status: "Healthy",
    description: "An energitic and affectionate cat who loves to play with toys and nap in sunny spots",
    image: catadopt2,
  },
  {
    id: 5,
    name: "Rex",
    age: "2 years",
    status: "Healthy",
    description: "A lovely dog who enjoys fetch, long wlks, and belly rubs.",
    image: dogadopt2,
  },
  {
    id: 6,
    name: "Tweety",
    age: "4 months",
    status: "Healthy",
    description: "A curious cockatiel who loves exploring and whistling tunes..",
    image: birdadopt2,
  },
  {
    id: 7,
    name: "florio",
    age: "2 months",
    status: "Neutred and vaccinated",
    description: "A fluffy cat who enjoys lounging and gentle cuddles.",
    image: catadopt3,
  },
  {
    id: 8,
    name: "Mimi",
    age: "6 months",
    status: " Fully trained and Healthy",
    description: "Perfect for families or individuals seeking a loyal and watchful companion.",
    image: dogadopt3,
  },
];

// Component
const Adoption = () => {
  const [selectedPet, setSelectedPet] = useState(null); // Track selected pet
  const [formVisible, setFormVisible] = useState(false); // Track form visibility
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    motivation: "",
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Adoption request sent for ${selectedPet.name}.`);
    // Reset form and close modal
    setFormData({ name: "", address: "", motivation: "" });
    setFormVisible(false);
  };

  return (
    <div className="adoption-page">
        <header>
            <img src={head}/>
        </header>
      <h2>Pets Available for Adoption</h2>
      <div className="pet-list">
        {pets.map((pet) => (
          <div className="pet-card" key={pet.id}>
            <img src={pet.image} alt={pet.name} className="pet-image" />
            <h3>{pet.name}</h3>
            <p>Age: {pet.age}</p>
            <p>Status: {pet.status}</p>
            <p>{pet.description}</p>
            <button
              onClick={() => {
                setSelectedPet(pet);
                setFormVisible(true);
              }}
            >
              Request to Adopt
            </button>
          </div>
        ))}
      </div>

      {/* Adoption Form Modal */}
      {formVisible && (
        <div className="form-modal">
          <div className="form-container">
            <h2>Adopt {selectedPet.name}</h2>
            <form onSubmit={handleFormSubmit}>
              <label>
                Your Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Motivation:
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </label>
              <div className="form-buttons">
                <button type="submit">Submit</button>
                <button
                  type="button"
                  onClick={() => {
                    setFormVisible(false);
                    setFormData({ name: "", address: "", motivation: "" });
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Adoption;