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

// This is hardcoded data; it will be dynamic when the API is integrated.
const data = [
  { date: '26/11/24', broiler: 5000, layer: 2000, parents: 7000, chicken: 7000, profit: 7000 },
  { date: '26/11/24', broiler: 5000, layer: 2000, parents: 7000, chicken: 7000, profit: 7000 },
  { date: '26/11/24', broiler: 5000, layer: 2000, parents: 7000, chicken: 7000, profit: 7000 },
  { date: '26/11/24', broiler: 5000, layer: 2000, parents: 7000, chicken: 7000, profit: 7000 },
  { date: '26/11/24', broiler: 5000, layer: 2000, parents: 7000, chicken: 7000, profit: 7000 },
  { date: '26/11/24', broiler: 5000, layer: 2000, parents: 7000, chicken: 7000, profit: 7000 },
  { date: '26/11/24', broiler: 5000, layer: 2000, parents: 7000, chicken: 7000, profit: 7000 },
  { date: '26/11/24', broiler: 5000, layer: 2000, parents: 7000, chicken: 7000, profit: 7000 },
  { date: '26/11/24', broiler: 5000, layer: 2000, parents: 7000, chicken: 7000, profit: 7000 },
  { date: '26/11/24', broiler: 5000, layer: 2000, parents: 7000, chicken: 7000, profit: 7000 },
];

const ProfitTable = () => {
  return (
    <div className='flex items-center justify-center w-full mt-10 mb-6 overflow-x-hidden .hide-scrollbar-y hide-scrollbar'>
      <div className='hidden w-48 lg:block'></div>
      <div className='flex items-center justify-center w-full lg:w-[85%] overflow-x-auto hide-scrollbar'>
          <TableContainer component={Paper} className='w-full ml-6 hide-scrollbar-y lg:ml-0' sx={{bgcolor:"#F0F0F0",
             flexShrink:0,
             borderRadius:"10px",
             maxHeight: 400, // Fixed height for the table
             overflowY: 'auto',
             }}>

          <Table stickyHeader>
            {/* Table Header */}
            <TableHead >
              <TableRow >
                <TableCell sx={{ color: "#555555", position: 'sticky', top: 0, bgcolor: "#F0F0F0" }}>DATE</TableCell>
                <TableCell sx={{ color: "#555555", position: 'sticky', top: 0, bgcolor: "#F0F0F0" }}>BROILER</TableCell>
                <TableCell sx={{ color: "#555555", position: 'sticky', top: 0, bgcolor: "#F0F0F0" }}>LAYER</TableCell>
                <TableCell sx={{ color: "#555555", position: 'sticky', top: 0, bgcolor: "#F0F0F0" }}>PARENTS</TableCell>
                <TableCell sx={{ color: "#555555", position: 'sticky', top: 0, bgcolor: "#F0F0F0" }}>COUNTRY CHICKEN</TableCell>
                <TableCell sx={{ color: "#555555", position: 'sticky', top: 0, bgcolor: "#F0F0F0" }}>TOTAL PROFIT (₹)</TableCell>
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
            <TableFooter sx={{marginLeft:"10px",marginRight:"10px",}}>
              <TableRow sx={{
                    position: 'sticky',
                    bottom: 8,
                    bgcolor: '#1565c0',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius:"10px",
                    
                  }}>
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
  );
};

export default ProfitTable;