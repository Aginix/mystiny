import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const useBreakpoints = (direction: 'down' | 'up', key: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'sm') => {
  const theme = useTheme();
  const breakpoint = useMediaQuery(direction === 'down' ? theme.breakpoints.down(key) : theme.breakpoints.up(key));
  return breakpoint;
};
