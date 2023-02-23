import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos?.length > 0 &&
        videos.map((item, index) => {
          return (
            item.id.kind !== "youtube#playlist" && (
              <Box key={index}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
              </Box>
            )
          );
        })}
    </Stack>
  );
};

export default Videos;
