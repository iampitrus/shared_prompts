// We can define Metadata in two ways: Static and Dynamic.

// Static Metadata
export const metadata = {
  title: "Home",
};

// OutPut:
{
  /* <head>
  <title>Home</title>
</head> */
}

// Dynamic Metadata
export async function dynamicMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);
  return { title: product.title };
}
// OutPut:
{
  /* <head>
  <title>My Unique Product</title>
</head> */
}

export default function staticMetadata() {
  return <h1>My Normal Next.js Page with Static Metadata</h1>;
}
