import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import About from "../Home Page/LandingPage/About/About";
import Contact from "../../Contact/Contact";
import Service from "../Home Page/LandingPage/Service/Service";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const AboutPage = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "About", active: true },
  ];

  return (
    <div>
      <PageHeader title="About Us" breadcrumbItems={breadcrumbItems} />
      <About />
      <div className="container py-5">
        <p>
          Welcome to our online platform where we strive to provide quality
          Islamic education to individuals across the world. Our mission is to
          deliver knowledge that helps people grow spiritually, intellectually,
          and socially while adhering to the authentic teachings of Islam.
        </p>
        <p>
          Founded with the intention of promoting a deeper understanding of the
          Quran, Hadith, and Islamic principles, our platform has brought
          together experienced and qualified instructors dedicated to teaching
          students of all backgrounds.
        </p>
        <p>
          We believe that every individual, regardless of age, background, or
          level of knowledge, should have access to authentic and enriching
          Islamic education. Our courses are designed with flexibility in mind,
          allowing learners to study at their own pace and convenience.
        </p>
        <p>
          The strength of our platform lies in the variety of courses we offer.
          From Quranic studies and memorization (Hifz), to Islamic history,
          Shariah law, Islamic ethics, and much more, our curriculum is
          carefully curated to cater to the needs of both beginners and advanced
          learners.
        </p>
        <p>
          Our instructors are highly qualified scholars and experts in their
          respective fields. With years of teaching experience, they bring
          knowledge and insight that empower students to not only understand
          Islamic teachings but also apply them to their daily lives.
        </p>
        <p>
          We understand the importance of technology in today’s world, which is
          why our courses are offered through an intuitive and user-friendly
          online platform. This makes learning accessible from anywhere, whether
          you’re at home or on the go.
        </p>
        <p>
          In addition to academic excellence, we are committed to creating a
          nurturing environment for all learners. Our platform is built on the
          principles of respect, compassion, and inclusivity, ensuring that
          every student feels valued and heard.
        </p>
        <p>
          Our vision extends beyond the classroom. We aim to foster a community
          of learners who support one another, share knowledge, and grow
          together. Through discussion forums, group activities, and interactive
          sessions, we encourage students to connect with their peers and
          instructors.
        </p>
        <p>
          We also understand that education is not limited to just textbooks and
          lectures. That’s why we offer extra resources, including recommended
          readings, videos, and online quizzes, to ensure students get the most
          out of their learning experience.
        </p>
        <p>
          Our courses are designed to not only provide knowledge but also
          instill a love for lifelong learning. Islam encourages continual
          self-improvement, and our platform aims to inspire students to keep
          growing, whether it’s in their religious, personal, or professional
          lives.
        </p>
        <p>
          We are constantly updating our course offerings to ensure they remain
          relevant and meet the evolving needs of our learners. Whether you’re
          interested in deepening your understanding of the Quran or exploring
          other aspects of Islam, we are committed to providing you with
          up-to-date and comprehensive educational resources.
        </p>
        <p>
          Thank you for considering our platform as your source of Islamic
          education. We are here to help you every step of the way on your
          learning journey. Feel free to browse our courses, connect with our
          instructors, and begin your learning experience with us today!
        </p>
      </div>
      <Contact />
      <Service />
      <PopularCourses />
    </div>
  );
};

export default AboutPage;
