import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import CycloneIcon from "@mui/icons-material/Cyclone";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import { useState } from "react";

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
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="http://placeimg.com/300/300/people"
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="http://placeimg.com/300/300/people"
          />
          <Typography>Alex</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={() => setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
