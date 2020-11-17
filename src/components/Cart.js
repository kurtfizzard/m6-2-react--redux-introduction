import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import CartItem from "./CartItem";

import { getStoreItemArray } from "./../reducers";

import Button from "./Button";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  const total = useSelector((state) => {
    const values = Object.values(state);
    console.log(values);

    return values.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
  });

  return (
    <Wrapper>
      <TopDiv>
        <Header>Your Cart</Header>
        <ItemCount>{storeItems.length} Items</ItemCount>
      </TopDiv>
      <MiddleDiv>
        {storeItems.map((item) => {
          const { id, title, src, price } = item;
          return <CartItem id={id} title={title} src={src} price={price} />;
        })}
      </MiddleDiv>
      <BottomDiv>
        <Total>${total}</Total>
        <Button>Purchase</Button>
      </BottomDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #401f43;
  color: white;
  display: grid;
  grid-template-areas:
    "top"
    "middle"
    "bottom";
  height: 100%;
  padding: 20px;
  width: 100%;
`;

const TopDiv = styled.div`
  grid-area: top;
`;

const Header = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0px;
`;

const ItemCount = styled.p`
  margin: 0px;
  margin-top: 5px;
`;

const MiddleDiv = styled.div`
  grid-area: middle;
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: bottom;
  justify-content: flex-end;
`;

const Total = styled.p``;

const PurchaseButton = styled.button``;

export default Cart;
