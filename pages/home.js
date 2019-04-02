import React, { Component } from 'react'
import Layout from '../components/layout'
import YouTube from 'react-youtube';


class Home extends Component {

  render() {
    const opts = {
      height: '500',
      width: '100%',
      playerVars: {
        host: 'https://www.youtube.com',
        autoplay: 0
      }
    };
    return (
      <Layout className='container'>
        <div className='mt-2 text-center'>
          <YouTube
            videoId="etMkzMbT7bE"
            opts={opts}
            onReady={this._onReady}
          />
          <div className='mt-2'><a className='watch-button' href='/beijing'>WATCH THE FIRST EPISODE</a></div>
        </div>
        <style jsx>{`
        .watch-button{
          color: #ed2156;
        }
        .watch-button:hover{
        color: white;
        }
        `}</style>
      </Layout >
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Home;