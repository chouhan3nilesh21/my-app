import './body.css';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
// import cubejs from '@cubejs-client/core';
// import { CubeProvider } from '@cubejs-client/react';
import Header from './components/ManageTransactions/Header';

// const cubejsApi = cubejs(process.env.REACT_APP_CUBEJS_TOKEN, {
//   apiUrl: process.env.REACT_APP_API_URL
// });

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const AppLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div>{children}</div>
    </div>
  );
};

const App = ({ children }) => (
  // <CubeProvider cubejsApi={cubejsApi}>
    <AppLayout>{children}</AppLayout>
  // </CubeProvider>
);

export default App;