import { Link } from "react-router-dom";
import styles from "./footer.module.css";
//Assets
import PokemonPic from "../assets/pikachu.png";
import LocationPic from "../assets/pointer.png";
import ItemsPic from "../assets/pokeball.png";


const Footer = () => {
    return <footer className={styles.footer}>
        <Link to="/pokemons" className={styles.footerLink}>
            <img className={styles.footerIcon} src={PokemonPic} alt="Pikachu Icon" />
            Pokemons
        </Link>
        <Link to="/pokemons" className={styles.footerLink} onClick={(event) => event.preventDefault()}>
            <img className={styles.footerIcon} src={ItemsPic} alt="Pokeball Icon" />
            Items
        </Link>
        <Link to="/pokemons" className={styles.footerLink} onClick={(event) => event.preventDefault()}>
            <img className={styles.footerIcon} src={LocationPic} alt="pokeball" />
            Map
        </Link>
    </footer>;
}

export default Footer;