import React from "react";
import { graphql , useStaticQuery } from "gatsby";
import * as S from "./styles";
import GlobalStyle from "./GlobalStyles";
import Slider from "react-slick";

export function Slick() {
    const data = useStaticQuery(graphql`
      query{
        taxidata{
          headers {
            paragraph
            paragraphagendeagr
            taxipng1 {
              url
            }
            taxipng2 {
              url
            }
            taxipng3 {
              url
            }
            divtitle
            btnprocurar
          }
        }
      }
    `)
    /*
     <span>
                <div>
                  <p>{paragraphagendeagr}</p>
                </div>
                <figure>
                  <img src={taxipng1.url} alt="Taxi"/>
                </figure>
              </span>
                <span>
                <div>
                  <h2>{divtitle}</h2>
                </div>
                <div>
                  <p>{paragraph}</p>
                  <input></input>
                  <input></input>
                  <input></input>
                  <button>{}</button>
                </div>
              </span>
    
    */
  
    const { 
      divtitle,
      paragraph,  
      paragraphagendeagr,  
      taxipng1,  
      taxipng2, 
      taxipng3,
      btnprocurar
    } = data.taxidata.headers[0]
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
      return (
 
        <>
          <Slider {...settings}>
            <div>
              <S.SliderFace>
                <S.DivCar>
                  <div>
                    <p>{paragraphagendeagr}</p>
                  </div>
                  <figure>
                    <img src={taxipng1.url} alt="Taxi"/>
                  </figure>
                </S.DivCar>
                <S.DivReserva>
                  <div>
                    <p>{paragraph}</p>
                  </div>
                  <nav>
                    <h2>{divtitle}</h2>
                    <input type="text" Placeholder="ESCOLHER" />
                    <input type="text" Placeholder="DERRUBAR" />
                    <input type="text" Placeholder="QUANDO" />
              
                    <button>{btnprocurar}</button>
                  </nav>
                </S.DivReserva>
              </S.SliderFace>
            </div>
            <div>
              <S.SliderFace>
                <S.DivCar>
                  <div>
                    <p>{paragraphagendeagr}</p>
                  </div>
                  <figure>
                    <img src={taxipng2.url} alt="Taxi"/>
                  </figure>
                </S.DivCar>
                <S.DivReserva>
                  <div>
                    <p>{paragraph}</p>
                  </div>
                  <nav>
                    <h2>{divtitle}</h2>
                    <input type="text" Placeholder="ESCOLHER" />
                    <input type="text" Placeholder="DERRUBAR" />
                    <input type="text" Placeholder="QUANDO" />
              
                    <button>{btnprocurar}</button>
                  </nav>
                </S.DivReserva>
              </S.SliderFace>
            </div>
            <div>
              <S.SliderFace>
                <S.DivCar>
                  <div>
                    <p>{paragraphagendeagr}</p>
                  </div>
                  <figure>
                    <img src={taxipng1.url} alt="Taxi"/>
                  </figure>
                </S.DivCar>
                <S.DivReserva>
                  <div>
                    <p>{paragraph}</p>
                  </div>
                  <nav>
                    <h2>{divtitle}</h2>
                    <input type="text" Placeholder="ESCOLHER" />
                    <input type="text" Placeholder="DERRUBAR" />
                    <input type="text" Placeholder="QUANDO" />
              
                    <button>{btnprocurar}</button>
                  </nav>
                </S.DivReserva>
              </S.SliderFace>
            </div>
          </Slider>
      </>      
  

      )
  }
  