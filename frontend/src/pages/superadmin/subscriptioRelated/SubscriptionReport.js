
import React from 'react';
import TableViewTemplate from '../../../components/TableViewTemplate';
import { Link } from 'react-router-dom';

const SubscriptionReport = () => {
  const columns = [
    { id: 'name', label: 'School Name', minWidth: 100, align: 'left' },
    { id: 'package', label: 'Package', minWidth: 100, align: 'left' },
    { id: 'price', label: 'Price', minWidth: 100, align: 'left' },
    { id: 'paidby', label: 'Paid By', minWidth: 100, align: 'left' },
    { id: 'purchasedate', label: 'Purchase Date', minWidth: 100, align: 'left' }, // Added actions column
    { id: 'expiredate', label: 'Expire Date', minWidth: 100, align: 'left' }, // Added actions column

  ];

  const rows = [
    { id: 1, name: "Pakistan", package: "PKR", price: "Islamabad" , paidby: "Islamabad", purchasedate: "Islamabad",expiredate: "Islamabad", },
    // Add more rows as needed
  ];
  return (
    <div className='container px-4 mt-4'>
        <div className=' mb-3 fw-bold'>Subscription Report</div>
      <div className='row'>
        <div className='col-sm-3 mb-3 fw-bold d-flex'><input type="date" class="form-control" id="dateInput"/><button className='btn mx-2 border text-white' style={{backgroundColor:'#DFA24B'}}>Filter</button></div>
        <div className='col-sm-9 mb-3 text-end'>
        
          <Link to='/SuperAdmin/school/createschool'>  <button className='py-2 px-3 rounded text-white ' style={{backgroundColor:'#DFA24B',border:'none'}}>+Add School</button></Link>
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

export default SubscriptionReport;
