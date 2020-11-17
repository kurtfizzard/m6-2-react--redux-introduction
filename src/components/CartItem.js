import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { removeItem, updateQuantity } from "./../actions";

const CartItem = ({ id, title, price }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state[id]);

  // const state = {
  //   /* immutable state object */
  // };
  // const stateCopy = { ...state }; // New object we CAN mutate
  // delete stateCopy[id];

  const handleRemove = () => {
    console.log("handleRemove");
    dispatch(removeItem({ id }));
  };

  // const handleChange = () => {
  //   console.log("handleChange");
  //   dispatch(updateQuantity({ id, quantity: currentValue }));
  // };

  return (
    <Wrapper>
      <ItemDiv>
        <ItemName>{title}</ItemName>
        <Button onClick={handleRemove}>x</Button>
      </ItemDiv>
      <ItemQuantity>
        <Quantity>Quantity:</Quantity>
        <QuantityInput
          value={item.quantity}
          onChange={(e) => {
            dispatch(updateQuantity({ id, quantity: e.target.value }));
          }}
        ></QuantityInput>
      </ItemQuantity>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px dashed white;
`;

const ItemDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const ItemName = styled.p`
  font-size: 1.3em;
  padding-left: 10px;
`;

const Button = styled.button`
  background: #401f43;
  border: none;
  color: white;
  font-size: 1.5em;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const ItemQuantity = styled.div`
  align-items: center;
  background: #301732;
  display: flex;
  padding-left: 10px;
`;

const Quantity = styled.p``;

const QuantityInput = styled.textarea`
  font-weight: bold;
  height: 25px;
  margin-left: 10px;
  padding-top: 5px;
  resize: none;
  text-align: center;
  width: 25px;
`;

export default CartItem;
