import { useRef, useState } from "react";
import classes from "./styles.module.scss";
import classNames from "classnames";

export default function SearchInput({
  value,
  setValue,
  backgroundColor,
  width,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);

  const hangleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div
      className={classNames(classes.SearchInput, {
        [classes.focused]: isFocused,
      })}
      style={{ backgroundColor, width }}
      onClick={() => {
        setIsFocused(true);
        inputRef.current.focus();
      }}
    >
      <input
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setTimeout(() => {
            setIsFocused(false);
          }, 150);
        }}
        type="text"
        value={value}
        onChange={hangleChange}
        placeholder="Search"
        style={{ backgroundColor }}
      />
    </div>
  );
}
