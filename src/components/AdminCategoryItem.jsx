export default function AdminCategoryItem({ item }) {
  const { title, id } = item;
  return (
    <div>
      <h3>{title}</h3>
      <p>{id}</p>
      <button>Delete</button>
    </div>
  );
}
