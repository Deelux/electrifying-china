import React from 'react'
import Head from './head'
import Nav from './nav'

export default ({ children, settings = {} }) => (
  <div className='mx-2'>
    <Head title='Electrifying China' description='The homepage of Electrifying China' url='http://www.electrifyingchina.com'>
      <link href="/statics/styles.css" rel="stylesheet" />
    </Head>
    <Nav settings={settings} />
    <div className='container grid-lg'>
      <div className='columns'>
        <div className='column col-12 text-light'>
          {children}
        </div>
      </div>
    </div>
    <style jsx global>{`
      article, aside, footer, header, hgroup, main, nav, section {
        display: block;
      }
      body {
        height: 100vh;
        font-family: 'Zilla Slab', Helvetica, sans-serif;
        background: url(static/Beijing.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
)