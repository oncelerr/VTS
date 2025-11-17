import React, { useState, useEffect, useRef } from 'react';
import { throttle } from '../../utils/throttle';
import { debounce } from '../../utils/debounce';
import styles from './Navbar.module.scss';
import ContactUsBTN from '../../components/ContactUsButton/ContactUsBTN';
import { useNavigate, useLocation } from 'react-router-dom';

const NavbarData = {
  logo: {
    src: '../Assets/VTSlogo.svg',
    alt: 'VTS Logo'
  },
  navigation: [
    {
      id: 1,
      text: 'Home',
      url: '/',
      type: 'link'
    },
    {
      id: 2,
      text: 'Services',
      url: '/services',
      type: 'dropdown',
      dropdownItems: [
        { id: 1, text: 'Talent', url: '/talent' },
        { id: 2, text: 'Teams', url: '/teams' }
      ]
    },
    {
      id: 3,
      text: 'Roles',
      url: '/roles',
      type: 'link'
    },
    {
      id: 4,
      text: 'Our Approach',
      url: '/our-approach',
      type: 'dropdown',
      dropdownItems: [
        { id: 1, text: 'Judgment Model', url: '/judgement-model' },
        { id: 2, text: 'Case Study', url: '/case-study' }
      ]
    }
  ]
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Timeout reference for hover delay
  const hoverTimeoutRef = useRef(null);

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
  
  // Smooth scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);
  
  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest(`.${styles.dropdown}`)) {
        setActiveDropdown(null);
      }
    };
    
    // Clean up any hover timeouts when component unmounts
    const cleanupTimeouts = () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      cleanupTimeouts();
    };
  }, [activeDropdown]);

  return (
    <>
      <div className={`${styles.navbarWrp} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.vtsLogo}>
          <img src={NavbarData.logo.src} alt={NavbarData.logo.alt} />
        </div>
        <div className={styles.links}>
          <div className={styles.dropdown} onClick={() => navigate('/')}>
            <p>Home</p>
          </div>
          <div 
            className={styles.dropdown} 
            onMouseEnter={() => {
              // Clear any existing timeout
              if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
              }
              setHoveredDropdown('services');
            }}
            onMouseLeave={() => {
              // Set a small delay before closing to make the interaction smoother
              hoverTimeoutRef.current = setTimeout(() => {
                if (hoveredDropdown === 'services') {
                  setHoveredDropdown(null);
                }
              }, 100);
            }}
          >
            <p>
              <span onClick={(e) => {
                e.stopPropagation();
                navigate('/services');
              }}>Services</span> <img className={(activeDropdown === 'services' || hoveredDropdown === 'services') ? styles.rotated : ''} src="/Assets/downChevron.svg" alt="" />
            </p>
            {(activeDropdown === 'services' || hoveredDropdown === 'services') && (
              <div 
                className={styles.dropdownMenu}
                onMouseEnter={() => {
                  // Clear timeout when mouse enters dropdown menu
                  if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current);
                  }
                  setHoveredDropdown('services');
                }}
                onMouseLeave={() => {
                  // Set timeout when mouse leaves dropdown menu
                  hoverTimeoutRef.current = setTimeout(() => {
                    if (hoveredDropdown === 'services' && activeDropdown !== 'services') {
                      setHoveredDropdown(null);
                    }
                  }, 100);
                }}
              >
                <div className={styles.dropdownItem}> 
                  <p onClick={(e) => {
                    e.stopPropagation();
                    navigate('/talent');
                  }}>Talent</p>
                </div>
                <div className={styles.dropdownItem}>
                  <p onClick={(e) => {
                    e.stopPropagation();
                    navigate('/teams');
                  }}>Teams</p>
                </div>
              </div>
            )}
          </div>
          <div onClick={(e) => {
            e.stopPropagation();
            navigate('/roles');
          }} className={styles.dropdown}>
            <p>Roles</p>
          </div>
          <div 
            className={styles.dropdown} 
            onMouseEnter={() => {
              // Clear any existing timeout
              if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
              }
              setHoveredDropdown('approach');
            }}
            onMouseLeave={() => {
              // Set a small delay before closing to make the interaction smoother
              hoverTimeoutRef.current = setTimeout(() => {
                if (hoveredDropdown === 'approach') {
                  setHoveredDropdown(null);
                }
              }, 100);
            }}
          >
            <p onClick={(e) => {
              e.stopPropagation();
              navigate('/approach');
            }}>Our Approach <img className={(activeDropdown === 'approach' || hoveredDropdown === 'approach') ? styles.rotated : ''} src="/Assets/downChevron.svg" alt="" /></p>
            {(activeDropdown === 'approach' || hoveredDropdown === 'approach') && (
              <div 
                className={styles.dropdownMenu}
                onMouseEnter={() => {
                  // Clear timeout when mouse enters dropdown menu
                  if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current);
                  }
                  setHoveredDropdown('approach');
                }}
                onMouseLeave={() => {
                  // Set timeout when mouse leaves dropdown menu
                  hoverTimeoutRef.current = setTimeout(() => {
                    if (hoveredDropdown === 'approach' && activeDropdown !== 'approach') {
                      setHoveredDropdown(null);
                    }
                  }, 100);
                }}
              >
                <div className={styles.dropdownItem}>
                  <p onClick={(e) => {
                    e.stopPropagation();
                    navigate('/judgement-model');
                  }}>Judgement Model</p>
                </div>
                <div className={styles.dropdownItem}>
                  <p onClick={(e) => {
                    e.stopPropagation();
                    navigate('/case-study');
                  }}>Case Study</p>
                </div>
                <div className={styles.dropdownItem}>
                  <p onClick={(e) => {
                    e.stopPropagation();
                    navigate('/our-story');
                  }}>Our Story</p>
                </div>
                <div className={styles.dropdownItem}>
                  <p onClick={(e) => {
                    e.stopPropagation();
                    navigate('/our-team');
                  }}>Our Team</p>
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
