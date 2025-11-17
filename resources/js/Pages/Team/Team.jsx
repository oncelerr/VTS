import React, { useState } from 'react';
import styles from './Team.module.scss';
import HollowBadge from '../../components/HollowBadge/HollowBadge';
import SolidBtn from '../../components/SolidButton/SolidBTN';
import HollowBtn from '../../components/HollowButton/HollowBTN';
import Hero from '../../components/Hero/Hero';
import CTA from '../../components/CTA/CTA';

const HeroData = {
  badge: 'Our Leadership',
  title: 'Driving Growth Through People and Purpose',
  content: 'Guided by over two decades of expertise, Vertical Talent Solutions’ leadership team empowers businesses worldwide with high-performing talent and lasting partnerships.',
}

const teamMembers = [
  {
    name: 'Kimberly Ongcuangco',
    position: 'Co-Founder & Managing Partner',
    image: '/Assets/ppl.jpg',
    description: 'Kim has spent her career helping people find not just jobs, but purpose. As Co-Founder and Managing Partner, she leads with intuition, empathy, and a deep understanding of what makes businesses thrive.',
    socialLinks: {
      instagram: '/Assets/insta-white.svg',
      twitter: '/Assets/tweeter-white.svg'
    }
  },
  {
    name: 'Sang Won Hwang, Ph.D.',
    position: 'Co-Founder',
    image: '/Assets/ppl.jpg',
    description: 'With over a decade of experience leading talent acquisition for some of the Philippines\' top BPOs, she knows that behind every business success is the right person in the right role at the right time.',
    socialLinks: {
      instagram: '/Assets/insta-white.svg',
      twitter: '/Assets/tweeter-white.svg'
    }
  },
  {
    name: 'Cesar Sorilla',
    position: 'Senior Vice President, Client Acquisition & Growth',
    image: '/Assets/ppl.jpg',
    description: 'For Kim, talent acquisition isn\'t about filling seats — it\'s building futures. She\'s passionate about developing people from the inside out, creating environments where confidence, capability, and connection grow together.',
    socialLinks: {
      instagram: '/Assets/insta-white.svg',
      twitter: '/Assets/tweeter-white.svg'
    }
  },
  {
    name: 'Michelle Dela Rosa',
    position: 'Associate Director, Strategic Partnerships – APAC',
    image: '/Assets/ppl.jpg',
    description: 'Her vision is simple but powerful: when people believe in themselves, they deliver extraordinary outcomes.',
    socialLinks: {
      instagram: '/Assets/insta-white.svg',
      twitter: '/Assets/tweeter-white.svg'
    }
  }
]



const Team = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <div className={styles.teamWrp}>
        <Hero HeroData={HeroData} />

        <div className={styles.teamContent}>
          <div className={styles.backgroundElement}>
            <img src="../Assets/Vector 9.png" alt="" />
          </div>

          <div className={styles.teamCard}>
            <h1 style={{ color: '#181818', textAlign: 'center', marginBottom: '24px' }}>Meet Our Management Team</h1>
            <p style={{ color: '#181818', width: '926px', textAlign: 'center' }}>Get to know the passionate leaders driving Vertical Talent Solutions forward—uniting talent, innovation, and global experience to create meaningful business impact.</p>

            <div className={styles.cardWrp}>
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className={styles.card}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img className={styles.imgPpl} src={member.image} alt={member.name} />
                  <div className={styles.cardContent}>
                    <h5 style={{marginBottom: '16px'}}>{member.name}</h5>
                    <p style={{ color: '#181818', marginBottom: '36px' }}>{member.position}</p>
                    <div style={{display: 'flex', gap: '16px'}}>
                      <img style={{ width: '24px', height: '24px', objectFit: 'cover', cursor: 'pointer' }} src='/Assets/insta-white.svg' alt="Instagram" />
                      <img style={{ width: '24px', height: '24px', objectFit: 'cover', cursor: 'pointer' }} src='/Assets/tweeter-white.svg' alt="Twitter" />
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className={`${styles.cardOverlay} ${hoveredCard === index ? styles.visible : ''}`}>
                    <div className={styles.overlayContent}>
                      <h3 className={styles.overlayName}>{member.name}</h3>
                      <p className={styles.overlayPosition}>{member.position}</p>
                      <p className={styles.overlayDescription}>{member.description}</p>
                      <div className={styles.overlaySocial}>
                        <img src='/Assets/insta.svg' alt="Instagram" />
                        <img src='/Assets/tweeter.svg' alt="Twitter" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CTA data={{
          title: "We believe that when we create learning teams,  businesses grow stronger.",
          titleItalic: "That’s why every team we build doesn’t just serve our clients — they elevate them.",
          btnText: "Book a Call",
          hollowBTN: "Request a Proposal",
          badge: "The Future of Hiring Starts Here",
        }} />
      </div>
    </>
  );
};

export default Team;
