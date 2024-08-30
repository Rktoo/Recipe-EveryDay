import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './AppRouter.tsx'
import { ContextProvider } from './utils/useLikeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
    <AppRouter />
    </ContextProvider>
  </StrictMode>,
)
