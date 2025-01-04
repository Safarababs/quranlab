// src/components/PodcastPage.js
import React, { useState } from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const PodcastPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Podcasts", link: "/podcasts" },
    { label: "Islamic Podcasts", active: true },
  ];

  const podcasts = [
    {
      id: 1,
      title: "Understanding the Basics of Islam",
      description:
        "A detailed podcast discussing the core beliefs and practices of Islam.",
      youtubeUrl:
        "https://www.youtube.com/embed/JHlbOBVEm9s?si=B5DPEKWT4IW_pa3d&amp;controls=0", // Add your YouTube URL here
      category: "Islamic Teachings",
    },
    {
      id: 2,
      title: "Stories of the Prophets",
      description:
        "This podcast covers the inspiring stories of the Prophets in Islam.",
      youtubeUrl:
        "https://www.youtube.com/embed/JHlbOBVEm9s?si=B5DPEKWT4IW_pa3d&amp;controls=0", // Add your YouTube URL here
      category: "Prophet Stories",
    },
    {
      id: 3,
      title: "Life of Imam Ali (A.S)",
      description: "Explore the life and teachings of Imam Ali (A.S).",
      youtubeUrl:
        "https://www.youtube.com/embed/JHlbOBVEm9s?si=B5DPEKWT4IW_pa3d&amp;controls=0", // Add your YouTube URL here
      category: "Imam Ali (A.S)",
    },

    {
      id: 4,
      title: "Lessons from the Quran",
      description:
        "Insights and lessons from the Quran that can help in daily life.",
      youtubeUrl:
        "https://www.youtube.com/embed/JHlbOBVEm9s?si=B5DPEKWT4IW_pa3d&amp;controls=0", // Add your YouTube URL here
      category: "Quran Teachings",
    },
  ];

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <PageHeader title="Islamic Podcasts" breadcrumbItems={breadcrumbItems} />
      <div className="container py-5">
        <h2 className="mb-4">Listen to Islamic Podcasts</h2>
        <p>
          Welcome to our podcast section. Explore our collection of podcasts on
          various Islamic topics. Whether you are looking to deepen your
          understanding of the faith or hear inspiring stories, our podcasts are
          here to guide you.
        </p>

        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search podcasts..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <div className="row">
          {filteredPodcasts.map((podcast) => (
            <div key={podcast.id} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{podcast.title}</h5>
                  <p className="card-text">{podcast.description}</p>
                  {/* Embed YouTube video */}
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      title={podcast.title}
                      className="embed-responsive-item"
                      src={podcast.youtubeUrl}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="mt-2">
                    <strong>Category: {podcast.category}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PopularCourses />
      <Contact />
    </div>
  );
};

export default PodcastPage;
