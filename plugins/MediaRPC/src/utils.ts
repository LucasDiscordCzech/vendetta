
export interface MediaInfo {
  title: string;
  artist: string;
  album: string;
  artwork: string;
}

export function extractMediaInfo(notification: any): MediaInfo {
  const { title, artist, album, artwork } = notification;
  return {
    title,
    artist,
    album,
    artwork
  };
}
