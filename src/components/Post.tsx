import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import { FC } from "react";

export const Post: FC<{
  user: string;
  title: string;
  img: string;
  desc: string;
}> = (props) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.user}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image={props.img}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          aria-label="add to favorites"
          icon={<FavoriteBorder />}
          checkedIcon={<FavoriteIcon sx={{ color: "lightcoral" }} />}
        />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
