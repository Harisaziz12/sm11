import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TableViewTemplate from '../../../components/TableViewTemplate';

const ShowBank = () => {
  const columns = [
    { id: 'id', label: '#', minWidth: 100, align: 'left' },
    { id: 'name', label: 'Name', minWidth: 100, align: 'left' },
    { id: 'accountno', label: 'Account No', minWidth: 100, align: 'left' },
  ];

  const rows = [
    { id: 1, name: "UBL", accountno: "000000000000" },
    { id: 2, name: "UBL", accountno: "000000000000"}
  ];

  return (
    <Container maxWidth="lg">
      <Typography sx={{ fontWeight: 'bold', marginTop: 2 }}>Bank List</Typography>
      <Card sx={{ marginTop: 2 }}>
        <CardContent style={{padding:'0px'}}>
            <TableViewTemplate columns={columns} rows={rows} />
        </CardContent>
      </Card>
    </Container>
  );
}

export default ShowBank;
