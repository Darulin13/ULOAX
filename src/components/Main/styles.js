import styled from "styled-components";

export const Container = styled.section`
    display: flex ;
    flex-direction:column;
`;



/*Section01 Nosso Taxi */
export const NavContainer =styled.section`
    margin-top:5rem;
    height:45rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background: rgba(16,21,25,1);
    box-shadow: inset 0 0 100px 0 rgba(0,0,0,1);
`;
export const NavTitle = styled.div`
    width:100%;
    display: flex ;
    justify-content:center;
    h1{
        font-size:3rem;
        color:#fd7e14;
        filter: brightness(175%);
        &::before {
            content: "Nosso";
            color: white;
            position: absolute;
          }
    }
`;
export const NavHub = styled.nav`
    display:flex;
    align-items: center;
    justify-content: space-evenly;
`;
export const NavCards = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:end;
    margin-top:1rem;
    background:#fff;
    width:20rem;
    height:25rem;
    postion:absolute;
    span{
        display:flex;
        align-items:center;
        justify-content:center;
        position:relative;
        top:-1.3rem;
        width:4rem;
        height:4rem;
        background:#fd7e14;
        filter: brightness(175%);
        border-radius:50%;
    }
    h2{
        text-align:center;
        font-size:2rem;
        color:#fff;
    }
    h3{
        font-size:1.5rem;
    }
    p{
        font-size:1.2rem;
        text-align:center;
        width:11rem;
    }
    img{
        width:100%;
    }
`;
//////////////Section01///////////////////



/*Section02 Por que andar com Uloax */
export const AboutContainer = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
`;
export const AboutTitle = styled.div`
    display:flex;
    justify-content:center;
    h2{
        width:30rem;
        text-align:center;
        border-bottom:#000 solid 1px;
        font-size:3.5rem;
        color:#fd7e14;
        filter: brightness(175%);
        &::before {
            content: "Por que andar";
            color: black;
            position: absolute;
          }
    }
`;
export const AboutContent = styled.div`
    display:flex;
    width:87vw;
    justify-content:center;
    align-items:center;
    h3{
        font-size:2rem;
        font-weight: lighter;
    }
    p{
        font-size:1.1rem;
    }
    button{
        background:#fd7e14;
        filter: brightness(175%);
        color:white;
        width: 10rem;
        height:4rem;
        font-size:1rem;
        border:none;
        align-self:end;
        display:flex;
        align-items:center;
        justify-content:center;
        &:hover {
            color:#fff;
            background:black;
            transition: ease 600ms;
            transition-delay: 100ms;
            filter: brightness(95%);
        }
        
    }
`;
export const SimbligsEnd = styled.div`
    display:flex;
    flex-direction:column;
    text-align:end;
`;
////////////////Section02//////////////////



/*Section03 Baixe Nosso App*/
export const LocationContainer = styled.section`
    display: flex;
    justify-content: flex-end;
    background: url(${props => props.back});
    background-size: cover;
    margin-bottom:5rem;
    span{
        height:40rem;
        display: flex;
        align-items: center;

    }
    div{
        height:10rem;
        width:25rem;
        margin-top:-18rem;
    }
    h2{
        font-size:3rem;
        font-weight: lighter;
        align-text:center;
        color:#fff;
        filter: brightness(99%);
        &::before {
            content: "BAIXE";
            color: black;
            position: absolute;
          }
    }
`;
export const LocationFigure = styled.figure`
    display: flex;
    justify-content: flex-end;
    img{
        width:80%;
    }
`;
//////////////////Section03////////////////////