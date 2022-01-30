import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import '../App.css'
import { TableColumns } from '../data/TableColumns';

const StickyHeadTable = (props) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (_e, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper id='paperTable' sx={{ backgroundColor: '#add19e' }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {TableColumns.filter(c => c.id != 'lon' && c.id != 'lat').map((column) => (
                                <TableCell
                                    key={column.id} align={column.align}
                                    style={{ minWidth: column.minWidth, backgroundColor: '#80c264', fontWeight: 'bolder', fontSize: '17px' }}>
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell
                                key={'button'} align='center' style={{backgroundColor:'#80c264'}}>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id} >
                                        {TableColumns.filter(c => c.id != 'lon' && c.id != 'lat').map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}
                                                    style={{ fontWeight: column.font, fontSize: column.size, overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                                    {value == '' ? '/' : value}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell style={{ color: 'white', height: '5px' }} className="goButton" key={'go'}
                                            onClick={() => props.handleMapItButtonClick(row['name'], [row['lat'], row['lon']])}>
                                            MapIt
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination style={{ marginTop: '5vh', fontSize: '20px' }}
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={props.data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage} />
        </Paper>
    );
}
export default StickyHeadTable