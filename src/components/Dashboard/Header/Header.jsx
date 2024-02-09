import { useState } from "react";

import SearchInput from "../../Form/SearchInput/SearchInput";

import classes from "./styles.module.scss";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className={classes.Header}>
      <h2 className={classes.greetings}>Hello Evano &#128075;,</h2>
      <SearchInput value={searchTerm} setValue={setSearchTerm} />
    </header>
  );
}
