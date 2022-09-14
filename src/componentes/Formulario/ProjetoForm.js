
import {useEffect, useState} from 'react'
import styles from "../Layout/projetoForm.module.css"
import Input from "./Input"
import Select from "./Select"
import ButtonSubmit from './ButtonSubmit'


const ProjetoForm = ({handleSubmit, projectData}) =>{

    const [categorias,setCategorias] = useState([])
    const [project,setProject] = useState(projectData || {})

    useEffect(() =>{
        fetch("http://localhost:5000/categorias",{
            method:"GET",
            headers:{
                'content-type':'aplication/json',
            },
        })
        .then((resp) => resp.json()) 
        .then((data) =>{
            setCategorias(data)
        })
        .catch((err) => console.log(err))
    },[])

    const submit = (e) =>{
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project,[e.target.name]: e.target.value })
        //console.log(project)
       
        
    }

    function handleCategory(e){
        setProject({...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectIndex]
        }, 
    })
    
    }

    return(
        <div>
            <form onSubmit={submit} className={styles.form}>
                <Input
                    type='text'
                    text='Nome do projeto'
                    name='name'
                    placeholder='insira seu nome'
                    handleOnchange={handleChange}
                    defaultValue={project.name ? project.name : ''}
                />
                 <Input
                    type='number'
                    id='name'
                    text='Orçamento do projeto'
                    name='budget'
                    placeholder='insira o orçamento total'
                    handleOnchange={handleChange}
                    defaultValue={project.budget? project.budget : ''}
                />
                <Select 
                    name='categoria_id' 
                    text='Selecione a categoria' 
                    options={categorias}
                    hanleOnChange={handleCategory}
                    defaultValue={project.category ? project.category.id : ''}
                    

                />
                
                <ButtonSubmit text='Criar projeto'/>
            </form>
        </div>
    )
}

export default ProjetoForm