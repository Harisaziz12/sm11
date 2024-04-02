import React from 'react';
import TableViewTemplate from '../../../components/TableViewTemplate';

const ManageFaq = () => {
  const columns = [
    { id: 'country', label: 'Country', minWidth: 100, align: 'left' },
    { id: 'currency', label: 'Currency', minWidth: 100, align: 'left' },
    { id: 'capital', label: 'Capital', minWidth: 100, align: 'left' },
    { id: 'city', label: 'City', minWidth: 100, align: 'left' },
    { id: 'street', label: 'Street', minWidth: 100, align: 'left' },
    { id: 'homeaddress', label: 'Homeaddress', minWidth: 100, align: 'left' },
    { id: 'actions', label: 'Actions', minWidth: 100, align: 'left' }, // Added actions column
  ];

  const rows = [
    { id: 1, country: "Pakistan", currency: "PKR", capital: "Islamabad" , city: "Islamabad", street: "123", homeaddress: "111123456789"   },
    { id: 2, country: "Pakistan", currency: "PKR", capital: "Islamabad" , city: "Islamabad", street: "123", homeaddress: "111123456789"  },
    { id: 3, country: "Pakistan", currency: "PKR", capital: "Islamabad", city: "Islamabad", street: "123", homeaddress: "111123456789"   },
    { id: 4, country: "Pakistan", currency: "PKR", capital: "Islamabad" , city: "Islamabad", street: "123", homeaddress: "111123456789"  },
    { id: 5, country: "Pakistan", currency: "PKR", capital: "Islamabad", city: "Islamabad", street: "123", homeaddress: "111123456789"   },
    { id: 6, country: "Pakistan", currency: "PKR", capital: "Islamabad", city: "Islamabad", street: "123", homeaddress: "111123456789"   },
    { id: 7, country: "Pakistan", currency: "PKR", capital: "Islamabad" , city: "Islamabad", street: "123", homeaddress: "111123456789"  },
    // Add more rows as needed
  ];



 


  return (
    <TableViewTemplate columns={columns} rows={rows} />
  );
}

export default ManageFaq;
