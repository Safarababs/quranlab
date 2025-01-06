import React, { useState, useEffect } from "react";
import axios from "axios";

const QuranWithTajweed = () => {
  const [editions, setEditions] = useState([]); // Store list of editions
  const [selectedEdition, setSelectedEdition] = useState("ar.alafasy"); // Default edition
  const [audioUrl, setAudioUrl] = useState(null); // Audio URL for the selected Surah
  const [isPlaying, setIsPlaying] = useState(false); // Audio play state
  const [surah, setSurah] = useState(1); // Default Surah (Al-Fatiha)
  const [error, setError] = useState(null); // Error handling state

  // Fetch editions when component mounts
  useEffect(() => {
    const fetchEditions = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/islamic-network/cdn/master/info/cdn_surah_audio.json"
        );
        setEditions(response.data); // Save editions in state
      } catch (error) {
        console.error("Error fetching editions", error);
      }
    };

    fetchEditions();
  }, []);

  // Fetch audio for the selected Surah
  useEffect(() => {
    const fetchAudio = async () => {
      if (selectedEdition && surah) {
        const audioUrl = `https://cdn.islamic.network/quran/audio-surah/128/${selectedEdition}/${surah}.mp3`;

        try {
          const response = await axios.head(audioUrl); // Use HEAD request to check if the file exists
          if (response.status === 200) {
            setAudioUrl(audioUrl); // If file exists, update audio URL
            setError(null); // Clear any previous errors
          } else {
            setAudioUrl(null); // If file doesn't exist, set audio URL to null
            setError("Audio not found for the selected Surah.");
            console.log(`Audio not found: ${audioUrl}`);
          }
        } catch (error) {
          if (error.response && error.response.status === 404) {
            console.log(`Error 404: Audio not found at ${audioUrl}`);
            setError("Audio not available for the selected Surah.");
          } else {
            console.error("Error fetching audio", error);
            setError("An error occurred while fetching the audio.");
          }
          setAudioUrl(null); // If request fails, set audio URL to null
        }
      }
    };

    fetchAudio(); // Calls fetchAudio whenever surah or selectedEdition change
  }, [surah, selectedEdition]); // Dependencies for effect

  // Handle play/pause
  const handlePlayPause = () => {
    const audioElement = document.getElementById("quran-audio");

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying(!isPlaying); // Toggle play/pause state
  };

  // Update Surah dynamically (for example purposes, using a dropdown)
  const handleSurahChange = (e) => {
    setSurah(e.target.value);
  };

  // Update Edition dynamically
  const handleEditionChange = (e) => {
    setSelectedEdition(e.target.value);
  };

  return (
    <div>
      <h1>Quran Audio with Tajweed</h1>

      {/* Dropdown for selecting Surah */}
      <div>
        <label>Surah:</label>
        <select onChange={handleSurahChange} value={surah}>
          {[...Array(114)].map((_, i) => (
            <option key={i} value={i + 1}>
              Surah {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Dropdown for selecting Edition */}
      <div>
        <label>Edition:</label>
        <select onChange={handleEditionChange} value={selectedEdition}>
          {editions.map((edition) => (
            <option key={edition.identifier} value={edition.identifier}>
              {edition.name} {/* Correctly render edition's name */}
            </option>
          ))}
        </select>
      </div>

      {/* Play/Pause Button */}
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Audio Element */}
      {audioUrl ? (
        <audio
          id="quran-audio"
          src={audioUrl}
          preload="auto"
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      ) : (
        <p>No audio available for the selected Surah.</p>
      )}
    </div>
  );
};

export default QuranWithTajweed;
