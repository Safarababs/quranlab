import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/Pages/Home Page/LandingPage";
import AboutPage from "./components/Pages/About Page/AboutPage";
import Contact from "./components/Pages/Contact Page/Contact";
import OurCourses from "./components/Pages/Courses/OurCourses";
// all courses pages
import QuranReading from "./components/Pages/Courses/QuranReading";
import Tajweed from "./components/Pages/Courses/Tajweed";
import QuranTranslation from "./components/Pages/Courses/QuranTranslation";
import Memorization from "./components/Pages/Courses/Memorization";
import IslamicStudies from "./components/Pages/Courses/IslamicStudies";
import IslamicEthics from "./components/Pages/Courses/IslamicEthics";
import IslamicRules from "./components/Pages/Courses/IslamicRules";

// fee structure
import Pricing from "./components/Fee Structure/FeeStructure";
// religious section
import AcademicTeacher from "./components/Pages/Religious Services/AcademicTeacher";

import MajlisETarheem from "./components/Pages/Religious Services/MajlisETarheem";

import OnlineNikkah from "./components/Pages/Religious Services/OnlineNikkah";

import QuestionAnswer from "./components/Pages/Religious Services/QuestionAnswer";

// projects section
import EducationalFund from "./components/Pages/Projects/EducationalFund";
import IslamicProducts from "./components/Pages/Projects/IslamicProducts";
import PodcastPage from "./components/Pages/Projects/PodcastPage";
import QuestionAnswerPage from "./components/Pages/Projects/QuestionAnswerPage";
// not found
import NotFound from "./NotFound";
// privacy
import PrivacyPolicy from "./components/Pages/Privacy/PrivacyPolicy";
import TermsAndConditions from "./components/Pages/Terms/TermsAndConditions";
import FaqAndHelp from "./components/Pages/Faq and Help/FaqAndHelp";
import RecordingService from "./components/Pages/Religious Services/RecordingServices";
import AamalForMarhoomeen from "./components/Pages/Religious Services/Marhomeen";
import QuranVerse from "./components/Pages/Quran APi's/QuranVerse1";
import BookViewer from "./components/Pages/Books Library/books";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<OurCourses />} />
        <Route path="/quran-reading" element={<QuranReading />} />
        <Route path="/tajweed" element={<Tajweed />} />
        <Route path="/quran-translation" element={<QuranTranslation />} />
        <Route path="/memorization" element={<Memorization />} />
        <Route path="/islamic-studies" element={<IslamicStudies />} />
        <Route path="/islamic-rules" element={<IslamicRules />} />
        <Route path="/islamic-ethics" element={<IslamicEthics />} />
        {/* courses section end */}
        <Route path="/fee" element={<Pricing />} />
        {/* fee structure section end */}
        <Route path="/religious-1" element={<AcademicTeacher />} />
        <Route path="/religious-3" element={<MajlisETarheem />} />
        <Route path="/religious-5" element={<OnlineNikkah />} />
        <Route path="/religious-9" element={<QuestionAnswer />} />
        <Route path="/recording" element={<RecordingService />} />
        <Route path="/marhomeen" element={<AamalForMarhoomeen />} />
        {/* Religious section end */}
        <Route path="/educational-fund" element={<EducationalFund />} />
        <Route path="/islamic-jewelry" element={<IslamicProducts />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/qa" element={<QuestionAnswerPage />} />
        <Route path="/read-quran" element={<QuranVerse />} />
        <Route path="/books" element={<BookViewer />} />

        {/* privacy policy */}
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/faq" element={<FaqAndHelp />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
