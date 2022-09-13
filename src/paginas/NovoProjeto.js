import ProjetoForm from "../componentes/Formulario/ProjetoForm"
import styles from "../componentes/Layout/NovoProjeto.module.css"



const NovoProjeto = () =>{
    return(
        <div className={styles.projeto}>
            <h1>Projeto</h1>
            <p>Crie seu projeto e adicone os serviços</p>
            <ProjetoForm/>
            
        </div>
    )
}

export default NovoProjeto