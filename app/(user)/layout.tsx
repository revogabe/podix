import { ReactNode } from 'react'
import { Metadata } from 'next'
import { ensureLogged } from '@/utils/auth'

export const metadata: Metadata = {
  title: 'Dashboard | Podix',
}

export const dynamic = 'force-dynamic'

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  await ensureLogged()
  return <main className="flex min-h-screen w-full center">{children}</main>
}
