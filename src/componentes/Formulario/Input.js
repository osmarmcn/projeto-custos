import styles from "../Layout/input.module.css"



const Input = ({type, placeholder,name, text, hanleonChange,value}) =>{

    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input
                type={type} 
                text={text} 
                name={name}
                id={name} 
                placeholder={placeholder}
                onChange={hanleonChange}
                defaultValue={value}
            />
        </div>
    )
}

export default Input