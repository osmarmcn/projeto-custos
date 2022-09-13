import { Link } from "react-router-dom"
import Container from "../Container"
import logo from "../../img/costs_logo.png"
import styles from "../Layout/menu.module.css"


const Menu = () =>{
    return(
        <nav className={styles.menu}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt='costs'/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Empresa">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contato">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Projeto">Projeto</Link>
                    </li>

                </ul>
                
                
                
            </Container>
        </nav>
    )
}

export default Menu
 