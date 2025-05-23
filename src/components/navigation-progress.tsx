import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar'

export function NavigationProgress() {
  const ref = useRef<LoadingBarRef>(null)
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Start loading when route changes
    setIsLoading(true)
    ref.current?.continuousStart()

    // Complete loading after a short delay to simulate loading
    const timer = setTimeout(() => {
      ref.current?.complete()
      setIsLoading(false)
    }, 200)

    return () => clearTimeout(timer)
  }, [location.pathname, location.search])

  return (
    <LoadingBar
      color='var(--muted-foreground)'
      ref={ref}
      shadow={true}
      height={2}
    />
  )
}