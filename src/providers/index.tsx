import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../styles/themes/default"

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  )
}