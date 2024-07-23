import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressBar: React.FC = () => {
  // Calculate percentage values
  const total = 100; // Total of both segments
  const percentageShow = (80 / total) * 100; //call api here and set the data here to display inplace of 80
  const percentageHide = total - percentageShow;

  // Doughnut chart data
  const data = {
    labels: ["Complet", "Yet to complet"],
    datasets: [
      {
        labels: ["floor"],
        data: [percentageShow, percentageHide], // Set percentages
        backgroundColor: ["#004aad", "transparent"],
        borderColor: ["transparent"],
        circumference: 180,
        rotation: 270,
        borderWidth: 1,
        borderRadius: {
          outerStart: 12,
          outerEnd: 12,
          innerStart: 12,
          innerEnd: 12,
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "85%",
  };

  return (
    <>
      <div className="cursor-pointer md:mt-12 md:mr-12   w-44 h-36">
        <Doughnut data={data} options={options}></Doughnut>
        <h1 className="text-center text-2xl font-semibold relative bottom-9 right-1">
          80%
        </h1>
        {/* //after the call of api put the dynamic data here */}
      </div>
    </>
  );
};

export default ProgressBar;
