import { Link } from "react-router-dom";

export default function ContentItem(props) {
  const { title, firstParagraph, secondParagraph, link } = props.children;

  const ContactUs = link && (
    <Link to="/contact" className="btn btn-primary">
      Contact us
    </Link>
  );
  return (
    <article className="content-item container-920">
      <h2 className="content-h2">{title}</h2>
      <p className="content-p">{firstParagraph}</p>
      <p className="content-p">{secondParagraph}</p>
      {ContactUs}
    </article>
  );
}
