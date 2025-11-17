import React from 'react';
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
    socialLinks: {
      instagram: '/Assets/insta-white.svg',
      twitter: '/Assets/tweeter-white.svg'
    }
  },
  {
    name: 'John Smith',
    position: 'Chief Technology Officer',
    image: '/Assets/ppl.jpg',
    socialLinks: {
      instagram: '/Assets/insta-white.svg',
      twitter: '/Assets/tweeter-white.svg'
    }
  },
  {
    name: 'Sarah Johnson',
    position: 'Head of Operations',
    image: '/Assets/ppl.jpg',
    socialLinks: {
      instagram: '/Assets/insta-white.svg',
      twitter: '/Assets/tweeter-white.svg'
    }
  },
  {
    name: 'Michael Chen',
    position: 'Director of Business Development',
    image: '/Assets/ppl.jpg',
    socialLinks: {
      instagram: '/Assets/insta-white.svg',
      twitter: '/Assets/tweeter-white.svg'
    }
  }
]



const Team = () => {
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
                <div key={index} className={styles.card}>
                  <img className={styles.imgPpl} src={member.image} alt={member.name} />
                  <div className={styles.cardContent}>
                    <h5 style={{marginBottom: '16px'}}>{member.name}</h5>
                    <p style={{ color: '#181818', marginBottom: '36px' }}>{member.position}</p>
                    <div style={{display: 'flex', gap: '16px'}}>
                      <img style={{ width: '24px', height: '24px', objectFit: 'cover' }} src={member.socialLinks.instagram} alt="Instagram" />
                      <img style={{ width: '24px', height: '24px', objectFit: 'cover' }} src={member.socialLinks.twitter} alt="Twitter" />
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
