import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.scss';
import ContactUsBTN from '../../components/ContactUsButton/ContactUsBTN';

const FooterData = {
  logo: {
    src: '/Assets/VTSlogo.svg',
    alt: 'VTS Logo',
    width: '39px',
    height: '32px'
  },
  tagline: 'Elevating outcomes through judgment-driven teams',
  socialLinks: [
    { id: 1, src: '/Assets/insta.svg', alt: 'Instagram', url: '#' },
    { id: 2, src: '/Assets/tweeter.svg', alt: 'Twitter', url: '#' }
  ],
  quickLinks: {
    title: 'Quick Links',
    links: [
      { id: 1, text: 'Home', url: '/' },
      { id: 2, text: 'Our Approach', url: '/our-approach' },
      { id: 3, text: 'Services', url: '/services' },
      { id: 4, text: 'Roles', url: '/roles' },
      { id: 5, text: 'CMS', url: '/cms' }
    ]
  },
  contact: {
    title: 'Reach Out to Us',
    details: [
      {
        id: 1,
        icon: '/Assets/phone.svg',
        text: '+63 912 345 6789 | PH',
        type: 'phone'
      },
      {
        id: 2,
        icon: '/Assets/location-dot.svg',
        text: '11 Brixton Street Kapitolyo, City of Pasig, Second District, National Capital Region (NCR), 1603',
        type: 'address'
      },
      {
        id: 3,
        icon: '/Assets/envelope.svg',
        text: 'info@vts.com',
        type: 'email'
      }
    ]
  },
  copyright: 'Copyright 2025 © Vertical Talent Solutions. All rights reserved.'
}

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.FooterWrp}>
        <div className={styles.FooterLeft}>
          <img 
            src={FooterData.logo.src} 
            alt={FooterData.logo.alt} 
            style={{ width: FooterData.logo.width, height: FooterData.logo.height }} 
          />
          <p style={{ width: '257px', margin: '48px 0 64px 0' }}>{FooterData.tagline}</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {FooterData.socialLinks.map((social) => (
              <img key={social.id} src={social.src} alt={social.alt} />
            ))}
          </div>
        </div>
        <div className={styles.FooterRight}>
          <div className={styles.FooterRightLinks}>
            <p style={{ marginBottom: '16px' }}>{FooterData.quickLinks.title}</p>
            {FooterData.quickLinks.links.map((link) => (
              <p onClick={() => navigate(link.url)} key={link.id} style={{ cursor: 'pointer' }}>{link.text}</p>
            ))}
          </div>
          <div className={styles.FooterRightContacts}>
            <p style={{ marginBottom: '16px' }}>{FooterData.contact.title}</p>
            {FooterData.contact.details.map((detail) => (
              <div key={detail.id} className={styles.FooterRightContactsEach}>
                <img 
                  style={{ 
                    width: detail.type === 'email' ? '16px' : 'auto', 
                    height: '23px' 
                  }} 
                  src={detail.icon} 
                  alt="" 
                />
                <p>{detail.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className={styles.FooterCopyright}>{FooterData.copyright}</p>
    </>
  );
};

export default Footer;
