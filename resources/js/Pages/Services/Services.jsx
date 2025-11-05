import React from 'react';
import styles from './Services.module.scss';
import SolidBtn from '../../components/SolidButton/SolidBTN';
import Hero from '../../components/Hero/Hero';

const HeroData = {
  badge: 'Our Services',
  title: 'Flexible Talent Solutions for',
  italicTitle: 'Every Business Need',
  content: 'Whether you want to directly hire, compliantly manage, or have us fully manage the teams, Vertical Talent Solution provides the right model for you.',
  button: 'Build Your Global Team'
}

const ServicesData = {
  talent: [{
    title: "Talent",
    Point: [
      { id: 1, 
        title: "Direct Placement", 
        subtitle: "Your talent, sourced and delivered.", 
        content: "We provide end-to-end recruitment for long-term roles, from sourcing to assessment to onboarding. Direct placement ensures you get the right talent embedded directly into your organization, ready to perform from day one."},
      { id: 2, 
        title: "Recruitment Partnership (RPO)", 
        subtitle: "End to End talent requisition", 
        content: "Recruitment Process Outsourcing (RPO) is a partnership model where Vertical Talent Solution manages all or part of your hiring process — from sourcing and screening to offer management — as an extension of your team. Our RPO model helps companies scale efficiently and reduce hiring costs, and improve talent quality."},
    ],
    button: "Build Your Global Talent",
    image1: "../Assets/ppl.jpg",
    image2: "../Assets/ppl.jpg",
  }],
  teams: [{
    title: "Teams",
    Point: [
      { id: 1, 
        title: "Global Teams", 
        subtitle: "Your team, our infrastructure.", 
        content: "Through our embedded Hire and House service, we make it simple to build and compliantly manage teams in the Philippines. You control day-to-day management, while we provide the local entity, payroll, work visa and immigration support, and HR infrastructure to hire and house your people."},
      { id: 2, 
        title: "Managed Teams", 
        subtitle: "Your outcomes, our responsibility - Your fully managed global teams — built, developed, and scaled with VTS.", 
        content: "We design, build, and manage entire teams on your behalf. From recruitment and training to operations and performance, we take full ownership so you can focus on outcomes — while we ensure your teams deliver at scale with quality and consistency. "},
    ],
    button: "Build Your Global Talent",
    image1: "../Assets/ppl.jpg",
    image2: "../Assets/ppl.jpg",
  }]
}

const TableData = {
  headers: [
    { id: 1, title: "Service Comparison" },
    { id: 2, title: "Direct Placement" },
    { id: 3, title: "RPO (Recruitment Process Outsourcing)" },
    { id: 4, title: "Global Teams" },
    { id: 5, title: "Managed Teams" }
  ],
  rows: [
    {
      id: 1,
      title: "Hiring Model",
      cells: [
        "One-time recruitment",
        "Continuous recruitment partnership",
        "Employer of Record (EOR)",
        "Fully managed team build + operations"
      ]
    },
    {
      id: 2,
      title: "Who Manages the Team?",
      cells: [
        "Client",
        "Client",
        "Client",
        "Vertical Talent Solution"
      ]
    },
    {
      id: 3,
      title: "Who's responsible for Admin / Compliance?",
      cells: [
        "Client",
        "Client",
        "Vertical Talent Solution",
        "Vertical Talent Solution"
      ]
    },
    {
      id: 4,
      title: "Who manages IT Assets?",
      cells: [
        "Client",
        "Client",
        "Client",
        "VTS (with client input if needed)"
      ]
    },
    {
      id: 5,
      title: "Time to Hire",
      cells: [
        "2–6 weeks (per role)",
        "1–3 weeks (ongoing pipeline)",
        "2–4 weeks",
        "4–6 weeks (team-based ramp)"
      ]
    },
    {
      id: 6,
      title: "Who Drives Performance",
      cells: [
        "Client",
        "Client",
        "Client",
        "Vertical Talent Solution"
      ]
    },
    {
      id: 7,
      title: "Best For",
      cells: [
        "Direct hires with internal management",
        "Companies scaling hiring volume without expanding internal Recruitment team",
        "Entity setup without local incorporation",
        "Turnkey managed operations focused on outcomes"
      ]
    }
  ]
}

 

const ServicesContent = () => {
  return (
    <>
      <div className={styles.servicesContentWrp}>
        <div className={styles.backgroundElement3}>
          <img src="../Assets/Vector 7.png" alt="" />
        </div>
        <div className={styles.backgroundElement4}>
          <img 
            src="../Assets/service-element.png" 
            alt="Background decoration" 
            className={styles.fullWidthImage}
          />
        </div>
        <div className={styles.talent}>
          <div className={styles.talentLeft}>
            <h1 style={{ color: '#181818' }}>{ServicesData.talent[0].title}</h1>
            <hr />
            <h5>{ServicesData.talent[0].Point[0].title}</h5>
            <p style={{ color: '#181818', fontStyle: 'italic', fontSize: '24px' }}>{ServicesData.talent[0].Point[0].subtitle}</p>
            <p style={{ color: '#181818' }}>{ServicesData.talent[0].Point[0].content}</p>
            <h5>{ServicesData.talent[0].Point[1].title}</h5>
            <p style={{ color: '#181818', fontStyle: 'italic', fontSize: '24px' }}>{ServicesData.talent[0].Point[1].subtitle}</p>
            <p style={{ color: '#181818' }}>{ServicesData.talent[0].Point[1].content}</p>
            <SolidBtn style={{ marginTop: '24px', width: '100% !important' }} name={ServicesData.talent[0].button} color="#1C2D80" />
          </div>
          <div className={styles.talentRight}>
            <img
              className={styles.talentRightimg}
              src={ServicesData.talent[0].image1}
              alt="Background talent image"
            />
            <img
              className={styles.talentRightimg}
              src={ServicesData.talent[0].image1}
              alt="Foreground talent image"
            />
          </div>
        </div>
        <div className={styles.teams}>
          <div className={styles.teamsRight}>
            <img
              className={styles.teamsRightimg}
              src={ServicesData.teams[0].image1}
              alt="Background talent image"
            />
            <img
              className={styles.teamsRightimg}
              src={ServicesData.teams[0].image2}
              alt="Foreground talent image"
            />
          </div>
          <div className={styles.teamsLeft}>
            <h1 style={{ color: '#181818' }}>{ServicesData.teams[0].title}</h1>
            <hr />
            <h5>{ServicesData.teams[0].Point[0].title}</h5>
            <p style={{ color: '#181818', fontStyle: 'italic', fontSize: '24px' }}>{ServicesData.teams[0].Point[0].subtitle}</p>
            <p style={{ color: '#181818' }}>{ServicesData.teams[0].Point[0].content}</p>
            <h5>{ServicesData.teams[0].Point[1].title}</h5>
            <p style={{ color: '#181818', fontStyle: 'italic', fontSize: '24px' }}>{ServicesData.teams[0].Point[1].subtitle}</p>
            <p style={{ color: '#181818' }}>{ServicesData.teams[0].Point[1].content}</p>
            <SolidBtn style={{ marginTop: '24px', width: '100% !important' }} name={ServicesData.teams[0].button} color="#1C2D80" />
          </div>
        </div>
        <div className={styles.tableSection}>
          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  {TableData.headers.map((header) => (
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
                {TableData.rows.map((row) => (
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
    </>
  );
}

const Services = () => {
  return (
    <>
      <div className={styles.servicesWrp}>
        <Hero HeroData={HeroData} />
        <ServicesContent />
      </div>
    </>
  );
};

export default Services;
