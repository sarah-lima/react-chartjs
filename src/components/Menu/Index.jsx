import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as S from './Style';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrClose} from 'react-icons/gr';

export default function Menu(){
    const [navOpen, setnavOpen] = useState(false)
    const [hoverone, setHover] = useState(false)
    const [hovertwo, setHoverTwo] = useState(false)

    var linkStyle='';
    var styleLink='';
    var styleLi='';
    var liStyle='';
    var svg='';
    // li 1
    if(hoverone){
        linkStyle = {color: '#ed1212',cursor: 'pointer',textDecoration:'none', marginTop:'10px', marginLeft:'10px'}
    }else{
        linkStyle = {color: '#000', textDecoration:'none', marginTop:'10px', marginLeft:'10px'}
    }
    // li 2
    if(hovertwo){
        styleLink = {color: '#ed1212',cursor: 'pointer',textDecoration:'none', marginTop:'10px', marginLeft:'10px'}
    }else{
        styleLink = {color: '#000', textDecoration:'none', marginTop:'10px', marginLeft:'10px'}
    }

    //div >ul
    if(navOpen){
        if( window.innerWidth <= 480 ){
            liStyle = {
                backgroundColor: 'crimson',
                width: 'auto',
                height: '91vh',
                display: 'block',
                marginTop: '9vh',
                textAlign: 'center',              
        }
        
        svg='50';
        }else{
            liStyle = {       
                width: 'auto',
                height: '100%',
                display: 'inline-flex',
                marginLeft: '4%',
                marginTop: '5px',
            }
            svg='30';
            console.log("deu certo")
        }
            
        }
    else{
        styleLi={
            margin:'10px',
            width:'auto',
            height:'100%',
            marginLeft:'20px',
            display: 'inline-flex', 
        }
        svg='30';
    }
    return(
        <>
            <S.Container>
            <S.Title>Titulo</S.Title>
            {
                        navOpen ?
                            <>
                            <S.Div style={liStyle}>
                                <S.Nav>
                                    <GrClose style={{cursor:'pointer', marginTop:'5px'}} size={svg} onClick={()=>setnavOpen(!navOpen)} />
                                </S.Nav>
                                    <S.NavBar>
                                    <Link to='' style={linkStyle} onMouseOver={()=>setHover(!hoverone)} onMouseOut={()=>setHover(!hoverone)}>TESTE</Link>
                                    <Link to='' style={styleLink} onMouseOver={()=>setHoverTwo(!hovertwo)} onMouseOut={()=>setHoverTwo(!hovertwo)}>Login</Link>        
                                    </S.NavBar>
                            </S.Div>
                            </>
                            :
                            <S.Div style={styleLi,{backgroundColor: liStyle.backgroundColor}}>
                            <S.Nav>
                                <GiHamburgerMenu style={{cursor:'pointer', marginTop:'5px'}} size={svg} onClick={()=>setnavOpen(!navOpen)} />
                            </S.Nav>
                            </S.Div>
                    }
        </S.Container>
        </>
    )
}