import React, {Component} from 'react';
import {Viro3DSceneNavigator} from 'react-viro';

import Test3DScene from './test-3d-scene.js';

const apiKey = 'C435F4BB-C375-4423-AAC1-BFD6B08CDE1B';

export default class App extends Component {
    render() {
        return (
            <Viro3DSceneNavigator
                initialScene={{
                    scene: Test3DScene
                }}
                apiKey={apiKey}
            />
        );
    }
}
