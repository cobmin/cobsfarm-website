import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, darkTheme, AvatarComponent, connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  metaMaskWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  goerli,
  mainnet,
} from 'wagmi/chains';
import { LoopringAccountProvider } from '../context/account-context';
import { LoopringUnlockProvider } from '../context/unlock-context';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy'
import Layout from '../components/layout';
import { generateColorFromAddress } from '../utils';
import { UserIcon } from '@heroicons/react/20/solid'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [
//     mainnet,
//     ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
//   ],
//   [alchemyProvider({ apiKey: process.env.ALCHEMY_ID || "defaultApiKey" }),
//   publicProvider(),]
// );
// const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? 'defaultProjectId';

// const connectors = connectorsForWallets([
//   {
//     groupName: 'Supported',
//     wallets: [
//       injectedWallet({ chains }),
//       metaMaskWallet({ projectId, chains }),
//       walletConnectWallet({ projectId, chains }),
//     ],
//   },
// ]);

// const wagmiConfig = createConfig({
//   autoConnect: false,
//   connectors,
//   publicClient,
//   webSocketPublicClient,
// });

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain === mainnet) {
          return {
            http: 'https://mainneteth.loopring.io',
          };
        }

        return {
          http: '',
        };
      },
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Loopring SDK NextJS',
  projectId:
    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors,
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
        <LoopringAccountProvider>
          <LoopringUnlockProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LoopringUnlockProvider>
        </LoopringAccountProvider>
      </RainbowKitProvider >
    </WagmiConfig >
  );
}
export default MyApp;
