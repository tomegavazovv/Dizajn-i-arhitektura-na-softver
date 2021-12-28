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



const columns = [
    { id: 'name', label: 'Name', minWidth: 170, align: 'left', font: 'bolder', size: '15px', d: 'underline' },
    { id: 'opening_hours', label: 'Opening Hours', minWidth: 170, align: 'center' },
    { id: 'addr:street', label: 'Address', minWidth: 170, align: 'center' },
    { id: 'outdoor_sitting', label: 'Outdoor sitting', minWidth: 100, align: 'center' },
    { id: 'smoking', label: 'Smoking', minWidth: 100, align: 'center' },
    { id: 'amenity', label: 'Type', minWidth: 150, align: 'center' },
    { id: 'lat', label: 'lat', minWidth: 150, align: 'center' },
    { id: 'lon', label: 'lon', minWidth: 150, align: 'center' }
];

const StickyHeadTable = (props) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ backgroundColor: '#add19e', width: '100%', height: '100%', overflow: 'hidden' }}>
            <TableContainer >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow >
                            {columns.filter(c => c.id != 'lon' && c.id != 'lat').map((column) => (
                                <TableCell  
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell
                                    key={'button'}
                                    align='center'
                                    style={{ maxWidth: '70px' }}
                                >
                                    Map Button
                                </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.filter(c => c.id != 'lon' && c.id != 'lat').map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} style={{
                                                    fontWeight: column.font,
                                                    fontSize: column.size, textDecoration: column.d
                                                }}>
                                                    {value == '' ? '/' : value}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell style={{height:'10px',fontSize:'12px', overflow:'wrap', textAlign:'center'}} className="goButton"
                                            onClick={() => props.callbackName(row['name'], [row['lat'], row['lon']])}
                                            key={'go'}>
                                            Show on Map
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={props.data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
export default StickyHeadTable