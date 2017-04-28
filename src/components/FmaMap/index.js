import '!style-loader!css-loader!@hackoregon/component-library/assets/leaflet.css';
import React, { Component } from 'react';
import LeafletMap from '@hackoregon/component-library/lib/LeafletMap/LeafletMap';
import { GeoJSON } from 'react-leaflet';
import { connect } from 'react-redux';
import { getFmasThunk, getFmasData, renderFmaPanelProperties, getFmaPanelData } from '../../state';
import { MapPanel } from '../index';

const portland = [45.52, -122.67];

class FmaMap extends Component {
  constructor() {
    super();
    this.onEachFeature = this.onEachFeature.bind(this);
  }

  componentWillMount() {
    this.props.getFmas();
  }

  openPanel(e) {
    const layer = e.target;
    const fmaProperties = layer.feature.properties;
    this.props.renderPanel(fmaProperties);
  }

  onEachFeature(feature, layer) {
    layer.on({
      click: this.openPanel.bind(this),
    });
  }

  render() {
    return (
      <div>
        {
          this.props.fmasData ?
            <LeafletMap url="http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png" center={portland} zoom={11} height={600} width={900}>
              <GeoJSON data={this.props.fmasData} onEachFeature={this.onEachFeature} />
            </LeafletMap>
            :
            <h4>Waiting for map to load...</h4>
        }

        {
          this.props.fmaPanelData ?
            <MapPanel /> :
          null
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    fmasData: getFmasData(state),
    fmaPanelData: getFmaPanelData(state),
  }),
  dispatch => ({
    getFmas: () => dispatch(getFmasThunk()),
    renderPanel: fmaProperties => dispatch(renderFmaPanelProperties(fmaProperties)),
  }),
)(FmaMap);
