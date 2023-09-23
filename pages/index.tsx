import { NextPage } from 'next';
import Head from 'next/head';

import Hero, { HeroTwo } from '../components/hero'
import Features, { FeatureFour, FeatureThree, FeatureTwo, NewsSection } from '../components/features';
import Footer from '../components/footer';
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
      </Head>
      <Hero />

      <main className="">
        <div className="container mx-auto">
          <Features />
        </div>
        <div className="container mx-auto">
          <FeatureTwo />
        </div>
        <div className="container mx-auto">
          <NewsSection />
        </div>
        <div className="container mx-auto">
          <FeatureThree />
        </div>
        <div className="container mx-auto">
          <FeatureFour />
        </div>
      </main>
      <HeroTwo />
      <Footer />
    </div>
  );
};

export default Home;
