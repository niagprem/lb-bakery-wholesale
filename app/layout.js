import "./globals.css";

export const metadata = {
  title: "LB Wholesale Bakery Bangkok",
  description:
    "Wholesale bakery products made fresh in Bangkok for cafes, hotels, restaurants, schools, and resellers."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
