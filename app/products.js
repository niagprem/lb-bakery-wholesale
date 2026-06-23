/*
  LB Wholesale Bakery product catalog data

  Edit this file when categories, product order, prices, pack sizes, specifications,
  image filenames, or notes need to change. The website reads this file
  automatically and creates the product cards for each category.

  Category sections:
  - Edit productCategories to control product navigation, section order, headings,
    section intro text, and category buttons.

  Product cards:
  - category: Product category key. Bagel products use "Bagel"; other categories use Muffins, Buns, Brownies, Pies
  - active: Optional. Use "yes" for products that should display and "no" to hide.
  - displayOrder: Controls product order inside each category, lowest to highest
  - productName: Product name shown on the card
  - price: Visible price shown on the card
  - packSize: Sales unit, pack size, MOQ, or case quantity for single-option products
  - specifications: Product weight, size, or unit size for single-option products
  - note: Optional short note. Leave as "" if no note should show.
  - options: Optional array for multi-option products. Each option supports:
    optionName, specifications, price, and salesUnit.
  - imageFilename: Image path inside /public, such as /images/plain-bagel.jpg
*/

export const productCategories = [
  {
    category: "Buns",
    title: "Breads / Buns",
    buttonLabel: "View All Breads",
    description: "Photographs of Our Actual Products"
  },
  {
    category: "Bagel",
    title: "Bagels",
    buttonLabel: "View All Bagels",
    description: "Made to Order"
  },
  {
    category: "Muffins",
    title: "Muffins",
    buttonLabel: "View All Muffins",
    description: "Available Fresh or Frozen"
  },
  {
    category: "Desserts",
    sourceCategories: ["Brownies", "Pies"],
    title: "Desserts",
    buttonLabel: "View All Desserts",
    description: ""
  }
];

