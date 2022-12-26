import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getCustomerById } from 'servises/fakeAPI';

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);

  if (!customer) {
    return null;
  }

  const { id, name } = customer;

  const locationBackLinkHref = location.state?.from ?? '/customers';
  return (
    <main>
      <Link to={locationBackLinkHref}>Back to Customers</Link>
      <p>id: {id}</p>
      <p>User: {name}</p>
    </main>
  );
};

export default CustomerDetails;
