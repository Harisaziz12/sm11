import React from 'react';
import TableViewTemplate from '../../../components/TableViewTemplate';
import { Link } from 'react-router-dom';

const ManageFaq = () => {
  const columns = [
    { id: 'name', label: 'Name', minWidth: 100, align: 'left' },
    { id: 'address', label: 'Address', minWidth: 100, align: 'left' },
    { id: 'phone', label: 'Phone', minWidth: 100, align: 'left' },
    { id: 'info', label: 'Info', minWidth: 100, align: 'left' },
    { id: 'actions', label: 'Actions', minWidth: 100, align: 'left' }, // Added actions column
  ];

  const rows = [
    { id: 1, name: "Pakistan", address: "PKR", phone: "Islamabad" , info: "Islamabad", },
    // Add more rows as needed
  ];
  return (
    <div className='container px-4 mt-4'>
      <div className='row'>
        <div className='col-sm-6 mb-3 fw-bold'>School List</div>
        <div className='col-sm-6 mb-3 text-end'>
        
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

export default ManageFaq;
