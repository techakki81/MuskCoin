import React from 'react'
// import {NavBar} from '../components'
import {constants} from '../utils'
import err from '../icons/error.gif'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
     // logErrorToMyService(error, errorInfo);
     console.log(`Error caught ${error},${errorInfo}  `)
    }
  
    render() {
      const {theme:{cssBgColorMain}} = constants

      if (this.state.hasError) {
        // You can render any custom fallback UI
         {/* TODO: implement the navbar  */}
        return (
                <>
                {/* <NavBar></NavBar>               */}
                <main className={`flex justify-center  p-8 ${cssBgColorMain}`}>
                  {/* left side */}
                  <section className="m-8">
                    <h2 className="text-4xl text-black mb-8">
                       Oops ! World is fillled with errors..                     
                    </h2>
                    <h3 className="text-2xl text-black">
                       Lets go to Mars instead 
                    </h3>
                  </section>
                 
                  <section>
                    <picture>
                      <source media="(min-width:650px)" srcset={err}/>
                      <source media="(min-width:465px)" srcset={err}/>
                      <img src={err} alt="Flowers"  className="rounded-full" />
                    </picture> 
                  </section> 

                </main>
               </>
                
        )
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary