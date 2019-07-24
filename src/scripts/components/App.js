import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Dashboard from './dashboard/Dashboard';
import About from './About';
import PostSingle from './dashboard/postSingle';
import { connect } from 'react-redux';
import postsAction from '../store/actions/postsAction';

const App = ({ addAllPost }) => {

    useEffect(() => {
        addAllPost();
    }, []);

    return (
        <BrowserRouter>
            <NavBar />
            <div className="container">
                <Switch>
                    <Route path="/about" component={About} />
                    
                    <Route path="/page/:id" component={Dashboard} />
                    <Route exact path="/post/:post_id" component={ PostSingle } />
                    <Route
                        path="/:slug"
                        exact
                        strict
                        render={(props) => <h1 className="section">Error 404</h1>}
                    />
                    
                    <Route path="/" component={Dashboard} />
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addAllPost: () => {
            dispatch(postsAction());
        }
    }
}

export default connect(null, mapDispatchToProps)(App);