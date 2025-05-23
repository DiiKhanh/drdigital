import React from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'

import { NavigationProgress } from '@/components/navigation-progress'
import GeneralError from '@/features/errors/general-error'
import NotFoundError from '@/features/errors/not-found-error'
import HomePage from './pages/home-page'
import Users from './features/users'

// Layout component chứa các element chung
const RootLayout: React.FC = () => {
  return (
    <>
      <NavigationProgress />
      <HomePage />
      <Toaster duration={50000} />
      {import.meta.env.MODE === 'development' && (
        <ReactQueryDevtools buttonPosition='bottom-right' />
      )}
    </>
  )
}

// Error Boundary wrapper component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <GeneralError />
    }

    return this.props.children
  }
}

const App: React.FC = () => {
  return (
    <ErrorBoundary>
        <Routes>
          {/* Root layout route */}
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Users />} />

            <Route path='*' element={<NotFoundError />} />
          </Route>
        </Routes>
    </ErrorBoundary>
  )
}

export default App
