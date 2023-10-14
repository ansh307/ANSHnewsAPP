
// "use client";

// import { NextUIProvider } from '@nextui-org/react'
// import { ThemeProvider as NextThemesProvider } from "next-themes";

// export function Providers({ children }: { children: React.ReactNode }) {
//     return (
//         <NextUIProvider>
//             <NextThemesProvider enableSystem={true} attribute="class">
//                 {children}
//             </NextThemesProvider>
//         </NextUIProvider>
//     )
// }

"use client"
import { ThemeProvider } from "next-themes";
import React from 'react'

function Providers({
    children,
  }: {
    children: React.ReactNode
  }){
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default Providers
