import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "../badge"

const meta = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "radio",
      options: [
        "primary",
        "secondary",
        "ghost",
        "outline",
        "danger",
        "success",
      ],
    },
  },
  args: {
    children: "Button",
    size: "default",
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return (
      <div className="flex flex-col gap-4">
        <Badge size="lg">badge</Badge>
        <Badge size="default">badge</Badge>
        <Badge size="sm">badge</Badge>
      </div>
    )
  },
}
