import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
import { Link } from "react-router-dom";

function Navbar() {
  const user = useSelector(selectUserName);

  console.log(user);
  return (
    <Nav>
      <Link to="/">
        <Logo>
          <img src="/images/logo.svg" alt="" />
        </Logo>
      </Link>
      {user ? (
        <>
          <NavMenu>
            <Link to="/">
              <NavMenuItem>
                <img src="/images/home-icon.svg" alt="" />
                <span>Home</span>
              </NavMenuItem>
            </Link>
            <NavMenuItem>
              <img src="/images/search-icon.svg" alt="" />
              <span>search</span>
            </NavMenuItem>

            <NavMenuItem>
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>watchlist</span>
            </NavMenuItem>

            <NavMenuItem>
              <img src="/images/original-icon.svg" alt="" />
              <span>originals</span>
            </NavMenuItem>

            <NavMenuItem>
              <img src="/images/movie-icon.svg" alt="" />
              <span>movies</span>
            </NavMenuItem>

            <NavMenuItem>
              <img src="/images/series-icon.svg" alt="" />
              <span>series</span>
            </NavMenuItem>
          </NavMenu>
          <UserImage>
            <img
              src="https://w0.peakpx.com/wallpaper/120/520/HD-wallpaper-jay-jo-flash-graphy-manhwa-wind-breaker.jpg"
              alt=""
            />
          </UserImage>
        </>
      ) : (
        <LoginButton>Login</LoginButton>
      )}
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  background-color: black;
  position: sticky;
  height: 70px;
  display: flex;
  align-items: center;
  top: 0;
  padding: 0 3vw;
  z-index: 99;
`;

const Logo = styled.div`
  width: 80px;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 25px;
`;

const NavMenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;

  @media (max-width: 1000px) {
    display: none;
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    margin-left: 8px;
    text-transform: uppercase;
    position: relative;

    &:before {
      content: "";
      height: 2px;
      width: 100%;
      background: white;
      position: absolute;
      bottom: -6px;
      opacity: 0;
      transform: scaleX(0);
      transform-origin: left center;
      transition: all 300ms;
    }
  }

  &:hover {
    span:before {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`;

const UserImage = styled.div`
  width: 50px;
  height: 50px;
  margin-left: auto;
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const LoginButton = styled.div`
  margin-left: auto;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid rgb(249, 249, 249);
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: rgb(249, 249, 249);
    color: rgb(0, 0, 0);
    border-color: transparent;
  }
`;
