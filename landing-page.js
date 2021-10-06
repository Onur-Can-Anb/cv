import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'
import projectStyles from '../style.module.css'
import styles from './landing-page.module.css'

const LandingPage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>CEM'REM APART</title>
        <meta property="og:title" content="CEM'REM APART" />
      </Helmet>
      <div className={styles['Top-container']}>
        <nav className={styles['Navbar']}>
          <h1 className={styles['Logo']}>CEM&apos;REM APART</h1>
          <div className={styles['Right-side']}>
            <div className={styles['Links-container']}>
              <a
                href="#main-section"
                className={` ${styles['link']} ${projectStyles['thqLink']} `}
              >
                <span className={styles['text']}>Odalarımız</span>
              </a>
              <a
                href="#footer-section"
                className={` ${styles['link01']} ${projectStyles['thqLink']} `}
              >
                <span className={styles['text01']}>İletişim</span>
              </a>
            </div>
            <a href="tel:+905317427402" className={styles['link02']}>
              <SolidButton
                button="Rezervasyon"
                className={` ${styles['component']} ${projectStyles['thqLink']} `}
              ></SolidButton>
            </a>
          </div>
          <svg viewBox="0 0 1024 1024" className={styles['Burger-menu']}>
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </nav>
        <div className={styles['Hero']}>
          <div className={styles['Content-container']}>
            <h1 className={` ${projectStyles['heading']} ${styles['text02']} `}>
              <span className={styles['text03']}>
                Günlük, Haftalık veya Aylık
              </span>
            </h1>
            <h2
              className={` ${styles['Subheading']} ${projectStyles['subheading']} `}
            >
              İhtiyacınıza uygun
            </h2>
            <span className={styles['text04']}>
              <span className={styles['text05']}>
                Tam pansiyon,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span className={styles['text07']}>
                Lüks ve ekonomik odalarımızla hizmetinizdeyiz.
              </span>
            </span>
            <a href="#main-section" className={styles['link03']}>
              <SolidButton
                button="Odaları Göster"
                className={` ${styles['component1']} ${projectStyles['thqLink']} `}
              ></SolidButton>
            </a>
          </div>
        </div>
      </div>
      <div id="main-section" className={styles['Main']}>
        <h1>ODALARIMIZ</h1>
        <span className={styles['text09']}>Önerilenler</span>
        <div className={styles['Cards-container']}>
          <a href="tel:+905317427402" className={styles['link04']}>
            <PlaceCard
              city="London"
              image="/playground_assets/e14609d3-caf4-4c4e-9feb-3d78d3c7474b-1000h.jpg"
              className={` ${styles['component2']} ${projectStyles['thqLink']} `}
            ></PlaceCard>
          </a>
          <a href="tel:+905317427402" className={styles['link05']}>
            <PlaceCard
              city="Rome"
              image="/playground_assets/babdf454-5d24-4f09-a09e-e8092f1f3c90-1000w.jpg"
              className={` ${styles['component3']} ${projectStyles['thqLink']} `}
            ></PlaceCard>
          </a>
          <a href="tel:+905317427402" className={styles['link06']}>
            <PlaceCard
              city="Cluj-Napoca"
              image="/playground_assets/whatsapp%20image%202021-10-01%20at%2018.46.07-1000h.jpeg"
              className={` ${styles['component4']} ${projectStyles['thqLink']} `}
            ></PlaceCard>
          </a>
          <a href="tel:+905317427402" className={styles['link07']}>
            <PlaceCard
              city="Paris"
              image="/playground_assets/whatsapp%20image%202021-10-01%20at%2018.46.04-1000h.jpeg"
              className={` ${styles['component5']} ${projectStyles['thqLink']} `}
            ></PlaceCard>
          </a>
          <a href="tel:+905317427402" className={styles['link08']}>
            <PlaceCard
              city="Amsterdam"
              image="/playground_assets/599477a7-f0c5-4ad8-ad18-6bf786df35b5-1000h.jpg"
              className={` ${styles['component6']} ${projectStyles['thqLink']} `}
            ></PlaceCard>
          </a>
          <a href="tel:+905317427402" className={styles['link09']}>
            <PlaceCard
              city="Barcelona"
              image="/playground_assets/whatsapp%20image%202021-10-01%20at%2018.46.06-1000h.jpeg"
              className={` ${styles['component7']} ${projectStyles['thqLink']} `}
            ></PlaceCard>
          </a>
        </div>
      </div>
      <div id="footer-section" className={styles['Footer']}>
        <div className={styles['Menu']}>
          <Link to="/" className={styles['navlink']}>
            <h1 className={` ${styles['Logo1']} ${projectStyles['thqLink']} `}>
              <span className={styles['text10']}>CEM&apos;REM APART</span>
            </h1>
          </Link>
          <div className={styles['Links-container1']}>
            <div className={styles['container1']}>
              <span className={styles['text11']}>
                <span className={styles['text12']}>ADRESİMİZ</span>
              </span>
              <span className={styles['text13']}>
                <span className={styles['text14']}>
                  Paşamescid mah.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className={styles['text16']}>
                  48 sok. İl apt. No:23 BANDIRMA
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <a
                href="mailto:cemremapart@outlook.com?subject=Rezervasyon"
                className={` ${styles['link10']} ${projectStyles['thqLink']} `}
              >
                <span className={styles['text17']}>
                  cemremapart@outlook.com
                </span>
              </a>
            </div>
            <div className={styles['container2']}>
              <a
                href="tel:+905317427402"
                className={` ${styles['link11']} ${projectStyles['thqLink']} `}
              >
                <span className={styles['text18']}>TELEFON</span>
                <br></br>
                <span></span>
                <br></br>
                <span>0531 742 74 02</span>
              </a>
            </div>
          </div>
          <div className={styles['Follow-container']}></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
