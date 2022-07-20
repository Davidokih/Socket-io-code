import React from 'react'
import styled from 'styled-components'

const Body = () => {
    return (
        <Container>
            <Wrapper>
                <h1>Collections</h1>
                <Holder1>
                    <Collect>
                        <Image src="/images/IMG-20220512-WA0015.jpg" />
                        <Image src="/images/IMG-20220512-WA0016.jpg" />
                        <Image src="/images/IMG-20220512-WA0017.jpg" />

                    </Collect>
                    <Hold>
                        <Image src="/images/IMG-20220512-WA0018.jpg" />
                        <Image src="/images/IMG-20220512-WA0019.jpg" />
                        <Image src="/images/IMG-20220512-WA0020.jpg" />
                    </Hold>
                </Holder1>
                <Holder2>
                    <img src='/images/IMG-20220512-WA0023.jpg' />
                </Holder2>
            </Wrapper>
        </Container>
    )
}

export default Body

const Container = styled.div`
    width: 100%;
    margin-top: 100px;
    display: flex;
    align-items: center;
    /* background-color: red; */
    justify-content: center;
    z-index: 0;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size: 40px;
        font-weight: 800;
    }
`
const Holder1 = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 600px){
        width: 65%;
        flex-direction: column;
    }
    @media (max-width: 600px){
        width: 65%;
        flex-direction: column;
    }
`
const Image = styled.img`
    width: 300px;
    border-radius: 5px;
    margin: 10px;

    /* @media (max-width: 600px){
        width: 200px;
    } */
`
const Holder2 = styled.div`

    width: 100%;
    @media (max-width: 800px){
        img{
            width: 100%;
        }
    }
`

const Collect = styled.div`
    
`
const Hold = styled.div``