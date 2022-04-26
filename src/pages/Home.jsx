// npm
import { useState, useContext } from "react";
// files
import jsonContent from "../data/homeContent.json";
import { AppContext } from "../context/AppContext";
// components
import Loader from "../components/Loader";
import ContentItem from "../components/ContentItem";
import PillsContainer from "../components/PillsContainer";
import ErrorMessage from "../components/ErrorMessage";
// images
import hero from "../assets/images/hero.jpg";

export default function Home() {
  const { categories } = useContext(AppContext);
  const [status, setStatus] = useState(1);

  // safeguard
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error ..</p>;

  const EmptyArrayMsg = categories.length === 0 && <ErrorMessage />;

  const dataObj = jsonContent[Object.keys(jsonContent)[0]];
  const dataObj1 = jsonContent[Object.keys(jsonContent)[1]];
  const dataObj2 = jsonContent[Object.keys(jsonContent)[2]];

  return (
    <section className="home" id="home">
      <section className="hero">
        <img src={hero} alt="steaks cooking on bbq" className="hero-image" />
        <h1 className="title">holy bbq</h1>
      </section>
      <ContentItem>{dataObj}</ContentItem>
      <div className="banner-image top" />
      <ContentItem>{dataObj1}</ContentItem>
      <div className="banner-image bottom" />
      <article className="content">
        <ContentItem>{dataObj2}</ContentItem>
        <PillsContainer categories={categories} />
        {EmptyArrayMsg}
      </article>
    </section>
  );
}
