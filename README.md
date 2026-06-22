# LB Wholesale Bakery Bangkok Catalog

One-page responsive wholesale bakery catalog built with Next.js and Tailwind CSS.

## Edit Products

Product names, prices, pack sizes, descriptions, image filenames, and notes are all in:

`app/products.js`

Replace placeholder images by putting new files in:

`public/images/`

Then update each product's `imageFilename` in `app/products.js`.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

`http://localhost:3000`

## Notes

The contact form is a front-end placeholder in this first draft. It can later be connected to email, Line, Google Forms, or a CRM.

The Line, Facebook, and phone links currently use placeholder contact details and should be replaced with the real LB Wholesale Bakery contact information.
