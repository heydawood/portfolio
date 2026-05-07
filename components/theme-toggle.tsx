'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      size='sm'
      variant='ghost'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='relative overflow-hidden'
    >
      <span className="relative flex items-center justify-center w-5 h-5">
        
        {/* Sun */}
        <SunIcon
          className={`
            absolute transition-all duration-300 ease-in-out
            ${isDark 
              ? 'opacity-100 scale-100 rotate-0' 
              : 'opacity-0 scale-75 -rotate-90'}
            text-orange-300
          `}
        />

        {/* Moon */}
        <MoonIcon
          className={`
            absolute transition-all duration-300 ease-in-out
            ${isDark 
              ? 'opacity-0 scale-75 rotate-90' 
              : 'opacity-100 scale-100 rotate-0'}
            text-sky-950
          `}
        />

      </span>

      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
