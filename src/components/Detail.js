import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getDoc(doc(db, "movies", id))
      .then((snapshot) => {
        setMovie(snapshot.data());
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Container>
      {movie && (
        <>
          <BackgroundImg src={movie.backgroundImg} />
          <TitleImg src={movie.titleImg} />
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" />
              <span>Play</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="" />
              <span>Play</span>
            </TrailerButton>
            <AddButton>+</AddButton>
            <WatchButton>
              <img src="/images/group-icon.png" alt="" />
            </WatchButton>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  padding: 0 3vw;
  position: relative;
  min-height: calc(100vh - 70px);
`;

const BackgroundImg = styled.img`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  opacity: 0.6;
  z-index: -2;
`;

const TitleImg = styled.img`
  max-width: 35%;
  height: auto;
  padding: 50px 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;
const PlayButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 1.8px;
  line-height: 1.6;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  color: rgb(0, 0, 0);
  transition: all 250ms;

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  transition: all 250ms;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const AddButton = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const WatchButton = styled(AddButton)``;

const SubTitle = styled.p`
  color: rgb(249, 249, 249);
  font-size: 15px;
  padding-top: 10px;
`;

const Description = styled.p`
  line-height: 1.4;
  font-size: 20px;
  color: rgb(249, 249, 249);
  max-width: 900px;
`;
