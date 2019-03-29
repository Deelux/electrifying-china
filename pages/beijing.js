import React, { Component } from 'react'
import Layout from '../components/layout'
import YouTube from 'react-youtube';

const people = [
  {
    name: 'Yang Bing',
    genre: 'Techno/House',
    bio: "DJ from Beijing, famous for his gigs at the Great Wall Parties in the 90's",
    link: 'https://soundcloud.com/yangbing010',
    image: 'static/yang_bing.jpg'
  },
  {
    name: 'SHAO',
    genre: 'Techno/Electronic',
    bio: 'Shao is producer & sound designer Shao Yanpeng from Beijing.',
    link: 'https://soundcloud.com/shaoyanpeng',
    image: 'static/shao.jpg'
  },
  {
    name: 'Miao Wong',
    genre: 'Techno',
    bio: 'Event producer/promoter from Beijing, co-owner of DOT. Records',
    link: 'https://soundcloud.com/dot-records',
    image: 'static/miao_wong.jpg'
  },
  {
    name: 'Jason Hou',
    genre: 'Dubstep/Bass',
    bio: 'Bass producer from Beijing, famous for his work in MIDI instruments.',
    link: 'https://soundcloud.com/jasonhou',
    image: 'static/jason_hou.jpg'
  },
  {
    name: 'Elvis T',
    genre: 'Techno',
    bio: 'Modular master from Beijing. Also producing under the moniker HWA.',
    link: 'https://soundcloud.com/hwahwahwa',
    image: 'static/elvis_t.jpg'
  },
  {
    name: 'Michael',
    genre: 'Bass/Techno',
    bio: 'Owner of DADA Club in Beijing.',
    link: 'https://www.residentadvisor.net/club.aspx?id=65736',
    image: 'static/michael.jpg'
  },
  {
    name: 'Weng Weng',
    genre: 'Techno/House',
    bio: "Lantern Club owner and DJ, famous for his Great Wall Parties in the 90's.",
    link: 'https://soundcloud.com/lantern-club',
    image: 'static/weng_weng.jpg'
  },
  {
    name: 'BB Deng',
    genre: 'Techno',
    bio: 'Techno DJ from Taiwan who has lived in Beijing and has recently moved to Berlin to step up her game as techno DJ/producer.',
    link: 'https://soundcloud.com/djbbdeng',
    image: 'static/bb_deng.jpg'
  },
  {
    name: 'Nova Heart',
    genre: 'Pop/Avant-garde',
    bio: 'Pop band from Beijing.',
    link: 'https://soundcloud.com/novaheart',
    image: 'static/gigi_lee.jpg'
  }
]

const locations = [
  {
    name: 'The Lantern',
    genre: 'Techno/House',
    bio: "DJ from Beijing, famous for his gigs at the Great Wall Parties in the 90's",
    link: 'https://www.residentadvisor.net/club.aspx?id=25078',
    image: 'static/lantern.jpg'
  },
  {
    name: 'Dada Beijing',
    genre: 'Techno/House',
    bio: "DJ from Beijing, famous for his gigs at the Great Wall Parties in the 90's",
    link: 'https://www.residentadvisor.net/club.aspx?id=65736',
    image: 'static/dada.jpg'
  }
]




class Beijing extends Component {
  render() {
<<<<<<< HEAD


=======
>>>>>>> 63d87aa176df65164013eb332951d107743d9588
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
<<<<<<< HEAD
        <div className='mt-2 text-center'>
=======
        <div className='mt-2 text-center'>master
>>>>>>> 63d87aa176df65164013eb332951d107743d9588
          <YouTube
            videoId="8HK0MBLLVO8"
            opts={opts}
            onReady={this._onReady}
          />
        </div>
        <div className='sub-heading h2'>People of Beijing</div>
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
        <div className='sub-heading h2'>Locations of Beijing</div>
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
      </Layout >
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Beijing;