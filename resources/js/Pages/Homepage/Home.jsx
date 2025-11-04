import React from 'react';
import styles from './Home.module.scss';
import SolidBtn from '../../components/SolidButton/SolidBTN';
import HollowBtn from '../../components/HollowButton/HollowBTN';
import HollowBadge from '../../components/HollowBadge/HollowBadge';

const HeroData = {
  name: "Where Human Intelligence",
  span: "Powers Digital Performance",
  p: "From recruitment to operational excellence, we help you build AI-ready, judgment-driven teams in the Philippines so you can scale with quality, agility, and innovation — fast.",
  solidBtn: "Start Building Your Team",
  hollowBtn: "Learn How We Work",
  img1: "../Assets/ppl.jpg",
}

const MarqueeImgs = [
  { id: 1, img: "../Assets/brandlog.png" },
  { id: 2, img: "../Assets/brandlog1.png" },
  { id: 3, img: "../Assets/brandlog2.png" },
  { id: 4, img: "../Assets/brandlog3.png" },
  { id: 5, img: "../Assets/brandlog4.png" },
  { id: 6, img: "../Assets/brandlog5.png" },
  { id: 7, img: "../Assets/brandlog6.png" },
  { id: 8, img: "../Assets/brandlog7.png" },
]

const AchievementsData = [
  { id: 1, title: "3x Fast", subtitle: "Placement Speed" },
  { id: 2, title: "5000+", subtitle: "Digital-Ready Hires" },
  { id: 3, title: "Top 1%", subtitle: "BPOs Trust Us" },
  { id: 4, title: "20%", subtitle: "Retention Rates" },
]

const AboutData = {
  title: "Who",
  span: "we are.",
  subtitle: "Vertical Talent Solution is a Philippines-based talent solutions firm with over 20 years of experience helping startups, scaling and multinational corporations build high-performing teams. <br /><br />We support diverse industries—including E-commerce, Financial Technology, Social Media and Digital Communities, Trust and Safety,  Travel and Mobility, and Education Technology—across the US, Europe, Australia, and delivering talent solutions that drive growth and global impact.",
}

const AboutPSP = {
  titleBelieve: "What We Believe - Relentless Pursuit of Impact with Depth.",
  contentBelieve: "We believe every unit of work should contain not just accuracy, quantity, and efficiency but higher insight, empathy, and alignment with business outcomes. By fixing the design at the micro level, we unlock impact at the macro level — so that every interaction isn’t just handled, it delivers value. Every single unit of work — every call answered,  ticket resolved, content moderation tagged, or AI response annotated — carries within it the design of the entire system: training, management, alignment, and culture. <br /><br /> ”We don’t just scale unit of work — we maximize the impact of every work unit.”",
  titleProblem: "The Problem",
  contentProblem: "Traditional outsourcing optimizes for cost and volume, not necessarily value. The result? Units of work — calls, tickets, transactions, moderation or AI annotations — are handled transactionally, not with the required standard to make meaningful impact.",
  titleSolution: "The Solution",
  contentSolution: "We fix outsourcing at the design level. We embed quality, efficiency, and judgment into every unit of work, so each interaction isn’t just processed — it delivers business impact. From the micro (a single response) to the macro (scaling thousands of interactions), we ensure work reflects value, not just volume.",
  titlePromise: "The Promise",
  contentPromise: "Relentless pursuit of measurable impact at scale with depth.",
}

const CardData = [
  { id: 1, title: "World-Class Talent Access", subtitle: "We are a premier recruiter to the top 1% of BPO Companies by volume. We bring this capacity to you, no matter how small or large your hiring needs. This means we can source the right candidates at the right market price — talent capable of judgment-based, meaning-driven, impact-focused work. A game changer." },
  { id: 2, title: "Specialized Roles for Maximum Impact", subtitle: "With 20+ years of experience building global teams in India, Pakistan, and Philippines, we focus on functions and digitized industries where we can deliver the greatest impact and business outcomes. Specialization amplifies value." },
  { id: 3, title: "Training Built for Judgment & Quality", subtitle: "With 20+ years of combined training experience, utilizing socratic methods, focusing on the WHY, and communal validation of subject matter expertise, we’ve designed programs that directly address quality gaps and decision-making issues from day one, ensuring every unit of work delivers impact." },
]

