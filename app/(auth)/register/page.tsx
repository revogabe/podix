import { LoginForm } from '@/features/auth'
import { Button } from '@/maxui/button'
import { Card } from '@/maxui/card'
import { Form } from '@/maxui/form'

const Register: App.Page = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
      <Card.Root className="m-auto">
        <Card.Title>Register</Card.Title>
        <Card.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Description>

        <LoginForm />
      </Card.Root>
    </main>
  )
}

export default Register
