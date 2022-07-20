import React from 'react'
import styled from 'styled-components'
import Contents from './Contents'
import Body from './Body'

const Home = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    {/* <h1>Mr Gents Wardrobe</h1>
                    <p>Mr Gents is a fashion brand that helps their customer to make cloth</p> */}
                </Wrapper>
            </Container>

            <Contents />
            <Body />
        </>
    )
}

export default Home

const Container = styled.div`
    background-color: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
`
const Wrapper = styled.div`

    width: 80%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-image: url('/images/IMG-20220512-WA0004.jpg');
    background-position: center;
    background-repeat: no-repeat;

    color: #fff;

    h1{
        font-size: 40px;
        font-weight: 700;
    }

    p{
        text-align: center;
    }
`