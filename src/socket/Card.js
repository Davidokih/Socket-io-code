import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiFillDislike, AiTwotoneLike } from "react-icons/ai";
import { io } from "socket.io-client";
import LikeComp from './LikeComp';

import axios from 'axios';
const socket = io("http://localhost:2000");
const Card = () => {

    const [ text, setText ] = useState("");
    const [ data, setData ] = useState([]);

    const getData = () => {
        axios.get("http://localhost:2000/api").then((res) => {
            setData(res.data.data);
        });
    };
    console.log(data);
    const dataPost = () => {
        axios.post("http://localhost:2000/api/create", { name: text });
    };


    useEffect(() => {
        getData();

        socket.on("newEntry", (newData) => {
            setData([ ...data, newData ]);
            console.log(newData);
        });
    }, [ data ]);
    return (
        <Container>
            <InputHold>
                <div>
                    Enter Your Name
                </div>
                <Input placeholder="Enter name" value={ text } onChange={ (e) => {
                    setText(e.target.value);
                } } />
                <button onClick={ dataPost }>Submit</button>
            </InputHold>
            { data?.map((props) => (
                <Card2 key={ props._id }>
                    <ImageHold>
                        <Image></Image>
                    </ImageHold>
                    <User>{ props.name }</User>

                    <LikeHold>
                        <Div>
                            <LikeComp props={ props } />
                            { props.like.length }
                        </Div>
                        {/* <div>
                        <Disike />
                        0
                    </div> */}

                    </LikeHold>
                </Card2>
            )) }
        </Container>
    );
};

export default Card;

const Input = styled.input`
    width: 200px;
    height: 20px;
    margin: 20px;
    outline: none;
`;
const Div = styled.div`
    display: flex;
`;
const InputHold = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
`;
const LikeHold = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-between;
`;
const Image = styled.div`
    width: 95px;
    height: 95px;
    border-radius: 50%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 70px;
    font-weight: 700;
    color: white;
`;
const ImageHold = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid gold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;
const Disike = styled(AiFillDislike)`
    font-size: 20px;
`;
const Like = styled(AiTwotoneLike)`
    font-size: 20px;
`;
const User = styled.div`
    font-size: 20px;
    font-weight: 800;
    font-family: Darlin in paris;
    margin: 10px;
`;
const Card2 = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px;
    /* box-shadow: ; */
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;