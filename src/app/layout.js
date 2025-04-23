import "./globals.css";

export const metadata = {
  title: "Momento | By Dash",
  description: "Trips and Vacation Packages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
