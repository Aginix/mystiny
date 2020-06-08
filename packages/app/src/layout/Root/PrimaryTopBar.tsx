import React, { FC } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { Typography } from '@material-ui/core';
import { TopBar,
  TopBarUserMenu,
  TopBarSpace,
  TopBarProps} from '@mystiny/ui'

const PrimaryTopBar: FC<TopBarProps> = (props) => (
  <TopBar {...props}>
    <Typography variant="h6" noWrap>
      Mystiny
    </Typography>
    <TopBarSpace />
    <TopBarUserMenu
      actions={[
        { content: 'My Profile', icon: <PersonIcon fontSize="small" /> },
        {
          content: 'Logout',
          onAction: () => {
            window.alert('Logged out!');
          },
        },
      ]}
      initials="N"
      name="Nonpawit Teerachetmongkol"
      detail="Aginix Technologies"
    />
  </TopBar>
);

export default PrimaryTopBar;