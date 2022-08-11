import React from 'react'

export default function Projects(props) {
    const id_project = props.id;
    const data = props.data.filter((project) => {
        return project.id === id_project
    })
    
  return (
    <div>
        {data}
    </div>
  )
}


export async function getServerSideProps(context){
    const {params} = context;
    const {id} = params;
    
    return {
        props:{
            id : id,
        }
    }
}