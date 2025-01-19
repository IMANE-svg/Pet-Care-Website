
import "./PetShop.css";
import catfood1 from "../assets/catfood1.png";
import catfood2 from "../assets/catfood2.png";
import catfood3 from "../assets/catfood3.png";
import catfood4 from "../assets/catfood4.png";
import catfood5 from "../assets/catfood5.png";
import catfood6 from "../assets/catfood6.png";
import catfood7 from "../assets/catfood7.png";
import catfood8 from "../assets/catfood8.png";
import catfood9 from "../assets/catfood9.png";
import catfood10 from "../assets/catfood10.png";
import slider30 from "../assets/slider30.png";
import dogfood1 from "../assets/dogfood1.png";
import dogfood2 from "../assets/dogfood2.png";
import dogfood3 from "../assets/dogfood3.png";
import dogfood4 from "../assets/dogfood4.png";
import dogfood5 from "../assets/dogfood5.png";
import dogfood6 from "../assets/dogfood6.png";
import dogfood7 from "../assets/dogfood7.png";
import dogfood8 from "../assets/dogfood8.png";
import dogfood9 from "../assets/dogfood9.png";
import dogfood10 from "../assets/dogfood10.png";
import acces1 from "../assets/acces1.png";
import acces2 from "../assets/acces2.png";
import acces3 from "../assets/acces3.png";
import acces4 from "../assets/acces4.png";
import acces5 from "../assets/acces5.png";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.png";
import pro5 from "../assets/pro5.png";

// Sample product data
const categories = [
  {
    title: "Cat Food",
    products: [
      { id: 1, name: "Dry Cat Food", price: "$20", image: catfood1 },
      { id: 2, name: "Wet Cat Food", price: "$15", image: catfood2 },
      { id: 3, name: "Wet Cat Food", price: "$15", image: catfood3 },
      { id: 4, name: "Wet Cat Food", price: "$15", image: catfood4 },
      { id: 5, name: "Wet Cat Food", price: "$15", image: catfood5 },
      { id: 6, name: "Wet Cat Food", price: "$15", image: catfood6 },
      { id: 7, name: "Wet Cat Food", price: "$15", image: catfood7 },
      { id: 8, name: "Wet Cat Food", price: "$15", image: catfood8 },
      { id: 9, name: "Wet Cat Food", price: "$30", image: catfood9 },
      { id: 10, name: "Wet Cat Food", price: "$30", image: catfood10 },
    ],
  },
  {
    title: "Dog Food",
    products: [
      { id: 11, name: "Dry Dog Food", price: "$25", image: dogfood1},
      { id: 12, name: "Wet Dog Food", price: "$18", image: dogfood2 },
      { id: 13, name: "Wet Dog Food", price: "$18", image: dogfood3 },
      { id: 14, name: "Wet Dog Food", price: "$18", image: dogfood4 },
      { id: 15, name: "Wet Dog Food", price: "$18", image: dogfood5 },
      { id: 16, name: "Wet Dog Food", price: "$18", image: dogfood6 },
      { id: 17, name: "Wet Dog Food", price: "$18", image: dogfood7 },
      { id: 18, name: "Dry Food", price: "$18", image: dogfood8 },
      { id: 19, name: "Wet Dog Food", price: "$30", image: dogfood9 },
      { id: 20, name: "Wet Dog Food", price: "$30", image: dogfood10 },
    ],
  },
  {
    title: "Pet Accessories",
    products: [
      
      { id: 22, name: "accessory2", price: "$30", image: acces1 },
      { id: 23, name: "accessory3", price: "$30", image: acces2 },
      { id: 24, name: "accessory4", price: "$30", image: acces4 },
      { id: 25, name: "accessory5", price: "$30", image: acces3 },
      { id: 26, name: "accessory6", price: "$30", image: acces5 },
      
    ],
  },
  {
    title: "Product Care",
    products: [
      { id: 27, name: "Shampoo for Dogs", price: "$8", image: pro1 },
      { id: 28, name: "Cat Nail Clippers", price: "$5", image: pro5 },
      { id: 29, name: "product3", price: "$30", image: pro3 },
      { id: 30, name: "product4", price: "$30", image: pro2 },
      { id: 31, name: "product5", price: "$30", image: pro4 },
     
    ],
  },
  
];

const PetShop = () => {
  // Function to handle adding a product to the cart
  const handleAddToCart = (productName) => {
    alert(`${productName} has been added to your cart!`);
  };

  return (
    <div className="pet-shop">
      <header>
        <img src={slider30}/>
      </header>

      {categories.map((category) => (
        <div key={category.title} className="category">
          <h2>{category.title}</h2>
          <div className="product-list">
            {category.products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={() => handleAddToCart(product.name)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Pet Care. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PetShop;