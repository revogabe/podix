'use client'

import React from 'react'
import { Button } from '@/maxui/button'
import { Form } from '@/maxui/form'
import { NavLink } from '@/maxui/nav-link'

export const LoginForm = () => {
  return (
    <form className="flex flex-col gap-8">
      <div className="w-full flex flex-col gap-4">
        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
          <Form.Error>Email is required</Form.Error>
        </Form.Field>

        <Form.Field>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
          <Form.Error>Email is required</Form.Error>
        </Form.Field>
      </div>

      <div className="flex flex-col w-full items-center gap-4">
        <Button className="w-full">Register</Button>
        <NavLink variant="secondary" href="/login">
          Have an account? Login
        </NavLink>
      </div>
    </form>
  )
}
