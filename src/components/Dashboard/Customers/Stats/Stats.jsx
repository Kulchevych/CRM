import Stat from "./Stat/Stat";

import classes from "./styles.module.scss";

export default function Stats({ stats }) {
  return (
    <ul className={classes.Stats}>
      {stats.map((stat) => (
        <Stat
          key={stat.label}
          label={stat.label}
          icon={stat.icon}
          value={stat.value}
          type={stat.type}
          typeData={stat.typeData}
        />
      ))}
    </ul>
  );
}
