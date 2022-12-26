import { useState, useEffect } from 'react';

import { Box } from '../Box/Box';
import { getInvoices } from '../../servises/fakeAPI';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

// Menu of invoices - dynamicly making menu ( we use fake api)

const StyledLink = styled(NavLink)`
  display: block;
  padding: ${p => p.theme.space[3]}px;

  text-decoration: none;
  color: ${p => p.theme.colors.text};
  border-radius: 4px;

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);

  return (
    <Box display="flex">
      <Box
        as="aside"
        display="flex"
        flexDirection="column"
        p={4}
        borderRight="1px solid black"
      >
        {invoices.map(({ id }) => {
          return (
            <StyledLink key={id} to={id}>
              Invoice number: {id}
            </StyledLink>
          );
        })}
      </Box>
      <Outlet />
    </Box>
  );
};

export default Invoices;
