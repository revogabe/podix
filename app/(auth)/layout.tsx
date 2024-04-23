import { ReactNode } from 'react'
import { Metadata } from 'next'
import { ensureNotLogged } from '@/utils/auth'

export const metadata: Metadata = {
  title: 'Login | Podix',
}

export const dynamic = 'force-dynamic'

export default async function AuthLayout({ children }: { children: ReactNode }) {
  await ensureNotLogged()
  return <main className="flex min-h-screen w-full center">{children}</main>
}
