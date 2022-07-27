import { EmailItem } from "../data/emails";
import { Email } from "./Email";

import "./Emails.css";

type Props = {
  toggleStar: Function;
  toggleRead: Function;
  getFilteredEmails: Function;
};

export function Emails({ toggleStar, toggleRead, getFilteredEmails }: Props) {
  return (
    <ul>
      {getFilteredEmails().map((email: EmailItem, index: number) => (
        <Email
          key={index}
          email={email}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
        />
      ))}
    </ul>
  );
}
