import React from 'react';
import TableViewTemplate from '../../../components/TableViewTemplate';
import { Link } from 'react-router-dom';

const ExpiredSubscription = () => {
  const columns = [
    { id: 'name', label: 'School Name', minWidth: 100, align: 'left' },
    { id: 'package', label: 'Package', minWidth: 100, align: 'left' },
    { id: 'purchasedate', label: 'Purchase Date', minWidth: 100, align: 'left' }, // Added actions column
    { id: 'expiredate', label: 'Expire Date', minWidth: 100, align: 'left' }, // Added actions column

  ];

  const rows = [
    { id: 1, name: "Pakistan", package: "PKR", purchasedate: "Islamabad",expiredate: "Islamabad", },
    // Add more rows as needed
  ];
  return (
    <div className='container px-4 mt-4'>
        <div className=' mb-3 fw-bold'>Expired Subscription </div>

      <div className='row mb-3'>
        <div className='col-sm-4'><input type="text" class="form-control" id="searchInput" placeholder="Search..."/>
</div>
        <div className='col-sm-8 text-end'>
        <Link to=''>  <button className='py-2 px-3 rounded text-white ' style={{backgroundColor:'#DFA24B',border:'none'}}>Export</button></Link>
        </div>
      </div>
    <div class="card">
    <div class="card-body p-0 m-0">
    <TableViewTemplate columns={columns} rows={rows} />
    </div>
  </div>
    </div>
  );
}

export default ExpiredSubscription;
