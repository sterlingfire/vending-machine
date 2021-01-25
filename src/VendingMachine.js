import {NavLink} from 'react-router-dom';
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
      <img alt="Vendima Machine" src="https://www.naturals2go.com/wp-content/uploads/2019/01/VendingMachine.jpg"></img>
      </div>
    </div>);
}

export default VendingMachine;
