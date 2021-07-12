import React, {useState} from 'react';
import * as S from './Style.js';
import Menu from '../../components/Menu/Index'

export default function Home() {
    return(
        <>
        <Menu style={{zIndex:1}} />
       
           
        <S.Div style={{zIndex:-1}}>
            <img style={{height:'93vh'}} src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" alt=""/>
        </S.Div>
        </>
    )
}