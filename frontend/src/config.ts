import { http, createConfig } from 'wagmi'
import { base, liskSepolia, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import { projectId } from './Constants'


export const config = createConfig({
  chains: [liskSepolia,],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [liskSepolia.id]: http(),
    [base.id]: http(),
  },
  ssr:true
})


