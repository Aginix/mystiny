import React, { FC } from 'react';
import { Link, ListItem, ListItemIcon, Divider, ListItemText, makeStyles } from '@material-ui/core';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import { AppTheme } from '@mystiny/theme';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles<AppTheme>((theme) => ({
  root: {
    maxWidth: 'fit-content',
    padding: theme.spacing(2, 2, 2, 2.5),
  },
  boxTitle: {
    margin: 0,
    color: theme.palette.textSubtle,
  },
  arrow: {
    color: theme.palette.textSubtle,
  },
}));

export type BottomLinkProps = {
  link: string;
  title: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const BottomLink: FC<BottomLinkProps> = ({ link, title, onClick }) => {
  const classes = useStyles();

  return (
    <div>
      <Divider />
      <Link href={link} onClick={onClick} underline="none">
        <ListItem className={classes.root}>
          <ListItemText>
            <Box className={classes.boxTitle} fontWeight="fontWeightBold" m={1}>
              {title}
            </Box>
          </ListItemText>
          <ListItemIcon>
            <ArrowIcon className={classes.arrow} />
          </ListItemIcon>
        </ListItem>
      </Link>
    </div>
  );
};

export default BottomLink;
