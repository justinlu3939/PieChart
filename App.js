
import React from "react";
import Paper from '@material-ui/core/Paper';
import { Chart, 
  PieSeries, 
  Title, 
  Legend } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from "@devexpress/dx-react-chart";

// Sample data
//to get different values from the backend, use useState()
const chartData = [
  { prop:'Gas', value:20 },
  { prop:'Food', value:50 },
  { prop:'Entertainment', value:10 },
  { prop:'Savings', value:0}
];

export default function pie(){
return (
  <Paper>
          <img
        height={426}
        src="https://logos-world.net/wp-content/uploads/2021/04/Capital-One-Emblem.jpg"
      />
      <img 
      height={426}
      src="https://cpats.s3.amazonaws.com/system/company_photos/37894/original/State_Farm_Logo.jpg"
      />
  <Chart data = {chartData}>
      <PieSeries valueField="value" argumentField="prop" />
      <Title text = "Spending budget" />
      <Animation/>
      <Legend/>
  </Chart>
  </Paper>
);
}