// Starter placeholder product entries. Replace these names, prices, specifications,
// notes, and image filenames with the final LB Bakery catalog when ready.
export const products = [
  {
    category: "Bagel",
    displayOrder: 1,
    productName: "Plain Bagel",
    price: "20 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/plain-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 2,
    productName: "Pretzel Bagel",
    price: "20 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/pretzel-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 3,
    productName: "Cheddar Cheese Bagel",
    price: "30 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/cheddar-cheese-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 4,
    productName: "Whole Wheat Bagel",
    price: "20 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/whole-wheat-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 5,
    productName: "Cranberry Bagel",
    price: "24 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/cranberry-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 6,
    productName: "Jalapeno Cheddar Bagel",
    price: "34 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/jalapeno-cheddar-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 7,
    productName: "Black & White Sesame",
    price: "20 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/blackandwhite-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 8,
    productName: "White Sesame Bagel",
    price: "20 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/white-sesame-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 9,
    productName: "Cinnamon Cranberry Bagel",
    price: "24 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/cinnamon-cranberry-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 10,
    productName: "Chocolate Bagel",
    price: "25 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "Packed with chocolate chunks inside",
    active: "yes",
    imageFilename: "/images/chocolate-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 11,
    productName: "Garlic White Bagel",
    price: "20 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/garlic-white-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 12,
    productName: "Everything Bagel",
    price: "24 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/evreything-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 13,
    productName: "Multigrain Bagel",
    price: "24 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "Contains a blend of healthy grains and seeds",
    active: "yes",
    imageFilename: "/images/multigrain-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 14,
    productName: "Cinnamon Raisin Bagel",
    price: "24 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/cinnamon-raisin-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 15,
    productName: "Blueberry Bagel",
    price: "28 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/blueberry-bagel.jpg"
  },
  {
    category: "Bagel",
    displayOrder: 16,
    productName: "Onion Bagel",
    price: "24 THB",
    packSize: "each",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/onion-bagel.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 1,
    productName: "Blueberry Crumble Muffin",
    optionName: "Snack Size",
    price: "20 THB each",
    salesUnit: "Minimum 16 pieces",
    specifications: "60 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/blueberry-crumble-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 1,
    productName: "Blueberry Crumble Muffin",
    optionName: "Full Size",
    price: "35 THB each",
    salesUnit: "Minimum 6 pieces",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/blueberry-crumble-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 2,
    productName: "Double Chocolate Chip Muffin",
    optionName: "Snack Size",
    price: "20 THB each",
    salesUnit: "Minimum 16 pieces",
    specifications: "60 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/double-chocolate-chip-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 2,
    productName: "Double Chocolate Chip Muffin",
    optionName: "Full Size",
    price: "35 THB each",
    salesUnit: "Minimum 6 pieces",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/double-chocolate-chip-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 3,
    productName: "Banana Nut Muffin",
    optionName: "Snack Size",
    price: "20 THB each",
    salesUnit: "Minimum 16 pieces",
    specifications: "60 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/banana-nut-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 3,
    productName: "Banana Nut Muffin",
    optionName: "Full Size",
    price: "35 THB each",
    salesUnit: "Minimum 6 pieces",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/banana-nut-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 4,
    productName: "Carrot Muffin",
    optionName: "Snack Size",
    price: "20 THB each",
    salesUnit: "Minimum 16 pieces",
    specifications: "60 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/carrot-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 4,
    productName: "Carrot Muffin",
    optionName: "Full Size",
    price: "35 THB each",
    salesUnit: "Minimum 6 pieces",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/carrot-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 5,
    productName: "Cinnamon Crumble Muffin",
    optionName: "Snack Size",
    price: "20 THB each",
    salesUnit: "Minimum 16 pieces",
    specifications: "60 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/cinnamon-crumble-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 5,
    productName: "Cinnamon Crumble Muffin",
    optionName: "Full Size",
    price: "35 THB each",
    salesUnit: "Minimum 6 pieces",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/cinnamon-crumble-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 6,
    productName: "Lemon Cranberry Muffin",
    optionName: "Snack Size",
    price: "20 THB each",
    salesUnit: "Minimum 16 pieces",
    specifications: "60 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/lemon-cranberry-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 6,
    productName: "Lemon Cranberry Muffin",
    optionName: "Full Size",
    price: "35 THB each",
    salesUnit: "Minimum 6 pieces",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/lemon-cranberry-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 7,
    productName: "Lemon Crumble Muffin",
    optionName: "Snack Size",
    price: "20 THB each",
    salesUnit: "Minimum 16 pieces",
    specifications: "60 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/lemon-crumble-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 7,
    productName: "Lemon Crumble Muffin",
    optionName: "Full Size",
    price: "35 THB each",
    salesUnit: "Minimum 6 pieces",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/lemon-crumble-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 8,
    productName: "Mocha Caramel Muffin",
    optionName: "Snack Size",
    price: "20 THB each",
    salesUnit: "Minimum 16 pieces",
    specifications: "60 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/mocha-caramel-muffin.jpg"
  },
  {
    category: "Muffins",
    displayOrder: 8,
    productName: "Mocha Caramel Muffin",
    optionName: "Full Size",
    price: "35 THB each",
    salesUnit: "Minimum 6 pieces",
    specifications: "100 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/mocha-caramel-muffin.jpg"
  },
  {
    category: "Buns",
    displayOrder: 1,
    productName: "Panini Buns",
    optionName: "",
    price: "24",
    salesUnit: "each",
    specifications: "20 x 8 cm - 150 gr each",
    note: "Very popular for sandwich shops",
    active: "yes",
    imageFilename: "/images/panini-bun.jpg"
  },
  {
    category: "Buns",
    displayOrder: 2,
    productName: "Hoagie Buns",
    optionName: "",
    price: "24",
    salesUnit: "each",
    specifications: "18 x 8 cm - 130 gr each",
    note: "Best Choice for Steak or Meatballs Sandwiches",
    active: "yes",
    imageFilename: "/images/hoagie-bun.jpg"
  },
  {
    category: "Buns",
    displayOrder: 6,
    productName: "Crusty Buns",
    optionName: "",
    price: "22",
    salesUnit: "each",
    specifications: "140 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/crusty-bun.jpg"
  },
  {
    category: "Buns",
    displayOrder: 5,
    productName: "Ciabatta Buns",
    optionName: "",
    price: "22",
    salesUnit: "each",
    specifications: "15x10 cm - 100 gr each",
    note: "Slightly chewy crust and airy crumb",
    active: "yes",
    imageFilename: "/images/ciabatta-bun.jpg"
  },
  {
    category: "Buns",
    displayOrder: 7,
    productName: "Soft Dinner Rolls",
    optionName: "",
    price: "80",
    salesUnit: "9 pieces",
    specifications: "",
    note: "",
    active: "no",
    imageFilename: "/images/bakery-placeholder.svg"
  },
  {
    category: "Buns",
    displayOrder: 8,
    productName: "Ciabatta Artisan Loaf",
    optionName: "",
    price: "65",
    salesUnit: "each",
    specifications: "300 gr each",
    note: "",
    active: "yes",
    imageFilename: "/images/ciabatta-artisan-loaf.jpg"
  },
  {
    category: "Buns",
    displayOrder: 3,
    productName: "Artisan Rye Bread",
    optionName: "",
    price: "129",
    salesUnit: "each",
    specifications: "700 gr each",
    note: "Perfect for Pastrami Sandwiches",
    active: "yes",
    imageFilename: "/images/artisan-rye-bread.jpg"
  },
  {
    category: "Buns",
    displayOrder: 3,
    productName: "Potato Burger Bun",
    optionName: "",
    price: "18",
    salesUnit: "each",
    specifications: "85 gr each",
    note: "Excellent for moisture retention",
    active: "yes",
    imageFilename: "/images/potato-burger-bun.jpg"
  },
  {
    category: "Buns",
    displayOrder: 4,
    productName: "Brioche Burger Bun",
    optionName: "",
    price: "18",
    salesUnit: "each",
    specifications: "85 gr each",
    note: "Rich buttery flavor and golden crust.",
    active: "yes",
    imageFilename: "/images/brioche-burger-bun.jpg"
  },
  {
    category: "Brownies",
    displayOrder: 1,
    productName: "Classic Fudge Brownies",
    price: "540 THB",
    packSize: "12 pcs / tray",
    specifications: "Cut portions",
    note: "Fresh or chilled",
    imageFilename: "/images/bakery-placeholder.svg"
  },
  {
    category: "Brownies",
    displayOrder: 2,
    productName: "Walnut Brownies",
    price: "590 THB",
    packSize: "12 pcs / tray",
    specifications: "Cut portions",
    note: "",
    imageFilename: "/images/bakery-placeholder.svg"
  },
  {
    category: "Brownies",
    displayOrder: 3,
    productName: "Brownie Slab",
    price: "Wholesale case pricing available",
    packSize: "1 slab / tray",
    specifications: "Uncut slab",
    note: "Packaging",
    imageFilename: "/images/bakery-placeholder.svg"
  },
  {
    category: "Pies",
    displayOrder: 1,
    productName: "Apple Pie",
    price: "620 THB",
    packSize: "1 whole pie",
    specifications: "8 inch",
    note: "",
    imageFilename: "/images/bakery-placeholder.svg"
  },
  {
    category: "Pies",
    displayOrder: 2,
    productName: "Blueberry Pie",
    price: "680 THB",
    packSize: "1 whole pie",
    specifications: "8 inch",
    note: "Chilled",
    imageFilename: "/images/bakery-placeholder.svg"
  },
  {
    category: "Pies",
    displayOrder: 3,
    productName: "Banana Cream Pie",
    price: "650 THB",
    packSize: "1 whole pie",
    specifications: "8 inch",
    note: "Chilled",
    imageFilename: "/images/bakery-placeholder.svg"
  },
  {
    category: "Pies",
    displayOrder: 4,
    productName: "Chocolate Cream Pie",
    price: "680 THB",
    packSize: "1 whole pie",
    specifications: "8 inch",
    note: "Chilled",
    imageFilename: "/images/bakery-placeholder.svg"
  },
  {
    category: "Pies",
    displayOrder: 5,
    productName: "Lemon Meringue Pie",
    price: "690 THB",
    packSize: "1 whole pie",
    specifications: "8 inch",
    note: "",
    imageFilename: "/images/bakery-placeholder.svg"
  },
  {
    category: "Pies",
    displayOrder: 6,
    productName: "Pecan Pie",
    price: "790 THB",
    packSize: "1 whole pie",
    specifications: "8 inch",
    note: "",
    imageFilename: "/images/bakery-placeholder.svg"
  },
  {
    category: "Pies",
    displayOrder: 7,
    productName: "Pumpkin Pie",
    price: "620 THB",
    packSize: "1 whole pie",
    specifications: "8 inch",
    note: "",
    imageFilename: "/images/bakery-placeholder.svg"
  },
  {
    category: "Pies",
    displayOrder: 8,
    productName: "Chicken Pot Pie",
    price: "720 THB",
    packSize: "6 pcs / pack",
    specifications: "Individual pies",
    note: "Frozen. Ready to bake",
    imageFilename: "/images/bakery-placeholder.svg"
  },
  {
    category: "Pies",
    displayOrder: 9,
    productName: "Beef Pot Pie",
    price: "780 THB",
    packSize: "6 pcs / pack",
    specifications: "Individual pies",
    note: "Frozen. Ready to bake",
    imageFilename: "/images/bakery-placeholder.svg"
  },
  {
    category: "Pies",
    displayOrder: 10,
    productName: "Assorted Mini Pies",
    price: "840 THB",
    packSize: "12 pcs / pack",
    specifications: "Mini size",
    note: "Packaging",
    imageFilename: "/images/bakery-placeholder.svg"
  }
];

export const categories = productCategories.map((category) => category.category);
