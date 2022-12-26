import { lazy } from 'react';

import CustomerDetails from 'components/CustomerDetails/CustomerDetails';
import { InvoiceDetails } from 'components/InvoiceDetails/InvoiceDetails';
import { Layout } from 'components/Layout/Layout';
import { SalesInfo } from 'components/SalesInfo';
// import Customers from 'pages/Customers';
import { Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from '../GlobalStyles';
// import Invoices from '../Invoices/Invoices';

const Sales = lazy(() => import('../../pages/Sales'));
const Customers = lazy(() => import('../../pages/Customers'));
const Invoices = lazy(() => import('../../components/Invoices/Invoices'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<SalesInfo />} />
            <Route path="deposits" element={<div>Deposits</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="analytics" element={<div>analytics</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomerDetails />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
