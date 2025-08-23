'use client'

import { usePathname } from 'next/navigation'
import MainNavServer from './MainNavServer'

export default function MainNavWrapper() {
  const pathname = usePathname()
  
  return <MainNavServer currentPath={pathname} />
}
