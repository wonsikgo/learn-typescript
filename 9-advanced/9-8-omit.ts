{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetaData = Omit<Video, "url" | "data">;

  function getVideo(id: string): VideoMetaData {
    return {
      id: id,
      title: "title",
    };
  }
}
