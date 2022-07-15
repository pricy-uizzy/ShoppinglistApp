import { Container } from "./style"

interface IButton{
    children: any,
    color?: string,
    background: string,
    variant: "plus" | "minus" | "submit" | "delete" | "bag"
    center?: boolean
    onClick: () => void

}


function Button({children, color, background, variant = "submit", center=false, onClick }:IButton ) {
    return(
        <Container color={color} background={background} variant={variant} center={center} onClick={onClick}>
            {children}
        </Container>
    )
}

export default Button;