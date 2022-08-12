import React from "react";
import ProjectItem from "../ProjectItem";

function ProjectsList(props) {
  const data = props.dataProjects;
  return (
    <ul className="projects-list">
      {data.map((item) => {
        return (
          <li key={item.id} style={{ color: "white" }}>
            <ProjectItem item={item}/>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectsList;
