import React, { Component } from 'react'
import Layout from '../components/layout'
import YouTube from 'react-youtube';

class Shanghai extends Component {
  render() {
    const opts = {
      height: '450',
      width: '100%',
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <Layout>
        <div className='mt-2 pt-2 container grid-md text-center'>
          <YouTube
            videoId="G8wxzMiPo0U"
            opts={opts}
            onReady={this._onReady}
          />
        </div>
      </Layout>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Shanghai;