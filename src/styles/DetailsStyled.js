import React from "react";
import styled from "styled-components";

export const Progress = styled.progress`
background-color: black;
width: 100px;
::-webkit-progress-bar {
   background-color: teal;
}
::-webkit-progress-value {
    background-color: navy;
}
`

export const SubT = styled.h3`
font-size: 19px;
align-text: center;
`

export const TextP = styled.p`
font-size: 15px;
align-text: center;
`

export const Label = styled.label`
font-size: 15px
`
