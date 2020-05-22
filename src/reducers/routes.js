import React, { Component } from 'react';
import PostList from '../containers/post-list';



class Routes extends Component {
    render() {
        return (
            <div>
            <Router history={browserHistory}>
                <Route path="/" component={PostList}/>
            </Router>
                
            </div>
        );
    }
}

export default routes;