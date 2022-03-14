import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Content>
        <Wrap>
          <img src="/images/viewers-disney.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-pixar.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-marvel.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-starwars.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-national.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source
              src="/videos/1564676296-national-geographic.mp4"
              type="video/mp4"
            />
          </video>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 20px;
  z-index: 1;
`;

const Content = styled.div`
  display: grid;
  gap: 25px;
  margin-top: 20px;
  padding: 20px 0;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  /* grid-auto-rows: 200px; */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;
  overflow: hidden;
  border: 4px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }

  video {
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    &:last-child {
      display: none;
    }
  }

  @media (max-width: 400px) {
    &:last-child {
      display: none;
    }
  }
`;
