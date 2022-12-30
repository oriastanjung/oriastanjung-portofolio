import React from "react";
import Link from "next/link";
import dataProject from "../../../json/dataProjects.json";
import Layout from "../../../components/Layout";
import ApplicationWindow from "../../../components/ApplicationWindow";
import projectIcon from "../../../assets/projects.png";
import Image from "next/image";
import imgProject from "../../../public/projects/movflix/fullpage.png";
export default function Projects(props) {
  const item = props.data.filter((project) => {
    // console.log(project.srcFullpage);
    return project.id == props.id;
  });
  return (
    <Layout>
      <main>
        <ApplicationWindow iconWindow={projectIcon} windowTitle={"Projects"}>
          <div className="detail-project">
            <div className="detail-project-img">
              {/* {console.log(item[0].srcFullpage)} */}
              <img src={item[0].srcFullpage} width={"100px"} height={"100px"} />
            </div>
            <div className="detail-project-desc">
              <h6>{item[0].title}</h6>
              <p>Description</p>
              <div className="detail-project-desc-description">
                <p>{item[0].description}</p>
              </div>
              <p>Technology</p>
              <div className="detail-project-desc-description">
                <p>{item[0].technology}</p>
                <ul>
                  {item[0].techList.map((tech, idx) => {
                    return <li key={idx}>*{tech}</li>;
                  })}
                </ul>
              </div>

              {item[0].websiteUrl === "restricted_private" ? (
                <p style={{textAlign : "center", color : "red"}}>Restricted Private</p>
              ) : (
                <a
                  target="_blank"
                  href={item[0].websiteUrl}
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              )}
            </div>
          </div>
        </ApplicationWindow>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  return {
    props: {
      id: id,
      data: dataProject,
    },
  };
}
