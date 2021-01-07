import styled from 'styled-components';

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
    @media(max-width:480px){
        
        display: block;
        text-align: justify;
        margin-left: -50%;
        font-size:30px;
    }
`
export const NavBar= styled.ul`
    width:100%;
    /* margin-left:-50%; */
    @media(max-width:480px){
    

    }
`

