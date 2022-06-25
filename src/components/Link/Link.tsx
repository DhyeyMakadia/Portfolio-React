import React from 'react'

interface IProps {
    url:string
    name:string
}

export default function Link(props:IProps) {
    const {url, name} = props
  return (
    <a href={url} className='link' target="_blank" rel="noreferrer">{name}</a>
  )
}
