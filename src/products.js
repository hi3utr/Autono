import products from "./img/products.webp";
function Products() {
  return (
    <div className="Products">
      <div className="ProductsAbove">
        <div className="Products-left">
          <p className="ProductsName">THE AUTONO DIGITAL PRODUCTS</p>
          <p className="ProductsHeader">
            We’ve developed an app so that each vehicle can drive autonomously
            and make decisions based on real-time information and situational
            awareness.
          </p>
        </div>
        <div className="Products-right">
          <img src={products} alt="" />
        </div>
      </div>
      <div className="ProductsContent">
        <div className="ProductsContent-left">
          <p className="ProductsContent-title">ADVANCED CYBER SECURITY</p>
          <p className="ProductsContent-description">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="ProductsContent-right">
          <p className="ProductsContent-title">REAL-TIME INFORMATION</p>
          <p className="ProductsContent-description">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Products;
