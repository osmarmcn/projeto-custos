import styles from "../Layout/buttonSubmit.module.css"


const ButtonSubmit = ({text}) =>{
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default ButtonSubmit