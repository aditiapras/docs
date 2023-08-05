import "tailwindcss/tailwind.css";
import "./global.css";
import { Inter } from "next/font/google";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    // <main className={`fonts`}>
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
