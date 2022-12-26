import { AppBar } from 'components/AppBar/AppBar';
import { Box } from '../Box/Box';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px 1fr">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <div>Content </div>
    </Box>
  );
};
