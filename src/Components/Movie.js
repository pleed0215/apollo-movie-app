import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  border-radius: 2%;
  -webkit-box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
  box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
`;

export default ({ id, bgUrl }) => {
  return (
    <Link to={`/${id}`}>
      <Container bgUrl={bgUrl} />
    </Link>
  );
};
