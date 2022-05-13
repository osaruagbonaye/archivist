import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useCallback } from 'react';
import Button from "./components/button/button";
import styles from './AssetList.module.css';
import AssetDetails from "./AssetDetails";
import ReactPaginate from 'react-paginate';
import PopUpDetails from "./PopUpDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'; // <-- import styles to be used
//import { browserHistory } from "react-router-dom";

const AssetList = (props) => {
    const assets = props.assets.filter(asset => (asset.attributes.arc_display_name.includes(props.filter)));
    let navigate = useNavigate();
    function Items({ currentItems }) {
        return (
            <div className="asset-list">
                <PopUpDetails />
                {/* Only show assets if it is more than one and also help with testing*/}
                {currentItems.length > 0 && currentItems.map(asset => (
                    <div className={`${styles.assetPreview} assetrow row`} key={asset.identity}>
                        <div className="col-2">
                            <img className={styles.icon} src="https://cdn0.iconfinder.com/data/icons/affiliate-marketing-glyph/64/resources-key-learning-assets-supplies-solution-128.png"></img>
                        </div>
                        <div className="col-6">
                            <h2 data-testid="assetlist">{asset.attributes.arc_display_name}</h2>
                            <p>{asset.attributes.arc_description}</p>
                        </div>
                        <div className="col-4">
                            <p>{asset.tracked}, {asset.confirmation_status}</p>
                            <p>{asset.at_time}</p>
                            <button data-test={asset.identity} onClick={() => { navigate('/asset', { state: { asset: asset } }) }} className="btn btn-primary"><FontAwesomeIcon fill="#fff" className="text-beige" style={{ color: "#FFF" }} icon={faCircleInfo} /> Detail</button>
                            {/* <Link to={{ pathname: "/asset", state: { asset: asset } }}> <FontAwesomeIcon fill="#fff" className="text-beige" style={{ color: "#FFF" }} icon={faCircleInfo} /> Detail </Link> */}
                        </div>
                    </div>

                ))}
            </div>
        );
    }

    function PaginatedItems({ itemsPerPage }) {
        // We start with an empty list of items.
        const [currentItems, setCurrentItems] = useState([]);
        const [pageCount, setPageCount] = useState(0);
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(assets.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(assets.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % assets.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems} />
                <div className="pagination center">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                    />
                </div>
            </>
        );
    }

    return (
        <PaginatedItems itemsPerPage={5} />
    );
}

export default AssetList;