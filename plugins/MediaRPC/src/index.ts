import { plugin } from "@vendetta";
import { FluxDispatcher } from "@vendetta/metro/common";

import { lazy } from "react";

import { handleNotification } from './manager';

function initialize() {
  // Hook into the notification system and call handleNotification when a media notification is received
  document.addEventListener('notification', (event: any) => {
    handleNotification(event.detail.notification);
  });
}

// Initialize the plugin
initialize();
