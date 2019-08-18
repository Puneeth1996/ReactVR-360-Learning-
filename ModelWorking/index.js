import React from 'react';
import {
  AppRegistry,
  View,
  asset,
  VrButton,
} from 'react-360';
import ArtGalleryModel from './components/ArtGalleryModel';
import Lights from './components/Lights';
import Marker from './components/Marker';
import Entity from 'Entity';

export default class WelcomeTo360 extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     xCurPos : -5,
  //     zCurPos : 0,
  //     xTarPos : -5,
  //     zTarPos : 0,
  //   };
  //   this.Lerp = this.Lerp.bind(this);
  // }

  // componentDidMount(){
  //   this.Lerp();
  // }

  // Lerp() {
  //   if(Math.abs (this.state.xCurPos - this.state.xTarPos) > 0.3)
  //   {
  //     //  to match the X coordinates
  //     this.setState({
  //       xCurPos : this.state.xCurPos * (1 - 0.05) + this.state.xTarPos * 0.05
  //     });
  
  //     postMessage({type: "newPosition", x: this.state.xCurPos, z: this.state.zCurPos});
  
  //   }
  //   else if(Math.abs (this.state.zCurPos - this.state.zTarPos) > 0.3)
  // {
  //   //  to match the Z coordinates
  //   this.setState({
  //     zCurPos : this.state.zCurPos * (1 - 0.05) + this.state.zTarPos * 0.05
  //   });
  //   postMessage({type: "newPosition", x: this.state.xCurPos, z: this.state.zCurPos});
  // }
  //   requestAnimationFrame(this.Lerp);
  // }
  
  
  render() {
    return (
      <View>
        <Lights />

        {/* <VrButton
          onClick={() => {
            this.state.xTarPos = 15;
            this.state.zTarPos = 20;
          }}>

          <Entity
              style={{
                  transform: [
                  {translate: [0,-50,-50]},
                  {rotateX: 250},
                  {rotateY: 5},
                  {rotateZ: 5},
                  {scale: 0.2},
                  ],
              }}
              source={{
                  obj: asset('Marker.obj'),
                  mtl: asset('Marker.mtl')
              }}
              lit={true}
            />
          />

          </VrButton> */}
          
          <Marker />
        <ArtGalleryModel />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeTo360', () => WelcomeTo360);
