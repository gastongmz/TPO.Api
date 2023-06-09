import { Route, Redirect } from 'react-router-dom'
const PrivateRoute = ({children, ...rest}) => {    
    const token = JSON.parse(localStorage.getItem("auth"));    
    let auth = {'token': token}        
    return(
        <Route {...rest}>            
                {!auth.token? <Redirect to="/login" /> : children}
        </Route>
    )
}

export default PrivateRoute;