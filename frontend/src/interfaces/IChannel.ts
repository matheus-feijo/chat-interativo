import { IMessage } from "./IMessage";

export interface IChannel {
  messages: IMessage[];
  id: number;
  name: string;
  createdAt: number;
  participants: string[];
  active: boolean;
}
