import Head from 'next/head'
import Image from 'next/image'
import Item from '../components/Item'
import Layout from '../components/Layout'
import terminalIcon from "../assets/terminal.png";
import aboutIcon from "../assets/about.png";
import projectsIcon from "../assets/projects.png";
import certificatesIcon from "../assets/certificates.png";
import contactIcon from "../assets/contact.png";
import { useRouter } from 'next/router';


export default function Home() {


  const router = useRouter();
  return (
        
    <Layout > 
      <main>
        <section className='items'>
          <div className='one-items-column'>
            <Item title='Terminal'imgSource={terminalIcon} onClick={()=>{router.push('/terminal')}}/>
          </div>
          <div className='four-items-column'>
            <Item title='About'imgSource={aboutIcon} onClick={()=>{router.push('/about')}}/>
            <Item title='Projects'imgSource={projectsIcon} onClick={()=>{router.push('/projects')}}/>
            <Item title='Certificates'imgSource={certificatesIcon} onClick={()=>{router.push('/certificates')}}/>
            <Item title='Contact'imgSource={contactIcon} onClick={()=>{router.push('/contact')}}/>
          </div>
        </section>
      </main>     
    </Layout>
    
  )
}
