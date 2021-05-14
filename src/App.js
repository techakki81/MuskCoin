import './App.css'
import {NavBar} from './components'
import {AppStateProvider} from './context'
function App() {
  
  return (
    <div className="App">
      {/* context helps in locating all the state of the application in one file 
      and being able to manipulate it from there rather than individual components */}
      <AppStateProvider>
        <NavBar />
      </AppStateProvider>      
    </div>
  );
}

export default App;
