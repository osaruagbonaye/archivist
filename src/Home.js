import { useState, useEffect } from "react";
import AssetList from "./AssetList";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, update, dataset } from "./redux/data";
import { debounce } from 'lodash';
import SearchComponent from './SearchComponent';
const Home = () => {
    const { assets } = useSelector((state) => state.data);
    const [firstload, setFirstLoad] = useState(true);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dataset('assets'));
        //setAssets(assets);
    }, []);

    const updateQuery = (e) => {
        setSearch(e?.target?.value);
    }
    const debouncedOnChange = debounce(updateQuery, 200);

    return (
        <div className="home">
            <SearchComponent debouncedOnChange={debouncedOnChange} />
            {
                assets.length > 0 && <AssetList assets={assets} filter={search} title="All Assets"></AssetList>
            }
        </div>
    );
}

export default Home;