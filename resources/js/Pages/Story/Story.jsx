import React, { useState, useEffect } from 'react';
import styles from './Story.module.scss';
import CTA from '../../components/CTA/CTA';

const HeaderData = {
  title: "Our Story",
  subtitle: "",
  description: "“Learning how to learn — not just what to do — has always been the difference.”"
};

const Story = () => {

  return (
    <>
      <div className={styles.caseWrp}>
        <div className={styles.backgroundElement}>
          <img src="../Assets/Rectangle 9533.png" alt="" />
        </div>
        <div className={styles.caseContent}>
          <h1 style={{ color: '#181818', marginBottom: '24px', width: '1272px', textAlign: 'center' }}>{HeaderData.title}</h1>
          <p className={styles.caseContentP} style={{ width: '1038px', color: '#181818', fontSize: '18px', textAlign: 'center', marginBottom: '84px' }}>
            {HeaderData.description.split('\n\n').map((paragraph, index) => (
              <React.Fragment key={index}>
                {index > 0 && <><br /><br /></>}
                {paragraph}
              </React.Fragment>
            ))}
          </p>

          <div className={styles.vidWrp}>
            <iframe className={styles.vid} width="1272" height="560" src="https://www.youtube.com/embed/gWlfmUrazFw" title="Planning a Quick Getaway? Just Ask Google" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className={styles.storyWrp}>
            <div className={styles.storyTop}>
              <p className={styles.storyText}>
                In the early 2000’s, I was working at a financial information firm in Charlottesville, Virginia. Our clients were global investment banks; our job was to help them make sense of complex data from public companies. We were already outsourcing back-office work — data entry and validation — to a team in Ahmedabad, India.
                <br /><br />
                At that time, McDonald’s and Subway had just arrived in India. The world was changing fast, and so was work,  being outsourced to emerging markets. My director asked me a question that changed my life: “Can we build a research team there — not just to process data, but to understand what the data means?”
                <br /><br />
                At the same time, I was teaching at the University of Virginia’s School of Architecture, in the Urban and Environmental Planning program. I could see the same gap from two worlds — in both academia and business — the difference between knowing and understanding. The outsourcing teams were technically skilled, but what was missing was judgment — the ability to see meaning, context, and significance behind numbers.
                <br /><br />
                So, we started something new. We began training analysts through Socratic dialogue and communal learning, encouraging them to question assumptions, not just follow instructions. From those beginnings, a learning organization was born — one that believed the secret to quality wasn’t just in “learning,” but in learning how to learn.
                <br />That principle became our north star.
              </p>
              <img className={styles.storyImg} src="/Assets/ppl.jpg" alt="" />
            </div>
            <div className={styles.storyTop}>
              <img className={styles.storyImg} src="/Assets/ppl.jpg" alt="" />
              <p className={styles.storyText}>
                In the early 2000’s, I was working at a financial information firm in Charlottesville, Virginia. Our clients were global investment banks; our job was to help them make sense of complex data from public companies. We were already outsourcing back-office work — data entry and validation — to a team in Ahmedabad, India.
                <br /><br />
                At that time, McDonald’s and Subway had just arrived in India. The world was changing fast, and so was work,  being outsourced to emerging markets. My director asked me a question that changed my life: “Can we build a research team there — not just to process data, but to understand what the data means?”
                <br /><br />
                At the same time, I was teaching at the University of Virginia’s School of Architecture, in the Urban and Environmental Planning program. I could see the same gap from two worlds — in both academia and business — the difference between knowing and understanding. The outsourcing teams were technically skilled, but what was missing was judgment — the ability to see meaning, context, and significance behind numbers.
                <br /><br />
                So, we started something new. We began training analysts through Socratic dialogue and communal learning, encouraging them to question assumptions, not just follow instructions. From those beginnings, a learning organization was born — one that believed the secret to quality wasn’t just in “learning,” but in learning how to learn.
                <br />That principle became our north star.
              </p>
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
      </div>
    </>
  );
};

export default Story; 