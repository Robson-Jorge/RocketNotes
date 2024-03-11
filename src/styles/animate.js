import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -30%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-30%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(30%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const pulse = keyframes`
  from {
    opacity: 0.5;
    transform: scale(1.1);
  }
  
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const emerge = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`
