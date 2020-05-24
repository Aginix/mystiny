import React, { FC } from 'react';
import InfoCard from '.';
import { Grid } from '@material-ui/core';

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
      <div style={cardContentStyle} />
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

export const LinkInFooter = () => (
  <Wrapper>
    <InfoCard title="Information Card" deepLink={linkInfo}>
      <div style={cardContentStyle} />
    </InfoCard>
  </Wrapper>
);
