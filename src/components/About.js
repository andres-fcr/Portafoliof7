import React from 'react';
import { AboutS, Avatar, H2, Img, Location, Name, Profession } from '../styles/AboutStyled';

const About = () => {
    return (
        <AboutS>
                <Avatar>
                    <figure>
                        <Img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" alt="Mi Avatar" />
                    </figure>
                </Avatar>
                <Name>
                    <H2>Andres Felipe Cagua Rozo</H2>
                </Name>
                <Profession>
                    <p>Desarrollador Frontend</p>
                </Profession>
                <Location>
                    <p>Bogotá, Colombia</p>
                </Location>
                <Location>
                    Redes sociales
                </Location>
        </AboutS>

    )

}

export default About;



