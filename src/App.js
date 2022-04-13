import './App.css';
import './NavBar.css'
import Logo from './Picture.JPG'
import Laptop from './laptop.jpeg'

function App() {
  return (
  <>
  <div class="navbar">
  <a href="#about">About</a>
  <a href="#devoloped">Devoloped</a>
  <a href='#skills'>Skills</a>
  <a href='#contact'>Contact</a>
  </div>

 <section>
      <div>
        <h1 className='header'>Deyvin Cano Velasquez</h1>
        <img className='hero' src={Laptop}  alt='White computer'/>
      </div>
        <img className='picture' src={Logo} alt='Me sitting on a chair' /> 
  </section>
    </>
  );
}

export default App;
