import React, { useState } from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";
import "./IslamicProducts.css"; // Custom CSS for styling the cart

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
      name: "Islamic Ring",
      description:
        "A beautifully crafted ring featuring intricate Islamic calligraphy, a perfect blend of elegance and faith.",
      price: 100,
      imageUrl: "./img/ring.jpg",
      pageurl: "/ring",
    },
    {
      id: 2,
      name: "Tasbee (Prayer Beads)",
      description:
        "A set of 33 prayer beads, ideal for daily recitations and remembrance, designed for comfort and spiritual connection.",
      price: 15,
      imageUrl: "./img/tasbee.jpg",
      pageurl: "/tasbee",
    },
    {
      id: 3,
      name: "Turbat (Prayer Mat)",
      description:
        "A soft, comfortable prayer mat that enhances your prayer experience, providing comfort and focus during Salah.",
      price: 25,
      imageUrl: "./img/sajdagah.jpg",
      pageurl: "/sajdagah",
    },
    {
      id: 4,
      name: "Jai Namaz (Prayer Rug)",
      description:
        "Premium quality prayer rug, designed for daily use to offer Salah with ease and comfort.",
      price: 40,
      imageUrl: "./img/jainamaz.jpg",
      pageurl: "/janamaz",
    },
    {
      id: 5,
      name: "Healing Stones (Aqeeq)",
      description:
        "A set of Aqeeq stones, known for their healing properties and spiritual benefits, promoting well-being and tranquility.",
      price: 30,
      imageUrl: "./img/stone.webp",
      pageurl: "/stones",
    },
    {
      id: 6,
      name: "Hirz-e-Jawad",
      description:
        "Hirz-e-Jawad is a powerful protective amulet, believed to safeguard the wearer from harm, bring blessings, and grant spiritual strength.",
      price: 50,
      imageUrl: "./img/hirz.jpg",
      pageurl: "/hirz",
    },
    {
      id: 7,
      name: "Aehram (Pilgrimage Garment)",
      description:
        "A lightweight, comfortable Aehram set designed for pilgrims, ensuring comfort and modesty during Hajj or Umrah. You can order for custom design",
      price: 75,
      imageUrl: "./img/aehram.jpg",
      pageurl: "/aehram",
    },
    {
      id: 8,
      name: "Namaz Chadar",
      description:
        "A traditional, elegant Namaz Chadar designed for modesty and comfort. Perfect for daily wear or special occasions, providing full coverage while maintaining grace.",
      price: 45,
      imageUrl: "./img/irani-chadar.jpg",
      pageurl: "/chadar",
    },
    {
      id: 9,
      name: "Islamic Banners",
      description:
        "A beautiful and symbolic Alam-e-Abbas, representing the courage, loyalty, and sacrifice of Hazrat Abbas (AS) during the Battle of Karbala.",
      price: 120,
      imageUrl: "./img/alam-e-abbas.jpg",
      pageurl: "/alam",
    },
  ];

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  // Generate WhatsApp message with cart items
  const generateWhatsAppMessage = () => {
    let message = "I am interested in buying the following items:\n\n";
    cart.forEach((item) => {
      // Correctly calculate the price by multiplying price by quantity
      message += ` ${item.name} =  ${item.price} x  ${item.quantity} =  ${
        item.price * item.quantity
      }\n`;
    });
    // Calculate total price correctly
    message += `\nTotal: Pkr ${getTotalPrice()}\n\nPlease proceed with the order.`;
    return encodeURIComponent(message); // Encode to make it URL-safe
  };

  return (
    <div className="islamic-products">
      {generateWhatsAppMessage}
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
              <div className="card shadow-sm">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <strong>Price: Pkr {product.price}</strong>
                  </p>
                  <button
                    className="btn btn-danger buttonsafar"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <a
                    href={`https://wa.me/923238235301?text=I%20am%20interested%20in%20buying%20the%20Pkr {product.name}`}
                    className="btn btn-success ml-2 buttonsafar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy now
                  </a>

                  <a
                    href={product.pageurl}
                    className="btn btn-success ml-2 buttonblue"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="mt-4">
            <h4>Items in Cart: {cart.length}</h4>
            <div className="cart-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item card mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-2">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="cart-item-image img-fluid"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                          Pkr {item.price} x {item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total mt-4">
              <h4>
                Total:{" "}
                <span className="text-primary">Pkr {getTotalPrice()}</span>
              </h4>
            </div>

            <div className="mt-4">
              <a
                href={`https://wa.me/923238235301?text=${generateWhatsAppMessage()}`}
                className="btn btn-success ml-2 buttonsafar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy now
              </a>
            </div>
          </div>
        )}
      </div>
      <Contact />
      <PopularCourses />
    </div>
  );
};

export default IslamicProducts;
