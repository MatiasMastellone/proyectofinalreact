import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return products.map((products) => (
    <Item key={products.id} product={products} />
  ));
};
