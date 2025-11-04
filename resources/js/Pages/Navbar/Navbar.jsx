import React, { useState, useEffect, useRef } from 'react';
import { throttle } from '../../utils/throttle';
import { debounce } from '../../utils/debounce';
import styles from './Navbar.module.scss';
import ContactUsBTN from '../../components/ContactUsButton/ContactUsBTN';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Keep track of previous scroll position
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Create the scroll handler
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're at the top (with small threshold)
      const isAtTop = currentScrollY <= 5;
      
      // Only update state if it changed
      if (isAtTop && scrolled) {
        setScrolled(false);
      } else if (!isAtTop && !scrolled) {
        setScrolled(true);
      }
      
      // Save the current scroll position
      lastScrollY.current = currentScrollY;
    };

    // Throttled version for the event listener
    const throttledHandleScroll = throttle(handleScroll, 30); // Faster response time
    
    // Debounced version to ensure final state is correct when scrolling stops
    const debouncedHandleScroll = debounce(() => {
      const isAtTop = window.scrollY <= 5;
      setScrolled(!isAtTop);
    }, 100);

    // Check initial scroll position
    handleScroll();
    
    // Use passive listener for better performance
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []); // Empty dependency array since we check current state inside handler
  
  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest(`.${styles.dropdown}`)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <>
      <div className={`${styles.navbarWrp} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.vtsLogo}>
          <img src="../Assets/VTSlogo.svg" alt="" />
        </div>
        <div className={styles.links}>
          <div className={styles.dropdown}>
            <p>Home</p>
          </div>
          <div className={styles.dropdown} onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}>
            <p>Services <img className={activeDropdown === 'services' ? styles.rotated : ''} src="/Assets/downChevron.svg" alt="" /></p>
            {activeDropdown === 'services' && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownItem}>
                  <p>Talent Recruitment</p>
                </div>
                <div className={styles.dropdownItem}>
                  <p>Team Building</p>
                </div>
                <div className={styles.dropdownItem}>
                  <p>Outsourcing Solutions</p>
                </div>
              </div>
            )}
          </div>
          <div className={styles.dropdown}>
            <p>Roles</p>
          </div>
          <div className={styles.dropdown} onClick={() => setActiveDropdown(activeDropdown === 'approach' ? null : 'approach')}>
            <p>Our Approach <img className={activeDropdown === 'approach' ? styles.rotated : ''} src="/Assets/downChevron.svg" alt="" /></p>
            {activeDropdown === 'approach' && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownItem}>
                  <p>Our Process</p>
                </div>
                <div className={styles.dropdownItem}>
                  <p>Methodology</p>
                </div>
                <div className={styles.dropdownItem}>
                  <p>Success Stories</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.btn}>
          <ContactUsBTN />
        </div>
      </div>
    </>
  );
};

export default Navbar;
