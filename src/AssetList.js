import { Link } from "react-router-dom";
import Button from "./components/button/button";
import styles from './AssetList.module.css';
const AssetList = (props) => {
    


    return ( 
        <div className="asset-list">
            {/* <h2>{props.title}</h2> */}
            {/* Only show assets if it is more than one and also help with testing*/}
            { props.assets.length > 0 && props.assets.map(asset => (
                    <div className={`${styles.assetPreview} row`} key={asset.identity}>
                        <div className="col-2">
                            <img className={styles.icon} src="https://cdn0.iconfinder.com/data/icons/affiliate-marketing-glyph/64/resources-key-learning-assets-supplies-solution-128.png"></img>
                        </div>
                        <div className="col-6">
                            <h2 data-testid="assetlist">{ asset.attributes.arc_display_name }</h2>
                            <p>{ asset.attributes.arc_description }</p>
                        </div>
                        <div className="col-4">
                            <p>{ asset.tracked }, { asset.confirmation_status }</p>
                            <p>{ asset.at_time }</p>
                            <Button label={'View'} />
                        </div>
                    </div>
            ))}
        </div>
     );
}
 
export default AssetList;