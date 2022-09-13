
import {useEffect, useState} from 'react'
import styles from "../Layout/projetoForm.module.css"
import Input from "./Input"
import Select from "./Select"
import ButtonSubmit from './ButtonSubmit'


const ProjetoForm = (handleSubmit, projetoData) =>{

    const [categorias,setCategorias] = useState([])
    const [projeto,setProjeto] = useState(projetoData || {})

    useEffect(() =>{
        fetch("http://localhost:5000/categorias",{
            method:"GET",
            headers:{
                'content-type':'aplication/json',
            },
        })
        .then((Response) => Response.json()) 
        .then((data) =>{
            setCategorias(data)
        })
        .catch((err) => console.log(err))
    },[])

    const submit = (e) =>{
        e.preventDefault()
        //console.log(project)
        handleSubmit(projeto)
    }

    function handleChange(e){
        setProjeto({...projeto,[e.target.name]: e.target.value })
       
        
    }

    function handleCategory(e){
        setProjeto({...projeto, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectIndex].text
           

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
                    handleonchange={handleChange}
                    defaultValue={projeto.name ? projeto.name : ''}
                />
                 <Input
                    type='number'
                    id='name'
                    text='Orçamento do projeto'
                    name='budget'
                    placeholder='insira o orçamento total'
                    handleonchange={handleChange}
                    defaultValue={projeto.budget? projeto.budget : ''}
                />
                <Select 
                    name='categoria_id' 
                    text='Selecione a categoria' 
                    options={categorias}
                    hanleOnChange={handleCategory}
                    defaultValue={projeto.category ? projeto.category.id : ''}
                    

                />
                
                <ButtonSubmit text='Criar projeto'/>
            </form>
        </div>
    )
}

export default ProjetoForm