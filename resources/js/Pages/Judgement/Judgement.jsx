import React from 'react';
import styles from './Judgement.module.scss';

// Header section data
const HeaderData = {
  title: "VTS Transformative Learning Model",
  subtitle: "Upgrading the Human Operating System for Higher-Quality Outcomes",
  description: "Traditional BPO training focuses on teaching knowledge, process, and compliance. At Vertical Talent Solution, we focus on developing how people think, respond, and grow.\n\nWe call this the VTS Transformative Learning  Model™, a structured pathway to unlock higher levels of judgment, insight, and problem-solving in every workflow."
};

// Cards data
const CardsData = [
  {
    id: 1,
    title: "Socratic Method Training",
    icon: "/Assets/headside.svg",
    description: "One-on-one coaching and group sessions based on dialogue, not debate.<br/><br/>Agents learn to generate meaning together rather than “win” discussions."
  },
  {
    id: 2,
    title: "Scenario-Based Practice",
    icon: "/Assets/man.svg",
    description: "Real-world workflows turned into live simulations (e.g., customer requests, problem resolution).<br/><br/>Quick-response rounds (30 seconds) force agility and authentic judgment."
  },
  {
    id: 3,
    title: "Communal Validation (The “WHY” Method)",
    icon: "/Assets/why.svg",
    description: "Peer groups score responses 1–10 and give one-sentence feedback.<br/><br/>Quality emerges not from a trainer dictating answers, but from collective insight and validation."
  },
  {
    id: 4,
    title: "Progressive Discovery of Higher Standards",
    icon: "/Assets/alert.svg",
    description: "Trainers push participants to reach the next level of judgment without prescribing it.<br/><br/>“Aha moments” happen when they independently discover better judgment."
  },
  {
    id: 5,
    title: "Four-Quadrant Development",
    icon: "/Assets/plane.svg",
    description: "We track both interior and exterior development, at the individual and communal level.<br/><br/>Success is measured across four KPI quadrants: skills, mindset, behavior, and community impact."
  },
  {
    id: 6,
    title: "Vision Logic Outcomes",
    icon: "/Assets/vision.svg",
    description: "At the highest level, agents not only resolve issues but dissect underlying needs.<br/><br/>This unlocks creative, multi-dimensional solutions aligned with customer experience, loyalty, and long-term value creation."
  }
];

// Why It Matters section data
const WhyItMattersData = {
  title: "Why It Matters",
  items: [
    {
      id: 1,
      number: "1",
      title: "Beyond Pay and Incentives",
      description: "Our model addresses the internal operating system — self-development, empowerment, emotional intelligence."
    },
    {
      id: 2,
      number: "2",
      title: "From Process to Judgment",
      description: "Instead of training for scripts, we train for judgment, empathy, and vision logic."
    },
    {
      id: 3,
      number: "3",
      title: "Sustainable Excellence",
      description: "By cultivating communities of practice, we reduce behavioral issues, strengthen resilience, and ensure consistent quality at scale."
    }
  ]
};

const Judgement = () => {
  return (
    <>
      <div className={styles.judgementWrp}>
        <div className={styles.backgroundElement}>
          <img src="../Assets/Rectangle 9533.png" alt="" />
        </div>
        <div className={styles.judgementContent}>
          <h1 style={{ color: '#181818', marginBottom: '8px' }}>{HeaderData.title}</h1>
          <p className={styles.judgementContentP} style={{ color: '#181818', fontWeight: '700', fontSize: '24px', fontStyle: 'italic', marginBottom: '32px' }}>{HeaderData.subtitle}</p>
          <p className={styles.judgementContentP} style={{ width: '1038px', color: '#181818', fontSize: '18px', textAlign: 'center', marginBottom: '64px' }}>
            {HeaderData.description.split('\n\n').map((paragraph, index) => (
              <React.Fragment key={index}>
                {index > 0 && <><br /><br /></>}
                {paragraph}
              </React.Fragment>
            ))}
          </p>

          <div className={styles.judgementCardsWrp}>
            {CardsData.map((card) => (
              <div key={card.id} className={styles.cardContainer}>
                <div className={styles.card}>
                  <div className={styles.cardFront}>
                    <img style={{ height: '48px' }} src={card.icon} alt="" />
                    <h5 style={{ width: '332px', textAlign: 'center', color: '#fff' }}>{card.title}</h5>
                  </div>
                  <div className={styles.cardBack}>
                    <img style={{ height: '32px', marginBottom: '24px' }} src={card.icon} alt="" />
                    <h5 style={{color: '#fff', fontSize: '24px', marginBottom: '16px' }}>{card.title}</h5>
                    <p dangerouslySetInnerHTML={{ __html: card.description }} style={{textAlign: 'left', fontSize: '16px'}}></p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.whyItMattersWrp}>
            <h3>{WhyItMattersData.title}</h3>
            <div className={styles.whyItMatters}>
              {WhyItMattersData.items.map((item, index) => (
                <React.Fragment key={item.id}>
                  {index > 0 && <div className={styles.divider} style={{ width: '1px', height: '215px', backgroundColor: '#CED4DA' }} />}
                  <div className={styles.whyItMattersItem}>
                    <p className={styles.whyItMattersItemC} style={{ width: '70px', height: '70px', color: '#6C757D', fontSize: '32px', backgroundColor: '#E9ECEF', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0' }}>{item.number}</p>
                    <p className={styles.whyItMattersItemp} style={{ color: '#181818', fontSize: '24px', textAlign: 'center' }}>{item.title}</p>
                    <p className={styles.whyItMattersItemp} style={{ color: '#181818', fontSize: '16px', textAlign: 'center' }}>{item.description}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Judgement; 