"use client";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

function providers({children}) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}

export default providers;

