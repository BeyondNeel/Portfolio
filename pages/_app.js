import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import "../styles/globals.css";
import HomePage from "."; // Import the HomePage component

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // If the current route is the default page, show the HomePage component
  if (router.pathname === "/") {
    return (
      <>
        <Head>
          <title>Welcome to My Website</title>
          {/* Add your other meta tags */}
        </Head>
        <HomePage />
      </>
    );
  }

  // If the current route is not the default page, show the Component corresponding to that route
  return <Component {...pageProps} />;
}

export default MyApp;
