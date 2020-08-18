import { AppProps } from "next/app";

import "bootstrap/dist/css/boostrap.min.css";
import "../static/css/login.css";
import "../static/css/vars.css";
import "../static/css/app.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
