import styled from 'styled-components';

export const Container= styled.div`
    width:100%;
    height:50px;
    background-color: white;
    padding-top: 8px;
`

export const Div= styled.div`
    margin:10px;
    width:20%;
    height:100vh;
    margin-left:20px;
    
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
    display:block;
    margin-left: 4%;
    margin-top:5%;
    @media(max-width:480px){
        margin-left: 10%;        
        display: block;
        text-align: justify;
    }
`
export const NavBar= styled.ul`
    width:100%;
    margin-top:5%;
    /* margin-left:-50%; */
    @media(max-width:480px){
    width: 472%;
    height: 100%;

    }
`

