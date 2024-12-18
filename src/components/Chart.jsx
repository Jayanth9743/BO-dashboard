import { BarChart } from "@mui/x-charts/BarChart";

const Chart = () => {
  const data = {
    weekly: [
      {
        week: "Week 1",
        days: [
          { id: 1, day: "Mon", totalProfit: 1400 },
          { id: 2, day: "Tue", totalProfit: 1400 },
          { id: 3, day: "Wed", totalProfit: 1400 },
          { id: 4, day: "Thu", totalProfit: 1400 },
          { id: 5, day: "Fri", totalProfit: 1400 },
          { id: 6, day: "Sat", totalProfit: 1700 },
        ],
      },
    ],
  };

  const days = data.weekly[0].days.map((day) => day.day);
  const profits = data.weekly[0].days.map((day) => day.totalProfit);

  return (
    <div className="flex justify-center items-center w-[100%]">
      <BarChart
        xAxis={[
          { 
            data: days, 
            label: "Days", 
            scaleType: "band", // Add this line to avoid the error
          },
        ]}
        series={[
          {
            data: profits,
            label: "Total Profit",
          },
        ]}
        width={800}
        height={400}
      />
    </div>
  );
};

export default Chart;
