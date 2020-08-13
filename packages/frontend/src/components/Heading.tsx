import React from 'react'

interface HeadingProps {
  text: React.ReactNode
}

export function Heading(props: HeadingProps) {
  return <h1 style={{ fontFamily: 'Roboto', fontWeight: 300 }}>{props.text}</h1>
}
