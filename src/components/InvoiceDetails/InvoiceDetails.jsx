import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getInvoiceById } from '../../servises/fakeAPI';
import { Box } from 'components/Box/Box';
import { Text } from './InvoiceDetails.styled';

export const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState();

  useEffect(() => {
    getInvoiceById(invoiceId).then(setInvoice);
  }, [invoiceId]);

  if (!invoice) {
    return null;
  }

  const { recipient, account, total, date } = invoice;

  return (
    <Box display="block" p={5}>
      <Text>Resipient: {recipient}</Text>
      <Text>Account number: {account}</Text>
      <Text>Total due: {total}$</Text>
      <Text>Invoice date: {new Date(date.created).toLocaleDateString()}</Text>
      <Text>Date due: {new Date(date.due).toLocaleDateString()}</Text>
    </Box>
  );
};
