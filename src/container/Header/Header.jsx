import React from 'react'
import { motion } from 'framer-motion';
import Typical from 'react-typical';
import { AppWrap } from '../../wrapper';

import { images } from '../../constants'; 
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span className='wave'>👋</span>
            <div style={{ marginleft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Pawan</h1>
            </div>
          </div>

          <h1 className='tag-cmp app__flex'>
            {' '}
            <Typical 
              loop={Infinity}
              steps={[
                "Enthusiastic Dev 🖥️ ",
                1000,
                "FrontEnd Engineer 👨‍💻",
                1000,
                "Competitive Programmer 💎",
                1000,
                "Web Designer 🧿",
                1000
              ]}
            />
          </h1>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5}}
        className='app__header-img'
      >
        <img src={images.profile} alt='profile' style={{height: 400}}/>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt='profile-circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
        {[images.react, images.typescript, images.redux, images.sass, images.javascript].map((circles,index) => (
          <div className={`circle-cmp-${index} app__flex`} key={`circle-${index}`}>
            <img src={circles} alt='circle'/>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')