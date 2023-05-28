import { createContext, useMemo, useState } from "react";
import { createTheme, ThemeOptions } from "@mui/material";
import typography from "./typography";
import colors from "./color";
import breakpoints from "./breakPoints";

interface IThemeOptions extends ThemeOptions {
  palette: any;
  breakpoints: any;
  typography: any;
}

export const themeSettings = (mode: string) => {
  const colorTheme = colors(mode);

  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colorTheme.primary[500],
            },
            secondary: { main: colorTheme.greenAccent[500] },
            neutral: {
              dark: colorTheme.grey[700],
              main: colorTheme.grey[500],
              light: colorTheme.grey[100],
            },
            background: {
              default: colorTheme.primary[500],
            },
          }
        : {
            primary: {
              main: colorTheme.primary[100],
            },
            secondary: {
              main: colorTheme.greenAccent[500],
            },
            neutral: {
              dark: colorTheme.grey[700],
              main: colorTheme.grey[500],
              light: colorTheme.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: { ...typography },
    breakpoints: { ...breakpoints },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = (): any => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(themeSettings(mode) as IThemeOptions),
    [mode]
  );

  return [theme, colorMode];
};
