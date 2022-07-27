export type EmailItem = {
  id: number;
  sender: string;
  title: string;
  starred: boolean;
  read: boolean;
};

const emails: Array<EmailItem> = [
  {
    id: 1,
    sender: `Zoom`,
    title: `Cloud Recording - Nicolas Marcora's Personal Meeting Room is now available`,
    starred: false,
    read: true
  },
  {
    id: 2,
    sender: `Zoom`,
    title: `John Trevolta has joined your Personal Meeting Room`,
    starred: false,
    read: false
  },
  {
    id: 3,
    sender: `Notion`,
    title: `1 update in Hoxton`,
    starred: true,
    read: true
  },
  {
    id: 4,
    sender: `The Calendly Team`,
    title: `Talk to me about calendars!`,
    starred: false,
    read: false
  },
  {
    id: 5,
    sender: `Geri`,
    title: `Updated invitation: Coding chat with Nico`,
    starred: true,
    read: false
  }
];

export default emails;
