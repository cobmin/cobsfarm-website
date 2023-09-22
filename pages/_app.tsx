import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, darkTheme, AvatarComponent } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  goerli,
  mainnet,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy'
import Layout from '../components/layout';
import { generateColorFromAddress } from '../utils';
import { UserIcon } from '@heroicons/react/20/solid'


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID || "defaultApiKey" }),
  publicProvider(),]
);

const { connectors } = getDefaultWallets({
  appName: process.env.NEXT_PUBLIC_PROJECT_NAME || 'Default Project Name',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || 'Default Project ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
  const color = generateColorFromAddress(address);
  return ensImage ? (
    <img
      src={ensImage}
      width={size}
      height={size}
      style={{ borderRadius: 999 }}
    />
  ) : (
    <UserIcon />
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider avatar={CustomAvatar} coolMode theme={darkTheme({
        accentColor: '#718f3f',
        accentColorForeground: '#ccd0d7',
        overlayBlur: 'small',
      })} chains={chains} >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
export default MyApp;
