
import { MediaInfo } from './utils';

export function setRPC(mediaInfo: MediaInfo) {
  const { title, artist, album, artwork } = mediaInfo;
  // Assuming `rpc` is an instance of the RPC client
  rpc.setActivity({
    details: `${title} by ${artist}`,
    state: `Album: ${album}`,
    largeImageKey: artwork,
    smallImageKey: 'ic_media_play'
  });
}
