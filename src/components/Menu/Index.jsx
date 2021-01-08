import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as S from './Style';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrClose} from 'react-icons/gr';

export default function Menu(){
    const [navOpen, setnavOpen]=useState(false)

    return(
        <>
            <S.Container>
            <S.Title>Titulo</S.Title>
            {
                        navOpen ?
                            <>
                            <S.Div>
                                <S.Nav>
                                    <GrClose style={{cursor:'pointer'}} size={26} onClick={()=>setnavOpen(!navOpen)} />
                                </S.Nav>
                                    <S.NavBar>
                                    <Link to='' style={{textDecoration:'none', marginTop:'10px', color: 'black', display:'block'}}>TESTE</Link>
                                    <Link to='' style={{textDecoration:'none', marginTop:'10px', color: 'black', display:'block'}}>Login</Link>        
                                    </S.NavBar>
                            </S.Div>
                            </>
                            :
                            <S.Div>
                            <S.Nav>
                                <GiHamburgerMenu style={{cursor:'pointer'}} size={26} onClick={()=>setnavOpen(!navOpen)} />
                            </S.Nav>
                </S.Div>
                    }
        </S.Container>
        </>
    )
}