import React, { FC, useState } from 'react';
import { PageTheme, pageTheme } from './PageThemeProvider';
import { makeStyles } from '@material-ui/core';

export const Theme = React.createContext<PageTheme>(pageTheme.home);
export const DocumentTitle = React.createContext<[string, React.Dispatch<React.SetStateAction<string>>]>([
  'App',
  () => {},
]);

const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateAreas:
      "'pageHeader pageHeader pageHeader' 'pageSubheader pageSubheader pageSubheader' 'pageNav pageContent pageSidebar'",
    gridTemplateRows: 'auto auto 1fr',
    gridTemplateColumns: 'auto 1fr auto',
    minHeight: '100vh',
  },
}));

type Props = {
  theme?: PageTheme;
};

const Page: FC<Props> = ({ theme = pageTheme.home, children }) => {
  const [title, setTitle] = useState('App');
  const classes = useStyles();

  return (
    <Theme.Provider value={theme}>
      <DocumentTitle.Provider value={[title, setTitle]}>
        <div className={classes.root}>{children}</div>
      </DocumentTitle.Provider>
    </Theme.Provider>
  );
};

export default Page;
