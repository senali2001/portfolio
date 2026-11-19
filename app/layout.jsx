import "../style.css";

export const metadata = {
  title: "Navodhya Senali | Software Engineering Undergraduate",
  description:
    "Portfolio of Navodhya Senali, a Software Engineering undergraduate seeking a software engineering internship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
