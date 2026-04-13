import { useState, useEffect, useRef } from 'react';
import Image from "next/image";

import Banner1 from "../img/banner-1.png";
import Banner2 from "../img/banner-2.png";
import Banner3 from "../img/banner-3.png";
import Banner4 from "../img/banner-4.png";

function IndexPage() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const touchStart = useRef(null);
  const touchEnd = useRef(null);
  const mouseDown = useRef(false);

  const slides = [
    Banner1,
    Banner2,
    Banner3,
    Banner4
  ];

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 500000000);

    return () => clearInterval(interval);
  }, []);

  // Arrow Functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSwipe = () => {
    if (!touchStart.current || !touchEnd.current) return;

    const distance = touchStart.current - touchEnd.current;

    if (distance > 50) {
      nextSlide();
    }

    if (distance < -50) {
      prevSlide();
    }
  };

  // Touch
  const handleTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    handleSwipe();
  };

  // Mouse
  const handleMouseDown = (e) => {
    mouseDown.current = true;
    touchStart.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!mouseDown.current) return;
    touchEnd.current = e.clientX;
  };

  const handleMouseUp = () => {
    mouseDown.current = false;
    handleSwipe();
  };

  return (
    <>
      <div 
        className="home-banner-main"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >

        <Image src={slides[currentSlide]} alt="" />

        {/* Left Arrow */}
        <button className="slider-arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        {/* Right Arrow */}
        <button className="slider-arrow right" onClick={nextSlide}>
          &#10095;
        </button>


        {currentSlide === 0 && (
          <div className="home-banner-middle-middle">
            <h1 className="intelli_seconf_banner_first_head">BUILT FOR THE ENTERPRISE .<span className="intelli_seconf_banner_second_head">DRIVEN BY OUR EXPERTISE .</span></h1>
            <p className="intelli_seconf_banner_first_para">
              As a global, full-service Managed IT Services Provider with over a decade of experience, Intelli Platforms help businesses navigate the rapidly transforming technology landscape. We deliver innovative solutions that drive scalability and operational efficiency, empowering our clients to meet the evolving demands of the tech ecosystem.
            </p>
          </div>
        )}

        {currentSlide === 1 && (
          <div className="home-banner-middle-middle">
            <h1 className="intelli_seconf_banner_first_head white">THE STRATEGIC GATEWAY<span className="intelli_seconf_banner_second_head gr">THE HERO EXPERIENCE</span></h1>
            <p className="intelli_seconf_banner_first_para whaite">
              Intelligence in Motion. Outcomes in Sight.<br/>
              We invite you to experience a partnership where strategic intelligence is seamlessly woven into the fabric of your operational delivery. At Intelli Platforms Inc., we do not merely advise on the future; we build the resilient, high-performance operations that sustain it.
            </p>
          </div>
        )}

        {currentSlide === 2 && (
          <div>
            <div className="home-banner-middle-middle">
              <h1 className="intelli_seconf_banner_first_head white">THE INTELLI DIFFERENTIATOR:<span className="intelli_seconf_banner_second_head gr">THE "EXECUTION GAP"</span></h1>
              <p className="intelli_seconf_banner_first_para whaite">
                In a landscape defined by fragmented technology and legacy debt, traditional consulting often leaves leadership with a roadmap but no vehicle. Intelli Platforms occupies the critical space between strategy and maintenance.
              </p>
            </div>

            <div className='last-footer-content'>
              <div className='content-frame-om'>
                <h4>Beyond Strategy Firms:</h4>
                <p>While others offer theoretical frameworks, we specialize in the direct modernization of front, middle, and back-office operations.</p>
              </div>

              <div className='content-frame-om'>
                <h4>Beyond Global SIs:</h4>
                <p>Our mission is to fundamentally transform established ways of working through intelligent automation, rather than focusing solely on cost reduction.</p>
              </div>

              <div className='content-frame-om'>
                <h4>Human-Centric AI:</h4>
                <p>Our deployment of Agentic AI is designed to augment your professional workforce, ensuring human intelligence remains the core of every modernized process.</p>
              </div>

            </div>
          </div>
        )}

        {currentSlide === 3 && (
          <div className="home-banner-middle-middle">
            <h1 className="intelli_seconf_banner_first_head white">EVENTUM ENTERPRISE SOLUTIONS:<span className="intelli_seconf_banner_second_head gr">A LEGACY OF EXCELLENCE</span></h1>
            <p className="intelli_seconf_banner_first_para whaite">
              Eventum Enterprise Solutions (Eventum) has been an integral part of Intelli Platforms since 2021, functioning as a specialized business unit that contributes over forty years of profound experience across the Financial Services landscape. With a sharp focus on business operations and a proven ability to navigate complex Regulatory and M&A events, Eventum empowers C-suite leadership to successfully realize their most ambitious growth and efficiency objectives.
            </p>
          </div>
        )}

      </div>

      <style jsx>{`
        .home-banner-main {
          cursor: grab;
          position: relative;
        }

        .home-banner-main:active {
          cursor: grabbing;
        }

        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.4);
          color: #fff;
          border: none;
              padding: 5px 10px;
    font-size: 15px;
          cursor: pointer;
          z-index: 9;
          transition: 0.3s;
        }

        .slider-arrow:hover {
          background: rgba(0,0,0,0.7);
        }

        .slider-arrow.left {
          left: 20px;
        }

        .slider-arrow.right {
          right: 20px;
        }

      `}</style>
    </>
  );
}

export default IndexPage;