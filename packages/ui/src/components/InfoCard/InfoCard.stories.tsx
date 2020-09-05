import React, { FC, Fragment } from 'react';
import InfoCard from '.';
import { Grid, Button } from '@material-ui/core';

const cardContentStyle = { height: 200, width: 500 };
const linkInfo = { title: 'Go to XYZ Location', link: '#' };

export default {
  title: 'Information Card',
  component: InfoCard,
};

const Wrapper: FC<{}> = ({ children }) => (
  <Grid container spacing={4}>
    <Grid item>{children}</Grid>
  </Grid>
);

export const Default = () => (
  <Wrapper>
    <InfoCard title="Information Card">
      <div style={cardContentStyle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </InfoCard>
  </Wrapper>
);

export const Subhead = () => (
  <Wrapper>
    <InfoCard title="Information Card" subheader="Subhead">
      <div style={cardContentStyle} />
    </InfoCard>
  </Wrapper>
);

export const NoTitle = () => (
  <Wrapper>
    <InfoCard>
      <div style={cardContentStyle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </InfoCard>
  </Wrapper>
);

export const Actions = () => (
  <Wrapper>
    <InfoCard
      actions={
        <Fragment>
          <Button variant="contained" color="primary" size="small">
            Share
          </Button>
        </Fragment>
      }
    >
      <div style={cardContentStyle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </InfoCard>
  </Wrapper>
);

export const ActionTopRight = () => (
  <Wrapper>
    <InfoCard
      title="ActionsTopRight Card"
      actionTopRight={
        <Button variant="contained" color="primary">
          Add Item
        </Button>
      }
    >
      <div style={cardContentStyle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </InfoCard>
  </Wrapper>
);

export const ActionsTopRight = () => (
  <Wrapper>
    <InfoCard
      title="ActionsTopRight Card"
      actionsTopRight={
        <React.Fragment>
          <Button variant="contained" color="primary" size="small">
            Action1
          </Button>
          <Button variant="contained" color="secondary" size="small">
            Action2
          </Button>
          <Button variant="contained" color="default" size="small">
            Action3
          </Button>
        </React.Fragment>
      }
    >
      <div style={cardContentStyle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </InfoCard>
  </Wrapper>
);

export const LinkInFooter = () => (
  <Wrapper>
    <InfoCard title="Information Card" deepLink={linkInfo}>
      <div style={cardContentStyle} />
    </InfoCard>
  </Wrapper>
);
