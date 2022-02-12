import React from 'react';
import PostList from './PostList';
import {Router, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';



// const App =() =>{
//     return <div className="ui container">
//         <PostList/>
//     </div>;
// };

// client id: 753107790098-bou3e8gu6kh23vqrbim96ditsaa3ccgp.apps.googleusercontent.com
// secret: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

// const App =() =>{
//     return <div className="ui container">
     
//         <Router history={history}>
//         <div>
//         <Header/>
//         <Route path="/" exact component={StreamList} />
//         <Route path="/streams/new" component={StreamCreate} />
//         <Route path="/streams/edit/:id" exact component={StreamEdit} />
//         <Route path="/streams/delete" exact component={StreamDelete} />
//         <Route path="/streams/show" component={StreamShow} />
//         </div>
//         </Router>
//     </div>;
// };
// export default App;
const App = () => {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </Router>
      </div>
    );
  };
  
  export default App;
  