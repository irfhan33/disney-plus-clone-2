import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../features/user/userSlice";

function Login() {
  const dispatch = useDispatch();

  const Signin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(
          setUserLogin({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          })
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Container>
      <Content>
        <LogoOne>
          <img src="/images/cta-logo-one.svg" alt="" />
        </LogoOne>
        <CTA onClick={Signin}>Get all there</CTA>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <LogoTwo>
          <img src="/images/cta-logo-two.png" alt="" />
        </LogoTwo>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.section`
  padding: 3vw;
  display: flex;
  align-items: center;
  position: relative;
  min-height: calc(100vh - 70px);
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: url("/images/login-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    background-attachment: fixed;
  }
`;

const Content = styled.div`
  max-width: 650px;
  text-align: center;
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoOne = styled.div`
  width: 90%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Description = styled.div`
  color: rgb(243, 243, 243);
  font-size: 11px;
  margin: 0px 0px 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const LogoTwo = styled.div`
  width: 90%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CTA = styled.div`
  font-weight: 900;
  color: rgb(249, 249, 249);
  background-color: rgb(0, 99, 229);
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0px;
  border: 1px solid transparent;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    background-color: rgb(4, 131, 238);
  }
`;
