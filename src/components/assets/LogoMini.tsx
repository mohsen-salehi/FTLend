import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

const hoveringAnimation = keyframes`
  0% {
    top: 0;
  }

  25% {
    top: 2px;
  }

  50% {
    top: 0;
  }

  75% {
    top: -2px;
  }

  100% {
    top: 0;
  }
`

const Wrapper = styled.div`
  animation-duration: 1s;
  animation-iteration-count: 15;
  animation-name: ${hoveringAnimation};
  animation-timing-function: linear;
  animation-delay: 0.75s;
  position: relative;
  background-image: url('data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMjg5IiBoZWlnaHQ9IjM3MiIgdmlld0JveD0iMCAwIDI4OSAzNzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjMzMjI3NSAzNzEuNEwwLjMzMjI3OCAyNDguNjM4QzAuMzMyMjc5IDIwNS42ODkgMzUuMTQ4OCAxNzAuODczIDc4LjA5NzEgMTcwLjg3M0w3OC4wOTcxIDI5My42MzVDNzguMDk3MSAzMzYuNTgzIDQzLjI4MDYgMzcxLjQgMC4zMzIyNzUgMzcxLjRaIiBmaWxsPSIjQURDNEZGIi8+CjxwYXRoIGQ9Ik0yODkgMTcxLjI3N0wyODkgMjk0LjA0QzI4OSAzMzYuOTg4IDI1NC4xODMgMzcxLjgwNSAyMTEuMjM1IDM3MS44MDVMMjExLjIzNSAyNDkuMDQyQzIxMS4yMzUgMjA2LjA5NCAyNDYuMDUyIDE3MS4yNzcgMjg5IDE3MS4yNzdaIiBmaWxsPSIjQURDNEZGIi8+CjxwYXRoIGQ9Ik0yMDAuODU5IDE3MC44NzNMNzguMDk3IDE3MC44NzNDMzUuMTQ4NiAxNzAuODczIDAuMzMyMTU0IDIwNS42ODkgMC4zMzIxNTUgMjQ4LjYzOEwxMjMuMDk1IDI0OC42MzhDMTY2LjA0MyAyNDguNjM4IDIwMC44NTkgMjEzLjgyMSAyMDAuODU5IDE3MC44NzNaIiBmaWxsPSIjNTY4NUZGIi8+CjxwYXRoIGQ9Ik0yODcuMjU2IDE0NS4zODNMMTQ1LjAyNyAxNDUuMzgzQzY1LjA1MDkgMTQ1LjM4MyAwLjIxNzQ3MiA4MC41NDk1IDAuMjE3NDc4IDAuNTczMzQ2TDE0Mi40NDYgMC41NzMzNTVDMjIyLjQyMyAwLjU3MzM2IDI4Ny4yNTYgNjUuNDA2OSAyODcuMjU2IDE0NS4zODNaIiBmaWxsPSIjNTY4NUZGIi8+CjxwYXRoIGQ9Ik0yODcuMjU2IDE0NS4zODNMMTEzLjY0IDE0NS4zODNDNzIuMjE5MSAxNDUuMzgzIDM4LjY0MDQgMTExLjgwNCAzOC42NDA0IDcwLjM4M0wyMTIuMjU2IDcwLjM4M0MyNTMuNjc3IDcwLjM4MyAyODcuMjU2IDEwMy45NjIgMjg3LjI1NiAxNDUuMzgzWiIgZmlsbD0iI0FEQzRGRiIvPgo8cGF0aCBkPSJNODguNDcyNyAzNzEuODA1TDIxMS4yMzUgMzcxLjgwNUMyNTQuMTgzIDM3MS44MDUgMjg5IDMzNi45ODggMjg5IDI5NC4wNEwxNjYuMjM3IDI5NC4wNEMxMjMuMjg5IDI5NC4wNCA4OC40NzI3IDMyOC44NTYgODguNDcyNyAzNzEuODA1WiIgZmlsbD0iIzU2ODVGRiIvPgo8L3N2Zz4K');
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  flex-shrink: 0;
  height: 29px;
  max-height: 100%;
  max-width: 100%;
  width: 31px;
`

export const LogoMini: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...restProps }) => (
  <Wrapper className={`logoMini ${className}`} {...restProps} />
)
