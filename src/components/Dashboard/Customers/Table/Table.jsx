import { useEffect, useMemo, useState } from "react";
import TableHeader from "./TableHeader/TableHeader";
import classes from "./styles.module.scss";
import Thead from "./Thead/Thead";
import Tbody from "./Tbody/Tbody";
import TableFooter from "./TableFooter/TableFooter";

export default function Table({ sortOptions, headers, data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSortHeader, setActiveSortHeader] = useState(
    sortOptions[0] || null
  );
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setActivePage(1);
  }, [searchTerm]);

  const filteredData = useMemo(
    () =>
      data.filter((row) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      ),
    [searchTerm, data]
  );

  const sortedData = useMemo(
    () =>
      activeSortHeader
        ? [...filteredData].sort((a, b) => {
            const aValue = a[activeSortHeader.value];
            const bValue = b[activeSortHeader.value];

            switch (true) {
              case typeof aValue === "string" && typeof bValue === "string":
                return aValue.localeCompare(bValue);
              case typeof aValue === "number" && typeof bValue === "number":
                return aValue - bValue;
              default:
                return 0;
            }
          })
        : filteredData,
    [activeSortHeader, filteredData]
  );

  const visibleData = useMemo(
    () => sortedData.slice((activePage - 1) * 8, activePage * 8),
    [sortedData, activePage]
  );

  return (
    <div className={classes.Table}>
      <TableHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOptions={sortOptions}
        activeSortHeader={activeSortHeader}
        setActiveSortHeader={setActiveSortHeader}
      />
      {visibleData.length ? (
        <>
          <table>
            <Thead columns={headers} />
            <Tbody columns={visibleData} />
          </table>
          <TableFooter
            data={sortedData}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </>
      ) : (
        <span className={classes.noData}>No match for your search term</span>
      )}
    </div>
  );
}
