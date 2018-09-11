import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import data from "../data/coordinates.json";
import Infoblock from "./infoblock"

const GoogleMapExample = withGoogleMap(props => (
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat:53.90074782466107, lng: 27.56203651428223 }}
	>
		{props.coardinates.map((item,key) =>(
			<Marker key={key} position={{ lat:item.lat, lng:item.lng }} markerWithLabel="!!!" onClick={() => props.handleClick(key)} />)
		)}

	</GoogleMap>
));

class Map extends Component {
	constructor(){
		super();
		this.state ={
			coardinates: data,
			removed: [],
			current: {}
		}
	}

	currentCoardinate (key) {
		this.setState({current : this.state.coardinates[key].info, currentIndex: key});
	}
	removeCurrent =  () => {
		this.setState({
			current :{},
			currentIndex: undefined,
			removed: [...this.state.removed, this.state.currentIndex]
		});
	};
	handleClick = (key, event) => {
		this.currentCoardinate(key);

};
	render() {

		return(
			<div>
				{
					!!this.state.removed.length && <button className="show-all" onClick={() => this.setState({ removed: []})}>Show all</button>
				}
				<Infoblock info={this.state.current} removerCurrent={this.state.currentIndex !== undefined && this.removeCurrent}/>
				<GoogleMapExample
					coardinates={this.state.coardinates.filter((elem, index) => this.state.removed.indexOf(index) < 0)}
					handleClick={this.handleClick.bind(this)}
					containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
					mapElement={ <div style={{ height: `100%` }} /> }
				/>
			</div>
				
		);
	}
}


export default Map;