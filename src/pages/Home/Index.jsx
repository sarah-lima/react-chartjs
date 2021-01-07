import React, {useState} from 'react';
import * as S from './Style.js';
import Menu from '../../components/Menu/Index'

export default function Home() {
    return(
        <>
        <Menu />
        <S.Div>Olá Mundo</S.Div>
        </>
    )
}