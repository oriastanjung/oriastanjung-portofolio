import React from 'react'
import Layout from '../../components/Layout'
import ApplicationWindow from '../../components/ApplicationWindow'
import certificatesIcon from "../../assets/certificates.png";


function certificates() {
  return (
    <Layout>
      <main>
      <ApplicationWindow iconWindow={certificatesIcon} windowTitle={'Certificates'}>
          <h1 style={{color:"white"}}>
            Certificates
          </h1>
        </ApplicationWindow>
      </main>
    </Layout>
  )
}

export default certificates