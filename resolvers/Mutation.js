const { v4: uuid } = require("uuid");

exports.Mutation = {
  addProduct: (parent, args, { products }) => {
    console.log(args);
    const { title, description, quantity, price, image, category } = args.input;

    const newProduct = {
      id: uuid(),
      title,
      description,
      quantity,
      price,
      image,
      category,
    };

    products.push(newProduct)
    return true;
  },
};
