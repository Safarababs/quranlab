import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const IslamicStudies = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Courses", link: "/courses" },
    { label: "Islamic Studies (Deeniyaat)", active: true },
  ];

  return (
    <>
      <div>
        <PageHeader
          title="Islamic Studies (Deeniyaat)"
          breadcrumbItems={breadcrumbItems}
        />
        <div className="container py-5">
          <h2 className="mb-4">Islamic Studies (Deeniyaat)</h2>
          <p>
            Islamic Studies (Deeniyaat) is a comprehensive course that delves
            into the essential teachings of Islam, focusing on both the
            spiritual and practical aspects of the religion. It covers
            fundamental topics such as the life of Prophet Muhammad (PBUH), the
            five pillars of Islam, Islamic history, and core Islamic beliefs.
            The course is designed to provide a deep understanding of Islam and
            equip students with the knowledge and tools needed to lead a life
            based on Islamic principles.
          </p>
          <p>
            <strong>The Life of Prophet Muhammad (PBUH):</strong> Students will
            explore the life and character of the final Prophet of Islam,
            Prophet Muhammad (PBUH). This includes understanding his early life,
            his prophethood, the challenges he faced, and his role as a leader,
            guide, and mercy to the worlds. The course emphasizes the importance
            of learning from his exemplary character and the teachings of the
            Sunnah.
          </p>
          <p>
            <strong>The Five Pillars of Islam:</strong> The Five Pillars of
            Islam are the foundation of a Muslim's faith and actions. This
            course will guide students in understanding the significance of each
            pillar:
          </p>
          <ul>
            <li>
              <strong>Shahada (Faith):</strong> The declaration of faith,
              stating that there is no god but Allah, and Prophet Muhammad
              (PBUH) is His final messenger.
            </li>
            <li>
              <strong>Salah (Prayer):</strong> The five daily prayers, their
              importance, and the proper way to perform them.
            </li>
            <li>
              <strong>Zakat (Charity):</strong> The obligation to give a portion
              of one's wealth to those in need, purifying one's wealth in the
              process.
            </li>
            <li>
              <strong>Sawm (Fasting):</strong> The practice of fasting during
              the month of Ramadan to develop self-discipline, empathy for the
              poor, and closer ties to Allah.
            </li>
            <li>
              <strong>Hajj (Pilgrimage):</strong> The significance of the annual
              pilgrimage to Makkah and its impact on the Muslim community.
            </li>
          </ul>
          <p>
            <strong>Understanding the Quran:</strong> This course also
            emphasizes the central role of the Quran in Islam. Students will
            learn about the importance of the Quran as the literal word of Allah
            and its application in daily life. Key themes of the Quran, such as
            justice, mercy, guidance, and the stories of past prophets, will be
            discussed to help students strengthen their relationship with the
            Quran.
          </p>
          <p>
            <strong>The Role of Islamic Values:</strong> The course highlights
            the significance of Islamic values such as honesty, kindness,
            generosity, humility, patience, and respect for others. Students
            will learn how to integrate these values into their daily lives,
            whether in their families, workplaces, or communities.
          </p>
          <p>
            <strong>Islamic History and Heritage:</strong> A key part of Islamic
            Studies involves understanding the rich history and heritage of the
            Muslim world. The course covers major historical events such as the
            early spread of Islam, the caliphates, the golden age of Islamic
            civilization, and the contributions of Muslim scholars to various
            fields like science, medicine, philosophy, and the arts.
          </p>
          <p>
            <strong>The Importance of Sunnah:</strong> In addition to the Quran,
            the teachings and practices of Prophet Muhammad (PBUH), known as the
            Sunnah, are vital in guiding a Muslim's life. This course teaches
            the significance of following the Sunnah in all aspects of life,
            from worship to personal conduct, and the role it plays in nurturing
            a strong relationship with Allah.
          </p>
          <p>
            <strong>Who Should Take This Course?</strong> This course is ideal
            for anyone who seeks a deeper understanding of Islam, whether they
            are new to the religion or looking to deepen their existing
            knowledge. It is particularly useful for young Muslims who are
            growing in their faith and wish to gain a comprehensive foundation
            in Islamic teachings.
          </p>
          <p>
            Upon completion of this course, students will have a solid
            understanding of the key principles of Islam and how to live a life
            that is pleasing to Allah. They will also gain insights into the
            historical and cultural significance of Islam in the world today.
          </p>
        </div>
      </div>
      <Contact />
      <PopularCourses />
    </>
  );
};

export default IslamicStudies;
