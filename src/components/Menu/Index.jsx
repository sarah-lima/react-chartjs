import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as S from './Style';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrClose} from 'react-icons/gr';

export default function Menu(){
    const [navOpen, setnavOpen]=useState(false)
    const [hoverone, setHover]= useState(false)
    const [hovertwo, setHoverTwo]= useState(false)
    var linkStyle='';
    var styleLink='';
    if(hoverone){
        linkStyle = {color: '#ed1212',cursor: 'pointer',textDecoration:'none', marginTop:'10px', marginLeft:'10px'}
    }else{
        linkStyle = {color: '#000', textDecoration:'none', marginTop:'10px', marginLeft:'10px'}
    }
    if(hovertwo){
        styleLink = {color: '#ed1212',cursor: 'pointer',textDecoration:'none', marginTop:'10px', marginLeft:'10px'}
    }else{
        styleLink = {color: '#000', textDecoration:'none', marginTop:'10px', marginLeft:'10px'}
    }
    return(
        <>
            <S.Container>
            <S.Title>Titulo</S.Title>
            {
                        navOpen ?
                            <>
                            <S.Div>
                                <S.Nav>
                                    <GrClose style={{cursor:'pointer'}} size={30} onClick={()=>setnavOpen(!navOpen)} />
                                </S.Nav>
                                    <S.NavBar>
                                    <Link to='' style={linkStyle} onMouseOver={()=>setHover(!hoverone)} onMouseOut={()=>setHover(!hoverone)}>TESTE</Link>
                                    <Link to='' style={styleLink} onMouseOver={()=>setHoverTwo(!hovertwo)} onMouseOut={()=>setHoverTwo(!hovertwo)}>Login</Link>        
                                    </S.NavBar>
                            </S.Div>
                            </>
                            :
                            <S.Div>
                            <S.Nav>
                                <GiHamburgerMenu style={{cursor:'pointer'}} size={30} onClick={()=>setnavOpen(!navOpen)} />
                            </S.Nav>
                </S.Div>
                    }
        </S.Container>
        </>
    )
}