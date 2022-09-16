import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { Feed } from "./components/Feed";
import { Navbar } from "./components/Navbar";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Add } from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState<"dark" | "light">("light");
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  const darkSwitch = (dark: boolean) => {
    setMode(dark ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar darkThemeHandler={darkSwitch} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
