import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { urlFor,client } from '../../client';

import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(()=> {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  },[])
  return (
    <div className="app__about">
      <div className='app__about-quote'>
        <h2 className="head-text">
          I Know that <span>Good Design</span>
          <br />
          means <span>Good Business</span>
        </h2>
      </div>

      <div className="app__profiles">
        {console.log(abouts[0])}
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AppWrap(About, 'about');