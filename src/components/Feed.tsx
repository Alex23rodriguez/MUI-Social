import { Box } from "@mui/material";
import { Post } from "./Post";

const posts = [
  {
    user: "A",
    title: "Paella with chicken",
    img: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?cs=srgb&dl=pexels-rajesh-tp-1624487.jpg&fm=jpg",
    desc: `This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.`,
  },
  {
    user: "R",
    title: "Pancakes!",
    img: "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?cs=srgb&dl=pexels-pixabay-357573.jpg&fm=jpg",
    desc: `You know how to make Pancakes. If you don't google it`,
  },
  {
    user: "B",
    title: "Best Pizza ever",
    img: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?cs=srgb&dl=pexels-pixabay-315755.jpg&fm=jpg",
    desc: `This is how to make the best pizza ever: I can't say lol`,
  },
];

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post {...posts[0]} />
      <Post {...posts[1]}/>
      <Post {...posts[2]}/>
    </Box>
  );
};
