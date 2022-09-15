import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="http://placeimg.com/301/301/people" />
          <Avatar
            alt="Travis Howard"
            src="http://placeimg.com/302/302/people"
          />
          <Avatar alt="Cindy Baker" src="http://placeimg.com/303/303/people" />
          <Avatar alt="Agnes Walker" src="http://placeimg.com/304/304/people" />
          <Avatar
            alt="Trevor Henderson"
            src="http://placeimg.com/305/305/people"
          />
        </AvatarGroup>
      </Box>
    </Box>
  );
};
