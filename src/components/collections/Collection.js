import React from 'react'
import styled from 'styled-components'

const collection = () => {
    return (
        <Container>
            <Wrapper>
                <h1>Collections</h1>

                <General>
                    <Holder>
                        <img src='/images/IMG-20220512-WA0015.jpg' />
                        <Hold>
                            <Content>Title</Content>
                        </Hold>
                    </Holder>
                    <Holder>
                        <img src='/images/IMG-20220512-WA0015.jpg' />
                        <Hold>
                            <Content>Title</Content>
                        </Hold>
                    </Holder>
                    <Holder>
                        <img src='/images/IMG-20220512-WA0015.jpg' />
                        <Hold>
                            <Content>Title</Content>
                        </Hold>
                    </Holder>
                    <Holder>
                        <img src='/images/IMG-20220512-WA0015.jpg' />
                        <Hold>
                            <Content>Title</Content>
                        </Hold>
                    </Holder>
                </General>
            </Wrapper>
        </Container>
    )
}

export default collection


const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-top: 50px; */
`
const Wrapper = styled.div`
    margin-top: 50px; 
`
const General = styled.div`
width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width:800px){
        width: 90%;
        flex-direction: column;
    }
`
const Holder = styled.div`
    

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    
    img{
        width: 250px;
        border-radius: 5px;
        margin: 10px;
    }

   
`
const Hold = styled.div`
    display: flex;
`
const Content = styled.div`
    text-align: center;
`