import ReactDOM from "react-dom";
import Home from "./Home";
import { render } from "@testing-library/react";
import {screen} from "@testing-library/jest-dom";

test('renders the list of object', async ()=>{
    render(<Home></Home>);
    const listElement = screen.getByText('Assets');
    expect(listElement).toBeInTheDocument();
})