import React from 'react';
import SolidBtn from '../SolidButton/SolidBTN';
import HollowBtn from '../HollowButton/HollowBTN';
import styles from './CTA.module.scss';
import HollowBadge from '../HollowBadge/HollowBadge';

const CTA = ({ data }) => {
  return (
    <>
      <div className={styles.ctaWrp}>
        <div className={styles.ctaContent}>
          {data.badge && <HollowBadge style={{marginBottom: '32px'}} name={data.badge} color={'#2C48CC'}/>}
          <h3 style={{color:'white', fontSize: data.fontSize || '48px !important'}}>{data.title} {data.titleItalic && <span style={{fontStyle: 'italic', fontWeight: '400'}}>{data.titleItalic}</span>}</h3>
          <p>{data.content}</p>
          <div style={{display: 'flex', gap: '16px'}}>
            <SolidBtn name={data.btnText} />
            {data.hollowBTN && <HollowBtn name={data.hollowBTN} color={'#fff'} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
