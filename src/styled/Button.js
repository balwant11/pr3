import styled from "styled-components"
export const Button = styled.button`
    background-color: black;
    color: white;
    min-width: 220px;
    padding: 10px 18px;
    font-size: 16px;
    border-radius: 5px;
    transition: 1s;
    cursor: pointer;

    &:hover{
        background-color: white;
        color: black;
        transition-duration: 0.5ms;
    }
`

export const OutlineButton = styled(Button)`
background-color: white;
color: black;
 &:hover{
        background-color: black;
        color: white;
        transition-duration: 0.5ms;
    }
`