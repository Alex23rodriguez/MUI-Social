import {
  Avatar,
  Box,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
  Stack,
  Button,
  ButtonGroup,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import {
  EmojiEmotions,
  Image,
  VideoCameraBack,
  PersonAdd,
  DateRange,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

export const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={{ xs: 200, sm: 400 }}
          height={{ xs: 340, sm: 280 }}
          bgcolor="background.default"
          color="text.primary"
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar src="http://placeimg.com/300/300/people">Alex</Avatar>
          </UserBox>
          <TextField
            sx={{ width: "100%", display: { xs: "none", sm: "inline-flex" } }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <TextField
            sx={{ width: "100%", display: { xs: "inline-flex", sm: "none" } }}
            id="standard-multiline-static"
            multiline
            rows={6}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={2} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
