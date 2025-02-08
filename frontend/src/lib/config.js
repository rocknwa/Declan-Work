import { http, createConfig } from 'wagmi'
import { base, liskSepolia, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import {projectId} from "./constants";
import { PinataSDK } from "pinata-web3"

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



export const pinata = new PinataSDK({
  pinataJwt: `${import.meta.env.VITE_PINATA_JWT}`,
  pinataGateway: `${import.meta.env.VITE_GATEWAY_URL}`
})

