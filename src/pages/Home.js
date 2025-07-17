// import React, { useState } from 'react';
// import '../styles/home.css';
// import { MdMenuBook, MdOutlineNotificationsActive } from 'react-icons/md';
// import { FaChalkboardTeacher, FaVideo } from 'react-icons/fa';
// import { AiOutlineUserSwitch, AiOutlineSchedule } from 'react-icons/ai';
// import { BiWorld } from 'react-icons/bi';
// import { GiTeacher } from 'react-icons/gi';

// import hero1 from '../assets/HeroBanner.jpg';
// import hero2 from '../assets/HeroBanner2.jpg';
// import hero3 from '../assets/HeroBanner3.jpg';

// const heroImages = [
//   {
//     image: hero1,
//     title: (
//       <>
//         Learn with <span className="highlight">Top Online Tutors</span>
//       </>
//     ),
//     description: "Access live, personalized online tuition with expert teachers. Flexible learning for every child, from anywhere.",
//   },
//   {
//     image: hero2,
//     title: "Learn From Anywhere",
//     description: "Study from the comfort of your home with just a device and internet connection.",
//   },
//   {
//     image: hero3,
//     title: "Expert Tutors",
//     description: "Get access to certified and experienced educators across various subjects.",
//   },
// ];

// const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="home-container">
//       <section className="hero-carousel">
//         <div className="carousel-wrapper">
//           <div
//             className="carousel-inner"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {heroImages.map((item, index) => (
//               <div key={index} className="carousel-slide">
//                 <img src={item.image} alt="Hero Slide" className="carousel-image" />
//                 <div className="carousel-content">
//                   <h1>{item.title}</h1>
//                   <p className="subtext">{item.description}</p>

//                   <div className="search-box">
//                     <input type="text" placeholder="What subject are you looking for?" />
//                     <button>Search</button>
//                   </div>

//                   <div className="category-tags">
//                     <span>Tamil</span>
//                     <span>English</span>
//                     <span>Maths</span>
//                     <span>Science</span>
//                     <span>Social</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Carousel Arrows */}
//           <button className="arrow left" onClick={handlePrev}>&#10094;</button>
//           <button className="arrow right" onClick={handleNext}>&#10095;</button>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="about-section fade-in">
//         <h2>About Our Tuition Platform</h2>
//         <p>
//           We are a team of passionate educators dedicated to making high-quality learning accessible to all.
//         </p>
//         <p>
//           Whether you're a school student preparing for exams or a parent looking for structured support,
//           we’ve got you covered with reliable, convenient, and effective online education.
//         </p>
//       </section>

//       {/* --- Why We’re Different Section --- */}
//       <section className="why-different fade-in-up">
//         <h2>What Makes Us Different?</h2>
//         <div className="card-grid">
//           <div className="card-style">
//             <h3><MdMenuBook />All Subjects Covered</h3>
//             <p>From academics to electives like coding, keyboard, and arts — all in one platform.</p>
//           </div>
//           <div className="card-style">
//             <h3><FaVideo />Live + Recorded Classes</h3>
//             <p>Missed a session? Watch it later with unlimited access to recorded lessons.</p>
//           </div>
//           <div className="card-style">
//             <h3><FaChalkboardTeacher />Direct Chat with Teachers</h3>
//             <p>Instantly ask doubts or queries and receive personal responses from tutors.</p>
//           </div>
//           <div className="card-style">
//             <h3><MdOutlineNotificationsActive />Smart Reminders</h3>
//             <p>Never miss deadlines — automatic alerts for assignments, payments, and exams.</p>
//           </div>
//         </div>
//       </section>

//       {/* Why Online Tuitions Section */}
//       <section className="why-online fade-in-up">
//         <h2>Why Choose Online Tuitions?</h2>
//         <p>
//           Online tuitions offer a flexible, personalized, and effective way of learning that fits every student’s schedule and learning pace.
//         </p>
//         <div className="card-grid">
//           <div className="card-style">
//             <h3><AiOutlineUserSwitch />Personalized Learning</h3>
//             <p>Students receive one-on-one attention tailored to their strengths and weaknesses.</p>
//           </div>
//           <div className="card-style">
//             <h3><BiWorld />Learn From Anywhere</h3>
//             <p>Study from the comfort of your home with just a device and internet connection.</p>
//           </div>
//           <div className="card-style">
//             <h3><GiTeacher />Expert Tutors</h3>
//             <p>Get access to certified and experienced educators across various subjects.</p>
//           </div>
//           <div className="card-style">
//             <h3><AiOutlineSchedule />Flexible Scheduling</h3>
//             <p>Choose your own learning times and never miss a class.</p>
//           </div>
//         </div>
//       </section>


