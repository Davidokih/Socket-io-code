import React from 'react'
import styled from 'styled-components'
import { AiTwotoneMail } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <Container>
            <h1>MrGents Wardrobe</h1>
            <Wrapper>
                <Holder1>
                    <Nav><GoLocation /> <p>Jimoh Ojora of Ojo Road</p></Nav>
                    <Nav><AiTwotoneMail /> <p>David@gmaail.come</p></Nav>
                    <Nav><FiPhoneCall /> <p>+2349162822742</p></Nav>
                </Holder1>
                <Holder2>
                    <Nav>About</Nav>
                    <Nav>Contact</Nav>
                    <Nav>Collection</Nav>
                </Holder2>
                <Holder3>
                    <span><FaFacebook /></span>
                    <span><FaInstagram /></span>
                    <span><FaTwitter /></span>
                </Holder3>
            </Wrapper>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    background-color: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px){
        flex-direction: column;
    }
`
const Holder1 = styled.div``
const Nav = styled.div`
width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Holder2 = styled.div``
const Holder3 = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-between;
`