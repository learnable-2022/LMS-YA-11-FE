// material-ui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// ==============================|| DRAWER HEADER - STYLED ||============================== //

const DrawerHeaderStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...theme.mixins.toolbar,
  minHeight: '61px',
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: open ? 'flex-start' : 'center',
  paddingLeft: theme.spacing(open ? 3 : 0)
}));

export default DrawerHeaderStyled;
