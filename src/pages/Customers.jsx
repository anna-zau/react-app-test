import { SearchBox } from 'components/SearchBox/SearchBox';
import { useEffect, useMemo, useState } from 'react';

import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getCustomers } from 'servises/fakeAPI';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';
  const location = useLocation();

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const visibleCustomers = useMemo(() => {
    return customers.filter(customer =>
      customer.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [customers, filter]);

  return (
    <main>
      <SearchBox value={filter} onChange={changeFilter} />
      {visibleCustomers.length > 0 && (
        <ul>
          {visibleCustomers.map(({ id, name }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Customers;
