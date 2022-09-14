import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import CycloneIcon from "@mui/icons-material/Cyclone";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <CycloneIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI Social
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
};
