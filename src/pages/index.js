import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Index() {
  return (
    <div>
      <Header/>
      <Main />
      <Footer />
    </div>
  );
}
