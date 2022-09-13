import { Link } from 'react-router-dom'
import styles from '../Layout/linkButton.module.css'

const LinkButton = ({to, text}) =>{
    return(
        <div>
            <Link className={styles.btn} to={to}>
                {text}
            </Link>
        </div>
    )
}

export default LinkButton