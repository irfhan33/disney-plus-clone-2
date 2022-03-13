import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommend from "./Recommend";
import {
  onSnapshot,
  query,
  orderBy,
  collection,
  where,
} from "firebase/firestore";
import { db } from "./../firebaseConfig";
function Home() {
  const [recommends, setRecommends] = useState([]);
  const [news, setNews] = useState([]);
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "movies"), where("type", "==", "recommend")),
      (snapshot) => {
        setRecommends(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );

    onSnapshot(
      query(collection(db, "movies"), where("type", "==", "new")),
      (snapshot) => {
        setNews(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );

    onSnapshot(
      query(collection(db, "movies"), where("type", "==", "original")),
      (snapshot) => {
        setOriginals(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );

    onSnapshot(
      query(collection(db, "movies"), where("type", "==", "trending")),
      (snapshot) => {
        setTrending(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommend title="Recommend For You" movies={recommends} />
      <Recommend title="New to Disney+" movies={news} />
      <Recommend title="Originals+" movies={originals} />
      <Recommend title="Trending" movies={trending} />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  padding: 0 3vw;
  position: relative;
  min-height: calc(100vh - 70px);
  overflow: hidden;
  padding-bottom: 50px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/home-background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    z-index: -1;
    opacity: 0.8;
  }
`;
