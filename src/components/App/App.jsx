import { InvoiceDetails } from 'components/InvoiceDetails/InvoiceDetails';
import { Layout } from 'components/Layout/Layout';
import { SalesInfo } from 'components/SalesInfo';
import { Sales } from 'pages/Sales';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from '../GlobalStyles';
import { Invoices } from '../Invoices/Invoices';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
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
          <Route path="customers" element={<div>Customers</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
