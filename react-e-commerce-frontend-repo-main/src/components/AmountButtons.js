import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ amount, increment, decrement }) => {
	return (
		<Wrapper className="amount-btsn">
			<button className="amount-btn" type="button" onClick={decrement}>
				<FaMinus />
			</button>
			<h2 className="amount">{amount}</h2>
			<button className="amount-btn" type="button" onClick={increment}>
				<FaPlus />
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	width: 140px;
	justify-items: center;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	h2 {
		margin-bottom: 0;
	}
	button {
		background: transparent;
		border-color: transparent;
		cursor: pointer;
		padding: 1rem 0;
		width: 2rem;
		height: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	h2 {
		margin-bottom: 0;
	}
`;

export default AmountButtons;
