import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { CONVEX_URL } from './convexConfig.ts'

const convex = new ConvexReactClient(CONVEX_URL);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConvexProvider client={convex}>
    <App />
    </ConvexProvider>
  </StrictMode>,
)
