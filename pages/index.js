import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
    <Layout > 
      <Navbar></Navbar>
      <main>
        <h1 style={{color:'white'}}>hello orias</h1>
      </main>
    </Layout>
    
  )
}
