import * as React from 'react';
import './app.css';

interface AppProps {}
interface AppState {}

class Home extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = { };

    }
    
    render() {

        return (
            <div className="App">
                <div className="App-header">
                </div>
            </div>
        );
    }
}

export default Home;
