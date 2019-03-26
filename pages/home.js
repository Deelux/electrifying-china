import React, { Component } from 'react'
import Head from '../components/head'

class Home extends Component {

  render() {
    return (
      <div className=''>
        <Head title='Homepage Electrifying China' description='The homepage of Electrifying China' url='http://www.electrifyingchina.com' />
        <h2>I am the Home component. content</h2>
      </div>
    );
  }
}
export default Home;