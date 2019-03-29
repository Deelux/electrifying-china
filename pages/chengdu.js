import React, { Component } from 'react'
import Layout from '../components/layout'
import YouTube from 'react-youtube';

const people = [
  {
    name: "Blind '92",
    genre: 'Techno/House',
    bio: 'Event producer and DJ from Chongqing',
    link: 'https://soundcloud.com/blind92',
    image: 'static/blind_92.jpg'
  },
  {
    name: 'Qi Zhang',
    genre: 'Drum and bass',
    bio: 'Drum and bass DJ from Chongqing. Kills the dancefloor with rought DNB breaks.',
    link: '#',
    image: 'static/qi_zhang.jpg'
  },
  {
    name: 'Just Charlie',
    genre: 'House',
    bio: 'App developer and event organiser from Chengdu. Manages the blog Just Charlie',
    link: 'http://www.justcharlie.com/category/chengdu-2',
    image: 'static/just_charlie.jpg'
  },
  {
    name: 'Twan Roubroeks',
    genre: 'House',
    bio: 'Event organiser and DJ from Chengdu. Together with Marco Duits he makes Chengdu move.',
    link: 'https://soundcloud.com/twan-roubroeks-1',
    image: 'static/twan_roubroeks.jpg'
  },
  {
    name: 'Marco Duijts',
    genre: 'House',
    bio: 'Event organiser and DJ from Chengdu/The Hague. Works together with Twan Roubroeks to make Chengdu move.',
    link: 'https://soundcloud.com/marco-duits',
    image: 'static/marco_duijts.jpg'
  },
  {
    name: 'R.SUN',
    genre: 'Bass',
    bio: "Club owner from Chengdu, gets groove in the amazing NASA club in Chengdu's PolyCenter.",
    link: 'https://www.chengduplaces.com/listing/nasa/',
    image: 'static/R.SUN.jpg'
  },
  {
    name: 'Freeman',
    genre: 'Techno/House',
    bio: "Event producer and DJ from Chongqing",
    link: '#',
    image: 'static/freeman.jpg'
  }
]

const locations = [
  {
    name: 'Soul Kitchen',
    genre: 'Techno/House',
    bio: "DJ from Beijing, famous for his gigs at the Great Wall Parties in the 90's",
    link: 'https://www.facebook.com/soulkitchenchengdu/',
    image: 'static/lantern.jpg'
  },
  {
    name: 'Nuts Live House',
    genre: 'Techno/House',
    bio: "DJ from Beijing, famous for his gigs at the Great Wall Parties in the 90's",
    link: 'https://www.residentadvisor.net/club.aspx?id=103927',
    image: 'static/nuts_live_house.jpg'
  },
  {
    name: 'Dumpling Chill',
    genre: 'Techno/House',
    bio: "DJ from Beijing, famous for his gigs at the Great Wall Parties in the 90's",
    link: 'https://www.residentadvisor.net/club.aspx?id=103927',
    image: 'static/lantern.jpg'
  }
]

class Chengdu extends Component {
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
            videoId="LlTVHr4-usg"
            opts={opts}
            onReady={this._onReady}
          />
        </div>
        <div className='sub-heading h2'>People of Chengdu</div>
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
        <div className='sub-heading h2'>Locations of Chengdu</div>
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

export default Chengdu;