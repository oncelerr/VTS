import React from 'react';
import styles from './Footer.module.scss';
import ContactUsBTN from '../../components/ContactUsButton/ContactUsBTN';

const Footer = () => {
  return (
    <>
      <div className={styles.FooterWrp}>
        <div className={styles.FooterLeft}>
          <img src="/Assets/VTSlogo.svg" alt="" style={{ width: '39px', height: '32px' }} />
          <p style={{ width: '257px', margin: '48px 0 64px 0' }}>Elevating outcomes through judgment-driven teams</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <img src="/Assets/insta.svg" alt="" />
            <img src="/Assets/tweeter.svg" alt="" />
          </div>
        </div>
        <div className={styles.FooterRight}>
          <div className={styles.FooterRightLinks}>
            <p style={{ marginBottom: '16px' }}>Quick Links</p>
            <p>Home</p>
            <p>Our Aproach</p>
            <p>Services</p>
            <p>Roles</p>
          </div>
          <div className={styles.FooterRightContacts}>
            <p style={{ marginBottom: '16px' }}>Reach Out to Us</p>
            <div className={styles.FooterRightContactsEach}>
              <img style={{ width: 'auto', height: '23px' }} src="/Assets/phone.svg" alt="" />
              <p> +63 912 345 6789 | PH</p>
            </div>
            <div className={styles.FooterRightContactsEach}>
              <img style={{ width: 'auto', height: '23px' }} src="/Assets/location-dot.svg" alt="" />
              <p> 11 Brixton Street Kapitolyo, City of Pasig, Second District, National Capital Region (NCR), 1603</p>
            </div>
            <div className={styles.FooterRightContactsEach}>
              <img style={{ width: '16px', height: '23px' }} src="/Assets/envelope.svg" alt="" />
              <p> info@vts.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.FooterCopyright}>Copyright 2025 © Vertical Talent Solutions.  All rights reserved.</p>
    </>
  );
};

export default Footer;