//       {/* --- Footer Section --- */}
//       <footer className="footer-section">
//         <div className="footer-content">
//           <div className="footer-logo">
//             <h2>Online Tuition</h2>
//             <p>Empowering learning from anywhere, anytime.</p>
//           </div>
//           <div className="footer-links">
//             <h4>Quick Links</h4>
//             <ul>
//               <li><a href="#">Home</a></li>
//               <li><a href="#">Subjects</a></li>
//               <li><a href="#">About</a></li>
//               <li><a href="#">Contact</a></li>
//             </ul>
//           </div>
//           <div className="footer-contact">
//             <h4>Contact Us</h4>
//             <p>Email: support@onlinetuition.com</p>
//             <p>Phone: +91 98765 43210</p>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>© {new Date().getFullYear()} Online Tuition. All rights reserved.</p>
//         </div>
//       </footer>

//     </div >
//   );
// };

// export default Home;
















// import React, { useState } from 'react';
// import '../styles/home.css';
// import { MdMenuBook, MdOutlineNotificationsActive } from 'react-icons/md';
// import { FaChalkboardTeacher, FaVideo } from 'react-icons/fa';
// import { AiOutlineUserSwitch, AiOutlineSchedule } from 'react-icons/ai';
// import { BiWorld } from 'react-icons/bi';
// import { GiTeacher } from 'react-icons/gi';

// import hero1 from '../assets/HeroBanner.jpg';
// import hero2 from '../assets/HeroBanner2.jpg';
// import hero3 from '../assets/HeroBanner3.jpg';

// const heroImages = [
//   {
//     image: hero1,
//     className: 'hero-img-1',
//     title: (
//       <>
//         Learn with <span className="highlight">Top Online Tutors</span>
//       </>
//     ),
//     description: "Access live, personalized online tuition with expert teachers. Flexible learning for every child, from anywhere.",
//   },
//   {
//     image: hero2,
//     className: 'hero-img-2',
//     title: "Learn From Anywhere",
//     description: "Study from the comfort of your home with just a device and internet connection.",
//   },
//   {
//     image: hero3,
//     className: 'hero-img-3',
//     title: "Expert Tutors",
//     description: "Get access to certified and experienced educators across various subjects.",
//   },
// ];

// const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="home-container">
//       <section className="hero-carousel">
//         <div className="carousel-wrapper">
//           <div
//             className="carousel-inner"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {heroImages.map((item, index) => (
//               <div key={index} className="carousel-slide">
//                 <img
//                   src={item.image}
//                   alt="Hero Slide"
//                   className={`carousel-image ${item.className}`}
//                 />
//                 <div className="carousel-content">
//                   <h1>{item.title}</h1>
//                   <p className="subtext">{item.description}</p>

//                   <div className="search-box">
//                     <input type="text" placeholder="What subject are you looking for?" />
//                     <button>Search</button>
//                   </div>

//                   <div className="category-tags">
//                     <span>Tamil</span>
//                     <span>English</span>
//                     <span>Maths</span>
//                     <span>Science</span>
//                     <span>Social</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button className="arrow left" onClick={handlePrev}>&#10094;</button>
//           <button className="arrow right" onClick={handleNext}>&#10095;</button>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="about-section fade-in">
//         <h2>About Our Tuition Platform</h2>
//         <p>
//           We are a team of passionate educators dedicated to making high-quality learning accessible to all.
//         </p>
//         <p>
//           Whether you're a school student preparing for exams or a parent looking for structured support,
//           we’ve got you covered with reliable, convenient, and effective online education.
//         </p>
//       </section>

//       {/* Why We’re Different Section */}
//       <section className="why-different fade-in-up">
//         <h2>What Makes Us Different?</h2>
//         <div className="card-grid">
//           <div className="card-style">
//             <h3><MdMenuBook />All Subjects Covered</h3>
//             <p>From academics to electives like coding, keyboard, and arts — all in one platform.</p>
//           </div>
//           <div className="card-style">
//             <h3><FaVideo />Live + Recorded Classes</h3>
//             <p>Missed a session? Watch it later with unlimited access to recorded lessons.</p>
//           </div>
//           <div className="card-style">
//             <h3><FaChalkboardTeacher />Direct Chat with Teachers</h3>
//             <p>Instantly ask doubts or queries and receive personal responses from tutors.</p>
//           </div>
//           <div className="card-style">
//             <h3><MdOutlineNotificationsActive />Smart Reminders</h3>
//             <p>Never miss deadlines — automatic alerts for assignments, payments, and exams.</p>
//           </div>
//         </div>
//       </section>

