const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("MONGO CONNCTED");
  })
  .catch(() => {
    console.log("MONGO ERROR");
  });

const p = new Product({
  name: "Ruby Grabefruit",
  price: 1.99,
  catagory: "fruit",
});

p.save()
  .then((p) => {
    console.log(p);
  })
  .catch((e) => {
    console.log(e);
  });

const seedProducs = [
  {
    name: "Fairy Eggplant",
    price: 1.0,
    catagory: "vegetable",
  },
  {
    name: "Organic Melon",
    price: 4.99,
    catagory: "fruit",
  },
  {
    name: "Organic Mini Seedless Melon",
    price: 3.99,
    catagory: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.5,
    catagory: "vegetable",
  },
  {
    name: "Chocolate Whole Milk",
    price: 2.99,
    catagory: "dairy",
  },
];

Product.insertMany(seedProducs)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
