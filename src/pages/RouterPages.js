import React from 'react'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './home'
import SignIn from './SignIn'
export default function RouterPages(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} exact />
                    <Route path="/sign" element={<SignIn/>} exact />
                    </Routes>
                    </Router>
                    </div>
    )
}