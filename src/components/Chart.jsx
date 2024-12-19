import { BarChart } from '@mui/x-charts/BarChart';

const Charts = () => {
  const data = {
    weekly: [
      {
        week: "Week 1",
        days: [
          { id: 1, day: "Mon", totalProfit: 1400 },
          { id: 2, day: "Tue", totalProfit: 1200 },
          { id: 3, day: "Wed", totalProfit: 1400 },
          { id: 4, day: "Thu", totalProfit: 1500 },
          { id: 5, day: "Fri", totalProfit: 1300 },
          { id: 6, day: "Sat", totalProfit: 1700 },
        ],
      },
    ],
  };

  const days = data.weekly[0].days.map((day) => day.day);
  const profits = data.weekly[0].days.map((day) => day.totalProfit);

  return (
    <div className="flex justify-center items-center mt-12 w-[100%]">
      <BarChart
      
        width={450}
        height={300}
        xAxis={[
          {
            data: days,
            label: "Days",
            scaleType: "band",
            categoryGapRatio: 0.5,
            
          },
        ]}
        series={[
          {
            data: profits,
            label: "Total Profit",
            color: "#426CB4",
           
             // Adjust bar size here
          },
        ]}
        borderRadius={5}
      />
    </div>
  );
};

export default Charts;