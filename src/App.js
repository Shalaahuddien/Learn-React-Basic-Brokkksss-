// import logo from './logo.svg';
// import './App.css';
import Introduction from './components/introduction.js';
import Profile from './components/profile.js';

function App() {
  return (
    <>
      {/* <header> */}


        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* <nav>TESTING</nav>

      </header>

        <section>
          <h1>HELLO BRADER SESI 1 SEMESTER</h1>
        </section> */}

        <h1>Sesi 1</h1>
        <p>halo saya belajar dari sesi 1 ini</p>

        <Profile />

        <Introduction name="Dea Afrizal"/>
        <Introduction name="Daffa Ganteng"/>
    </>
  );
}

export default App;
