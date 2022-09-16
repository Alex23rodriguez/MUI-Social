import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PagesIcon from "@mui/icons-material/Pages";
import GroupsIcon from "@mui/icons-material/Group";
import ProfileIcon from "@mui/icons-material/Person";
import { ModeNight } from "@mui/icons-material";
import { FC } from "react";

export const Sidebar: FC<{ darkThemeHandler: (dark: boolean) => void }> = ({
  darkThemeHandler,
}) => (
  <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
    <Box position="fixed">
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#pages">
            <ListItemIcon>
              <PagesIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#groups">
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#profile">
            <ListItemIcon>
              <ProfileIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#darkmode">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch onChange={(e) => darkThemeHandler(e.target.checked)} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  </Box>
);
