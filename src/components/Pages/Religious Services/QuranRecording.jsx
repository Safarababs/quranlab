import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const QuranRecording = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Quran Recording (Arabic, Urdu, English)", active: true },
  ];

  // YouTube link for Quran recitations (same link for all surahs)
  const youtubeUrl =
    "https://www.youtube.com/embed/JHlbOBVEm9s?si=B5DPEKWT4IW_pa3d&controls=0";

  // Surah list
  const recordings = [
    { surah: "Al-Fatiha (Arabic)" },
    { surah: "Al-Baqarah (Arabic)" },
    { surah: "Al-Fatiha (Urdu)" },
    { surah: "Al-Baqarah (Urdu)" },
    { surah: "Al-Fatiha (English)" },
    { surah: "Al-Baqarah (English)" },
  ];

  return (
    <div>
      <PageHeader
        title="Quran Recording (Arabic, Urdu, English)"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container py-5">
        <h2 className="mb-4">Quran Recording (Arabic, Urdu, English)</h2>
        <p>
          We offer Quran recordings in multiple languages: Arabic, Urdu, and
          English. You can explore the recordings for personal reflection or
          learning.
        </p>
        <p>
          The recordings cover various surahs, making it easier for you to
          connect with the divine words of Allah in your preferred language.
        </p>

        {/* Surah List and YouTube Embed */}
        <div>
          <h4>Available Recordings</h4>
          <ul>
            {recordings.map((recording, index) => (
              <li key={index}>
                <p>{recording.surah}</p>
                <div className="mb-3">
                  <iframe
                    width="100%"
                    height="315"
                    src={youtubeUrl}
                    title={`YouTube video for ${recording.surah}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Contact />
      <PopularCourses />
    </div>
  );
};

export default QuranRecording;
