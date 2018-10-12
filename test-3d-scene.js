import React from 'react';
import {
    ViroScene,
    ViroSkyBox,
    ViroAmbientLight,
    ViroSpotLight,
    ViroCamera,
    ViroBox,
    ViroMaterials
} from 'react-viro';

ViroMaterials.createMaterials({
    wall: {
        lightingModel: 'PBR',
        diffuseColor: '#0000ff'
    }
});

export default class Test3DScene extends React.PureComponent {
    addingThisCrashesApp = () => {
        //empty function
    };

    render() {
        return (
            <ViroScene
                pbrEnabled={true}
                onClick={this.throwBall}
                ref={this.setSceneRef}
            >
                <ViroSkyBox color="#aaaaaa" />
                <ViroAmbientLight color="rgb(170, 170, 170)" />
                <ViroSpotLight
                    position={[0, 50, 0]}
                    color="#ffffff"
                    direction={[0, -1, 0]}
                    attenuationEndDistance={100}
                    castsShadow={false}
                    shadowFarZ={100}
                    shadowOpacity={0.7}
                    outerAngle={125}
                    shadowMap={2048}
                />

                <ViroCamera
                    position={[0, 10, 30]}
                    active={true}
                />

                <ViroBox
                    position={[0, 10, -28]}
                    height={50}
                    width={100}
                    length={1}
                    materials={['wall']}
                    physicsBody={{
                        type: 'Static',
                        restitution: 0.65
                    }}
                    onCollision={this.addingThisCrashesApp}
                />
            </ViroScene>
        );
    }
}