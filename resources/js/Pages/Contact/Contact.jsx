import React, { useEffect } from 'react';
import styles from './Contact.module.scss';
import HollowBadge from '../../components/HollowBadge/HollowBadge';
import SolidBtn from '../../components/SolidButton/SolidBTN';
import HollowBtn from '../../components/HollowButton/HollowBTN';
import Hero from '../../components/Hero/Hero';

const HeroData = {
  badge: 'Contact Us',
  title: 'Get in Touch',
  content: 'Book a schedule today to discuss your talent needs.',
}

const Contact = () => {
  return (
    <>
      <div className={styles.rolesWrp}>
        <Hero HeroData={HeroData} />

        <div className={styles.calendarSection}>
          <div className={styles.calendarContainer}>
            <iframe
              src="https://cal.com/vibe-hive-tfymmx/30min?theme=light&background=ffffff"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              title="Schedule a 30 minute meeting"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
