import React from 'react'

interface CardProps{
    width: string,
    height: string
}

const Card = (props: CardProps) => {
    return (
        <div style={{width:props.width, height: props.height, background: '#000'}}></div>
    )
}

export default Card
