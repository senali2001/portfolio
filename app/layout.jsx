import "../style.css";

export const metadata = {
  title: "Navodhya Senali",
  description:
    "Portfolio of Navodhya Senali, a full-stack developer and technology enthusiast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black">{children}</body>
    </html>
  );
}
