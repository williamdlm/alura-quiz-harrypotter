import Head from 'next/head';

function IndexPage() {
  return (
    <Head>
      <title>Harry Potter Quiz</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* Metatags conforme solicitado no desafio */}
      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Harry Potter Quiz" />
      <meta name="description" content="" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Harry Potter Quiz" />
      <meta property="og:description" content="" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dhmkfekt2/image/upload/v1611644437/hogwarts-wallpaper-3_i2hfvo.jpg"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Harry Potter Quiz" />
      <meta property="twitter:description" content="" />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/dhmkfekt2/image/upload/v1611644437/hogwarts-wallpaper-3_i2hfvo.jpg"
      />
      <meta property="og:image:width" content="600" />
    </Head>
  );
}

export default IndexPage;
