import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";
import Contact from "../../Contact/Contact";

const IslamicRules = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Courses", link: "/courses" },
    { label: "Shariah Rules (Ahkaam Shariah)", active: true },
  ];

  return (
    <>
      <div>
        <PageHeader
          title="Shariah Rules (Ahkaam Shariah)"
          breadcrumbItems={breadcrumbItems}
        />
        <div className="container py-5">
          <h2 className="mb-4">Shariah Rules (Ahkaam Shariah)</h2>
          <p>
            The Shariah Rules course covers Islamic laws and practices that
            guide Muslims in their daily lives. These rules encompass key
            aspects of personal, social, and spiritual life, ensuring that every
            action is in accordance with the teachings of Islam. The course is
            designed to help individuals understand the essential principles of
            Shariah and how to apply them in their daily routine.
          </p>
          <p>
            The Shariah, or Islamic law, is based on two primary sources: the
            Quran and the Hadith (the sayings and actions of Prophet Muhammad,
            peace be upon him). These sources provide comprehensive guidance on
            all matters, including ethics, worship, finance, marriage, and more.
          </p>
          <p>
            <strong>Key Topics Covered in This Course:</strong>
          </p>
          <ul>
            <li>
              <strong>Prayer (Salah):</strong> The rules and etiquettes of
              performing the five daily prayers, including the proper actions,
              recitations, and times for each prayer.
            </li>
            <li>
              <strong>Fasting (Sawm):</strong> Understanding the guidelines for
              fasting during the month of Ramadan, its spiritual significance,
              and the rules concerning what breaks the fast.
            </li>
            <li>
              <strong>Zakat (Charity):</strong> The importance of giving charity
              in Islam, the rules for calculating zakat, and its role in
              purifying wealth and aiding the needy.
            </li>
            <li>
              <strong>Hajj and Umrah:</strong> The rites and rituals of the
              pilgrimage to Makkah, the spiritual significance of Hajj, and how
              to perform both Hajj and Umrah according to the rules outlined in
              Shariah.
            </li>
            <li>
              <strong>Marriage (Nikah):</strong> Islamic laws regarding
              marriage, the rights and responsibilities of spouses, and how to
              ensure a healthy and successful marital relationship.
            </li>
            <li>
              <strong>Financial Transactions:</strong> The Islamic guidelines
              for trade, business, and finance, including the prohibition of
              interest (riba) and the ethical ways to engage in financial
              dealings.
            </li>
            <li>
              <strong>Social Etiquettes:</strong> The Shariah rules on social
              conduct, including proper manners, honesty, respect, and the
              importance of kindness and justice in interactions with others.
            </li>
          </ul>
          <p>
            This course is ideal for anyone seeking to deepen their
            understanding of Islam’s comprehensive legal system, which governs
            all aspects of life. By understanding Shariah, individuals can learn
            to live in harmony with the teachings of Islam, making it easier to
            adhere to Islamic values in everyday life.
          </p>
          <p>
            <strong>Who Should Take This Course?</strong> This course is
            suitable for all Muslims, whether they are new to Islamic teachings
            or looking to refresh their understanding of Shariah. It is also
            beneficial for anyone who wishes to apply Islamic law to their
            personal, family, and professional life. The course is open to both
            men and women, and no prior knowledge of Islamic law is required.
          </p>
          <p>
            By taking this course, you will gain a thorough understanding of the
            core principles of Shariah and how to implement them in your daily
            interactions, ensuring that your actions align with Islamic
            teachings and contribute to a more righteous and balanced life.
          </p>
        </div>
      </div>
      <Contact />
      <PopularCourses />
    </>
  );
};

export default IslamicRules;
