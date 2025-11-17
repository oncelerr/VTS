import React, { useEffect } from 'react';
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

// Industry Verticals section data
const IndustryVerticalsData = {
  title: 'Industry Verticals We Support',
  description: 'We build and manage teams for industries where judgment, insight, and compliance are critical. All roles meet at least B2 English proficiency for strong communication and global readiness, with bilingual and multilingual talent available for regional and cultural alignment.'
};

// Talent Standards section data
const TalentStandardsData = {
  title: 'Our Talent Standards',
  description: 'Together, these standards ensure that every team we build is globally ready, culturally agile, community-driven, and capable of judgment-based work at scale.',
  standards: [
    {
      id: 1,
      icon: '/Assets/headside.svg',
      title: 'B2 English Proficiency (Minimum)',
      description: 'All hires meet at least B2 English — able to handle live client conversations, documentation, and nuanced communication in US, UK, or Australian environments.'
    },
    {
      id: 2,
      icon: '/Assets/comments.svg',
      title: 'Multilingual Ready',
      description: 'Spanish, French, Japanese, Korean, and more to support global operations with cultural accuracy.'
    },
    {
      id: 3,
      icon: '/Assets/peoplearrows.svg',
      title: 'Communal-Based Training',
      description: 'We go beyond subject matter expertise training with programs rooted in peer-to-peer evaluation and understanding the WHY behind each process, policy, and community guidelines.'
    },
    {
      id: 4,
      icon: '/Assets/headheartside.svg',
      title: 'Judgment & Emotional Intelligence',
      description: 'Our teams are developed with self-reflective capacity and emotional intelligence,  to ensure higher-quality outcomes. '
    }
  ]
};

// Specialized Roles section data
const SpecializedRolesData = {
  title: 'Specialized Roles We Support',
  roleCategories: [
    {
      id: 1,
      title: 'Customer Experience',
      capabilities: 'Travel industry support, GDPR awareness, B2 English communication, escalation handling'
    },
    {
      id: 2,
      title: 'Content Moderation & Trust & Safety',
      capabilities: 'Policy enforcement, brand safety, sensitive content handling'
    },
    {
      id: 3,
      title: 'AI Annotation & Data Labeling',
      capabilities: 'Image, text, and audio annotation; critical thinking for edge cases'
    },
    {
      id: 4,
      title: 'Data Analytics',
      capabilities: 'Data cleaning, reporting, insights generation'
    },
    {
      id: 5,
      title: 'Back Office & Operations Support',
      capabilities: 'Transaction processing, research, admin support with judgment-based decision-making'
    }
  ],
  standards: [
    'B2 English minimum',
    'Multilingual available',
    'Communal-based training',
    'EQ & judgment'
  ]
};

// Our Advantage section data
const AdvantageData = {
  title: 'Our Advantage',
  description: "Each vertical combines the Philippines' proven workforce strengths with VTS's development-first model — delivering not just talent, but judgment-ready teams that outperform traditional BPO outcomes."
};

const VerticalTableData = {
  headers: [
    { id: 1, title: "Vertical" },
    { id: 2, title: "Pitch Angle" },
    { id: 3, title: "Why Philippines?" },
    { id: 4, title: "What You Get (KPI Outcomes)" }
  ],
  rows: [
    {
      id: 1,
      title: "AI & Digital Labs",
      cells: [
        "Accelerate AI innovation with judgment based teams.",
        "Strong STEM talent, English fluency, adaptive to AI workflows.",
        "+25-40% accuracy, -30% cycle time, scalable data ops."
      ]
    },
    {
      id: 2,
      title: "Data Analytics & Advanced Analytic Support",
      cells: [
        "Turn data into business-ready insights.",
        "Skilled in BI, analytics, and quantitative methods.",
        "+35% reporting accuracy, -25% decision latency."
      ]
    },
    {
      id: 3,
      title: "Travel & CX",
      cells: [
        "Build empathetic, multilingual CX teams.",
        "CX/BPO leaders, GDPR- and GDS-trained talent.",
        "+15-25% CSAT, -20% AHT, higher loyalty."
      ]
    },
    {
      id: 4,
      title: "Content Moderation & Trust & Safety",
      cells: [
        "Protect communities with cultural awareness.",
        "High empathy, resilient moderators.",
        "+30% accuracy, -40% attrition, fewer escalations."
      ]
    },
    {
      id: 5,
      title: "Technology & Enterprise Support",
      cells: [
        "Scale IT and enterprise systems globally.",
        "IT-BPO legacy, strong infrastructure.",
        "+25-35% FCR, -20% backlog, improved uptime."
      ]
    },
    {
      id: 6,
      title: "Knowledge & Learning Services",
      cells: [
        "Build knowledge ops that grow with your business.",
        "Research-oriented, educated workforce.",
        "+30% knowledge accuracy, +25% productivity."
      ]
    }
  ]
};

