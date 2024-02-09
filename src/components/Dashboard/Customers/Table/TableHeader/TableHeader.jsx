import classes from "./styles.module.scss";
import SearchInput from "../../../../Form/SearchInput/SearchInput";
import Dropdown from "../../../../Form/Dropdown/Dropdown";

export default function TableHeader({
  searchTerm,
  setSearchTerm,
  sortOptions,
  activeSortHeader,
  setActiveSortHeader,
}) {
  return (
    <header className={classes.TableHeader}>
      <div className={classes.info}>
        <h2>All Customers</h2>
        <h3>Active Members</h3>
      </div>
      <div className={classes.controls}>
        <SearchInput
          value={searchTerm}
          setValue={setSearchTerm}
          backgroundColor="#F9FBFF"
        />
        <Dropdown
          value={activeSortHeader}
          setValue={setActiveSortHeader}
          options={sortOptions}
          backgroundColor="#f9fbff"
        />
      </div>
    </header>
  );
}
