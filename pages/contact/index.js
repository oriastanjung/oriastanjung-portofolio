import React from 'react';
import Layout from '../../components/Layout';
import ApplicationWindow from '../../components/ApplicationWindow';
import contactIcon from "../../assets/contact.png";



function contact() {
  return (
    <Layout>
      <main>
      <ApplicationWindow iconWindow={contactIcon} windowTitle={'Contact'}>
          <h1 style={{color:"white"}}>
            contactttt
          </h1>
        </ApplicationWindow>
      </main>
    </Layout>
  )
}

export default contact