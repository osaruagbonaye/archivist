import styles from './button.module.css';
const Button = (props) => {
    return ( 
        <div className={styles.button} data-testid="button">{props.label}</div>
     );
}
 
export default Button;