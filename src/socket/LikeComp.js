import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AiFillDislike, AiTwotoneLike } from "react-icons/ai";


const LikeComp = ({ props }) => {

    const likePost = () => {
        axios.post(`http://localhost:2000/api/${props._id}/like`);
    };
    return (
        <div>
            <Like onClick={ likePost } />
        </div>
    );
};

export default LikeComp;

const Like = styled(AiTwotoneLike)`
    font-size: 20px;
`;