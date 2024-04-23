import { tv } from "tailwind-variants"
import { cn } from "../../utils/cn"

export const badge = tv({
  slots: {
    base: "w-max flex items-center justify-center",
  },
  variants: {
    variant: {
      primary: cn(
        "",
        "shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]"
      ),
      secondary: cn(
        "",
        "shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]"
      ),
      outline: cn("", "shadow-[0px_0px_0px_1.2px_theme(colors.background)]"),
    },
    size: {
      lg: "h-7 px-5 text-base",
      default: "h-6 px-4 text-sm",
      sm: "h-5 px-3 text-xs",
    },
    shape: {
      square: "rounded-lg",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
    shape: "circle",
  },
})
