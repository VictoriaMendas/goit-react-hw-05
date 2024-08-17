import { useSearchParams } from "react-router-dom";

export default function MoviePage() {
  // src/pages/Products.jsx

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const color = searchParams.get("color");
  const maxPrice = searchParams.get("maxPrice");

  return (
    <div>
      <p>Name: {name}</p>
      <p>Color: {color}</p>
      <p>Maximum price: {maxPrice}</p>
    </div>
  );
}
