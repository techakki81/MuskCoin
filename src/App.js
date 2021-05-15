import './App.css'

import {AppStateProvider} from './context'
import {BrowserRouter,Route} from 'react-router-dom'
import {SignIn,Home} from './pages'
import {NavBar} from './components'

function App() {
  
  return (
    <div className="App">
      {/* context helps in locating all the state of the application in one file 
      and being able to manipulate it from there rather than individual components */}
        <AppStateProvider>
        <BrowserRouter>
            <NavBar />
            
              <Route path="/" exact component={Home} />
              <Route path="/signIn"  component={SignIn} />   
           
           </BrowserRouter>   
        </AppStateProvider>         
    </div>
  );
}

export default App;
