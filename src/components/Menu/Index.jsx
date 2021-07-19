import { RiDashboard3Line } from 'react-icons/ri';
import React from 'react';
import {Container, Title} from './Style';

export default function Menu() {
    return (
        <>
            <Container>
                <RiDashboard3Line size={40}/>
                <Title>React Chart Examples</Title>
                <div></div>
            </Container>
        </>
    )
}