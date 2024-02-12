import { useMemo } from "react";

import classNames from "classnames";
import classes from "./styles.module.scss";

const MAX_ROW_PER_PAGE = 8;

export default function TableFooter({ data, activePage, setActivePage }) {
  const pages = Array.from(
    Array(Math.ceil(data.length / MAX_ROW_PER_PAGE)).keys()
  );
  const from = MAX_ROW_PER_PAGE * activePage - (MAX_ROW_PER_PAGE - 1);

  let to = activePage * MAX_ROW_PER_PAGE;

  if (to > data.length) {
    to = data.length;
  }

  const goToPrevPage = () => {
    setActivePage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    setActivePage((next) => next + 1);
  };

  const paginationList = useMemo(() => {
    if (pages.length < 7) {
      return pages;
    }

    if (pages.length >= 7 && activePage === 1) {
      return [...pages.slice(0, activePage + 4), "...", pages.length - 1];
    }

    if (pages.length >= 7 && activePage === 2) {
      return [...pages.slice(0, activePage + 3), "...", pages.length - 1];
    }

    if (pages.length >= 7 && activePage === 3) {
      return [...pages.slice(0, activePage + 2), "...", pages.length - 1];
    }

    if (pages.length >= 7 && activePage === pages.length - 4) {
      return [0, "...", ...pages.slice(activePage - 1)];
    }

    if (pages.length >= 7 && activePage === pages.length - 3) {
      return [0, "...", ...pages.slice(activePage - 2)];
    }

    if (pages.length >= 7 && activePage === pages.length - 2) {
      return [0, "...", ...pages.slice(activePage - 3)];
    }

    if (pages.length >= 7 && activePage === pages.length - 1) {
      return [0, "...", ...pages.slice(activePage - 4)];
    }

    if (pages.length >= 7 && activePage === pages.length) {
      return [0, "...", ...pages.slice(activePage - 5)];
    }

    if (pages.length >= 7 && activePage >= 4) {
      return [
        0,
        "...",
        ...pages.slice(activePage - 2, activePage + 1),
        "...",
        pages.length - 1,
      ];
    }

    return pages;
  }, [activePage, pages]);

  return (
    <footer className={classes.TableFooter}>
      <span className={classes.showingData}>
        Showing data {from} to {to} of {data.length} entries
      </span>
      <ul>
        <li
          onClick={goToPrevPage}
          className={classNames({ [classes.disabled]: activePage === 1 })}
          tabIndex={0}
          role="listbox"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              goToPrevPage();
            }
          }}
        >
          {"<"}
        </li>
        {paginationList.map((page, index) => {
          if (page === "...") {
            return (
              <li className={classes.doots} key={page + 1 + index}>
                ...
              </li>
            );
          }
          return (
            <li
              key={page + 1}
              onClick={() => setActivePage(page + 1)}
              className={classNames(classes.page, {
                [classes.activePage]: activePage === page + 1,
              })}
              tabIndex={0}
              role="listbox"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setActivePage(page + 1);
                }
              }}
            >
              {page + 1}
            </li>
          );
        })}
        <li
          onClick={goToNextPage}
          className={classNames({
            [classes.disabled]: activePage === pages.length,
          })}
          tabIndex={0}
          role="listbox"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              goToNextPage();
            }
          }}
        >
          {">"}
        </li>
      </ul>
    </footer>
  );
}
