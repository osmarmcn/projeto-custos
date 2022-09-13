import styles  from '../componentes/Layout/home.module.css'
import LinkButton from '../componentes/Inicial/LinkButton'
import savings from '../img/savings.svg'


const Home = () =>{
    return(
        <div>
            <section className={styles.home_container}>
                <h1>Seja bem-vindo! <span> Ao Controle de custos</span></h1>
                <p>Inicie seu gerenciamento de suas despezas.</p>
                <LinkButton to='/NovoProjeto' text='Criar projeto'/>
                <img src={savings} alt='custos'></img>
            </section>

        </div>
    )
    
}

export default Home