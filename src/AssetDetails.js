import { useParams, useHistory, useLocation } from "react-router-dom";
import useFetch from "./useFetch";
import styles from './AssetList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'; // <-- import styles to be used


const AssetDetails = (props) => {
    const location = useLocation();
    props = location.state;
    //console.log(location.state);
    /* const params = useParams();
    const usefetch = useFetch('http://localhost:8002/blogs/' + params.id);
    const history = useHistory();
    const handleDelete = ()=>{
        fetch('http://localhost:8002/blogs/' + usefetch.data.id, {
            method: 'DELETE'
        }).then(()=>{
            console.log('Deleted');
            history.push('/');
        })
    } */
    return (
        <div className="asset-details">
            <h2>Asset Details</h2>
            <div className={`${styles.assetPreview} row`} key={props.asset.identity}>
                <div className="col-2">
                    <img className={styles.icon} src="https://cdn0.iconfinder.com/data/icons/affiliate-marketing-glyph/64/resources-key-learning-assets-supplies-solution-128.png"></img>
                </div>
                <div className="col-6">
                    <h2 data-testid="assetlist">{props.asset.attributes.arc_display_name}</h2>
                    <p>{props.asset.attributes.arc_description}</p>
                </div>
                <div className="col-4">
                    <p>{props.asset.tracked}, {props.asset.confirmation_status}</p>
                    <p>{props.asset.at_time}</p>
                    <FontAwesomeIcon icon={faCircleInfo} />
                </div>
            </div>
        </div>
    );
}

export default AssetDetails;