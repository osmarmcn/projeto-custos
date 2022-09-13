import styles from './Layout/container.module.css'


const Container = (props) =>{
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
             {props.children}
        
        </div>
    )
}

export default Container

/*props.children - para indicar que os elementos filhos encapsulados dentro do componente vai ser encaixado dentro da div vai ser exibido, no caso os routes e route
*/