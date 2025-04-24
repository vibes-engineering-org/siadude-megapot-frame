"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { configureChains, createConfig, WagmiConfig, useConnect } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { base, baseSepolia } from "viem/chains";

const queryClient = new QueryClient();
const { chains, publicClient } = configureChains(
  [base, baseSepolia],
  [publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
});

export default function Frame() {
  const { connectors } = useConnect();

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <div className="flex flex-col items-center justify-center p-4 space-y-4">
          {connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => connector.connect()}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Connect {connector.name}
            </button>
          ))}
        </div>
      </WagmiConfig>
    </QueryClientProvider>
  );
}
