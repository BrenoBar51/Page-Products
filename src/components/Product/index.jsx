const Product = ({ classes, name, categoryName, discount, price }) => {
  return (
    <>
      <div
        className={`bg-white p-3 border-round-sm shadow-3 relative ${classes}`}
      >
        {discount != 0 && (
          <div
            className="absolute font-bold px-2 py-2 border-round-2xl uppercase text-sm"
            style={{ backgroundColor: "#E7FF86" }}
          >
            {discount}% OFF
          </div>
        )}
        <img
          className="w-full"
          src="src/components/product/assets/tenis.png"
          alt="Tenis"
        />
      </div>
      <h6 className="mt-3 text-sm text-700">{categoryName}</h6>
      <h2 className="font-light text-800 mt-2 mb-2">{name}</h2>
      <h2>
        <del className="font-light text-700">R${price}</del> R${price - (price / 100) * discount}
      </h2>
    </>
  );
};

export default Product;
