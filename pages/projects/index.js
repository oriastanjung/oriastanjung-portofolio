import React from 'react'
import Layout from '../../components/Layout'
import ApplicationWindow from '../../components/ApplicationWindow'
import projectIcon from "../../assets/projects.png";
import dataProject from "../../json/dataProjects.json";

function projects() {
  

  return (
    <Layout>
      <main>
        <ApplicationWindow iconWindow={projectIcon} windowTitle={'Projects'}>
          <ul>

          {
            dataProject.map((item) => {
              return (<li key={item.id} style={{color:'white'}}>
                {item.title}
              </li>)
            })
          }
          </ul>
        </ApplicationWindow>
      </main>
    </Layout>
  )
}

export default projects