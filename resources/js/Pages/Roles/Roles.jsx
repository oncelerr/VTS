import React from 'react';
import styles from './Roles.module.scss';
import HollowBadge from '../../components/HollowBadge/HollowBadge';
import SolidBtn from '../../components/SolidButton/SolidBTN';
import HollowBtn from '../../components/HollowButton/HollowBTN';

const HeroData = {
  badge: 'Teams',
  Title: 'Why VTS for Global & Managed Teams',
  content: 'Expanding into the Philippines or other global markets doesn’t have to be complicated. We take care of compliance, work visas, HR setup, and even team management—whether you want us to help you hire (Global Teams) or fully run your team (Managed Teams)—so you can focus on scaling with speed and impact.',
}

const TalentContentData = [
  { image: '/Assets/ppl.jpg', title: 'Why Clients Choose VTS for Global Teams', content: 'Fast Market Entry: Launch teams in weeks without setting up a local entity.<br/><br/>Compliance Confidence: Stay aligned with local labor laws and tax regulations, streamlined work visa and immigration processing.<br/><br/>Simplified Payroll & Benefits: One platform for global pay and HR administration.<br/><br/>Cost Efficiency: Eliminate upfront infrastructure and reduce admin overhead.<br/><br/>Reduced Risk: We absorb the compliance and legal burden so you can scale safely.<br/><br/>Human-Centered Support: Local HR experts ensure smooth onboarding and high engagement.' },
  
  { image: '/Assets/ppl.jpg', title: 'Why Clients Choose the VTS for Managed Teams', content: '25% Higher Accuracy – Teams consistently outperform market error rates, delivering cleaner data, better customer experiences, and fewer costly reworks.<br/><br/>Stronger Productivity – On average, our people handle 20–25% more volume per hour while maintaining quality, accelerating throughput across digital-ready workflows.<br/><br/>Superior SLA Compliance – 90%+ SLA adherence compared to a 70% market benchmark means you can count on reliable, on-time delivery at scale.<br/><br/>Judgment Consistency – In roles requiring critical decision-making—content moderation, fraud review, healthcare ops—our teams achieve 25% greater consistency than industry peers.<br/><br/>First-Time Resolution – 85% resolution rates without escalation, compared to 65% in the broader market.' },
]

const ctaData = {
  title: 'More reliable operations, faster scaling, and stronger ROI for global companies building teams in the Philippines.',
  content: 'Ready to see operational excellence in action?',
  btnText: 'Book a Call',
  hollowBTN: 'Request a Proposal',
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
      </div>
    </>
  );
}

const CTA = () => {
  return (
    <>
      <div className={styles.ctaWrp}>
        <div className={styles.ctaContent}>
          <h3 style={{color:'white', fontSize: '36px !important'}}>{ctaData.title}</h3>
          <p>{ctaData.content}</p>
          <div style={{display: 'flex', gap: '16px'}}>
            <SolidBtn name={ctaData.btnText} />
            <HollowBtn name={ctaData.hollowBTN} color={'#fff'} />
          </div>
        </div>
      </div>
    </>
  );
}

const Teams = () => {
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

export default Teams;
