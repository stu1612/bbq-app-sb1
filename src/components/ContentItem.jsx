export default function ContentItem(props) {
  const { title, firstParagraph, secondParagraph } = props.children;
  return (
    <article className="content">
      <h2>{title}</h2>
      <p>{firstParagraph}</p>
      <p>{secondParagraph}</p>
    </article>
  );
}