//       {/* Why Online Tuitions Section */}
//       <section className="why-online fade-in-up">
//         <h2>Why Choose Online Tuitions?</h2>
//         <p>
//           Online tuitions offer a flexible, personalized, and effective way of learning that fits every student’s schedule and learning pace.
//         </p>
//         <div className="card-grid">
//           <div className="card-style">
//             <h3><AiOutlineUserSwitch />Personalized Learning</h3>
//             <p>Students receive one-on-one attention tailored to their strengths and weaknesses.</p>
//           </div>
//           <div className="card-style">
//             <h3><BiWorld />Learn From Anywhere</h3>
//             <p>Study from the comfort of your home with just a device and internet connection.</p>
//           </div>
//           <div className="card-style">
//             <h3><GiTeacher />Expert Tutors</h3>
//             <p>Get access to certified and experienced educators across various subjects.</p>
//           </div>
//           <div className="card-style">
//             <h3><AiOutlineSchedule />Flexible Scheduling</h3>
//             <p>Choose your own learning times and never miss a class.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer-section">
//         <div className="footer-content">
//           <div className="footer-logo">
//             <h2>Online Tuition</h2>
//             <p>Empowering learning from anywhere, anytime.</p>
//           </div>
//           <div className="footer-links">
//             <h4>Quick Links</h4>
//             <ul>
//               <li><a href="#">Home</a></li>
//               <li><a href="#">Subjects</a></li>
//               <li><a href="#">About</a></li>
//               <li><a href="#">Contact</a></li>
//             </ul>
//           </div>
//           <div className="footer-contact">
//             <h4>Contact Us</h4>
//             <p>Email: support@onlinetuition.com</p>
//             <p>Phone: +91 98765 43210</p>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>© {new Date().getFullYear()} Online Tuition. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;














// import React, { useState, useEffect } from 'react';
// import '../styles/home.css';
// import { MdMenuBook, MdOutlineNotificationsActive } from 'react-icons/md';
// import { FaChalkboardTeacher, FaVideo } from 'react-icons/fa';
// import { AiOutlineUserSwitch, AiOutlineSchedule } from 'react-icons/ai';
// import { BiWorld } from 'react-icons/bi';
// import { GiTeacher } from 'react-icons/gi';

// import hero1 from '../assets/HeroBanner.jpg';
// import hero2 from '../assets/HeroBanner2.jpg';
// import hero3 from '../assets/HeroBanner3.jpg';

// const heroImages = [
//   {
//     image: hero1,
//     title: (
//       <>
//         Learn with <span className="highlight">Top Online Tutors</span>
//       </>
//     ),
//     description: "Access live, personalized online tuition with expert teachers. Flexible learning for every child, from anywhere.",
//     buttonText: "Find Your Tutor"
//   },
//   {
//     image: hero2,
//     title: "Learn From Anywhere",
//     description: "Study from the comfort of your home with just a device and internet connection.",
//     buttonText: "Start Learning"
//   },
//   {
//     image: hero3,
//     title: "Expert Tutors",
//     description: "Get access to certified and experienced educators across various subjects.",
//     buttonText: "Browse Subjects"
//   },
// ];

// const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const handlePrev = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex(prev => (prev === 0 ? heroImages.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex(prev => (prev === heroImages.length - 1 ? 0 : prev + 1));
//   };

//   // Auto-rotate carousel
//   useEffect(() => {
//     const timer = setInterval(() => {
//       handleNext();
//     }, 6000);
//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   // Reset transitioning state after animation completes
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsTransitioning(false);
//     }, 600);
//     return () => clearTimeout(timer);
//   }, [currentIndex]);

//   return (
//     <div className="home-container">
//       {/* Hero Carousel */}
//       <section className="hero-carousel">
//         <div className="carousel-wrapper">
//           {heroImages.map((item, index) => (
//             <div
//               key={index}
//               className={carousel - slide ${index === currentIndex ? 'active' : ''}}
//           style={{ backgroundImage: url(${ item.image }) }}
//             >
//           <div className="slide-overlay"></div>
//           <div className="carousel-content">
//             <h1 className="slide-title">{item.title}</h1>
//             <p className="slide-description">{item.description}</p>
//             <button className="cta-button">{item.buttonText}</button>

//             <div className="search-box">
//               <input type="text" placeholder="What subject are you looking for?" />
//               <button className="search-button">Search</button>
//             </div>

