import classes from './header.module.scss'
import { NavLink } from "react-router-dom"
import {Photo} from '../Photo.js'
export default function Pag1_section1() {
  return (
    <>
    <header>
            <nav>
                  <img src={Photo.WTwf}/>
               <ul>
            <li><NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Биржа</NavLink></li>
            <li><NavLink to="/Page2" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Ворки</NavLink></li>
            <li><NavLink to="/Page3" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Конкурсы</NavLink></li>
            <li><NavLink>Создать ворк</NavLink></li>
            <li><NavLink>Создать заказ</NavLink></li>
               </ul>
               <div>
               <button>Регистрация</button>
               <button>Войти</button>
               </div>
             
            </nav>
        </header>
    </>
  )
}