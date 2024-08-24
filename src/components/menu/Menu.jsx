import './Menu.css'
import style from './../../App.css';

const Menu = () => {

    return (
        <div className='menu'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <p className={style.header} style={{marginLeft: "15px",textDecoration: "underline"}}>First React template</p>
        </div>
    )

    // {
    //     marginLeft:"15px",
    //     textDecoration:"underline"
    // }

}

export default Menu;