'use client'

import { usePathname } from 'next/navigation'
import UnifiedNav from './UnifiedNav'

export default function UnifiedNavWrapper() {
  const pathname = usePathname()
  
  return <UnifiedNav currentPath={pathname} />
}
