import React from 'react';
import styles from './Approach.module.scss';
import HollowBadge from '../../components/HollowBadge/HollowBadge';
import SolidBtn from '../../components/SolidButton/SolidBTN';
import HollowBtn from '../../components/HollowButton/HollowBTN';
import Hero from '../../components/Hero/Hero';
import CTA from '../../components/CTA/CTA';

const HeroData = {
  badge: 'Our Approach',
  title: 'When people learn how to learn not just what to do — ',
  italicTitle: 'judgment emerges.',
  content: 'We build global teams that think critically, act with insight, and deliver measurable outcomes in Content Moderation, AI Annotation, Digital Customer Experience, Travel Operations, and Data Analytics.',
}

// Case Studies table data
const CaseStudiesData = {
  sectionTitle: 'Client Case Studies',
  headers: [
    { id: 1, title: "Industry Vertical" },
    { id: 2, title: "Client Challenge" },
    { id: 3, title: "VTS Approach" },
    { id: 4, title: "Transformative Method" },
    { id: 5, title: "Results & Outcomes" }
  ],
  rows: [
    {
      id: 1,
      title: "Social Media Platform",
      cells: [
        "A global Social Media company needed scalable, high-quality data annotation for sensitive content labeling tasks.",
        "Built a team of annotators trained through scenario-based Social Learning sessions and peer validation.",
        "Transformative Pedagogy: scenario training, communal feedback, interior development focus.",
        "+35% labeling accuracy, +25% productivity improvement, -40% rework and QA cycles."
      ]
    },
    {
      id: 2,
      title: "Data Analytics & Advanced Analytic Support",
      cells: [
        "A financial services client struggled with inconsistent reporting and data validation.",
        "Formed a managed analytics pod with data analysts and BI specialists trained in reflective problem-solving.",
        "Double-Loop Learning: agents analyze their own reasoning to improve interpretation and insights.",
        "+30% report accuracy, -20% error rates, improved strategic insight delivery."
      ]
    },
    {
      id: 3,
      title: "Travel & Customer Experience",
      cells: [
        "A global travel platform needed CX agents capable of nuanced, driven problem-solving beyond scripts.",
        "Implemented Socratic 'Why Training' workshops and developed emotional intelligence.",
        "Dialogue over Discussion: meaning generation through conversation and higher-order thinking.",
        "+22% CSAT increase, -18% AHT improvement, higher repeat customer loyalty."
      ]
    },
    {
      id: 4,
      title: "Content Moderation & Trust and Safety",
      cells: [
        "A social platform faced inconsistent moderation in borderline or context-sensitive cases.",
        "Built moderation teams trained in contextual empathy, cultural nuance, and ethical reasoning.",
        "Judgment Calibration: moderators develop discernment through guided reflection and peer review.",
        "+40% accuracy in nuanced cases, -25% escalation rates, improved community trust scores."
      ]
    },
    {
      id: 5,
      title: "Technology & Enterprise Support",
      cells: [
        "A SaaS client needed technical support that could move beyond scripted troubleshooting toward proactive solutions.",
        "Recruited tech talent with adaptive learning skills and taught them both cognitive flexibility and EQ.",
        "Applied Reflection: integrating technical reasoning with self-awareness and empathy.",
        "+28% first-call resolution, +15% SLA adherence, improved end-user satisfaction."
      ]
    },
    {
      id: 6,
      title: "Knowledge & Learning Services",
      cells: [
        "A global education client needed teams who could curate, validate, and synthesize learning content with insight.",
        "Built knowledge teams trained in synthesis, dialogue, and reflective core research.",
        "Learning to Learn: cultivating meta-cognition and self-belief for continual growth.",
        "+33% content accuracy, +40% research turnaround, higher learner engagement scores."
      ]
    }
  ]
};

// Business Results section data
const BusinessResultsData = {
  title: 'How Transformative Learning Drives Real Business Results',
  metrics: [
    {
      id: 1,
      value: '+22%',
      label: 'Increase in Accuracy',
      subtext: '(Content & AI Projects)'
    },
    {
      id: 2,
      value: '+18%',
      label: 'Faster Resolution Rate',
      subtext: '(CX & Travel Ops)'
    },
    {
      id: 3,
      value: '+25%',
      label: 'Higher Retention & Engagement',
      subtext: '(Across Verticals)'
    },
    {
      id: 4,
      value: '–30%',
      label: 'Reduction in QA Escalations',
      subtext: ''
    }
  ]
}

// Traditional Outsourcing section data
const TraditionalOutsourcingData = {
  title: 'The Limits of Traditional Outsourcing',
  description: "Most outsourcing models measure success in cost savings and compliance. But in judgment-heavy work — moderating content, labeling AI data, serving customers — what matters most is not just how people think, but how people think about thinking. Script-based training and rigid metrics can't produce nuanced human judgment.",
  comparison: {
    traditional: {
      title: 'Traditional BPO',
      factors: ['Process', 'Volume', 'Incentives', 'Quality Assurance']
    },
    vts: {
      title: 'VTS Model',
      factors: ['Judgment', 'Context', 'Dialogue', 'Reflection']
    }
  }
}

