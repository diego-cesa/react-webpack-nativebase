import React from 'react';
import {render} from 'react-dom';

class Main extends React.Component {
    render () {
        return (
            <div>
                <p>Test</p>
            </div>
        );
    }
}

render(<Main/>, document.getElementById('app'));