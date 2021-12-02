import styled from "styled-components";

export const Container = styled.section`
    display:flex;
    flex-direction:column;
`;
export const Navbar = styled.div`
    height:10vh;
    background: rgba(19,19,19,1);

    display:flex;
    align-items: center;
    justify-content: space-around;
    border-bottom:solid  rgba(0,0,0,1) 2px;
    nav{
        width:50%;
        display:flex;
        align-items: center;
        justify-content: space-around;
    }
    button{
        margin-top:5px;
        background:none;
        color:white;
        height: 8vh;
        font-size:1rem;
        border:none;
        &:hover {
            color:#fd7e14;
            transition: ease 370ms;
            transition-delay: 500ms;
            filter: brightness(175%);
        }
    }
`;
export const SlydeCarousel = styled.div`
    background: rgba(19,19,19,1);
    box-shadow: inset 0 -40px 50px 0 rgba(0,0,0,1);
    color:red;
    width:100%;
`;
////////////Slick.js//////////////
export const SliderFace = styled.div`
    display:flex;
`;
export const DivCar = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    width:50%;
    div{
        filter: brightness(160%);
        background:#fd7e14;
        display:flex;
        width:25rem;
    }
    p{
        text-align:center;
        font-size:2.5rem;
        color:black;
        &::before {
            content: "AGENDE AGORA";
            color: white;
            position: absolute;
        }
    }
    figure{
        width:30rem;
    }
    img{
        width:100%;
    }
`;
export const DivReserva = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    width:50%;
    color:#fff;
    div{
        font-size:1.6rem;
        width:36rem;
    }
    nav{
        color:#000;
        background:#fff;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
        gap:1rem;
        width:36rem;
        height:20rem;
    }
    h2{
        font-weight: lighter;
    }
    input{
        width:90%;
        height:2rem;
        background:#eee;
        border:none;
    }
    button{
        align-self:flex-end;
        margin:1rem;
        color:#eee;
        background: rgba(19,19,19,1);
        border:none;
        border-radius:5px;
        width:7rem;
        height:3rem;
        filter: brightness(160%);
        font-size:1.6rem;

    }
`;
//////////////////////////////////