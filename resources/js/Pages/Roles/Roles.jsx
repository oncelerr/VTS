import React from 'react';
import styles from './Roles.module.scss';
import HollowBadge from '../../components/HollowBadge/HollowBadge';
import SolidBtn from '../../components/SolidButton/SolidBTN';
import HollowBtn from '../../components/HollowButton/HollowBTN';
import Hero from '../../components/Hero/Hero';

const HeroData = {
  badge: 'Our Roles',
  title: 'Specialized Roles',
  italicTitle: 'Across Industries',
  content: 'We build and manage high-performing teams across data analytics, customer experience, content moderation, and enterprise support. <br/><br/>With a global recruitment network that covers all functions—not just the roles listed—we help you hire or place talent quickly, stay compliant, and scale with confidence while we handle the rest.',
  button: 'Build Your Team',
}

const Roles = () => {
  return (
    <>
      <div className={styles.talentWrp}>
        <Hero HeroData={HeroData} />
      </div>
    </>
  );
};

export default Roles;
