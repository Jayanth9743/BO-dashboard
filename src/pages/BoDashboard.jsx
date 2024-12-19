import Chart from "../components/Chart"
import ProfitDateShifter from "../components/ProfitDateShifter"
import ProfitTable from "../components/ProfitTable"




const BoDashboard = () => {

  // api logic comes here may be a custom fetch hook or just a simple fetch logic

  return (
    <div>
      <ProfitDateShifter/>
      <Chart/>
      <ProfitTable/>
    </div>
  )
}

export default BoDashboard
