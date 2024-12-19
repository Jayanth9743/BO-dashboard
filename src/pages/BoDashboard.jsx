import Chart from "../components/Chart"
import ProfitDateShifter from "../components/ProfitDateShifter"
import ProfitTable from "../components/ProfitTable"




const BoDashboard = () => {
  return (
    <div>
      <ProfitDateShifter/>
      <Chart/>
      <ProfitTable/>
    </div>
  )
}

export default BoDashboard
