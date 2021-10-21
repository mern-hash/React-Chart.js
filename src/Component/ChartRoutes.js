import BarChartView from "../Component/Charts/Barchart";
import PieChartView from "./Charts/PieChart";
import LineChartView from "./Charts/LineChart";
import BubbleChart from "./Charts/DonutChart";

export default () => {
    return [
        {path: '/barchart', component: BarChartView},
        {path: '/piechart', component: PieChartView},
        {path: '/linechart', component: LineChartView},
        {path: '/bubblechart', component: BubbleChart}
    ]
}