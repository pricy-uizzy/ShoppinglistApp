import styled from "styled-components";

export const Container = styled.button<{
    background: string, center: boolean, variant: "plus" | "minus" | "submit" | "delete" |
    "bag"
}>`
    color: ${(props) => props.color};
    background: ${(props) => props.color};
    border-radius: 100%;
    border: 1px solid;
    ${(props) => {
        if (props.background) {
            return `background: ${props.background}`
        }
    }}
    ${(props) => {
        if (props.center) {
            return `
                display: flex;
                justify-content: center;
                align-items: center;
            `
        }
    }}
    ${(props) => {
        if (props.variant == "plus") {
            return `
            width: 30px;
            height: 30px;
            adding: 2px;
            `
        }
    }}
    ${(props) => {
        if (props.variant == "minus") {
            return `
            padding: 2px;
            width: 30px;
            height: 30px;
            `
        }
    }}
    ${(props) => {
        if (props.variant == "submit") {
            return `
            height: 35px;
            width: 243px;
            `
        }
    }}
    ${(props) => {
        if (props.variant == "delete") {
            return `
            padding: 2px;
            width: 30px;
            height: 30px;
            `
        }
    }}
    ${(props) => {
        if (props.variant == "bag") {
            return `
            width: 44px;
            display: flex;
            height: 44px;
            padding: 4px;
            font-size: 20px;
            box-shadow: -1px 4px 5px black;
            `
        }
    }}
    `