import { NextPage } from 'next';
import Head from 'next/head';
import Hero, { HeroTwo } from '../components/hero'
import Features, { FeatureFour, FeatureThree, FeatureTwo, NewsSection } from '../components/features';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cob&apos;s Farm - Adventure Game with Farming and Combat</title>
        <meta
          name="description"
          content="Explore Cob&apos;s Farm, a unique adventure game that combines farming and combat. Join the Alpha Fields and start your adventure today."
        />
        <meta name="keywords" content="Cob&apos;s Farm, adventure game, farming, combat, Alpha Fields" />
        <link rel="icon" href="/TwitterPfp.png" />
        <meta property="og:title" content="Cob&apos;s Farm - Adventure Game with Farming and Combat" />
        <meta property="og:description" content="Explore Cob&apos;s Farm, a unique adventure game that combines farming and combat. Join the Alpha Fields and start your adventure today." />
        <meta property="og:image" content="https://www.cobsfarm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEntrance.6f320002.jpeg&w=2048&q=75" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.cobsfarm.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cob&apos;s Farm - Adventure Game with Farming and Combat" />
        <meta name="twitter:description" content="Explore Cob&apos;s Farm, a unique adventure game that combines farming and combat. Join the Alpha Fields and start your adventure today." />
        <meta name="twitter:image" content="https://www.cobsfarm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEntrance.6f320002.jpeg&w=2048&q=75" />
        <meta name="twitter:site" content="@cobmin" />
      </Head>
      <Hero />

      <main className="">
        <div id="overview" className="container mx-auto">
          <Features />
        </div>
        <div id="alphafields" className="container mx-auto">
          <FeatureTwo />
        </div>
        <div id="news" className="container mx-auto">
          <NewsSection />
        </div>
        <div id="flexiblegameplay" className="container mx-auto">
          <FeatureThree />
        </div>
        <div id="world" className="container mx-auto">
          <FeatureFour />
        </div>
      </main>
      <HeroTwo />
    </div>
  );
};

export default Home;