//             <div className="category-tags">
//               {['Tamil', 'English', 'Maths', 'Science', 'Social', 'Coding'].map((subject) => (
//                 <span key={subject}>{subject}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//           ))}

//         <button className="arrow left" onClick={handlePrev} aria-label="Previous slide">
//           <span>&#10094;</span>
//         </button>
//         <button className="arrow right" onClick={handleNext} aria-label="Next slide">
//           <span>&#10095;</span>
//         </button>

//         <div className="carousel-dots">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               className={dot ${index === currentIndex ? 'active' : ''}}
//           onClick={() => setCurrentIndex(index)}
//           aria-label={Go to slide ${index + 1}}
//               />
//             ))}
//         </div>
//     </div>
//       </section >

//   {/* About Section */ }
//   < section className = "about-section" >
//     <div className="section-container">
//       <h2>About Our Tuition Platform</h2>
//       <div className="about-content">
//         <p>
//           We are a team of passionate educators dedicated to making high-quality learning accessible to all.
//         </p>
//         <p>
//           Whether you're a school student preparing for exams or a parent looking for structured support,
//           we've got you covered with reliable, convenient, and effective online education.
//         </p>
//       </div>
//     </div>
//       </section >

//   {/* Why We're Different Section */ }
//   < section className = "features-section" >
//     <div className="section-container">
//       <h2>What Makes Us Different?</h2>
//       <div className="card-grid">
//         <div className="feature-card">
//           <div className="icon-wrapper">
//             <MdMenuBook />
//           </div>
//           <h3>All Subjects Covered</h3>
//           <p>From academics to electives like coding, keyboard, and arts — all in one platform.</p>
//         </div>
//         <div className="feature-card">
//           <div className="icon-wrapper">
//             <FaVideo />
//           </div>
//           <h3>Live + Recorded Classes</h3>
//           <p>Missed a session? Watch it later with unlimited access to recorded lessons.</p>
//         </div>
//         <div className="feature-card">
//           <div className="icon-wrapper">
//             <FaChalkboardTeacher />
//           </div>
//           <h3>Direct Chat with Teachers</h3>
//           <p>Instantly ask doubts or queries and receive personal responses from tutors.</p>
//         </div>
//         <div className="feature-card">
//           <div className="icon-wrapper">
//             <MdOutlineNotificationsActive />
//           </div>
//           <h3>Smart Reminders</h3>
//           <p>Never miss deadlines — automatic alerts for assignments, payments, and exams.</p>
//         </div>
//       </div>
//     </div>
//       </section >

//   {/* Why Online Tuitions Section */ }
//   < section className = "benefits-section" >
//     <div className="section-container">
//       <h2>Why Choose Online Tuitions?</h2>
//       <p className="section-intro">
//         Online tuitions offer a flexible, personalized, and effective way of learning that fits every student's schedule and learning pace.
//       </p>
//       <div className="card-grid">
//         <div className="benefit-card">
//           <div className="icon-wrapper">
//             <AiOutlineUserSwitch />
//           </div>
//           <h3>Personalized Learning</h3>
//           <p>Students receive one-on-one attention tailored to their strengths and weaknesses.</p>
//         </div>
//         <div className="benefit-card">
//           <div className="icon-wrapper">
//             <BiWorld />
//           </div>
//           <h3>Learn From Anywhere</h3>
//           <p>Study from the comfort of your home with just a device and internet connection.</p>
//         </div>
//         <div className="benefit-card">
//           <div className="icon-wrapper">
//             <GiTeacher />
//           </div>
//           <h3>Expert Tutors</h3>
//           <p>Get access to certified and experienced educators across various subjects.</p>
//         </div>
//         <div className="benefit-card">
//           <div className="icon-wrapper">
//             <AiOutlineSchedule />
//           </div>
//           <h3>Flexible Scheduling</h3>
//           <p>Choose your own learning times and never miss a class.</p>
//         </div>
//       </div>
//     </div>
//       </section >

//   {/* Footer */ }
//   < footer className = "footer-section" >
//     <div className="footer-container">
//       <div className="footer-content">
//         <div className="footer-brand">
//           <h2>Online Tuition</h2>
//           <p>Empowering learning from anywhere, anytime.</p>
//         </div>
//         <div className="footer-links">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Subjects</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//         </div>
//         <div className="footer-contact">
//           <h3>Contact Us</h3>
//           <p><span>Email:</span> support@onlinetuition.com</p>
//           <p><span>Phone:</span> +91 98765 43210</p>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>© {new Date().getFullYear()} Online Tuition. All rights reserved.</p>
//       </div>
//     </div>
//       </footer >
//     </div >
//   );
// };

// export default Home;










