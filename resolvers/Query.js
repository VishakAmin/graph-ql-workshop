const {products} = require('../db')

exports.Query = {
  hello: () => {
    return [5,6,7,8];
  },
  numberOfProducts: () => {
    return 85;
  },
  products: () => {
    return products
  },

  product: (parent, args, context) => {
      const productId = args.id;
      console.log(context);
      return products.find((item)=> item.id === productId)
  }
}

