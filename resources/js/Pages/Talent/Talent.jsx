import React from 'react';
import styles from './Talent.module.scss';
import HollowBadge from '../../components/HollowBadge/HollowBadge';
import SolidBtn from '../../components/SolidButton/SolidBTN';

const HeroData = {
  badge: 'Talent',
  Title: 'Why Choose VTS for Direct placement and RPO',
  content: 'Our strength comes from real, hands-on recruitment for top BPOs in the Philippines. Working with the best in the industry has built strong operational expertise. Now, we bring that same skill to our Direct Placement and RPO services for startups, growing companies, and global brands.',
}

const TalentContentData = [
  { image: '/Assets/ppl.jpg', title: 'Operational Fitness from High-Volume, High-Speed Hiring', content: 'VTS has honed its systems in one of  the most competitive hiring environments in the world. We routinely fill hundreds of roles—from customer support and content moderation to data analytics and digital operations—under tight deadlines. <br/><br/>This level of execution builds a reflex for speed, precision, and scalability, ensuring we can deliver the same excellence whether you’re hiring one role or one hundred.' },
  { image: '/Assets/ppl.jpg', title: 'Market Intelligence that Goes Beyond Job Boards', content: 'We don’t just post and wait. Our team actively sources through social platforms, digital communities, and micro-targeted campaigns, fine-tuned to attract the right type of talent for each industry. <br/><br/>We know which messaging resonates, which roles attract which candidate pools, and how to convert interest into commitment. Our recruiters maintain live intelligence on candidate mobility, salary shifts, and availability—data that job portals can’t provide. This gives our clients access to the real market, not just résumés.' },
  { image: '/Assets/ppl.jpg', title: 'Deep Local Insight, Global Perspective', content: 'Our success lies in knowing the Philippine talent landscape at a granular level—city by city, role by role. <br/><br/>We understand who prefers hybrid or remote work, which regions yield the best English proficiency, and which experience types translate best across industries. Combined with a global understanding of operational demands, this allows us to design RPO and Direct Placement models that deliver the right talent, in the right place, at the right value.' },
]

const ctaData = {
  title: 'VTS don’t just fill seats—we solve business challenges.',
  content: 'Let’s build your next team with the precision that comes from real-world experience.',
  btnText: 'Talk to Our Team',
}

const Hero = () => {
  return (
    <>
      <div className={styles.heroWrp}>
        <div className={styles.backgroundElement}>
          <img
            src="/Assets/Rectangle 9531.png"
            alt="Background"
            loading="eager"
          />
        </div>
        <div className={styles.backgroundElement2}>
          <img
            src="/Assets/Vector 8.png"
            alt="Background"
            loading="eager"
          />
        </div>
        <div className={styles.backgroundElement3}>
          <img
            src="/Assets/Rectangle 9532.png"
            alt="Background"
            loading="eager"
          />
        </div>
        <div className={styles.heroContent}>
          <HollowBadge name={HeroData.badge} color={'#181818'} />
          <h1 style={{ color: '#181818' }}>{HeroData.Title}</h1>
          <p style={{ color: '#181818' }}>{HeroData.content}</p>
        </div>
      </div>
    </>
  );
}

const TalentContent = () => {
  return (
    <>
      <div className={styles.talentContentWrp}>
        <div className={styles.section}>
          <div className={styles.sectionImg}>
            <img style={{ objectFit: 'cover', width: '368px', height: '368px', borderRadius: '16px', border: '6px solid #FFF' }} src={TalentContentData[0].image} alt="" />
          </div>
          <div className={styles.sectionContent}>
            <h3 style={{color: 'white'}}>{TalentContentData[0].title}</h3>
            <p dangerouslySetInnerHTML={{ __html: TalentContentData[0].content }}></p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <h3 style={{color: 'white'}}>{TalentContentData[1].title}</h3>
            <p dangerouslySetInnerHTML={{ __html: TalentContentData[1].content }}></p>
          </div>
          <div className={styles.sectionImg}>
            <img style={{ objectFit: 'cover', width: '368px', height: '368px', borderRadius: '16px', border: '6px solid #FFF' }} src={TalentContentData[1].image} alt="" />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionImg}>
            <img style={{ objectFit: 'cover', width: '368px', height: '368px', borderRadius: '16px', border: '6px solid #FFF' }} src={TalentContentData[2].image} alt="" />
          </div>
          <div className={styles.sectionContent}>
            <h3 style={{color: 'white'}}>{TalentContentData[2].title}</h3>
            <p dangerouslySetInnerHTML={{ __html: TalentContentData[2].content }}></p>
          </div>
        </div>
      </div>
    </>
  );
}

const CTA = () => {
  return (
    <>
      <div className={styles.ctaWrp}>
        <div className={styles.ctaContent}>
          <h3 style={{color:'white', fontSize: '48px !important'}}>{ctaData.title}</h3>
          <p>{ctaData.content}</p>
          <SolidBtn name={ctaData.btnText} />
        </div>
      </div>
    </>
  );
}

const Talent = () => {
  return (
    <>
      <div className={styles.talentWrp}>
        <Hero />
        <TalentContent />
        <CTA />
      </div>
    </>
  );
};

export default Talent;
