/* ----------------------------------------------------------------------------
 * Imports
 * --------------------------------------------------------------------------*/

import * as React from "react"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { type VariantProps } from "tailwind-variants"
import { badge } from "./variants"
import { cn } from "../../utils/cn"
import { Spinner } from "../../icons/spinner"

/* -----------------------------------------------------------------------------
 * Badge Types
 * ---------------------------------------------------------------------------*/

type BadgeElement = React.ElementRef<"span">
type BadgePrimitiveProps = React.ComponentPropsWithoutRef<"span">
type BadgeVariants = VariantProps<typeof badge>

export interface BadgeProps extends BadgePrimitiveProps, BadgeVariants {
  asChild?: boolean
  isLoading?: boolean
}

/* ----------------------------------------------------------------------------
 * Component
 * ---------------------------------------------------------------------------*/

const Badge = React.forwardRef<BadgeElement, BadgeProps>((props, ref) => {
  const {
    className,
    variant,
    size,
    slot,
    asChild = false,
    isLoading,
    children,
    ...badgeProps
  } = props
  const Comp = asChild ? Slot : "span"

  const { base } = badge({ variant, size })

  return (
    <Comp className={cn(base({ className }))} ref={ref} {...badgeProps}>
      <Slottable>{children}</Slottable>
    </Comp>
  )
})

Badge.displayName = "Badge"

/* ----------------------------------------------------------------------------
 * Export
 * ---------------------------------------------------------------------------*/

export { Badge }
