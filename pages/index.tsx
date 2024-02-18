import { NextPage } from 'next';
import Head from 'next/head';
import Hero, { HeroTwo } from '../components/hero'
import Features, { FeatureFour, FeatureThree, FeatureTwo, NewsSection } from '../components/features';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { NewsSectionProps, BlogPost } from '../types/types';


async function fetchBlogPosts(): Promise<BlogPost[]> {
  // Make sure to handle errors and data fetching logic correctly.
  const response = await fetch('http://cobmin.com/api/posts');
  const posts = await response.json();
  return posts;
}
``
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const allPosts = await fetchBlogPosts();
  const cobFarmPosts = allPosts.filter((post: BlogPost) => post.categories.includes("cob's farm"));

  return {
    props: { cobFarmPosts },
  };
};

const Home: NextPage<NewsSectionProps> = ({ cobFarmPosts }) => {
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
        <meta property="og:image" content="https://www.cobmin.com/assets/blog/Discover-Cobs-Farm/Entrance.jpeg" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.cobsfarm.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cob&apos;s Farm - Adventure Game with Farming and Combat" />
        <meta name="twitter:description" content="Explore Cob&apos;s Farm, a unique adventure game that combines farming and combat. Join the Alpha Fields and start your adventure today." />
        <meta name="twitter:image" content="https://www.cobmin.com/assets/blog/Discover-Cobs-Farm/Entrance.jpeg" />
        <meta name="twitter:site" content="@cobmin" />
      </Head>
      <Hero />

      <main className="bg-gradient">
        <div id="overview" className="container mx-auto">
          <Features />
        </div>
        <div id="alphafields" className="container mx-auto">
          <FeatureTwo />
        </div>
        <div id="news" className="container mx-auto">
          <NewsSection cobFarmPosts={cobFarmPosts} />
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
