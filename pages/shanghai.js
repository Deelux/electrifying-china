import React, { Component } from 'react'
import Layout from '../components/layout'
import YouTube from 'react-youtube';

const people = [
  {
    name: 'Rainbow Gou',
    genre: 'Techno/House',
    bio: 'Head-honcho of The Mansion in Shanghai.',
    link: '#',
    image: 'static/rainbow_gao.jpg'
  },
  {
    name: 'Gigi Lee',
    genre: 'Techno/House',
    bio: 'Model and DJ from Shanghai. Mesmerizing ravehead.',
    link: 'https://soundcloud.com/djgigilee',
    image: 'static/gigi_lee.jpg'
  },
  {
    name: 'Han Han',
    genre: 'Avant-garde/Live',
    bio: 'Live producer/DJ from Shanghai. Also a bio-chemist.',
    link: '#',
    image: 'static/han_han.jpg'
  },
  {
    name: 'Jane Siesta',
    genre: 'Drum and bass',
    bio: 'DNB DJ from Shanghai. Connected to the Red Bull Music Academy.',
    link: 'https://soundcloud.com/phreaktionmusic',
    image: 'static/jane_siesta.jpg'
  },
  {
    name: 'Mau Mau',
    genre: 'House',
    bio: 'Producer from Shanghai.',
    link: '#',
    image: 'static/mau_mau.jpg'
  },
  {
    name: 'Gus',
    genre: 'Hiphop/Bass',
    bio: "ALL Club owner (formerly Shelter Shanghai) who throws Shanghai's best parties",
    link: 'https://www.residentadvisor.net/club.aspx?id=137029',
    image: 'static/gus.jpg'
  },
  {
    name: 'Tommy Hendriks',
    genre: 'Techno/House',
    bio: 'Former head-honcho of The Mansion Shanghai, DJ and owner of Ying-Yang music festival. Recently moved back to Amsterdam.',
    link: 'https://soundcloud.com/tommyhendriks',
    image: 'static/tommy_hendriks.jpg'
  }
]

const locations = [
  {
    name: 'Shelter (Club All)',
    genre: 'Drum n Base/Electro/Hip Hop',
    bio: "A converted bomb shelter, the club is dark, sweaty, black, loud, and thumping.",
    link: 'https://www.residentadvisor.net/club.aspx?id=137029',
    image: 'static/the_shelter.jpg'
  },
  {
    name: 'The Mansion',
    genre: 'Techno/House',
    bio: "A villa transformed into one of the coolest underground clubs in Shanghai.",
    link: 'http://www.smartshanghai.com/venue/8651/the_mansion',
    image: 'static/the_mansion.jpg'
  }
]

class Shanghai extends Component {
  render() {
    const opts = {
      height: '450',
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
            videoId="G8wxzMiPo0U"
            opts={opts}
            onReady={this._onReady}
          />
        </div>
        <div className='sub-heading h2'>People of Shanghai</div>
        <div className='columns'>
          {people.map(({ name, genre, bio, link, image }, key) => (
            <div key={key} className='column col-4 col-md-6 col-sm-12 artist-block'>
              <h5>{name}<span className='artist-genre'>{genre}</span></h5>
              <img className='artist-image' src={image} />
              <p className='artist-bio'>{bio}</p>
              <p><a href={link} target='_blank'>Artist website</a></p>
            </div>
          ))
          }
        </div>
        <div className='sub-heading h2'>Locations of Shanghai</div>
        <div className='columns'>
          {locations.map(({ name, genre, bio, link, image }, key) => (
            <div key={key} className='column col-4 col-md-6 col-sm-12 artist-block'>
              <h5>{name}<span className='artist-genre'>{genre}</span></h5>
              <img className='artist-image' src={image} />
              <p className='artist-bio'>{bio}</p>
              <p><a href={link} target='_blank'>Venue website</a></p>
            </div>
          ))
          }
        </div>
        <style jsx>{`
        a{
          color: #ed2156;
        }
        .sub-heading{
          border-bottom: 1px solid #ed2156;
          margin-bottom: 25px;
        }
        .artist-block {
        }
        .artist-genre{
          padding-left: 5px;
          color: #ed2156;
          font-size: 0.6em;
        }
        .artist-bio{
          min-height: 50px;
        }
        .artist-image{
          width:100%;
        }
      }
    `}</style>
      </Layout>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Shanghai;