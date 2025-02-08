import { WagmiProvider } from 'wagmi'
import { config } from '@/lib/config' 
import { AuthProvider } from './AuthContext'

export default function Providers({children}) {
  return (
    <AuthProvider>
    <WagmiProvider config={config}> 
      {children}
    </WagmiProvider>
    </AuthProvider>
  )
}