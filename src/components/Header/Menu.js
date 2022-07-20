import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const menu = () => {
    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}><Nav>Home</Nav></Link>
                <Link to="/collection" style={{ textDecoration: "none", color: "black" }}><Nav>Collection</Nav></Link>
                <Link to="/about" style={{ textDecoration: "none", color: "black" }}><Nav>About</Nav></Link>
                <Nav>Contact</Nav>
                <Link to="/signIn" style={{ textDecoration: "none", color: "black" }}><button>Log In</button></Link>
            </Wrapper>
        </Container>
    )
}

export default menu

const Container = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;

    /* color: #fff;  */
`
const Wrapper = styled.div`

    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 3;
    /* background-color: red; */

    button{
        width: 80px;
        height: 30px;
        border: 1px solid #000;
        background-color: transparent;
        /* color: #fff;  */
        cursor: pointer;
    }
`
const Nav = styled.div`
    font-weight: 700;
    cursor: pointer;
`