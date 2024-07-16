import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import bgTestimonials from './images/bg-testimonials.png';
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    text: "Bookster has been a game-changer for my reading habits. The ease of finding and borrowing books has made it so much more convenient to dive into new topics. The platform's user-friendly interface and wide selection keep me coming back for more.",
    author: "Alex T."
  },
  {
    text: "I'm incredibly grateful for Bookster. It's not just a library, it's a community of readers who share a passion for learning. The recommendations are always spot-on, helping me discover books I wouldn't have found on my own. Keep up the great work!",
    author: "Maria L"
  },
  {
    text: "Bookster has helped me balance my professional and personal life by providing access to a wealth of knowledge and resources. The ability to read during my breaks has significantly improved my productivity and overall well-being.",
    author: "John D."
  },
  {
    text: "The curated collections on Bookster are fantastic. I always find something new and interesting to read. The platform's emphasis on personal growth and development is evident in the selection of books they offer. It's my go-to source for learning and inspiration.",
    author: "Elena G."
  },
  {
    text: "Thanks to Bookster, I've rediscovered my love for reading. The convenience of having a vast library at my fingertips has made it easy to integrate reading into my daily routine. The book summaries and user reviews are especially helpful in choosing what to read next.",
    author: "Michael S."
  },
  {
    text: "Bookster is an invaluable resource for anyone looking to expand their knowledge and improve themselves. The range of topics covered is impressive, and the ability to borrow books effortlessly has made it my preferred platform for continuous learning.",
    author: "Sofia R."
  }
];

const containerStyle: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  height: '800px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const backgroundStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${bgTestimonials})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1
};

const contentStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '800px',
  textAlign: 'center',
  position: 'relative',
  padding: '40px 0'
};

const titleStyle: React.CSSProperties = {
  marginBottom: '250px',
  position: 'relative',
  fontWeight: 'bold',
  fontSize: '48px',
};

const swiperStyle = {
  backgroundColor: 'rgba(255, 153, 165, 0.7)',
  padding: '40px',
  borderRadius: '10px',
  width: '90%',
  paddingTop: '200px',
  fontWeight: '600',
      '--swiper-navigation-color': '#FF6B6B'
};

const quoteIconStyle: React.CSSProperties = {
  fontSize: '40px',  
  color: 'red',  
  position: 'absolute',
  top: '-60%',
  left: '50%',
  transform: 'translateX(-50%)',
  opacity: 0.7
};

const testimonialStyle: React.CSSProperties = {
  margin: '0 40px',
};

const quoteStyle: React.CSSProperties = {
  fontStyle: 'italic',
  marginBottom: '20px'
};

const authorStyle: React.CSSProperties = {
  fontSize: '19px',
};

const Testimonials = () => {

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle} />
      <div style={contentStyle}>
        <h2 style={titleStyle}>What booksters think of us</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          style={swiperStyle} // Merge styles
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div style={testimonialStyle}>
                <FaQuoteRight style={quoteIconStyle} />
                <div style={quoteStyle}>
                  {testimonial.text}
                </div>
                <p style={authorStyle}>{testimonial.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
