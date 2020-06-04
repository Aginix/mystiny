import { createContext, FC } from 'react';

export const sidebarConfig = {
  drawerWidthOpen: 240,
};

export const SidebarContext = createContext<boolean>(false);
