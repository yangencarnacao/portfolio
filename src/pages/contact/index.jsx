import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/yang-dev/" 
        />
        
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="yang.silva@gmail.com" 
        />
      </Content>
    </Container>
  )
}
