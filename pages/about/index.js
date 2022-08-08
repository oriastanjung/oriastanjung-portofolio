import React from 'react'
import Layout from '../../components/Layout'
import ApplicationWindow from '../../components/ApplicationWindow'
import aboutIcon from "../../assets/about.png";
function about() {
  return (
    <Layout>
      <main>
      <ApplicationWindow iconWindow={aboutIcon} windowTitle={'About'}>
          <h1 style={{color:"white"}}>
            abooout
          </h1>
        </ApplicationWindow>
      </main>
    </Layout>
  )
}

export default about