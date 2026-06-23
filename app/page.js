import { existsSync } from "fs";
import path from "path";
import MobileMenu from "./MobileMenu";
import { productCategories, products } from "./products";

const phoneNumber = "064-876-3913";
const lineUrl = "https://line.me/R/ti/p/@lbwholesale";
const fallbackImage = "/images/bakery-placeholder.svg";

function slugify(value) {
  return value.toLowerCase().replace(/\s+|\//g, "-").replace(/-+/g, "-");
}

const navItems = [
  ...productCategories.map((categoryInfo) => ({
    label: categoryInfo.title,
    href: `#${slugify(categoryInfo.title)}`
  })),
  { label: "Contact", href: "#contact" }
];

function imagePathFor(imageFilename) {
  if (!imageFilename) {
    return fallbackImage;
  }

  const publicPath = path.join(process.cwd(), "public", imageFilename.replace(/^\/+/, ""));
  return existsSync(publicPath) ? imageFilename : fallbackImage;
}

function hasRealProductPhoto(imageFilename) {
  if (!imageFilename || !/\.(jpe?g|png|webp)$/i.test(imageFilename)) {
    return false;
  }

  const publicPath = path.join(process.cwd(), "public", imageFilename.replace(/^\/+/, ""));
  return existsSync(publicPath);
}

function formatPrice(price) {
  if (!price) {
    return "Wholesale pricing available";
  }

  if (price.includes(" THB ")) {
    return price;
  }

  if (price.endsWith(" THB")) {
    return price;
  }

  return `${price} THB`;
}

function formatSingleOptionPrice(price, salesUnit) {
  const formattedPrice = formatPrice(price);

  if (!price || !salesUnit || formattedPrice.includes(salesUnit)) {
    return formattedPrice;
  }

  return `${formattedPrice} ${salesUnit}`;
}

function normalizeProductGroups(categoryProducts) {
  const productGroups = [];
  const productIndexByName = new Map();

  categoryProducts.forEach((product) => {
    if (product.options?.length) {
      productGroups.push(product);
      return;
    }

    if (!product.optionName) {
      productGroups.push(product);
      return;
    }

    const existingIndex = productIndexByName.get(product.productName);
    const option = {
      optionName: product.optionName,
      specifications: product.specifications,
      price: product.price,
      salesUnit: product.salesUnit
    };

    if (existingIndex === undefined) {
      productIndexByName.set(product.productName, productGroups.length);
      productGroups.push({
        category: product.category,
        displayOrder: product.displayOrder,
        productName: product.productName,
        note: product.note,
        active: product.active,
        imageFilename: product.imageFilename,
        options: [option]
      });
      return;
    }

    const existingProduct = productGroups[existingIndex];
    existingProduct.options.push(option);
    if (!existingProduct.note && product.note) {
      existingProduct.note = product.note;
    }
  });

  return productGroups;
}

function ProductCard({ product }) {
  const hasMultipleOptions = product.options?.length > 1;
  const singleOption = product.options?.length === 1 ? product.options[0] : product;
  const imageSrc = imagePathFor(product.imageFilename);
  const singleSalesUnit = singleOption.salesUnit || product.packSize;
  const singlePrice = formatSingleOptionPrice(singleOption.price, singleSalesUnit);

  return (
    <article className="overflow-hidden rounded-lg border border-[#eadfce] bg-white shadow-[0_10px_28px_rgba(65,43,24,0.07)]">
      <div className="aspect-[1.28/1] bg-white">
        <img
          src={imageSrc}
          alt={`${product.productName} product placeholder`}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="space-y-1 p-5">
        <div>
          <h3 className="text-2xl font-black leading-[1.08] text-[#201913]">
            {product.productName}
          </h3>
        </div>
        {hasMultipleOptions ? (
          <div className="space-y-3 pt-1">
            {product.options.map((option) => (
              <div
                key={option.optionName}
                className="border-t border-[#eadfce] pt-3 first:border-t-0 first:pt-0"
              >
                <p className="text-sm font-black leading-tight text-[#201913]">
                  {option.optionName}
                </p>
                <p className="text-xl font-black leading-none text-[#24180f]">
                  {formatPrice(option.price, option.salesUnit)}
                </p>
                <p className="text-sm leading-tight text-[#5a4a3b]">
                  {[option.specifications, option.salesUnit].filter(Boolean).join(" • ")}
                </p>
              </div>
            ))}
            {product.note ? (
              <p className="text-sm font-semibold leading-none text-[#8b5932]">
                {product.note}
              </p>
            ) : null}
          </div>
        ) : (
          <>
            <p className="text-xl font-black leading-none text-[#24180f]">
              {singlePrice}
            </p>
            <p className="text-sm leading-tight text-[#5a4a3b]">
              {singleOption.specifications}
            </p>
            {product.note ? (
              <p className="text-sm font-semibold leading-none text-[#8b5932]">
                {product.note}
              </p>
            ) : null}
          </>
        )}
      </div>
    </article>
  );
}

function CategorySection({ categoryInfo }) {
  const sourceCategories = categoryInfo.sourceCategories ?? [categoryInfo.category];
  const categoryProducts = products
    .filter(
      (product) =>
        sourceCategories.includes(product.category) &&
        (product.active ?? "yes").toLowerCase() === "yes" &&
        (categoryInfo.category !== "Desserts" || hasRealProductPhoto(product.imageFilename))
    )
    .sort((a, b) => a.displayOrder - b.displayOrder);
  const groupedProducts = normalizeProductGroups(categoryProducts);
  const bannerImage = imagePathFor(groupedProducts[0]?.imageFilename);

  return (
    <section id={slugify(categoryInfo.title)} className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1800px]">
        <div className="overflow-hidden rounded-lg border border-[#eadfce] bg-[#1a120c]">
          <div className="relative min-h-[78px] sm:min-h-[92px]">
            <img
              src={bannerImage}
              alt={`${categoryInfo.title} category banner`}
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/76 via-black/34 to-black/8" />
            <div className="relative flex min-h-[78px] max-w-3xl flex-col justify-end p-5 text-white sm:min-h-[92px]">
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                {categoryInfo.title}
              </h2>
              {categoryInfo.description ? (
                <p className="mt-2 max-w-xl whitespace-pre-line text-lg leading-6 text-[#fff4e6]">
                  {categoryInfo.description}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {groupedProducts.length ? (
          <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {groupedProducts.map((product) => (
              <ProductCard key={product.productName} product={product} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-[#fff8ed] text-[#201913]">
      <header className="relative sticky top-0 z-50 border-b border-[#e5d6c1] bg-[#fffaf2]/96 shadow-[0_6px_18px_rgba(55,36,20,0.05)] backdrop-blur">
        <nav className="mx-auto flex max-w-[1800px] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="min-w-0 flex-1">
            <span className="whitespace-nowrap text-xl font-black text-[#111] sm:text-[24px] lg:text-[28px]">
              LB Bakery Wholesale 
            </span>
          </a>

          <div className="hidden items-center gap-6 text-[18px] font-semibold text-[#16120e] lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-transparent py-2 hover:border-[#9b6237]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={`tel:${phoneNumber.replaceAll("-", "")}`}
            className="hidden shrink-0 rounded-md border border-[#8c5a35] px-4 py-3 text-base font-black text-[#432817] hover:bg-[#f7ecdc] lg:inline-flex"
          >
            {phoneNumber}
          </a>
          <MobileMenu items={navItems} phoneNumber={phoneNumber} />
        </nav>
      </header>

      <section id="home" className="phone-hero relative h-[420px] overflow-visible bg-[#1b120b] sm:h-[460px] lg:h-[520px]">
        <img
          src="/images/hero.jpg"
          alt="Assorted fresh bakery breads"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="phone-hero-inner relative z-10 mx-auto flex h-full max-w-[1800px] items-center px-6 pb-0 pt-1 sm:px-10 sm:py-4 lg:px-16 lg:py-4">
          <div className="phone-hero-content w-full max-w-[900px] translate-y-0 text-left text-white">
            <h1 className="phone-hero-title pt-4 text-left text-[26px] font-black leading-[1.25] sm:pt-0 sm:text-[48px] sm:leading-[1.05] lg:text-[60px]">
              Fresh Baked Products
              <br />
              Your Customers Will Love
            </h1>
            <p className="phone-hero-tagline mt-3 block max-w-[310px] text-left text-[18px] font-light italic leading-[1.35] text-white sm:mt-7 sm:max-w-[720px] sm:text-[26px] sm:leading-[1.35]">
              Wholesale Bakery for Hotels,
              <br />
              Caf&eacute;s &amp; Caterers Across Thailand
            </p>
            <div className="phone-hero-action mt-[26px] flex flex-row items-center gap-[18px] sm:mt-9 sm:gap-8">
              <img
                src="/images/lb-logo.png"
                alt="LB Bakery logo"
                className="h-20 w-30 shrink-0 object-contain sm:h-[168px] sm:w-72"
              />
              <a
                href="#contact"
                className="inline-flex rounded-md bg-[#9b6237] px-7 py-4 text-base font-black uppercase tracking-[0.06em] text-white hover:bg-[#84512c] sm:px-9 sm:py-[21px]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2dfc5] px-6 py-9 text-[#201913] sm:px-10">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-4 text-[22px] leading-8 lg:flex-row lg:items-center lg:justify-center lg:gap-6 lg:text-[24px]">
          <p>
            ✓ <strong className="font-black">Minimum Order:</strong> 1,000 THB (Mix &amp; Match)
          </p>
          <span className="hidden lg:inline" aria-hidden="true">•</span>
          <p>
            ✓ <strong className="font-black">Delivery:</strong> Throughout Thailand
          </p>
          <span className="hidden lg:inline" aria-hidden="true">•</span>
          <p>
            ✓ <strong className="font-black">Additional Discounts:</strong> on Large Orders
          </p>
        </div>
      </section>

      <div id="products" className="-mt-10 pb-10">
        {productCategories.map((categoryInfo) => (
          <CategorySection key={categoryInfo.category} categoryInfo={categoryInfo} />
        ))}
      </div>

      <footer id="contact" className="bg-[#f2dfc5] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-[44px] font-black leading-tight text-[#201913]">Contact LB Wholesale Bakery</h2>
            <p className="mt-3 text-xl leading-8 text-[#51463b]">
              Send your product list, quantities, business type, and delivery location.
            </p>
          </div>
          <div className="grid gap-4 sm:min-w-[368px]">
            <a
              href={`tel:${phoneNumber.replaceAll("-", "")}`}
              className="rounded-md bg-[#8c5a35] px-7 py-5 text-center text-[24px] font-black text-white hover:bg-[#754929]"
            >
              Phone {phoneNumber}
            </a>
            <div className="flex flex-col items-center gap-3">
              <p className="text-xl font-black text-[#201913]">Scan to Contact Us on LINE</p>
              <a href={lineUrl} aria-label="Contact LB Wholesale Bakery on LINE">
                <img
                  src="/images/Line-QR.jpg"
                  alt="LINE contact QR code"
                  className="h-44 w-44 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
