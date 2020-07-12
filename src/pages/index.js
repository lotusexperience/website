import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Image />
    <div style={{ color: '#52545F', textAlign: 'center', fontFamily: 'Lato', margin: '8rem 0.5rem 0' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'normal' }}>Criamos Experiências Digitais Execpcionais</h1>
      <p style={{ fontSize: '1.1rem' }}>Especialistas em desenvolvimento de produtos digitais. Podemos te ajudar a tirar sua idéia do papel e transformá-lo em um negócio promissor!</p>
      <a href="mailto:falecom@lotusexperience.com.br">falecom@lotusexperience.com.br</a>
    </div>
  </Layout>
)

export default IndexPage
