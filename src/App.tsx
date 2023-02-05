import './App.css';
import Root from './components/Layout/Root';
import List from './features/post/List';
import 'bulma/css/bulma.min.css';


function App() {
    return (
        <Root>
            <List></List>
        </Root>
    );
}

export default App;
