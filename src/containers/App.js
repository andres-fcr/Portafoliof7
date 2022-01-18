import React from 'react';
import styled from 'styled-components';
import Abilities from '../components/Abilities';
import About from '../components/About';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Experience from '../components/Experience';

export const AppBody = styled.body`
    display: flex;
    flex-direction:row;
    margin: 0;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-family: system-ui;
    /* background-color: #f49097; */
    /* color: #f2f5ff; */
    font-size:  2em;
    text-shadow: 1px 1px rgba(0,0,0,.5);
`;

export const AppStyle = styled.p`
    /* color: #f5e960; */
    padding: .15em .4em;
    background: #dfb2f4;
    border-radius: 20px;
    border: 2px solid #f2f5ff;
`; 


const App = () => {
    return(
        <AppBody>
            <About/>
            <div>
            <Education/>
            <Experience/>
            <Certifications/>
            <Abilities/>
            </div>
        </AppBody>
    )
}

export default App;