import { Container } from '@mui/material'
import React from 'react'
import { useLayoutStyles } from './LayoutStyles';

export const Footer = () => {
    const classes = useLayoutStyles();

  return (
    <footer>
        <Container >
        {new Date().getFullYear()}  All rights reserved. Movies 
        </Container>
    </footer>
  )
}
