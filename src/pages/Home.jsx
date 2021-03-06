// npm
import { useState, useEffect } from "react";
// files
import { readCollection } from "../firebase/firestore";
import jsonContent from "../data/homeContent.json";
// components
import Loader from "../components/Loader";
import ContentItem from "../components/ContentItem";
import PillsContainer from "../components/PillsContainer";
import ErrorMessage from "../components/ErrorMessage";
// images
import hero from "../assets/images/hero.jpg";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(0);

  const CategoryPath = "Menu/Dishes/content/";

  useEffect(() => {
    async function loadCategories(path) {
      const itemsData = await readCollection(path);
      setCategories(itemsData);
      setStatus(1);
    }
    loadCategories(CategoryPath);
  }, []);

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
