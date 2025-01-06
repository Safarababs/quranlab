import React, { useState, useEffect } from "react";
import axios from "axios";
import "./QuranVerse1.css"; // We'll add some styles in this file

const QuranVerse1 = () => {
  const [quranData, setQuranData] = useState([]);
  const [currentSurah, setCurrentSurah] = useState(null); // Track the selected Surah
  const [loading, setLoading] = useState(true);

  // Fetch Quran Data
  useEffect(() => {
    const fetchQuranData = async () => {
      const surahs = [];
      for (let surahNumber = 1; surahNumber <= 114; surahNumber++) {
        try {
          const response = await axios.get(
            `https://api.alquran.cloud/v1/surah/${surahNumber}`
          );
          const surah = response.data.data;
          surahs.push(surah);
        } catch (err) {
          console.error("Error fetching Surah:", err);
        }
      }
      setQuranData(surahs);
      setLoading(false);
    };

    fetchQuranData();
  }, []);

  // Handle Surah Click
  const handleSurahClick = (surah) => {
    setCurrentSurah(surah);
  };

  return (
    <div className="quran-container">
      <h1>The Quran</h1>
      <div className="surah-list">
        <h3>Select a Surah</h3>
        {loading ? (
          <p>Loading Quran...</p>
        ) : (
          <ul>
            {quranData.map((surah) => (
              <li key={surah.number} onClick={() => handleSurahClick(surah)}>
                <button className="surah-btn">
                  {surah.name} - {surah.englishName}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Display Surah content if selected */}
      {currentSurah && (
        <div className="surah-content">
          <h2>
            {currentSurah.name} - Surah {currentSurah.number}
          </h2>
          <div className="ayahs">
            {currentSurah.ayahs.map((ayah, idx) => (
              <div key={ayah.numberInSurah} className="ayah">
                <p className="ayah-text">{ayah.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuranVerse1;
