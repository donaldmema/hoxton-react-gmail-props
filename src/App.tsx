import { useState } from "react";

import initialEmails, { EmailItem } from "./data/emails";

import "./App.css";
import { Emails } from "./components/Emails";
import { NavMenu } from "./components/NavMenu";
import { Header } from "./components/Header";

const getReadEmails = (emails: EmailItem[]) =>
  emails.filter((email) => !email.read);

const getStarredEmails = (emails: EmailItem[]) =>
  emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [searchedTitle, setSearchedTitle] = useState("");

  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

  const toggleStar = (targetEmail: EmailItem) => {
    const updatedEmails = (emails: Array<EmailItem>) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail: EmailItem) => {
    const updatedEmails = (emails: Array<EmailItem>) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  function getFilteredEmails(): Array<EmailItem> {
    let filteredEmails = emails;

    if (hideRead) {
      filteredEmails = getReadEmails(filteredEmails);
    }

    if (currentTab === "starred") {
      filteredEmails = getStarredEmails(filteredEmails);
    }

    if (searchedTitle !== "") {
      filteredEmails = emails.filter((email) =>
        email.title.toLowerCase().includes(searchedTitle.toLowerCase())
      );
    }

    return filteredEmails;
  }

  return (
    <div className="app">
      <Header
        getFilteredEmails={getFilteredEmails}
        toggleStar={toggleStar}
        toggleRead={toggleRead}
        setSearchedTitle={setSearchedTitle}
      />
      <NavMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
        starredEmails={starredEmails}
        unreadEmails={unreadEmails}
      />
      <main className="emails">
        <Emails
          toggleStar={toggleStar}
          toggleRead={toggleRead}
          getFilteredEmails={getFilteredEmails}
        />
      </main>
    </div>
  );
}

export default App;
