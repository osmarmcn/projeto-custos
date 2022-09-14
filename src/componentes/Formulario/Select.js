import styles from "../Layout/select.module.css"



const Select = ({name, text, hanleOnChange,options,value}) =>{
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={hanleOnChange} defaultValue={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((option) =>(
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>

    )
}

export default Select