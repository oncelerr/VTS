import React from 'react';
import styles from './Approach.module.scss';
import HollowBadge from '../../components/HollowBadge/HollowBadge';
import SolidBtn from '../../components/SolidButton/SolidBTN';
import HollowBtn from '../../components/HollowButton/HollowBTN';
import Hero from '../../components/Hero/Hero';

const HeroData = {
  badge: 'Our Approach',
  title: 'When people learn how to learn not just what to do — ',
  italicTitle: 'judgment emerges.',
  content: 'We build global teams that think critically, act with insight, and deliver measurable outcomes in Content Moderation, AI Annotation, Digital Customer Experience, Travel Operations, and Data Analytics.',
  button: 'Request a Case Study',
}

const Approach = () => {
  return (
    <>
      <div className={styles.talentWrp}>
        <Hero HeroData={HeroData} />
      </div>
    </>
  );
};

export default Approach;