const RolesData = [
  {
    img: '/Assets/analytics.svg',
    title: 'Data Analytics & Advance Analytic Support',
    roles: [
      'Data Entry, Quality and Cleansing Specialists',
      'Business Data Analytics (Reporting Specialists and Dashboard Developers)',
      'RPA Exception Handlers and  Process Automation Analysts',
      'Data Scientists-in-Training',
      'Predictive Modeling Associates',
    ]
  },
  {
    img: '/Assets/ai.svg',
    title: 'AI & Digital Labs',
    roles: [
      'Data Annotation & Labeling Specialists (B2 English minimum)',
      'Quality Reviewers for AI training',
      'Prompt Evaluation & AI Feedback Assistants',
      'Data Analytics & Reporting Teams',
    ]
  },
  {
    img: '/Assets/airplane.svg',
    title: 'Travel & Customer Experience',
    roles: [
      'Travel Industry Specialists with B2 English and GDPR background',
      'Bilingual & Multilingual Customer Success Associates (Spanish, French, Japanese, Korean, and more)',
      'Escalation & Retention Specialists trained for empathy-driven judgment',
      'Technical Support Advisors for complex problem-solving',
    ]
  },
  {
    img: '/Assets/cellphone.svg',
    title: 'Social Platforms & Online Communities',
    roles: [
      'Content Moderation Analysts with B2 English and cultural fluency',
      'Trust & Safety Reviewers across multiple regions and languages',
      'Fraud Detection & Risk Specialists',
    ]
  },
  {
    img: '/Assets/cpu.svg',
    title: 'Technology & Enterprise Support',
    roles: [
      'Technical Support Specialists with B2 English proficiency',
      'Compliance Support Associates',
      'Knowledge Base Curators',
    ]
  },
  {
    img: '/Assets/brain.svg',
    title: 'Knowledge & Learning Services',
    roles: [
      'Research Assistants with B2 English minimum',
      'Training & Learning Support Coordinators',
      'Instructional Content Specialists',
    ]
  },
]

