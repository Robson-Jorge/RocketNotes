import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/global'

import { SkeletonTheme } from 'react-loading-skeleton'

import { AuthProvider } from './hooks/auth'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SkeletonTheme baseColor="#6663604c" highlightColor="#99959135">
        <GlobalStyle />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SkeletonTheme>
    </ThemeProvider>
  </React.StrictMode>,
)
