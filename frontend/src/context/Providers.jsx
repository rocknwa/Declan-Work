import { WagmiProvider, deserialize, serialize } from 'wagmi'
import { config } from '@/lib/config' 
import { AuthProvider } from './AuthContext'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1_000 * 60 * 60 * 24, // 24 hours
    },
  },
})

const persister = createSyncStoragePersister({
  serialize,
  storage: window.localStorage,
  deserialize,
})

export default function Providers({children}) {
  return (
    <WagmiProvider config={config}> 
       <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </PersistQueryClientProvider>
    </WagmiProvider>
  )
}