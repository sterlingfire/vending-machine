import {NavLink} from 'react-router-dom';
import './NavBar.css';

/* NavBar Component
 * Props: none
 * State: none
 * App -> Router -> {Vending Machine, Chips, Tea, Cake}
 */
function NavBar(){
  return (
    <div>
      <ul>
        <li><NavLink to="/"> VendingMachine </NavLink></li>
        <li><NavLink to="/chips"> Chips </NavLink></li>
        <li><NavLink to="/tea"> Tea </NavLink></li>
        <li><NavLink to="/cake"> Cake </NavLink></li>
      </ul>

    </div>);
}

export default NavBar;