// Learning section data
const LearningData = {
  title: "Where Learning Meets",
  itatlicTitle: "Performance",
  subtitle: "At VTS, we've spent 20 years in India, Pakistan, and the Philippines building a new kind of learning organization — one that upgrades how people think, decide, and learn.",
  transformativeLearning: {
    title: "Transformative Learning — How We Build Smarter, More Human Teams",
    content: "Traditional training teaches people to follow scripts and processes. That works for basic tasks — but when situations get nuanced, clients need people who can think, decide, and act with insight.<br /><br />We do this blending coaching, scenario-based dialogue, and peer reflection — so that people learn through discovery, not just instruction. Over time, this rewires how teams perceive problems, make decisions, and relate to one another.<br /><br />This builds the inner capability to handle complex, judgment-heavy situations — the kind of real-world challenges where automation, AI, or rigid workflows can fail.<br /><br />The business results are simple and measurable:<li style=\"color: #fff;\">Higher first-contact resolution because agents think rather than follow scripts.</li><li style=\"color: #fff;\">Lower attrition because people feel ownership and growth in their work.</li><li style=\"color: #fff;\">Better client satisfaction because every response carries insight and creativity.</li><br /><br /><span>\"We scale quality from the inside out.\"</span>",
    image: "/Assets/ppl.jpg"
  }
}

const ctaData = {
  title: 'Judgment-Based Teams. Measurable Outcomes. Global Scale.',
  content: 'Discover how Vertical Talent Solution can help you build smarter, more adaptive teams in the Philippines.',
  btnText: 'Schedule a Strategy Call',
  hollowBTN: 'Download Our Case Study',
}

const Approach = () => {
  return (
    <>
      <div className={styles.talentWrp}>
        <Hero HeroData={HeroData} />

        {/* Business Results Section */}
        <div className={styles.businessResultsSection}>
          <h4 className={styles.businessResultsTitle}>
            {BusinessResultsData.title}
          </h4>

          <div className={styles.metricsContainer}>
            {BusinessResultsData.metrics.map((metric) => (
              <div key={metric.id} className={styles.metricItem}>
                <h3 className={styles.metricValue}>
                  {metric.value}
                </h3>
                <p className={styles.metricLabel}>
                  {metric.label}
                </p>
                <p className={styles.metricSubtext}>
                  {metric.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Traditional Outsourcing Section */}
        <div className={styles.outsourcingSection}>
          <h2 className={styles.outsourcingTitle}>
            {TraditionalOutsourcingData.title}
          </h2>

          <p className={styles.outsourcingDescription}>
            {TraditionalOutsourcingData.description}
          </p>

          <div className={styles.comparisonContainer}>
            {/* Traditional BPO Side */}
            <div className={styles.comparisonSide}>
              <div className={`${styles.factorsContainer} ${styles.first}`}>
                {TraditionalOutsourcingData.comparison.traditional.factors.map((factor, index) => (
                  <div key={index} className={`${styles.factorBadge} ${styles.traditional}`}>
                    {factor}
                  </div>
                ))}
              </div>
              <div style={{ width: '128px', display: 'flex', flexDirection: 'column', gap: '19px', alignItems: 'center' }}>
                <div className={`${styles.comparisonIcon} ${styles.traditional}`}>
                  <img src="/Assets/headset.svg" alt="Traditional BPO" width="40" height="35" />
                </div>
                <h4 className={styles.comparisonTitle}>
                  {TraditionalOutsourcingData.comparison.traditional.title}
                </h4>
              </div>
            </div>

            <div style={{ height: '156px', width: '1px', backgroundColor: '#DEE2E6' }} />

            {/* VTS Model Side */}
            <div className={styles.comparisonSide}>
              <div style={{ width: '77px', display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
                <div className={`${styles.comparisonIcon} ${styles.vts}`}>
                  <img src="/Assets/bullseye.svg" alt="VTS Model" width="40" height="35" />
                </div>
                <h4 className={styles.comparisonTitle}>
                  {TraditionalOutsourcingData.comparison.vts.title}
                </h4>
              </div>
              <div className={`${styles.factorsContainer} ${styles.second}`}>
                {TraditionalOutsourcingData.comparison.vts.factors.map((factor, index) => (
                  <div key={index} className={`${styles.factorBadge} ${styles.vts}`}>
                    {factor}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.learningSection}>
          <div className={styles.learningTitle}>
            <h3 style={{ color: '#fff' }}>{LearningData.title} <span style={{fontWeight: '400', fontStyle: 'italic'}}>{LearningData.itatlicTitle}</span> </h3>
            <p style={{ width: '820px', textAlign: 'center', color: '#fff' }}>{LearningData.subtitle}</p>
          </div>

          <div className={styles.transformativeLearning}>
            <div className={styles.text}>
              <h6>{LearningData.transformativeLearning.title}</h6>
              <p style={{color: '#fff'}} dangerouslySetInnerHTML={{ __html: LearningData.transformativeLearning.content }}></p>
            </div>
            <img style={{width: '357px', height: '372px', objectFit: 'cover', border: '6px solid white', borderRadius: '16px'}} src={LearningData.transformativeLearning.image} alt="" />
          </div>

          <div className={styles.table}>
            <h4 style={{color: '#fff', textAlign: 'left', marginBottom: '24px'}}>{CaseStudiesData.sectionTitle || 'Client Case Studies'}</h4>
            
            <div className={styles.caseStudiesSection}>
              <div className={styles.caseStudiesWrapper}>
                <table className={styles.caseStudiesTable}>
                  <thead>
                    <tr>
                      {CaseStudiesData.headers.map((header) => (
                        <th 
                          key={header.id} 
                          className={header.id === 1 ? styles.firstColumn : undefined}
                          style={{color: '#181818'}}
                        >
                          {header.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CaseStudiesData.rows.map((row) => (
                      <tr key={row.id}>
                        <td className={styles.rowTitle}>{row.title}</td>
                        {row.cells.map((cell, index) => (
                          <td style={{color: '#181818'}} key={index}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <CTA data={{...ctaData, fontSize: '36px !important'}} />
      </div>
    </>
  );
};

export default Approach;
