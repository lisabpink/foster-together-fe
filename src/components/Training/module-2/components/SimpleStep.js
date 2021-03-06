import React from 'react'
import { Step } from '../styles'

export const SimpleStep = ({ title, text }) => {
  return (
    <Step>
      <h3>{title}</h3>
      <p>{text}</p>
    </Step>
  )
}
