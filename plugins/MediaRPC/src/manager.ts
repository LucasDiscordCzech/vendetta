
import { extractMediaInfo } from './utils';
import { setRPC } from './modules';
import { getSettings } from './ui/pages/settings';

export function handleNotification(notification: any) {
  const settings = getSettings();
  if (!settings.enabled) return;
  const mediaInfo = extractMediaInfo(notification);
  setRPC(mediaInfo);
}
