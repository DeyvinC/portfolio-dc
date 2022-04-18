import './App.css';
import './NavBar.css'
import './About.css'
import Logo from './Picture.JPG'
import Logo2 from './computerImg.png'
import Logo3 from './soccerImg.jpeg'


function App() {
  return (
  <>
  <div class="navbar">
  <a href="#about">About</a>
  <a href="#devoloped">Devoloped</a>
  <a href='#skills'>Skills</a>
  <a href='#contact'>Contact</a>
  </div>

 <div>
      <section className='header'>
        <div className='picture1-con'>
        <img  className='picture1' src={Logo2} alt='computer with screw driver coming out of screen'/>
        </div>
        <div className='picture2-con'>
        <img className='picture2' src={Logo3} alt='soccer ball with an outline'/>
        </div>
        <h1 className='h1'>Deyvin Cano Velasquez</h1>
        <h2 className='h2'> Software Engineer</h2>
      </section>
      <section className='about'>
        <h2 className='about-header'> About </h2> 
        <div className='image-container'>
          <div className='hex'>
            <div className='img'>
              <img src={Logo} alt='Me sitting on a chair' /> 
            </div>
          </div>
        </div>
      </section>

  </div>
    </>
  );
}

export default App;
