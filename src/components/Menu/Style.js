import styled from 'styled-components';

export const Container= styled.div`
    width:100%;
    height:60px;
    background-color: white;
    padding-top: 8px;
`

export const Div= styled.div`

`
export const DivTwo= styled.div`

`
export const Title= styled.h1`
    float: right;
    margin: 0;
    margin-right: 50%;
    @media(max-width:480px){
        margin-right:35%;
    }
`
export const Nav= styled.ul`
    width:100%;
    display: initial;
    margin-left: 4%;
    margin-top: -5px; 
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

