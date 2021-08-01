import React from "react";
import { makeStyles } from "@material-ui/styles";

import Toolbar from "../components/ManageTransactions/Toolbar.js";
import Table from "../components/ManageTransactions/Table.js";

const useStyles = makeStyles(theme => ({
  root: { padding: 15 },
  content: { marginTop: 15 },
}));

const Dashboard = () => {
  const classes = useStyles();
  const tabs = ['All', 'Approve', 'Completed', 'Rejected','Draft'];
  const [statusFilter, setStatusFilter] = React.useState(0);
  const [startDate, setStartDate] = React.useState(new Date());
  const [finishDate, setFinishDate] = React.useState(new Date());
  const [priceFilter, setPriceFilter] = React.useState([0, 100]);
  const [sorting, setSorting] = React.useState(['Orders.createdAt', 'desc']);

  const query = {
    timeDimensions: [
      {
        dimension: 'Orders.createdAt',
        "dateRange": [startDate, finishDate],
        granularity: 'day',
      },
    ],
    order: {
      [`${sorting[0]}`]: sorting[1],
    },
    dimensions: [
      'Users.id',
      'Orders.id',
      'Orders.size',
      'Users.fullName',
      'Users.city',
      'Orders.price',
      'Orders.status',
      'Orders.createdAt',
    ],
    "filters": [
      {
        "dimension": "Orders.status",
        "operator": tabs[statusFilter] !== 'All' ? "equals" : "set",
        "values": [
          `${tabs[statusFilter].toLowerCase()}`,
        ],
      },
      {
        "dimension": "Orders.price",
        "operator": "gt",
        "values": [
          `${priceFilter[0]}`,
        ],
      },
      {
        "dimension": "Orders.price",
        "operator": "lt",
        "values": [
          `${priceFilter[1]}`,
        ],
      },
    ],
  };

  return (
    <div className={classes.root}>
      <Toolbar
        startDate={startDate}
        setStartDate={setStartDate}
        finishDate={finishDate}
        setFinishDate={setFinishDate}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        tabs={tabs}
      />
      <div className={classes.content}>
        <Table
          sorting={sorting}
          setSorting={setSorting}
          query={query} />
      </div>
    </div>
  );
};

export default Dashboard;