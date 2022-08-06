import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
    <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deployed using{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />|
          Build using NEXT JS | Copyright 2022 O.Riastanjung
        </a>
      </footer>
  )
}

export default Footer