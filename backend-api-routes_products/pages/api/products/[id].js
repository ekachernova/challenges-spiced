import { getProductById } from "../../../services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  // console.log("query", id);

  const product = getProductById(id);
  response.status(200).json(product);
}
