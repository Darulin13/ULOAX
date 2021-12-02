import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";
import GlobalStyle from "./GlobalStyles";
import { Slick } from "./slick";
import { Link } from "react-scroll";

export function Header() {
  const data = useStaticQuery(graphql`
    query {
      taxidata {
        headers {
          btncasa
          btneecc
          btnreserva
          btntaxi
          logo {
            url
          }
        }
      }
    }
  `);

  const {
    btncasa,
    btneecc,
    btnreserva,
    btntaxi,
    logo
  } = data.taxidata.headers[0];

  return (
    <S.Container>
      <GlobalStyle />
      <S.Navbar id="header">
        <div>
          <img src={logo.url} alt="ULOAX" />
        </div>
        <nav>
          <button>
            {" "}
            <Link to="header">{btncasa}</Link>{" "}
          </button>
          <button>
            {" "}
            <Link to="taxi">{btntaxi}</Link>{" "}
          </button>
          <button>
            {" "}
            <Link to="booking">{btnreserva}</Link>{" "}
          </button>
          <button>
            {" "}
            <Link to="contactus">{btneecc}</Link>{" "}
          </button>
        </nav>
      </S.Navbar>
      <S.SlydeCarousel>
        <Slick />
      </S.SlydeCarousel>
    </S.Container>
  );
}
