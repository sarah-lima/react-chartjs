import styled from 'styled-components';

export const Container= styled.div`
    width:100%;
    height:60px;
    background-color: #775253;
    padding-top: 8px;
    display: flex;
    justify-content: center;
    color: #ffffff;
`

export const Div= styled.div`
    left:0;
`
export const DivTwo= styled.div`

`
export const Title= styled.h1`
    margin: 0;
    @media(max-width:480px){
        margin-right:35%;
    }
`
export const Nav= styled.ul`
    width:100%;
    display: initial;
    padding-left: 5px;
    @media(max-width:480px){
        width: 84%;
        margin-left: 10%;        
        display: block;
        text-align: justify;
    }
`
export const NavBar= styled.ul`
    width:100%;
    font-size: 20px;
    @media(max-width:480px){
        width: 100%;
        height: 90%;
        display: grid;
        padding-bottom: 80%;
    }
    /* :hover{
        background-color:rebeccapurple;
    } */
`

