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
    description: "Our Socratic Method approach uses guided questioning to help team members discover insights rather than memorize procedures. This builds critical thinking skills and deeper understanding of complex situations."
  },
  {
    id: 2,
    title: "Reflective Practice",
    icon: "/Assets/headside.svg",
    description: "Team members regularly analyze their own decision-making processes, identifying patterns and opportunities for growth. This builds metacognition—the ability to think about one's own thinking."
  },
  {
    id: 3,
    title: "Communal Learning",
    icon: "/Assets/headside.svg",
    description: "Knowledge sharing happens through structured peer dialogue rather than top-down instruction. This creates a culture where insights emerge from collective experience and diverse perspectives."
  },
  {
    id: 4,
    title: "Scenario-Based Training",
    icon: "/Assets/headside.svg",
    description: "Instead of abstract rules, we train through real-world scenarios that require judgment and contextual understanding. This builds the ability to navigate ambiguity and make nuanced decisions."
  },
  {
    id: 5,
    title: "Emotional Intelligence",
    icon: "/Assets/headside.svg",
    description: "We develop awareness of emotional responses and their impact on decision-making. This builds resilience and the ability to maintain judgment even in high-pressure situations."
  },
  {
    id: 6,
    title: "Continuous Feedback Loops",
    icon: "/Assets/headside.svg",
    description: "Regular, structured feedback sessions focus on thought process rather than just outcomes. This creates a growth mindset where team members constantly refine their judgment capabilities."
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
          <p style={{ color: '#181818', fontWeight: '700', fontSize: '24px', fontStyle: 'italic', marginBottom: '32px' }}>{HeaderData.subtitle}</p>
          <p style={{ width: '1038px', color: '#181818', fontSize: '18px', textAlign: 'center', marginBottom: '64px' }}>
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
                    <p>{card.description}</p>
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
                  {index > 0 && <div style={{ width: '1px', height: '215px', backgroundColor: '#CED4DA' }} />}
                  <div className={styles.whyItMattersItem}>
                    <p style={{ width: 'fit-content', color: '#6C757D', fontSize: '32px', padding: '17px 22.5px', backgroundColor: '#E9ECEF', borderRadius: '50px' }}>{item.number}</p>
                    <p style={{ color: '#181818', fontSize: '24px', textAlign: 'center' }}>{item.title}</p>
                    <p style={{ color: '#181818', fontSize: '16px', textAlign: 'center' }}>{item.description}</p>
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