import { useState, useEffect } from "react";
import AssetList from "./AssetList";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, update, dataset } from "./redux/data";
const Home = () => {
    const {assets} = useSelector((state)=>state.data);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(dataset('assets'));
    }, []);

    return ( 
        <div className="home">
            <h2 className="">Assets</h2>
            {
                assets.length > 0 &&  <AssetList assets={assets} title="All Assets"></AssetList>
            }
        </div>
     );
}
 
export default Home;