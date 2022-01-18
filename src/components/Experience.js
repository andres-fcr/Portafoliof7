import React from 'react'
import styled from 'styled-components'
import { SubT, TextP } from '../styles/DetailsStyled'
import { H2Styled } from '../styles/H2Styled'

const Line = styled.div`
border-style: solid;
  border-color: purple;
`

const Experience = () => {
    return (
        <Line>
            <H2Styled name="Experiencia" />
            <div className='Education-container'>
                <div className='Education-item'>
                    <SubT>Academia Geek <span>2021 - 2022</span></SubT>
                    <TextP>Desarrollador web</TextP>
                </div>
            </div>
        </Line>
    )
}

export default Experience
