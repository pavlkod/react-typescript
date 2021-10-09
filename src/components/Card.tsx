import { FC} from 'react'

export const enum CardVariant{
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps{
    width: string,
    height: string,
    variant: CardVariant,
    onClick: () => void
}

const Card: FC<CardProps> = (props) => {
    return (
        <div style={{
            width: props.width, height: props.height,
            border: props.variant === CardVariant.outlined ? '1px solid #000' : 'none',
            background: props.variant === CardVariant.primary ? '#d2d2d2' : 'none'
        }} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default Card
