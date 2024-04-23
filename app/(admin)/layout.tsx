import { ReactNode } from 'react'
import { Metadata } from 'next'
import { ensureAdmin } from '@/utils/auth'

export const metadata: Metadata = {
  title: 'Admin | Podix',
}

export const dynamic = 'force-dynamic'

export default async function AuthLayout({ children }: { children: ReactNode }) {
  await ensureAdmin()
  return <main className="flex min-h-screen w-full center">{children}</main>
}
