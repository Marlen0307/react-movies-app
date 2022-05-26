import { Container } from '@mui/material'
import React from 'react'

export const Footer = () => {

  return (
    <footer>
        <Container >
        {new Date().getFullYear()}  All rights reserved. Movies 
        </Container>
    </footer>
  )
}
