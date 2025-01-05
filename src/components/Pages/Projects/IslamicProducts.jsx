import React, { useState } from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const IslamicProducts = () => {
  const [cart, setCart] = useState([]);

  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Shop", link: "/shop" },
    { label: "Islamic Jewelry & Products", active: true },
  ];

  const products = [
    {
      id: 1,
      name: "Islamic Gold Ring",
      description:
        "A beautifully crafted gold ring featuring intricate Islamic calligraphy, a perfect blend of elegance and faith.",
      price: 100,
      imageUrl: "./img/ring.jpg",
    },
    {
      id: 2,
      name: "Tasbee (Prayer Beads)",
      description:
        "A set of 33 prayer beads, ideal for daily recitations and remembrance, designed for comfort and spiritual connection.",
      price: 15,
      imageUrl: "./img/tasbee.jpg",
    },
    {
      id: 3,
      name: "Sajda Gah (Prayer Mat)",
      description:
        "A soft, comfortable prayer mat that enhances your prayer experience, providing comfort and focus during Salah.",
      price: 25,
      imageUrl: "./img/sajdagah.jpg",
    },
    {
      id: 4,
      name: "Jai Namaz (Prayer Rug)",
      description:
        "Premium quality prayer rug, designed for daily use to offer Salah with ease and comfort.",
      price: 40,
      imageUrl: "./img/jainamaz.jpg",
    },
    {
      id: 5,
      name: "Healing Stones (Aqeeq)",
      description:
        "A set of Aqeeq stones, known for their healing properties and spiritual benefits, promoting well-being and tranquility.",
      price: 30,
      imageUrl: "./img/stone.webp",
    },
    {
      id: 6,
      name: "Hirz-e-Jawad",
      description:
        "Hirz-e-Jawad is a powerful protective amulet, believed to safeguard the wearer from harm, bring blessings, and grant spiritual strength.",
      price: 50,
      imageUrl: "./img/hirz.jpg",
    },
    {
      id: 7,
      name: "Aehram (Pilgrimage Garment)",
      description:
        "A lightweight, comfortable Aehram set designed for pilgrims, ensuring comfort and modesty during Hajj or Umrah.",
      price: 75,
      imageUrl: "./img/aehram.jpg", // Use the correct image URL
    },
    {
      id: 8,
      name: "Irani Chadar",
      description:
        "A traditional, elegant Irani Chadar designed for modesty and comfort. Perfect for daily wear or special occasions, providing full coverage while maintaining grace.",
      price: 45,
      imageUrl: "./img/irani-chadar.jpg", // Use the correct image URL
    },
    {
      id: 9,
      name: "Alam-e-Abbas",
      description:
        "A beautiful and symbolic Alam-e-Abbas, representing the courage, loyalty, and sacrifice of Hazrat Abbas (AS) during the Battle of Karbala.",
      price: 120, // You can adjust the price as needed based on its craftsmanship and materials.
      imageUrl: "./img/alam-e-abbas.jpg", // Replace with the actual image URL of Alam-e-Abbas.
    },
  ];

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    // Implement checkout functionality here, e.g., redirect to checkout page
  };

  return (
    <div>
      <PageHeader
        title="Islamic Jewelry & Products"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container py-5">
        <h2 className="mb-4">Islamic Jewelry, Rings, Tasbee, and More</h2>
        <p>
          Explore our collection of Islamic jewelry, prayer accessories, and
          spiritual items. Our products are crafted with care and are perfect
          for daily use or as gifts for your loved ones.
        </p>

        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <strong>Price: ${product.price}</strong>
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <a
                    href={`https://wa.me/923238235301?text=I%20am%20interested%20in%20buying%20the%20${product.name}`}
                    className="btn btn-success ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="mt-4">
            <h4>Items in Cart: {cart.length}</h4>
            <button className="btn btn-success" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      <PopularCourses />
      <Contact />
    </div>
  );
};

export default IslamicProducts;
