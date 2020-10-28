import React from 'react';
import Demo from "./pages/demo";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            App Container
            <Demo />
        </div>);
    }
}
export default App;