import { v4 as uuid } from "uuid";

// Example
// [
//   {
//     name: "Finance",
//     id: "123",
//     messages: [
//       {
//         userName: "John",
//         message: "Hello",
//       },
//     ],
//   },
// ]

export class Chat {
  channels = [
    {

      name: "Geral",
      id: 0,
      messages: [],
      participants: 0
    }
  ];

  createChannel(name) {
    if (this.channels.find((channel) => channel.name === name)) return false;

    this.channels.push({
      id: uuid(),
      name: name,
      messages: [],
    });
  }

  createdMessage(channelId, userName, message) {
    const channel = this.channels.find((channel) => channel.id === channelId);

    if (!channel) return false;

    channel.messages.push({
      username: userName,
      content: message,
      createdAt: Date.now()
    });
  }

  getChannels() {
    return this.channels;
  }

  getChannel(channelId) {
    return this.channels.find((channel) => channel.id === channelId);
  }
}
