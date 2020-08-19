import { Notification } from "../Notification.d.ts";
export interface TestMessage {
  frame: number;
  notification: Notification<any>;
  isGhost?: boolean;
}
