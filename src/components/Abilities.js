import React from 'react'
import styled from 'styled-components'
import { Label, Progress, SubT, TextP } from '../styles/DetailsStyled'
import { H2Styled } from '../styles/H2Styled'

const Line = styled.div`
border-style: solid;
  border-color: red;
`

const Abilities = () => {
    return (
        <Line>
            <H2Styled name="Habilidades" />
            <div className='Education-container'>
                <div className='Education-item'>
                    <div>
                        <Label for="html">HTML</Label>
                        <Progress id="html" max="100" value="90"> 90% </Progress>
                        <Label for="css">CSS</Label>
                        <Progress id="css" max="100" value="80"> 80% </Progress>
                    </div>
                    <Label for="javascript">JavaScript</Label>
                    <Progress id="javascript" max="100" value="80"> 80% </Progress>
                    <Label for="react">ReactJS:</Label>
                    <Progress id="react" max="100" value="90"> 80% </Progress>
                </div>
            </div>
        </Line>
    )
}

export default Abilities
