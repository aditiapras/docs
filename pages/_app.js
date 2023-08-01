import "tailwindcss/tailwind.css";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-Inter">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
