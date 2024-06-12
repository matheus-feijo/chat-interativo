import { IMessage } from "./IMessage";

export interface IChannel {
  messages: IMessage[];
  id: string;
  name: string;
  createdAt: number;
  participants: string[];
  active: boolean;
}
