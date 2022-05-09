import ReactDOM from "react-dom";
import AssetList from "./AssetList";
import { render, screen } from "@testing-library/react";
//import {screen} from "@testing-library/jest-dom";

it('renders the list of object', async ()=>{
    const assets = [
        {
          at_time: "2022-05-09T07:03:54Z",
          attributes: {
            arc_description: "Electronic door access card #3",
            arc_display_name: "access_card_3",
            arc_display_type: "Door entry card"
          },
          confirmation_status: "CONFIRMED",
          tracked: "TRACKED"
        },
    ];
    render(<AssetList assets={assets}></AssetList>);
    screen.findByTestId("assetlist").then(listElement=>{
        console.log(listElement);
        expect(listElement).toBeInTheDocument();
    });
    
})

/* it('render without crashing', ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<AssetList></AssetList>, div);
}) */