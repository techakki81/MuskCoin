import React from 'react'
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
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
                <>
                {/* TODO: better ui */}
                   <h1 style={{color:'red'}}>
                       World's Software is fillled with ERROR                     
                   </h1>
                   <img src={err}/>
                       
                   <h2>
                     Lets go to Mars
                   </h2>    
                </>
                
        )
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary