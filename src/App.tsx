import { Button, styled, SxProps, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Add } from "@mui/icons-material";

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.info.main,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsIcon />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Contained
      </Button>
      <Button variant="contained" color="success" startIcon={<Add />}>
        Add new post
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="h2">
        It uses h1 tag but it is an h2
      </Typography>
      <BlueButton>My unique button</BlueButton>
      <BlueButton>anothe button</BlueButton>
    </div>
  );
}

export default App;
