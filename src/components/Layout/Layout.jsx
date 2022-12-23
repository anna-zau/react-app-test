import { AppBar } from 'components/AppBar/AppBar';
import { Box } from '../Box/Box';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px 1fr">
      <AppBar />
      <Outlet />
      <div>Content </div>
    </Box>
  );
};
