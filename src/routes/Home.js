import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "Components/Movie";

const GET_MOVIES = gql`
  {
    movies(limit: 100, minimum_rating: 5) {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(208, 75, 161);
  background: radial-gradient(
    circle,
    rgba(208, 75, 161, 1) 0%,
    rgba(244, 99, 49, 1) 100%
  );
`;
const Title = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 50px;
    margin-bottom: 15px;
  }
  h2 {
    font-size: 35px;
    font-style: italic;
  }
`;
const MoviesContainer = styled.div`
  width: 80%;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 250px;
  grid-gap: 15px;
  position: relative;
  top: -50px;
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);
  return (
    <Container>
      <TitleContainer>
        <Title>
          {loading ? (
            <h1>Now Loading...</h1>
          ) : (
            <>
              <h1>Apollo Movies</h1>
              <h2>movie show app using graphql-apollo</h2>
            </>
          )}
        </Title>
      </TitleContainer>
      <MoviesContainer>
        {data &&
          data.movies &&
          data.movies.map((m) => (
            <Movie key={m.id} id={m.id} bgUrl={m.medium_cover_image} />
          ))}
      </MoviesContainer>
    </Container>
  );
};