const Roles = () => {
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  return (
    <>
      <div className={styles.rolesWrp}>
        <Hero HeroData={HeroData} />
        <div className={styles.rolesSect}>
          <div className={styles.rolesSectTop}>
            <div className={styles.rolesSectTopLeft}>
              <h3>{IndustryVerticalsData.title}</h3>
              <p style={{ color: '#181818' }}>{IndustryVerticalsData.description}</p>
            </div>
            <div className={styles.rolesSectTopRight}>
              {RolesData.map((roleCategory, categoryIndex) => (
                <div key={categoryIndex} className={styles.rolesDropDown} style={{ marginBottom: '16px' }}>
                  <div
                    style={{ display: 'flex', gap: '16px', padding: '16px 22px', cursor: 'pointer' }}
                    onClick={() => setActiveDropdown(activeDropdown === categoryIndex ? null : categoryIndex)}
                  >
                    <img style={{ width: '24px' }} src={roleCategory.img} alt="" />
                    <p style={{ color: '#181818' }}>{roleCategory.title}</p>
                    <img
                      style={{
                        marginLeft: 'auto',
                        transform: activeDropdown === categoryIndex ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                      src="/Assets/downChevronBlack.svg"
                      alt=""
                    />
                  </div>
                  <div style={{ width: '100%', height: '1px', backgroundColor: '#fff', margin: '0', padding: '0' }} />
                  <div className={`${styles.dropdownContent} ${activeDropdown === categoryIndex ? styles.dropdownContentActive : ''}`}>
                    <div style={{ padding: '22px 50px' }}>
                      <ul>
                        {roleCategory.roles.map((role, roleIndex) => (
                          <li key={roleIndex}>{role}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.rolesSectBottom}>
            <h3>{TalentStandardsData.title}</h3>
            <p style={{ color: '#181818', width: '700px', textAlign: 'center', marginBottom: '48px', marginTop: '16px' }}>{TalentStandardsData.description}</p>
            <div className={styles.rolesSectBottomContent}>
              {TalentStandardsData.standards.map((standard) => (
                <div key={standard.id} style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '48px 20px', backgroundColor: '#0B1233', borderRadius: '8px', maxWidth: '306px' }}>
                  <img style={{ maxHeight: '40px' }} src={standard.icon} alt="" />
                  <p style={{ fontSize: '24px', fontWeight: '700', textAlign: 'center' }}>{standard.title}</p>
                  <p style={{ fontSize: '14px', fontWeight: '400', textAlign: 'center' }}>{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#0B1233', padding: '60px 0' }}>
          <h3 style={{ color: '#fff', marginBottom: '40px' }}>{SpecializedRolesData.title}</h3>
          
          <div style={{ width: '90%', maxWidth: '1184px', backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', display: 'flex' }}>
            {/* Left side: Role Categories and Key Capabilities */}
            <div style={{ flex: '3', display: 'flex', flexDirection: 'column', width: '75%' }}>
              {/* Table Header */}
              <div style={{ display: 'flex', backgroundColor: '#ADB5BD' }}>
                <div style={{ flex: '1.5', padding: '16px 24px', fontWeight: '700', fontSize: '18px', fontFamily: 'Helvetica Neue' }}>Role Category</div>
                <div style={{ flex: '2', padding: '16px 24px', fontWeight: '700', fontSize: '18px', fontFamily: 'Helvetica Neue' }}>Key Capabilities</div>
              </div>
              
              {/* Table Rows */}
              {SpecializedRolesData.roleCategories.map((role, index) => (
                <div key={role.id} style={{ display: 'flex' }}>
                  <div style={{ 
                    flex: '1.5', 
                    padding: '16px 24px', 
                    backgroundColor: index % 2 === 0 ? '#CED4DA' : '#DEE2E6', 
                    fontWeight: '700', 
                    fontSize: '16px', 
                    fontFamily: 'Helvetica Neue' 
                  }}>
                    {role.title}
                  </div>
                  <div style={{ 
                    flex: '2', 
                    padding: '16px 24px', 
                    backgroundColor: index % 2 === 0 ? '#CED4DA' : '#DEE2E6', 
                    fontWeight: '400', 
                    fontSize: '16px', 
                    fontFamily: 'Helvetica Neue' 
                  }}>
                    {role.capabilities}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right side: Standards column */}
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', width: '25%'}}>
              {/* Standards Header */}
              <div style={{ padding: '16px 24px', fontWeight: '700', fontSize: '18px', fontFamily: 'Helvetica Neue', backgroundColor: '#ADB5BD' }}>Standards</div>
              
              {/* Standards Content - Single cell spanning all rows */}
              <div style={{ flex: '1', padding: '16px 24px', backgroundColor: '#CED4DA', height: '100%' }}>
                <ul style={{ height: '100%', listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  {SpecializedRolesData.standards.map((standard, index) => (
                    <li key={index}>{standard}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', padding: '60px 0' }}>
          <h3 style={{ color: '#181818', marginBottom: '16px' }}>{AdvantageData.title}</h3>
          <p style={{ color: '#181818', marginBottom: '32px' , textAlign: 'center', maxWidth: '793px', fontSize : '16px'}}>{AdvantageData.description}</p>
          
          <div className={styles.tableSection}>
            <div className={styles.tableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    {VerticalTableData.headers.map((header) => (
                      <th 
                        key={header.id} 
                        className={header.id === 1 ? styles.firstColumn : undefined}
                      >
                        {header.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {VerticalTableData.rows.map((row) => (
                    <tr key={row.id}>
                      <td className={styles.rowTitle}>{row.title}</td>
                      {row.cells.map((cell, index) => (
                        <td key={index}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roles;
