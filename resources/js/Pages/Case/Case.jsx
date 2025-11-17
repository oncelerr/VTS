import React, { useState, useEffect } from 'react';
import styles from './Case.module.scss';

// Header section data
const HeaderData = {
  title: " From Routine to Judgment: A New Standard of Service",
  subtitle: "",
  description: "This simple exercise demonstrates how the VTS Transformative Learning Model™ develops teams capable of higher-level problem-solving, in this case using a simple scenario from a restaurant (which we can all relate to) to be applied to digital customer experience agents."
};

// Carousel section data
const CarouselData = {
  header: {
    title: "A Sample Scenario Based Training For Customer Experience Agents",
    scenario: "Scenario: A restaurant customer asks for Coke, but it's unavailable."
  },
  slides: [
    {
      id: 1,
      number: "1",
      title: "Socratic Method Training",
      subtitle: "First Step",
      content: "Agents are placed in a group circle. The trainer frames the situation but does not provide the \"correct\" answer.<br /><br />Each participant has 30 seconds to respond as if they were the server.<br /><br />Instead of teaching solutions, the trainer asks probing questions: \"What did the customer want here?\" \"What else might they need?\""
    },
    {
      id: 2,
      number: "2",
      title: "Peer Reflection",
      subtitle: "Second Step",
      content: "After each response, participants reflect on what they heard.<br /><br />They identify patterns in thinking and discuss alternative approaches.<br /><br />This builds collective intelligence and shared understanding of customer psychology."
    },
    {
      id: 3,
      number: "3",
      title: "Scenario Expansion",
      subtitle: "Third Step",
      content: "The trainer introduces variations: \"What if the customer is diabetic?\" \"What if they're hosting a party?\"<br /><br />Participants learn to think beyond the immediate request.<br /><br />This develops adaptive thinking and contextual awareness."
    },
    {
      id: 4,
      number: "4",
      title: "Real-World Application",
      subtitle: "Fourth Step",
      content: "Teams practice with actual customer scenarios from their work environment.<br /><br />They apply the same judgment-based thinking to digital interactions.<br /><br />This bridges training to performance in live customer situations."
    },
    {
      id: 5,
      number: "5",
      title: "Outcome Measurement",
      subtitle: "Fifth Step",
      content: "Performance is measured not just on resolution time, but on customer satisfaction and creative problem-solving.<br /><br />Teams develop ownership of outcomes, not just processes.<br /><br />This creates sustainable improvement in service quality."
    },
    {
      id: 6,
      number: "6",
      title: "Continuous Learning",
      subtitle: "Final Step",
      content: "Regular reflection sessions help teams identify new patterns and insights.<br /><br />Learning becomes embedded in daily operations, not just training events.<br /><br />This creates a culture of continuous improvement and innovation."
    }
  ],
  footer: {
    title: "Outcome: A Fundamentally Different Training Model",
    content: "Traditional BPO training: \"If no Coke, offer Pepsi.\" (Process → Compliance)<br /><br />VTS Judgment Model™: \"Understand the customer's need, anticipate outcomes, create tailored solutions, and turn a limitation into loyalty.\" (Judgment → Value Creation)<br /><br />This is not just training. It is a systematic upgrade of the human operating system, designed to produce judgment-based outcomes that exceed what incentives, pay structures, or scripts can achieve."
  }
};

const Case = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % CarouselData.slides.length);
      setIsTransitioning(false);
    }, 150);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + CarouselData.slides.length) % CarouselData.slides.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 150);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <>
      <div className={styles.caseWrp}>
        <div className={styles.backgroundElement}>
          <img src="../Assets/Rectangle 9533.png" alt="" />
        </div>
        <div className={styles.caseContent}>
          <h1 style={{ color: '#181818', marginBottom: '24px', width: '1272px', textAlign: 'center' }}>{HeaderData.title}</h1>
          <p style={{ width: '1038px', color: '#181818', fontSize: '18px', textAlign: 'center' }}>
            {HeaderData.description.split('\n\n').map((paragraph, index) => (
              <React.Fragment key={index}>
                {index > 0 && <><br /><br /></>}
                {paragraph}
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className={styles.caseCarousel}>
          <div className={styles.caseCarouselHeader}>
            <h4 style={{ width: '1032px', color: 'white', textAlign: 'left' }}>{CarouselData.header.title}</h4>
            <p>{CarouselData.header.scenario}</p>
          </div>
          <div className={styles.caseCarouselWrp}>
            <button onClick={prevSlide}><img src="/Assets/buttonleft.svg" alt="Previous slide" /></button>
            <div className={styles.carousel}>
              <div className={`${styles.carouselHeader} ${isTransitioning ? styles.slideOut : styles.slideIn}`}>
                <div style={{ width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', backgroundColor: '#065AF7' }}>
                  <p style={{ color: 'white', fontSize: '61.714px', fontWeight: '400' }}>{CarouselData.slides[currentSlide].number}</p>
                </div>
                <div style={{ display: 'flex', gap: '13px', flexDirection: 'column', justifyContent: 'center' }}>
                  <h5>{CarouselData.slides[currentSlide].title}</h5>
                  <p style={{ color: '#181818', fontSize: '24px', fontWeight: '400', fontStyle: 'italic' }}>{CarouselData.slides[currentSlide].subtitle}</p>
                </div>
              </div>
              <div className={`${styles.carouselContent} ${isTransitioning ? styles.slideOut : styles.slideIn}`}>
                <p style={{ color: '#495057', fontSize: '24px' }} dangerouslySetInnerHTML={{ __html: CarouselData.slides[currentSlide].content }}></p>
              </div>
            </div>
            <button onClick={nextSlide}><img src="/Assets/buttonright.svg" alt="Next slide" /></button>
          </div>

          <div className={styles.caseCarouselDots}>
            <div className={styles.line}></div>
            <div className={styles.dtsWrp}>
              {CarouselData.slides.map((slide, index) => (
                <div 
                  key={slide.id} 
                  className={`${styles.dts} ${index === currentSlide ? styles.active : ''}`}
                  onClick={() => goToSlide(index)}
                  style={{ cursor: 'pointer' }}
                ></div>
              ))}
            </div>
          </div>

          <div className={styles.caseCarouselFooter}>
            <h4 style={{ width: '1032px', color: 'white', textAlign: 'left' }}>{CarouselData.footer.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: CarouselData.footer.content }}></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Case; 