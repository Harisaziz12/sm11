import React, { useState } from 'react'
import { StyledTableCell, StyledTableRow } from './styles';
import { Table, TableBody, TableContainer, TableHead, TablePagination, Button } from '@mui/material';

const TableViewTemplate = ({ columns, rows }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleSave = (rowId) => {
        // Handle save action here
        console.log(`Save action for row with ID ${rowId}`);
    };

    const handleDelete = (rowId) => {
        // Handle delete action here
        console.log(`Delete action for row with ID ${rowId}`);
    };

    return (
        <>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <StyledTableRow>
                            {columns.map((column, index) => (
                                <StyledTableCell
                                    key={index}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, backgroundColor:'#DFA24B',fontweight:'bold' }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column, index) => (
                                            <StyledTableCell key={index} align={column.align}>
                                                {column.format && typeof row[column.id] === 'number'
                                                    ? column.format(row[column.id])
                                                    : row[column.id]}
                                                {/* Render buttons for 'Save' and 'Delete' actions if column id is 'actions' */}
                                                {column.id === 'actions' && (
                                                    <>
                                                        <Button  className='btn text-white mx-1 fw-bold px-3 bg-success' variant="outlined" onClick={() => handleSave(row.id)}>Save</Button>
                                                        <Button className='btn text-white mx-1 fw-bold px-3 bg-danger'  variant="outlined" onClick={() => handleDelete(row.id)}>Delete</Button>
                                                    </>
                                                )}
                                            </StyledTableCell>
                                        ))}
                                    </StyledTableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(event, newPage) => setPage(newPage)}
                onRowsPerPageChange={(event) => {
                    setRowsPerPage(parseInt(event.target.value, 5));
                    setPage(0);
                }}
            />
        </>
    )
}

export default TableViewTemplate
