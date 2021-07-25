import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import { useState } from 'react'
import { useEffect } from 'react'

const Routes = () => {
    
    const [authentic, setAuthentic] = useState(false);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@Kenziehub"))

        if (token) {
            return setAuthentic(true)
        }
    }, [authentic])
    
    return (
        <Switch>
            <Route exact path="/">
                <Home authentic={authentic}/>
            </Route>
            <Route path="/login">
                <Login authentic={authentic}
                setAuthentic={setAuthentic}/>
            </Route>
            <Route path="/register">
                <Register authentic={authentic}/>
            </Route>
            <Route path="/dashboard">
                <Dashboard authentic={authentic}/>
            </Route>
        </Switch>
    )
}

export default Routes