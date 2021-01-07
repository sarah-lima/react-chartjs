import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as S from './Style';
import {HiMenu} from 'react-icons/hi';
import {GrClose} from 'react-icons/gr';

export default function Menu(){
    const [navOpen, setnavOpen]=useState(false)

    return(
        <>
        {
                    navOpen ?
                        <>
                        <S.Div>
                            <S.Nav>
                                <GrClose size={26} onClick={()=>setnavOpen(!navOpen)} />
                                <S.NavBar>
                                <Link to='' style={{textDecoration:'none', marginTop:'10px', color: 'black', display:'block'}}>TESTE</Link>
                                <Link to='' style={{textDecoration:'none', marginTop:'10px', color: 'black', display:'block'}}>Login</Link>        
                                </S.NavBar>
                            </S.Nav>
                        </S.Div>
                        </>
                        :
                        <S.Div>
                        <S.Nav>
                            <HiMenu size={26} onClick={()=>setnavOpen(!navOpen)} />
                        </S.Nav>
             </S.Div>
                }
       
        </>
    )
}