const CollageImgs = [
  { id: 1, img: "../Assets/ppl.jpg" },
  { id: 2, img: "../Assets/ppl.jpg" },
  { id: 3, img: "../Assets/ppl.jpg" },
  { id: 4, img: "../Assets/ppl.jpg" },
]

const TopTalentData = {
  title: "Top Talent. Focused Roles. Training That Delivers. Impact at Scale.",
  subtitle: "Numbers That Matter",
  checks: ["We can scale teams from 0 to 500+ in under 4 months.", "Average conversion rate of 50% from endorsements to hire.", "98% client satisfaction rate."],
  button: "See How We Scale Teams"
}

const VTSResultData = {
  top: [{
    title: "Quality Results: Proven Performance",
    titleItalic: "Beyond the Market",
    content: "We don’t just scale teams—we ensure they deliver lasting value. By combining precision recruitment with operational enablement, we consistently outperform the market across every key measure of global team success.<br/><br/> The Impact: More stability, less cost, and stronger ROI for global companies building in the Philippines.",
    proof: "See the numbers that matter to your business.",
    button: "Request a Case Study",
    grid: [
      { id: 1, title: "25%", subtitle: "Higher Retention", content: "Teams stay longer, lowering attrition costs and ensuring continuity." },
      { id: 2, title: "20%", subtitle: "Faster Ramp-Up", content: "New hires reach full productivity quicker than average." },
      { id: 3, title: "35%", subtitle: "Stronger Conversion Rates", content: "More candidates progress from endorsement to hire." },
      { id: 4, title: "95%", subtitle: "Superior Client Expansion", content: "Most clients grow headcount within 12 months." },
      { id: 5, title: "+15", subtitle: "Higher Satisfaction (NPS)", content: "Client NPS scores exceed industry benchmarks." },
    ],
  }],
  bottom: [{
    img: "/Assets/ppl.jpg",
    title: "The Cost Advantage:",
    titleItalic: "70% Savings, 100% Performance",
    p: "Scaling global teams isn’t just about finding the right talent—it’s about maximizing value. By building teams in the Philippines with us, you unlock significant cost advantages without sacrificing performance.",
    bulletTitle: "Why Clients Choose Us",
    bullets: [
      "Up to 70% Lower Salary Costs compared to onshore markets in the U.S., U.K., and Australia.",
      "Higher ROI per Hire – Our people deliver 25% stronger operational results, giving you more value per dollar.",
      "Efficiency Beyond Payroll – Reduced attrition, fewer errors, and faster resolution times mean you save on hidden costs that drain most operations.",
    ],
    closingRemarks: "The outcome: teams that cost less, perform better, and scale faster.",
    followUpQuestion: "Ready to reduce costs and increase performance?"
  }],
  button: "Start Building Your Team"
}


