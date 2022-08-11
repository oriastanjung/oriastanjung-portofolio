import React from 'react'
import Layout from '../../components/Layout'
import ApplicationWindow from '../../components/ApplicationWindow'
import projectIcon from "../../assets/projects.png";
import dataProject from "../../json/dataProjects.json";
import ProjectsList from '../../components/ProjectsList';

function projects() {
  
  

  return (
    <Layout>
      <main>
        <ApplicationWindow iconWindow={projectIcon} windowTitle={'Projects'}>
          <ProjectsList dataProjects={dataProject}></ProjectsList>
        </ApplicationWindow>
      </main>
    </Layout>
  )
}

export default projects