import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import { MdMenuBook, MdOutlineNotificationsActive } from 'react-icons/md';
import { FaChalkboardTeacher, FaVideo } from 'react-icons/fa';
import { AiOutlineUserSwitch, AiOutlineSchedule } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { GiTeacher } from 'react-icons/gi';

import hero1 from '../assets/HeroBanner.jpg';
import hero2 from '../assets/HeroBanner2.jpg';
import hero3 from '../assets/HeroBanner3.jpg';

const heroImages = [
  {
    image: hero1,
    title: (
      <>
        Learn with <span className="highlight">Top Online Tutors</span>
      </>
    ),
    description: "Access live, personalized online tuition with expert teachers. Flexible learning for every child, from anywhere.",
    buttonText: "Find Your Tutor"
  },
  {
    image: hero2,
    title: "Learn From Anywhere",
    description: "Study from the comfort of your home with just a device and internet connection.",
    buttonText: "Start Learning"
  },
  {
    image: hero3,
    title: "Expert Tutors",
    description: "Get access to certified and experienced educators across various subjects.",
    buttonText: "Browse Subjects"
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="home-container">
      {/* Hero Carousel */}
      <section className="hero-carousel">
        <div className="carousel-wrapper">
          {heroImages.map((item, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="slide-overlay"></div>
              <div className="carousel-content">
                <h1 className="slide-title">{item.title}</h1>
                <p className="slide-description">{item.description}</p>
                <button className="cta-button">{item.buttonText}</button>

                <div className="search-box">
                  <input type="text" placeholder="What subject are you looking for?" />
                  <button className="search-button">Search</button>
                </div>

                <div className="category-tags">
                  {['Tamil', 'English', 'Maths', 'Science', 'Social', 'Coding'].map((subject) => (
                    <span key={subject}>{subject}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <button className="arrow left" onClick={handlePrev} aria-label="Previous slide">
            <span>&#10094;</span>
          </button>
          <button className="arrow right" onClick={handleNext} aria-label="Next slide">
            <span>&#10095;</span>
          </button>

          <div className="carousel-dots">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-container">
          <h2>About Our Tuition Platform</h2>
          <div className="about-content">
            <p>
              We are a team of passionate educators dedicated to making high-quality learning accessible to all.
            </p>
            <p>
              Whether you're a school student preparing for exams or a parent looking for structured support,
              we've got you covered with reliable, convenient, and effective online education.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <h2>What Makes Us Different?</h2>
          <div className="card-grid">
            <div className="feature-card">
              <div className="icon-wrapper"><MdMenuBook /></div>
              <h3>All Subjects Covered</h3>
              <p>From academics to electives like coding, keyboard, and arts — all in one platform.</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrapper"><FaVideo /></div>
              <h3>Live + Recorded Classes</h3>
              <p>Missed a session? Watch it later with unlimited access to recorded lessons.</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrapper"><FaChalkboardTeacher /></div>
              <h3>Direct Chat with Teachers</h3>
              <p>Instantly ask doubts or queries and receive personal responses from tutors.</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrapper"><MdOutlineNotificationsActive /></div>
              <h3>Smart Reminders</h3>
              <p>Never miss deadlines — automatic alerts for assignments, payments, and exams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="section-container">
          <h2>Why Choose Online Tuitions?</h2>
          <p className="section-intro">
            Online tuitions offer a flexible, personalized, and effective way of learning that fits every student's schedule and learning pace.
          </p>
          <div className="card-grid">
            <div className="benefit-card">
              <div className="icon-wrapper"><AiOutlineUserSwitch /></div>
              <h3>Personalized Learning</h3>
              <p>Students receive one-on-one attention tailored to their strengths and weaknesses.</p>
            </div>
            <div className="benefit-card">
              <div className="icon-wrapper"><BiWorld /></div>
              <h3>Learn From Anywhere</h3>
              <p>Study from the comfort of your home with just a device and internet connection.</p>
            </div>
            <div className="benefit-card">
              <div className="icon-wrapper"><GiTeacher /></div>
              <h3>Expert Tutors</h3>
              <p>Get access to certified and experienced educators across various subjects.</p>
            </div>
            <div className="benefit-card">
              <div className="icon-wrapper"><AiOutlineSchedule /></div>
              <h3>Flexible Scheduling</h3>
              <p>Choose your own learning times and never miss a class.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h2>Online Tuition</h2>
              <p>Empowering learning from anywhere, anytime.</p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Subjects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p><span>Email:</span> support@onlinetuition.com</p>
              <p><span>Phone:</span> +91 98765 43210</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Online Tuition. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
