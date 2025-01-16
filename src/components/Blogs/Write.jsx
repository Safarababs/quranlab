import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // for page navigation
import { getDatabase, ref, set, push, get } from "firebase/database";
import app from "../../firebase"; // Your Firebase app configuration

function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState(""); // State for tags
  const [date, setDate] = useState(""); // New state for date
  const [blogsCount, setBlogsCount] = useState(0);
  const navigate = useNavigate();

  // List of predefined images
  const images = [
    "announce1.jpg",
    "announce2.jpg",
    "announce3.jpg",
    "announce4.jpg",
    "announce5.jpg",
  ];

  // Select a random image from the predefined list
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  // Check blog count for the user
  const checkBlogCount = async () => {
    const userId = "user123"; // Replace with actual logged-in user ID
    const db = getDatabase(app);
    const userBlogsRef = ref(db, `blogs/${userId}/blogs`);
    const snapshot = await get(userBlogsRef);
    const existingBlogs = snapshot.val();
    const blogCount = existingBlogs ? Object.keys(existingBlogs).length : 0;
    setBlogsCount(blogCount);
  };

  // Save blog data to Firebase
  const saveData = async () => {
    if (blogsCount >= 5) {
      alert("You can only add 5 blogs at a time.");
      return;
    }

    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30); // Expiry set to 30 days from now

    const userId = "user123"; // Replace with actual logged-in user ID
    const db = getDatabase(app);
    const userBlogsRef = ref(db, `blogs/${userId}/blogs`);
    const newDocRef = push(userBlogsRef);

    set(newDocRef, {
      title,
      content,
      category,
      tags, // Include tags in the blog data
      imageUrl: getRandomImage(), // Use random image from the predefined set
      author: "Almas",
      date: date || new Date().toISOString(), // Use selected date or current date if not provided
      expiryDate: expiryDate.toISOString(), // Set expiry date for the blog
    })
      .then(() => {
        alert("Blog saved successfully.");
        navigate("/blog"); // Redirect to the blog list page
      })
      .catch((error) => {
        alert("Error saving blog:", error.message);
      });
  };

  useEffect(() => {
    checkBlogCount();
  }, []);

  return (
    <div className="container py-5">
      {/* Breadcrumb Section */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Write Blog
          </li>
        </ol>
      </nav>

      <h2 className="mb-4 text-center">Write a New Blog</h2>

      {/* Blog Form */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <div className="form-group mb-3">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="content">Content</label>
              <textarea
                className="form-control"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter blog content"
                rows="5"
              ></textarea>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="form-control"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter category"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="tags">Tags</label>
              <input
                type="text"
                className="form-control"
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Enter tags (comma separated)"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="date">Blog Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Select blog date"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={saveData}
              className="btn btn-primary btn-block"
              disabled={blogsCount >= 5}
            >
              {blogsCount >= 5 ? "Limit Reached (5 blogs)" : "Save Blog"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
