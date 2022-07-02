import React, { useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "../Demo";
import logo from "../assets/images/logo.jpg";

const mainNav = [
  {
    display: "Главная",
    path: "/",
  },
  {
    display: "Католог",
    path: "/catalog",
  },
  {
    display: "Аксессуары",
    path: "/akes",
  },
  {
    display: "Отзывы",
    path: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right ">
            <div className="header__menu__item header__menu__right__item">
              <div className="ins">
                <p>
                  <a href="tel:+996708287676">
                    <img src="/images/tel.png" width={32} />
                  </a>
                </p>
                <p>
                  <a href="https://www.whatsapp.com/?lang=ru">
                    {" "}
                    <img className="wats" width={60} src="/images/wat.png" />
                  </a>
                </p>
                <p>
                  <a href="https://www.instagram.com/">
                    {" "}
                    <img src="/images/ins.png" width={30} />
                  </a>
                </p>
              </div>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <StyledEngineProvider injectFirst>
                <Demo />
                <i className="bx bx-shopping-bag"></i>
              </StyledEngineProvider>
            </div>
            <div className="header__menu__item header__menu__right__item"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
