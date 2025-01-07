import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select"; // For dropdown
import "./QuranVerse.css";

const QuranVerse = () => {
  const [quranData, setQuranData] = useState([]); // Array of Surahs
  const [currentSurah, setCurrentSurah] = useState(null); // Current selected Surah
  const [currentAyah, setCurrentAyah] = useState(1); // Default to Ayah 1
  const [loading, setLoading] = useState(true); // Loading state
  const [ayahOptions, setAyahOptions] = useState([]); // Ayah options based on the selected Surah

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

  // Handle Surah Change (reset to Ayah 1 and set Ayah options)
  const handleSurahChange = (selectedSurah) => {
    setCurrentSurah(selectedSurah);
    setCurrentAyah(1); // Reset Ayah selection to 1
    setAyahOptions(
      Array.from({ length: selectedSurah.ayahs }, (_, i) => ({
        value: i + 1,
        label: `Ayah ${i + 1}`,
      }))
    );
  };

  // Handle Ayah Change
  const handleAyahChange = (selectedAyah) => {
    setCurrentAyah(selectedAyah);
  };

  // Surah Options for Dropdown
  const surahOptions = quranData.map((surah) => ({
    value: surah.number,
    label: `${surah.name} - ${surah.englishName}`,
    ayahs: surah.ayahs, // Include the number of Ayahs for each Surah
  }));

  return (
    <div className="quran-container">
      <h1 className="quran-title">The Quran</h1>

      {/* Dropdown for selecting Surah */}
      <div className="selection-container">
        <div className="dropdown-group">
          <Select
            options={surahOptions}
            onChange={(option) => handleSurahChange(option)}
            placeholder="Select Surah"
          />
        </div>

        {/* Dropdown for selecting Ayah */}
        {currentSurah && currentSurah.ayahs && (
          <div className="dropdown-group">
            <Select
              options={ayahOptions}
              onChange={(option) => handleAyahChange(option.value)}
              placeholder="Select Ayah"
            />
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && <p className="loading-text">Loading Quran...</p>}

      {/* Display Surah content if selected */}
      {currentSurah && currentSurah.ayahs && (
        <div className="content">
          <h2 className="surah-name">
            {currentSurah.name} - Surah {currentSurah.number}
          </h2>

          {/* Display selected Ayah or all Ayahs */}
          <div className="ayahs">
            {/* Show all Ayahs */}
            {currentAyah === 1 ? (
              currentSurah.ayahs.map((ayah, index) => (
                <div key={index} className="ayah">
                  <p className="ayah-text">{ayah.text}</p>
                </div>
              ))
            ) : (
              // Show specific selected Ayah
              <div className="ayah">
                <p className="ayah-text">
                  {currentSurah.ayahs[currentAyah - 1].text}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuranVerse;
