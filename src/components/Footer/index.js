import React from "react";
import * as S from "./styles";
import { Link } from "react-scroll";
import { graphql, useStaticQuery } from "gatsby";

export function Footer() {
  const data = useStaticQuery(graphql`
    query {
      taxidata {
        footers {
          address
          lorem
          links
          home
          about
          taxi
          booking
          contactus
          followus
          facebook
          copyright
          twitter
          linkedin
          youtube
          instagram
          iconfacebook {
            url
          }
          icontwitter {
            url
          }
          iconyoutube {
            url
          }
          iconinstagram {
            url
          }
          icon {
            url
          }
          iconlinkedin {
            url
          }
          newsletter
          subscribe
        }
      }
    }
  `);
  const {
    address,
    lorem,
    links,
    home,
    about,
    taxi,
    booking,
    contactus,
    followus,
    facebook,
    twitter,
    linkedin,
    youtube,
    instagram,
    icon,
    iconfacebook,
    icontwitter,
    iconyoutube,
    iconinstagram,
    iconlinkedin,
    newsletter,
    copyright,
    subscribe
  } = data.taxidata.footers[0];

  console.log("teste", data);

  return (
    <>
      <S.Transitionfooter>
        <p>Esater-egg</p>
      </S.Transitionfooter>
      <S.Container id="contactus">
        <S.Box>
          <S.Title>{address}</S.Title>
          <p>{lorem}</p>
        </S.Box>
        <S.Box>
          <S.Title>{links}</S.Title>
          <section>
            <nav>
              <ul>
                <li>
                  <img src={icon.url} alt="icon " />
                  <a>
                    {" "}
                    <Link to="header">{home}</Link>
                  </a>
                </li>
                <li>
                  <img src={icon.url} alt="icon " />
                  <a>
                    {" "}
                    <Link to="header">{about}</Link>
                  </a>
                </li>
                <li>
                  <img src={icon.url} alt="icon " />
                  <a>
                    {" "}
                    <Link to="header">{taxi}</Link>
                  </a>
                </li>
                <li>
                  <img src={icon.url} alt="icon " />
                  <a>
                    <Link to="header">{booking}</Link>
                  </a>
                </li>
                <li>
                  <img src={icon.url} alt="icon " />
                  <a>
                    <Link to="header">{contactus}</Link>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </S.Box>
        <S.Box>
          <S.Title>{followus}</S.Title>
          <section>
            <nav>
              <ul>
                <li>
                  <img src={iconfacebook.url} alt="icon Facebook" />
                  <a>
                    {" "}
                    <Link to="header">{facebook}</Link>
                  </a>
                </li>
                <li>
                  <img src={icontwitter.url} alt="Icon Twitter" />
                  <a>
                    {" "}
                    <Link to="header">{twitter}</Link>
                  </a>
                </li>
                <li>
                  <img src={iconlinkedin.url} alt="Icon linkedin" />
                  <a>
                    {" "}
                    <Link to="header">{linkedin}</Link>
                  </a>
                </li>
                <li>
                  <img src={iconyoutube.url} alt="Icon Youtube" />
                  <a>
                    {" "}
                    <Link to="header"> {youtube}</Link>
                  </a>
                </li>
                <li>
                  <img src={iconinstagram.url} alt="Icon Instagram" />
                  <a>
                    {" "}
                    <Link to="header"> {instagram}</Link>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </S.Box>
        <S.Box>
          <S.Title>{newsletter}</S.Title>
          <article>
            <input />
            <button>{subscribe}</button>
          </article>
        </S.Box>
      </S.Container>
      <S.Copy>
        <p>{copyright}</p>
      </S.Copy>
    </>
  );
}
