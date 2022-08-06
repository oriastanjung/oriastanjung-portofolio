import Head from 'next/head'
import Image from 'next/image'
import Item from '../components/Item'
import Layout from '../components/Layout'
import terminalIcon from "../assets/terminal.png";
import aboutIcon from "../assets/about.png";
import projectsIcon from "../assets/projects.png";
import certificatesIcon from "../assets/certificates.png";
import contactIcon from "../assets/contact.png";

export default function Home() {
  return (
    
    <Layout > 
      <main>
        <section className='items'>
          <Item title='About'imgSource={aboutIcon}/>
          <Item title='Projects'imgSource={projectsIcon}/>
          <Item title='Certificates'imgSource={certificatesIcon}/>
          <Item title='Contact'imgSource={contactIcon}/>
          <Item title='Terminal'imgSource={terminalIcon}/>
        </section>
      </main>     
    </Layout>
    
  )
}