const Hero = () => {
  return (
    <>
      <div className={styles.heroWrp}>
        <div className={styles.backgroundElement}>
          <img src="../Assets/Rectangle 9523.png" alt="" />
        </div>
        <div className={styles.backgroundElement2}>
          <img src="../Assets/Background Shape.png" alt="" />
        </div>
        <div className={styles.backgroundElement3}>
          <img src="../Assets/Vector 6.png" alt="" />
        </div>
        <div className={styles.backgroundElement5}>
          <img src="../Assets/Rectangle 9528.png" alt="" />
        </div>
        <div className={styles.left}>
          <h1 className={styles.h1}>{HeroData.name} <span className={styles.span}>{HeroData.span}</span></h1>
          <p className={styles.p}>{HeroData.p}</p>
          <div className={styles.btns}>
            <SolidBtn name={HeroData.solidBtn} path={'/'} color="#1C2D80" />
            <HollowBtn name={HeroData.hollowBtn} path={'/'} color={'#fff'}/>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgs}>
            <img className={styles.img1} src={HeroData.img1} alt="" />
            <img className={styles.img2} src={HeroData.img1} alt="" />
          </div>
          <img className={styles.img3} src={HeroData.img1} alt="" />
          <div className={styles.imgs}>
            <img className={styles.img2} src={HeroData.img1} alt="" />
            <img className={styles.img1} src={HeroData.img1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

const Marquee = () => {
  const duplicatedImages = [...MarqueeImgs, ...MarqueeImgs];

  return (
    <>
      <div className={styles.marqueeWrp}>
        <p className={styles.marqueeP}>Trusted By:</p>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeImg}>
            {duplicatedImages.map((item, index) => (
              <img key={`${item.id}-${index}`} src={item.img} alt={`Partner ${item.id}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Achievements = () => {
  return (
    <>
      <div className={styles.achievementsWrp}>
        <div className={styles.achsection}>
          <h1 className={styles.achh1}>{AchievementsData[0].title}</h1>
          <p className={styles.achp}>{AchievementsData[0].subtitle}</p>
        </div>
        <div className={styles.vr}></div>
        <div className={styles.achsection}>
          <h1 className={styles.achh1}>{AchievementsData[1].title}</h1>
          <p className={styles.achp}>{AchievementsData[1].subtitle}</p>
        </div>
        <div className={styles.vr}></div>
        <div className={styles.achsection}>
          <h1 className={styles.achh1}>{AchievementsData[2].title}</h1>
          <p className={styles.achp}>{AchievementsData[2].subtitle}</p>
        </div>
        <div className={styles.vr}></div>
        <div className={styles.achsection}>
          <h1 className={styles.achh1}>{AchievementsData[3].title}</h1>
          <p c>{AchievementsData[3].subtitle}</p>
        </div>
        <div className={styles.vr}></div>
      </div>
    </>
  );
};

const AboutUs = () => {
  return (
    <>
      <div className={styles.aboutWrp}>
        <h1>{AboutData.title} <span className={styles.span}>{AboutData.span}</span></h1>
        <p className={styles.aboutp} dangerouslySetInnerHTML={{ __html: AboutData.subtitle }}></p>
        <HollowBtn name={HeroData.hollowBtn} path={'/'} color={'#fff'}/>
      </div>
    </>
  );
};

const VideoSect = () => {
  return (
    <>
      <div className={styles.vidWrp}>
        <div className={styles.backgroundElement4}>
          <img src="../Assets/SlantedRectangle.png" alt="" />
        </div>
        <iframe className={styles.vid} width="1272" height="560" src="https://www.youtube.com/embed/gWlfmUrazFw" title="Planning a Quick Getaway? Just Ask Google" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
};

const ThePSP = () => {
  return (
    <>
      <div className={styles.pspWrp}>
        <div className={styles.pspDivider}>
          <h2>{AboutPSP.titleBelieve}</h2>
          <p className={styles.pspP} dangerouslySetInnerHTML={{ __html: AboutPSP.contentBelieve }}></p>
        </div>
        <div className={styles.pspVr}>

        </div>
        <div className={styles.pspDivider}>
          <div className={styles.psp}>
            <p className={styles.pspPT}>{AboutPSP.titleProblem}</p>
            <p className={styles.pspPP}>{AboutPSP.contentProblem}</p>
          </div>
          <div className={styles.psp}>
            <p className={styles.pspPT}>{AboutPSP.titleSolution}</p>
            <p className={styles.pspPP}>{AboutPSP.contentSolution}</p>
          </div>
          <div className={styles.psp}>
            <p className={styles.pspPT}>{AboutPSP.titlePromise}</p>
            <p className={styles.pspPP}>{AboutPSP.contentPromise}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const WhyUs = () => {
  return (
    <>
      <div className={styles.whyUsWrp}>
        <div className={styles.whyUsTop}>
          <HollowBadge name="Why Choose Us" color="#213699" />
          <h3>Why Us – <span className={styles.whyUsSpan}>Our Secret Sauce</span></h3>
          <p className={styles.whyUsP}>We make impact measurable and practical by fixing remote work  at its design.</p>
        </div>
        <div className={styles.whyUsBottom}>
          <div className={styles.whyUsCard}>
            <img src="/Assets/users.svg" alt="" />
            <p className={styles.whyUsCardTitle}>{CardData[0].title}</p>
            <p className={styles.whyUsCardP}>{CardData[0].subtitle}</p>
          </div>
          <div className={styles.whyUsCard}>
            <img src="/Assets/users.svg" alt="" />
            <p className={styles.whyUsCardTitle}>{CardData[1].title}</p>
            <p className={styles.whyUsCardP}>{CardData[1].subtitle}</p>
          </div>
          <div className={styles.whyUsCard}>
            <img src="/Assets/users.svg" alt="" />
            <p className={styles.whyUsCardTitle}>{CardData[2].title}</p>
            <p className={styles.whyUsCardP}>{CardData[2].subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const TopTalent = () => {
  return (
    <>
      <div className={styles.tTWrp}>
        <div className={styles.tTLeft}>
          <div className={styles.Square} />
          <div className={styles.collage}>
            <div className={styles.collageTop}>
              <img className={styles.collageimg} src={CollageImgs[0].img} alt="" />
              <img className={styles.collageimg} src={CollageImgs[1].img} alt="" />
            </div>
            <div className={styles.collageBottom}>
              <img className={styles.collageimg} src={CollageImgs[2].img} alt="" />
              <img className={styles.collageimg} src={CollageImgs[3].img} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.tTRight}>
          <h3>{TopTalentData.title}</h3>
          <h5>{TopTalentData.subtitle}</h5>
          <div>
            <p className={styles.tTRightp}><img src="/Assets/check-circle.svg" alt="" />{TopTalentData.checks[0]}</p>
            <p className={styles.tTRightp}><img src="/Assets/check-circle.svg" alt="" />{TopTalentData.checks[1]}</p>
            <p className={styles.tTRightp}><img src="/Assets/check-circle.svg" alt="" />{TopTalentData.checks[2]}</p>
            <SolidBtn style={{ marginTop: "48px" }} name={TopTalentData.button} path={'/'} color="#181818" />
          </div>
        </div>
      </div>
    </>
  );
};

const VTSResult = () => {
  return (
    <>
      <div className={styles.vtsResultWrp}>
        <div className={styles.backgroundElement6}>
          <img src="../Assets/Rectangle 9524.png" alt="" />
        </div>
        <div className={styles.backgroundElement7}>
          <img src="../Assets/Rectangle 9525.png" alt="" />
        </div>
        <div className={styles.vtsResultTop}>
          <div className={styles.vtsResultTopLeft}>
            <h3 style={{ color: "#fff" }}>{VTSResultData.top[0].title} <span className={styles.vtsResultTopLeftItalic}>{VTSResultData.top[0].titleItalic}</span></h3>
            <p dangerouslySetInnerHTML={{ __html: VTSResultData.top[0].content }}></p><p className={styles.vtsResultTopLeftItalic}>{VTSResultData.top[0].proof}</p>
            <SolidBtn name={VTSResultData.top[0].button} path={'/'} color="#213699" />
          </div>
          <div className={styles.vtsResultTopRight}>
            <div className={styles.vtsResultTopRightTop}>
              <div className={styles.vtsResultTopRightTopCell}>
                <h3 style={{ color: '#fff' }}>{VTSResultData.top[0].grid[0].title}</h3>
                <p style={{ fontWeight: '500' }}>{VTSResultData.top[0].grid[0].subtitle}</p>
                <p style={{ fontSize: '14px' }}>{VTSResultData.top[0].grid[0].content}</p>
              </div>
              <div className={styles.vtsResultTopRightTopCell}>
                <h3 style={{ color: '#fff' }}>{VTSResultData.top[0].grid[1].title}</h3>
                <p style={{ fontWeight: '500' }}>{VTSResultData.top[0].grid[1].subtitle}</p>
                <p style={{ fontSize: '14px' }}>{VTSResultData.top[0].grid[1].content}</p>
              </div>
              <div className={styles.vtsResultTopRightTopCell}>
                <h3 style={{ color: '#fff' }}>{VTSResultData.top[0].grid[2].title}</h3>
                <p style={{ fontWeight: '500' }}>{VTSResultData.top[0].grid[2].subtitle}</p>
                <p style={{ fontSize: '14px' }}>{VTSResultData.top[0].grid[2].content}</p>
              </div>
            </div>
            <div className={styles.vtsResultTopRightBottom}>
              <div className={styles.vtsResultTopRightBottomCell}>
                <h3 style={{ color: '#fff' }}>{VTSResultData.top[0].grid[3].title}</h3>
                <p style={{ fontWeight: '500' }}>{VTSResultData.top[0].grid[3].subtitle}</p>
                <p style={{ fontSize: '14px' }}>{VTSResultData.top[0].grid[3].content}</p>
              </div>
              <div className={styles.vtsResultTopRightBottomCell}>
                <h3 style={{ color: '#fff' }}>{VTSResultData.top[0].grid[4].title}</h3>
                <p style={{ fontWeight: '500' }}>{VTSResultData.top[0].grid[4].subtitle}</p>
                <p style={{ fontSize: '14px' }}>{VTSResultData.top[0].grid[4].content}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.vtsResultHr} />
        <div className={styles.vtsResultBottom}>
          <div className={styles.vtsResultBottomLeft}>
            <img style={{ width: '441px', height: '483px', objectFit: 'cover', borderRadius: '16px', border: '1px solid #fff' }} src={VTSResultData.bottom[0].img} alt="" />
          </div>
          <div className={styles.vtsResultBottomRight}>
            <h3 style={{ color: '#fff' }}>{VTSResultData.bottom[0].title}<span style={{ color: '#fff', fontWeight: '300', fontStyle: 'italic' }}> {VTSResultData.bottom[0].titleItalic}</span></h3>
            <p style={{ color: '#fff' }}>{VTSResultData.bottom[0].p}</p>
            <h6>{VTSResultData.bottom[0].bulletTitle}</h6>
            <ul style={{ paddingLeft: '20px' }}>
              {VTSResultData.bottom[0].bullets.map((bullet, index) => (
                <li className={styles.vtsResultbullets} key={index} >{bullet}</li>
              ))}
            </ul>
            <p>{VTSResultData.bottom[0].closingRemarks}</p>
            <p style={{ fontStyle: 'italic' }}>{VTSResultData.bottom[0].followUpQuestion}</p>
            <SolidBtn name={VTSResultData.button} path={'/'} color="#213699" />
          </div>
        </div>
      </div>
    </>
  );
};

const CTA = () => {
  return (
    <>
      <div className={styles.CTAWrp}>
        <HollowBadge name="The Future of Hiring Starts Here" color="#213699" />
        <h1 style={{ color: '#181818', textAlign: 'center', width: '947px', }}>Ready to build your <span style={{ color: '#111B4D' }}>global team</span> <span style={{ fontWeight: '300', fontStyle: 'italic' }}>in the Philippines?</span></h1>
        <div className={styles.CTAButtonWrp}>
          <SolidBtn name="Book a Call" path={'/'} color="#213699" />
          <HollowBtn name="Request a Proposal" path={'/'} color="#181818" />
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <div className={styles.homeWrp}>
        <Hero />
        <Marquee />
        <Achievements />
        <AboutUs />
        <VideoSect />
        <ThePSP />
        <WhyUs />
        <TopTalent />
        <VTSResult />
        <CTA />
      </div>
    </>
  );
};

export default Home;
