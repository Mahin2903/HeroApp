import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 25,
};
// #endregion



export default function CustomizeLabels(dataform) {
  return (
    <BarChart width={600} height={300} data={dataform} margin={margin}>
      <XAxis
        dataKey="name"
       
        label={{ position: 'insideBottomRight', value: 'XAxis title', offset: -10 }}
      />
      <YAxis label={{ position: 'insideTopLeft', value: 'YAxis title', angle: -90, dy: 60 }} />
      <Bar dataKey="uv" fill="#8884d8" />
      <RechartsDevtools />
    </BarChart>
  );
}