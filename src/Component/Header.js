import React  from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

// const BarChart = () =>(
//     <NavDropdown title="Chart" id="basic-nav-dropdown">
//         <NavDropdown.Item><Link to="/barchart" >BarChartView</Link></NavDropdown.Item>
//         <NavDropdown.Item><Link to="/piechart" >PieChart</Link></NavDropdown.Item>
//         <NavDropdown.Item><Link to="/linechart" >LineChart</Link></NavDropdown.Item>
//         <NavDropdown.Item><Link to="/donutchart" >DonutChart</Link></NavDropdown.Item>
//         <NavDropdown.Item><Link to="/polarchart" >PolarChart</Link></NavDropdown.Item>
//     </NavDropdown>
// );

const Header =() => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand >React Charts</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/" >Home</Link></Nav.Link>
                        <Nav.Link><Link to="/barchart" >BarChartView</Link></Nav.Link>
                        <Nav.Link><Link to="/piechart" >PieChart</Link></Nav.Link>
                        <Nav.Link><Link to="/linechart" >LineChart</Link></Nav.Link>
                        <Nav.Link><Link to="/donutchart" >DonutChart</Link></Nav.Link>
                        <Nav.Link><Link to="/polarchart" >PolarChart</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
 export default Header;