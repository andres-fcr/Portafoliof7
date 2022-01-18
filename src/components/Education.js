import React from 'react'
import styled from 'styled-components'
import { SubT, TextP } from '../styles/DetailsStyled'
import { H2Styled } from '../styles/H2Styled'

const Line = styled.div`
border-style: solid;
  border-color: tomato;
`

const Education = () => {
    return (
        <Line>
            <H2Styled name="Mis estudios" />
            <div className='Education-container'>
                <div className='Education-item'>
                    <SubT>Academia Geek <span>2022</span></SubT>
                    <TextP>Desarrollo Web</TextP>
                </div>
            </div>
        </Line>
    )
}

export default Education
