
import { registerSettings } from 'vendetta-plugin';

const settings = {
  enabled: true,
};

export function getSettings() {
  return settings;
}

registerSettings({
  section: 'MediaRPC',
  title: 'MediaRPC Settings',
  page: () => (
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={settings.enabled} 
          onChange={(e) => { settings.enabled = e.target.checked; }} 
        />
        Enable MediaRPC
      </label>
    </div>
  ),
});
