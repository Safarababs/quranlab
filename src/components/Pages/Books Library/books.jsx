import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faWindowMaximize,
  faWindowMinimize,
} from "@fortawesome/free-solid-svg-icons";
import "./books.css"; // Ensure your CSS file is properly imported

const BookViewer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(true);
  const [currentBook, setCurrentBook] = useState(null);

  const books = [
    {
      id: 1,
      title: "Colour Quran",
      image: "/img/color-quran.jpg",
      file: "/books/Colour Quran.pdf",
    },
    {
      id: 1,
      title: "Noorani Qaida",
      image: "/img/color-quran.jpg",
      file: "/books/noorani_qaida.pdf",
    },
  ];

  const openModal = (book) => {
    setCurrentBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentBook(null);
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const minimizeModal = () => {
    setIsMaximized(false);
  };

  return (
    <div className="bookViewerContainer">
      <div className="bookList">
        {books.map((book) => (
          <div className="bookCard" key={book.id}>
            <img src={book.image} alt={book.title} className="bookCover" />
            <h3>{book.title}</h3>
            <button
              onClick={() => openModal(book)}
              className="readButton"
              title="Read this book"
            >
              Read
            </button>
            <a href={book.file} download>
              <button className="downloadButton" title="Download this book">
                Download
              </button>
            </a>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && currentBook && (
        <div className="modalOverlay">
          <div
            className={`modalContent ${isMaximized ? "modalMaximized" : ""}`}
          >
            <div className="buttonContainer">
              <button onClick={toggleMaximize} className="maximizeButton">
                <FontAwesomeIcon icon={faWindowMaximize} />
                <span className="tooltip">
                  {isMaximized ? "Minimize" : "Maximize"}
                </span>
              </button>
              <button onClick={minimizeModal} className="minimizeButton">
                <FontAwesomeIcon icon={faWindowMinimize} />
                <span className="tooltip">Minimize</span>
              </button>
              <button onClick={closeModal} className="closeButton">
                <FontAwesomeIcon icon={faTimes} />
                <span className="tooltip">Close</span>
              </button>
            </div>
            <div className="iframeContainer">
              <iframe
                src={currentBook.file}
                title={currentBook.title}
                className="bookIframe"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookViewer;
