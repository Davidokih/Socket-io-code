import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card2 from "./card2";

const ItemPage = () => {
	const cartData = useSelector((state) => state.myReducer.cart);
	return (
		<Container>
			<Wrapper>
				<Top>All Items</Top>
				{cartData?.map((props) => (
					<Card2 props={props} />
				))}
			</Wrapper>
		</Container>
	);
};

export default ItemPage;

const Top = styled.div`
	margin-top: 30px;
	font-size: 30px;
	font-weight: bold;
	color: black;
`;

const Container = styled.div`
	width: 100%;
	/* height: 100%; */
	min-height: 100vh;
	background-color: #334245;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Wrapper = styled.div`
	/* height: 100%; */
	min-height: 90vh;
	width: 95%;
	border: 2px solid #ffffff;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	background-color: #67848a;
	margin: 30px 0;
	flex-wrap: Wrap;
	flex-direction: column;
`;
