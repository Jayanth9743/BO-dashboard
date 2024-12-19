import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    Paper,
  } from '@mui/material';

//this ia a hardcoded data when the api come this will be dynamic
  const data = [
    { date: '26/11/24', broiler: 5000, layer: 2000, parents: 7000, chicken: 7000, profit: 7000 },
    { date: '26/11/24', broiler: 5000, layer: 2000, parents: 7000, chicken: 7000, profit: 7000 },
    { date: '26/11/24', broiler: 5000, layer: 2000, parents: 7000, chicken: 7000, profit: 7000 },
  ];

const ProfitTable = () => {
  return (
    <div className='flex items-center justify-center w-full overflow-x-hidden mt-14 hide-scrollbar'>
      <div className='hidden w-48 lg:block'></div>
      <div className='flex items-center justify-center w-full lg:w-[85%] overflow-x-auto hide-scrollbar'>
          <TableContainer component={Paper} sx={{bgcolor:"#DDDDDD", flexShrink:0,borderRadius:"10px"}}>
          <Table>
            {/* Table Header */}
            <TableHead>
              <TableRow>
                <TableCell>DATE</TableCell>
                <TableCell>BROILER</TableCell>
                <TableCell>LAYER</TableCell>
                <TableCell>PARENTS</TableCell>
                <TableCell>COUNTRY CHICKEN</TableCell>
                <TableCell>TOTAL PROFIT (₹)</TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{color:'#426CB4'}}>{row.date}</TableCell>
                  <TableCell>{row.broiler}</TableCell>
                  <TableCell>{row.layer}</TableCell>
                  <TableCell>{row.parents}</TableCell>
                  <TableCell>{row.chicken}</TableCell>
                  <TableCell>{row.profit}</TableCell>
                </TableRow>
              ))}
            </TableBody>

            {/* Table Footer */}
            <TableFooter>
              <TableRow style={{ backgroundColor: '#1565c0', color: 'white' }}>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>TOTAL</TableCell>
                <TableCell style={{ color: 'white' }}>{data[0].broiler}</TableCell>
                <TableCell style={{ color: 'white' }}>{data[0].layer}</TableCell>
                <TableCell style={{ color: 'white' }}>{data[0].parents}</TableCell>
                <TableCell style={{ color: 'white' }}>{data[0].chicken}</TableCell>
                <TableCell style={{ color: 'white' }}>{data[0].profit}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default ProfitTable
