import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
        <Container>
            <h1>About Us</h1>
            <Wrapper>
                <img src="/images/IMG-20220512-WA0014.jpg" />

                <p>We are a the brand you will </p>
            </Wrapper>
        </Container>
    )
}

export default About

const Container = styled.div`
margin-top: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Wrapper = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 300px;
        /* height: 350px; */
    }
    p{
        text-align: center;
    }

    @media (max-width: 800px){
        flex-direction: column;
    }
`