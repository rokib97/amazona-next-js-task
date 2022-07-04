import Layout from "./component/layout";
import ProductItem from "./component/ProductItem";

import data from "./utils/data";

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {data.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
