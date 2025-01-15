import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import BookCard from "./books/BookCard";
import "./books.css";

const BookViewer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(true); // Start as maximized
  const [currentBook, setCurrentBook] = useState(null);

  const books = [
    {
      id: 1,
      title: "Colour Quran",
      image: "/img/color-quran.jpg",
      file: "/books/Colour Quran.pdf",
    },
    {
      id: 2,
      title: "Noorani Qaida",
      image: "/img/Noorani Qaida.jpg",
      file: "/books/noorani_qaida.pdf",
    },
    {
      id: 3,
      title: "Tajweed",
      image: "/img/tajweed.jpg",
      file: "/books/taj weed book 2.pdf",
    },
    {
      id: 4,
      title: "Deenyaat 1",
      image: "/img/deeniyaat.png",
      file: "/books/deenyat 1.pdf",
    },
    {
      id: 5,
      title: "Deenyaat 2",
      image: "/img/deeniyaat.png",
      file: "/books/deenyat book2.pdf",
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

  const toggleMaximize = () => setIsMaximized(!isMaximized);

  return (
    <>
      <div className="bookViewerContainer">
        <div className="bookList">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onRead={openModal} />
          ))}
        </div>

        {isModalOpen && currentBook && (
          <div
            className="modalOverlay"
            role="dialog"
            aria-labelledby="modalTitle"
            aria-describedby="modalContent"
          >
            <div
              className={`modalContent ${isMaximized ? "modalMaximized" : ""}`}
            >
              <div className="buttonContainer">
                <button
                  onClick={toggleMaximize}
                  className="maximizeButton"
                  title="Toggle Maximize"
                >
                  <FontAwesomeIcon icon={faWindowMaximize} />
                </button>
                <button
                  onClick={closeModal}
                  className="closeButton"
                  title="Close Modal"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <div className="iframeContainer">
                <iframe
                  src={currentBook.file}
                  title={currentBook.title}
                  className="bookIframe"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>{" "}
    </>
  );
};

export default BookViewer;
