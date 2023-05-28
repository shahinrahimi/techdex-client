import React, { useState, createContext, useEffect } from "react";

const tokens = (mode = 'dark') => ({
  ...(mode === 'dark'
    ? {
      gray: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
      },
      primary: {
        100: "#d0d1d5",
        200: "#a1a4ab",
        300: "#727681",
        400: "#1f2a40",
        500: "#141b2d",
        600: "#101624",
        700: "#0c101b",
        800: "#080b12",
        900: "#040509",
      },
      greenAccent: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922",
      },
      redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f",
      },
      blueAccent: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#6870fa",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632",
      }
    }
    : {
      gray: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
      },
      primary: {
        100: "#040509",
        200: "#080b12",
        300: "#0c101b",
        400: "#f2f0f0", // manuel edited
        500: "#141b2d",
        600: "#434957",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
      },
      greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
      },
      redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
      },
      blueAccent: {
        100: "#151632",
        200: "#2a2d64",
        300: "#3e4396",
        400: "#535ac8",
        500: "#6870fa",
        600: "#868dfb",
        700: "#a4a9fc",
        800: "#c3c6fd",
        900: "#e1e2fe",
      }
    }
  )
})

class Color {
  constructor(name = 'primary', shade = '400', value = 'fff') {
    this.name = name
    this.shade = shade
    this.value = value
  }
  toCSSName = (preName = 'color') => {
    const cssName = `--${preName}-${this.name}-${this.shade}`
    return cssName
  }

  toCSSVar = (preName = 'color') => {
    const colorVar = `${this.toCSSName(preName)}: ${this.value};`
    return colorVar
  }
}

const colors = (mode = 'dark') => {

  let allColor = []

  for (const [colorName, shades] of Object.entries(tokens(mode))) {
    for (const [shade, value] of Object.entries(shades)) {
      const color = new Color(colorName, shade, value)
      allColor.push(color)
    }
  }
  return allColor
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
  const [mode, setMode] = useState('dark')

  const toggleMode = () => setMode(mode === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    const allColors = colors(mode)
    allColors.forEach(color => {
      // console.log(color)
      document.documentElement.style.setProperty(`${color.toCSSName()}`, `${color.value}`)
    })
  }, [mode])

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}
