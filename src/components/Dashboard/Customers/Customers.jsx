import Stats from "./Stats/Stats";
import Table from "./Table/Table";
import classes from "./styles.module.scss";

import totalIcon from "../../../assets/images/customers/stats/total-customers.svg";
import membersIcon from "../../../assets/images/customers/stats/members.svg";
import activeNowIcon from "../../../assets/images/customers/stats/active-now.svg";

import userPhoto from "../../../assets/images/side-menu/user/user-photo.svg";
import { CUSTOMERS } from "../../../constants/main";

const stats = [
  {
    label: "Total Customers",
    value: "5,423",
    icon: totalIcon,
    type: "percentageUp",
    typeData: "16%",
  },
  {
    label: "Members",
    value: "1,893",
    icon: membersIcon,
    type: "percentageDown",
    typeData: "1%",
  },
  {
    label: "Active now",
    value: "183",
    icon: activeNowIcon,
    type: "icons",
    typeData: [
      { name: "Evano 1", photo: userPhoto },
      { name: "Evano 2", photo: userPhoto },
      { name: "Evano 3", photo: userPhoto },
      { name: "Evano 4", photo: userPhoto },
      { name: "Evano 5", photo: userPhoto },
    ],
  },
];

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Customer Name", value: "customerName" },
  { label: "Company", value: "company" },
  { label: "Phone Number", value: "phoneNumber" },
  { label: "Email", value: "email" },
  { label: "Country", value: "country" },
  { label: "Status", value: "status" },
];

const headers = [
  "Customer Name",
  "Company",
  "Phone Number",
  "Email",
  "Country",
  "Status",
];

export default function Customers() {
  return (
    <div className={classes.Customers}>
      <div className={classes.statsContainer}>
        <Stats stats={stats} />
      </div>
      <div className={classes.tableContainer}>
        <Table sortOptions={sortOptions} headers={headers} data={CUSTOMERS} />
      </div>
    </div>
  );
}
