import React from "react";
import { useParams, Link } from "react-router-dom";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "Components/Movie";

// 배울 것: data optional chain.
// query getMovie 는 apollo를 위한 부분.
const GET_MOVIE = gql`
  query movie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_full
      rating
      language
    }

    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background: rgb(208, 75, 161);
  background: radial-gradient(
    circle,
    rgba(208, 75, 161, 1) 0%,
    rgba(244, 99, 49, 1) 100%
  );
`;
const TitleContainer = styled.div`
  width: 60%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
const Title = styled.div`
  width: 100%;
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
    margin-bottom: 15px;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const PosterContainer = styled.div`
  align-self: center;
  width: 30%;
  height: 60vh;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  border-radius: 2%;
`;

const SuggestionContainer = styled.div`
  width: 80%;
  height: 40%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 150px;
  grid-auto-flow: row;
  grid-gap: 15px;
`;

export default () => {
  let { id } = useParams();
  id = parseInt(id);
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });
  console.log(data);
  return (
    <>
      <Container>
        <TitleContainer>
          <Title>
            {loading ? (
              <h1>Now loading...</h1>
            ) : (
              data &&
              data.movie && (
                <>
                  <h1>{data.movie.title}</h1>
                  <h2>
                    {data.movie.rating} / {data.movie.language}
                  </h2>
                  <h3>{data.movie.description_full}</h3>
                </>
              )
            )}
          </Title>
          {!loading && (
            <h2
              color="white"
              style={{
                fontSize: "28px",
                marginBottom: "15px",
                marginTop: "20px",
                color: "white",
              }}
            >
              Suggestion movies...
            </h2>
          )}
          <SuggestionContainer>
            {!loading &&
              data?.suggestions.map((m) => (
                <Movie key={m.id} id={m.id} bgUrl={m.medium_cover_image} />
              ))}
          </SuggestionContainer>
        </TitleContainer>
        {data && data.movie && (
          <PosterContainer bgUrl={data.movie.medium_cover_image} />
        )}
      </Container>
    </>
  );
};
