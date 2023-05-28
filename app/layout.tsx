"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./globals.css";
import { merriweatherSans } from "@/font";
import { ColorModeContext, useMode } from "@/theme";

export const metadata = {
  title: "DP Crypto",
  description: "A Dashboard that analyse specific information to the user",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, colorMode] = useMode();

  return (
    <html lang="en">
      <body className={merriweatherSans.className}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}
