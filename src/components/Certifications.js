import React from 'react'
import styled from 'styled-components'
import { SubT, TextP } from '../styles/DetailsStyled'
import { H2Styled } from '../styles/H2Styled'

const Line = styled.div`
border-style: solid;
  border-color: yellow;
`


const Certifications = () => {
    return (
        <Line>
            <H2Styled name="Certificaciones" />
            <div className='Education-container'>
                <div className='Education-item'>
                    <SubT>Academia Geek</SubT>
                    <SubT>FreecodeCamp</SubT>
                </div>
            </div>
        </Line>
    )
}

export default Certifications
