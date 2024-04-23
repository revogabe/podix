import { redirect } from 'next/navigation'

import { Database } from '../../@types/supabase'
import { supabaseServer } from './supabase'

/* ---------------------------------------
 * Sign Out
 * -------------------------------------*/

export async function signOut() {
  const supabase = supabaseServer()

  return await supabase.auth.signOut()
}

/* ---------------------------------------
 * Get Session
 * -------------------------------------*/

export async function getSession() {
  const supabase = supabaseServer()
  const { data } = await supabase.auth.getSession()
  return data.session
}

/* ---------------------------------------
 * Get User
 * -------------------------------------*/

export type User = Database['public']['Tables']['profiles']['Row']

export async function getUser() {
  const session = await getSession()
  if (!session) throw new Error('Session not found')

  const supabase = supabaseServer()
  const { data: user } = await supabase.from('profiles').select().eq('id', session.user.id).single()
  if (!user) throw new Error('User not found')

  return { ...user } as User
}

/* ---------------------------------------
 * Not Logged Validation
 * -------------------------------------*/

export async function ensureNotLogged() {
  const session = await getSession()

  if (session) return redirect('/')
}

/* ---------------------------------------
 * Logged Validation
 * -------------------------------------*/

export async function ensureLogged() {
  const session = await getSession()

  if (!session) return redirect('/login')
}

/* ---------------------------------------
 * Admin Validation
 * -------------------------------------*/

export async function ensureAdmin() {
  const session = await getSession()
  if (!session) return redirect('/login')
  const user = await getUser()
  if (user.role !== 'admin') return redirect('/')
}
