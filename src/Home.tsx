import * as React from 'react';

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
                    <h1>home</h1>
                </div>
            </div>
        );
    }
}

export default Home;
