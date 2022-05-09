import ReactDOM from "react-dom";
import Button from "../button";
import { render } from "@testing-library/react";
import {screen} from "@testing-library/jest-dom";

it('render without crashing', ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
})
