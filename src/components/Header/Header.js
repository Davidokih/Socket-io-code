import React, { useState } from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const Header = () => {

    const [bar, setBar] = useState(false)

    const menuBar = () => {
        setBar(!bar)
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <Logo>MrGents</Logo>
                    <Holder>
                        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}><span>Home</span></Link>
                        <Link to="/collection" style={{ textDecoration: "none", color: "#fff" }}><span>Collection</span></Link>
                        <Link to='/about' style={{ textDecoration: "none", color: "#fff" }}><span>About Us</span></Link>
                        <span>Contact Us</span>
                        <Link to='/signIn'><button>Log In</button></Link>
                    </Holder>
                    <Icon>{bar ? (<GiHamburgerMenu size="40px" onClick={menuBar} />) : (<GiHamburgerMenu size="40px" onClick={menuBar} />)}</Icon>
                </Wrapper>
            </Container>
            {bar ? (<Menu />) : null}
        </>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    /* position: fixed; */
    color: #cbad93;
    z-index: 1;
`
const Wrapper = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.div`
    font-size: 30px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Darling in paris;
`
const Holder = styled.div`
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */

    span{
        font-size: 20px;
        font-weight: 700;
        color: #cdcdcd;
        cursor: pointer;
    }

    button{
        border: 1px solid #cdcdcd;
        outline: none;
        background-color: transparent;
        color: #fff;
        width: 80px;
        height: 30px;
        border-radius: 30px;
        cursor: pointer;
    }

    @media (max-width: 800px){
        display: none;
    }
`
const Icon = styled.div`
    display: none;
    cursor: pointer;
    @media (max-width: 800px){
        display: block;
      
        :active{
            color: #235b9b;
        }
    }
`