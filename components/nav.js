import React from 'react';
import Link from 'next/link'

class Nav extends React.Component {
  render() {
    return (
      <div className='container grid-lg'>
        <div className='my-2'>
          <header className='navbar'>
            <section className='navbar-section'>
              <Link href='/'>
                <a className='p-2'>Home</a>
              </Link>
              <Link href='/about'>
                <a className='p-2'>About</a>
              </Link>
              <Link href='/contact'>
                <a className='p-2'>Contact</a>
              </Link>
            </section>
            <section className='navbar-center'>
              <a href='/' className='navbar-brand'><img className='logo m-2' src='https://i.ibb.co/v1FhTpd/Electrifying-China-logo.png' alt='Electrifying-China-logo' border='0' /></a>
            </section>
            <section className='navbar-section'>
              <Link href='/beijing'>
                <a className='p-2'>Beijing</a>
              </Link>
              <Link href='/shanghai'>
                <a className='p-2'>Shangai</a>
              </Link>
              <Link href='/chengdu'>
                <a className='p-2'>Chengdu</a>
              </Link>
            </section>
          </header>
          <style jsx>{`
          .logo {
            max-width: 200px;
          }
          a {
          color: #ed2156 !important;
          }
          a:hover {
          color: white !important;
          }
          .navbar{
            border-bottom: 1px solid #ed2156;
            margin: 15px 0 15px 0;
          }
        `}</style>
        </div>
      </div>
    );
  }
}
export default Nav;