import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";
import app from "../../firebase"; // Your Firebase config
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Icons from react-icons
import "./Blog.css";

// Array of predefined image names
const images = [
  "announce1.jpg",
  "announce2.jpg",
  "announce3.jpg",
  "announce4.jpg",
  "announce5.jpg",
];

// Modal component for displaying the full blog content
function Modal({ show, content, closeModal }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>
          &times;
        </button>
        <h5>Full Content</h5>
        <div className="modal-body">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalContent, setModalContent] = useState(""); // For storing full content
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  // Fetch blogs from Firebase Realtime Database
  const fetchBlogs = async () => {
    const userId = "user123"; // Replace with the actual logged-in user's ID
    const db = getDatabase(app);
    const blogsRef = ref(db, `blogs/${userId}/blogs`);

    try {
      const snapshot = await get(blogsRef);
      if (snapshot.exists()) {
        const blogsData = snapshot.val();
        const blogsArray = Object.keys(blogsData).map((key) => ({
          id: key,
          ...blogsData[key],
        }));
        setBlogs(blogsArray);
      } else {
        console.log("No blogs found.");
      }
    } catch (error) {
      console.error("Error reading blogs: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to check if blog is expired
  const isExpired = (expiryDate) => {
    return new Date(expiryDate) < new Date();
  };

  // Function to get a preview of the content (200 characters max)
  const getPreviewText = (text) => {
    return text.length > 200 ? text.substring(0, 200) + "..." : text;
  };

  // Function to handle "Read More" click
  const handleReadMore = (content) => {
    setModalContent(content); // Set the full content
    setShowModal(true); // Show the modal
  };

  // Fetch blogs when component is mounted
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Function to get a random image from the images array
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return `./img/${images[randomIndex]}`; // Ensure images are in the public/images folder
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Blogs
          </h6>
          <h1 className="mb-5">Popular Blogs</h1>
        </div>

        {loading ? (
          <p className="loading">Loading blogs...</p>
        ) : (
          <div className="row g-4 justify-content-center">
            {blogs.map((blog) => (
              <div className="col-lg-4 col-md-6" key={blog.id}>
                <div className="blog-item bg-light">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src={getRandomImage()} // Get a random image each time
                      alt={blog.title}
                    />
                  </div>
                  <div className="text-center p-4 pb-0">
                    <h5 className="mb-4">{blog.title}</h5>
                    <div className="blog-details">
                      <div className="mb-3">
                        <small>
                          <strong>Details:</strong>{" "}
                          {getPreviewText(blog.content)}
                        </small>
                      </div>
                    </div>
                    {/* Show full content on "Read More" */}
                    {blog.content.length > 200 && (
                      <button
                        onClick={() => handleReadMore(blog.content)} // Open modal with full content
                        className="btn btn-primary"
                      >
                        Read More
                      </button>
                    )}
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-user text-primary me-2"></i>
                      {blog.author || "Unknown Author"}
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-user text-primary me-2"></i>
                      {blog.category || "Unknown Category"}
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-calendar-alt text-primary me-2"></i>
                      {new Date(blog.date).toLocaleDateString()}
                    </small>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center py-2">
                      <i
                        className={`fa fa-clock ${
                          isExpired(blog.expiryDate)
                            ? "text-danger"
                            : "text-success"
                        } me-2`}
                      ></i>
                      {isExpired(blog.expiryDate) ? "Expired" : "Active"}
                    </small>
                  </div>
                  <div className="blog-status">
                    <p
                      className={`text-center ${
                        isExpired(blog.expiryDate)
                          ? "bg-danger text-white"
                          : "bg-success text-white"
                      }`}
                      style={{ padding: "10px", borderRadius: "5px" }}
                    >
                      {isExpired(blog.expiryDate) ? (
                        <FaTimesCircle className="me-2" />
                      ) : (
                        <FaCheckCircle className="me-2" />
                      )}
                      {isExpired(blog.expiryDate) ? "Expired" : "Active"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for displaying full blog content */}
      <Modal
        show={showModal}
        content={modalContent}
        closeModal={() => setShowModal(false)}
      />
    </div>
  );
}

export default Blog;
