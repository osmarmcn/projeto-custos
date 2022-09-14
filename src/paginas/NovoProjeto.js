import ProjetoForm from "../componentes/Formulario/ProjetoForm"
import styles from "../componentes/Layout/NovoProjeto.module.css"
import { useNavigate } from "react-router-dom"



const NovoProjeto = () =>{

    const navigate = useNavigate()

    const CreatePost = (project) =>{

        project.cost = 0
        project.services= []

        fetch('http://localhost:5000/projetos',{
            method:'POST',
            headers:{
                'content-type':'aplication/json'
            },
            body:JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) =>{
            console.log(data)
            navigate("/projetos", {message:'Projeto criado com sucesso!'})
        })
        .catch(err => console.log(err))
    }
    

    return(
        <div className={styles.projeto}>
            <h1>Projeto</h1>
            <p>Crie seu projeto e adicone os serviços</p>
            <ProjetoForm handleSubmit={CreatePost}/>
            
        </div>
    )
}

export default NovoProjeto