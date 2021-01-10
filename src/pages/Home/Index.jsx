import React, {useState} from 'react';
import * as S from './Style.js';
import Menu from '../../components/Menu/Index'

export default function Home() {
    return(
        <>
        <Menu />
        <S.Div>
            <input type="file" style={{width:'30%', height:'20vh', borderRadius:'3%', borderColor:'#666'}}/>
        </S.Div>
        </>
    )
}