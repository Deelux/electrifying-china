import React, { Component } from 'react'
import Layout from '../components/layout'


class About extends Component {
  render() {
    return (
      <Layout>
        <div className='container grid-xs'>
          <img className='my-2 about-image' src='static/electrifying_china.jpg' alt='Electrifying-China' border='0' />
          <p>The electronic music scene is relatively new in China and carries a different mentality
        to the cultural challenges that might affect the status quo. There are interesting opportunities to create a flourishing music scene, where people can develop their own sense of individual creativity and freedom. This is the moment to explore a youth culture on the rise. The rise of Electrifying China.</p>
        </div>
        <style jsx>{`
        .about-image{
          display: inline-block;
          max-width: 100%;
      }
    `}</style>
      </Layout>
    )
  }
}

export default About;