import {Link} from 'react-router-dom';
/* VendingMachine Component
 * Props: none
 * State: none
 * App -> Router / -> {Vending Machine, Chips, Tea, Cake}
 */
function VendingMachine(){
  return (
    <div>
      <div>
        <p>Hello, I am a vending machine.</p>
        <p>What would you like?</p>
      </div>
      <div>
      <ul>
        <li><Link to="/chips">Chips</Link></li>
        <li><Link to="/tea">Tea</Link></li>
        <li><Link to="/cake">Cake</Link></li>
      </ul>
      </div>
    </div>);
}

export default VendingMachine;
