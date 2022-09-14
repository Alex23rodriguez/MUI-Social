import {
  AppBar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import CycloneIcon from "@mui/icons-material/Cyclone";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
}));

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <CycloneIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI Social
        </Typography>

        <Search>
          <InputBase placeholder="search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};
