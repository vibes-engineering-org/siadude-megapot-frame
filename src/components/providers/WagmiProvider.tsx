import { createConfig, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { base, degen, mainnet, optimism } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { farcasterFrame } from "@farcaster/frame-wagmi-connector";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [base, degen, mainnet, optimism],
  [publicProvider()],
);

export const config = createConfig({
  autoConnect: true,
  connectors: [farcasterFrame(), new InjectedConnector({ chains })],
  publicClient,
  webSocketPublicClient,
});

const queryClient = new QueryClient();

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiConfig>
  );
}
