import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";

import BarChartView from "./Component/Charts/Barchart";
import PieChartView from "./Component/Charts/PieChart";
import LineChartView from "./Component/Charts/LineChart";
import DoughnutChartView from "./Component/Charts/DonutChart";
import PolarAreaChartView from "./Component/Charts/PolarAreaChart";

export default function App() {
    return (
        <Router>
            <div>
            <Header/>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/polarchart">
                        <PolarAreaChartView />
                    </Route>
                    <Route path="/barchart">
                        <BarChartView />
                    </Route>
                    <Route path="/piechart">
                        <PieChartView />
                    </Route>
                    <Route path="/linechart">
                        <LineChartView />
                    </Route>
                    <Route path="/donutchart">
                        <DoughnutChartView />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

