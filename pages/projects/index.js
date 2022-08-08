import React from 'react'
import Layout from '../../components/Layout'
import ApplicationWindow from '../../components/ApplicationWindow'
import projectIcon from "../../assets/projects.png";

function projects() {
  return (
    <Layout>
      <main>
        <ApplicationWindow iconWindow={projectIcon} windowTitle={'Projects'}>
          <h1 style={{color:"white"}}>
            hellooooo
          </h1>
        </ApplicationWindow>
      </main>
    </Layout>
  )
}

export default projects