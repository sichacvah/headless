// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics, Colors, Images } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import MapView from 'react-native-maps'
import DialogAndroid from 'react-native-dialogs'

// Styles
import styles from './Styles/ShopsStyle'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// I18n
import I18n from 'react-native-i18n'

class Shops extends React.Component {
  constructor(props) {
    super(props);

    this.selectCityButton = this.selectCityButton.bind(this)
    this.showSelector = this.showSelector.bind(this)
    this.selectCity = this.selectCity.bind(this)

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      city: props.city
    };
  }

  showSelector() {
    const dialog = new DialogAndroid();
    const options = { items: this.props.cities.map((c) => c.name), itemsCallback: this.selectCity };
    dialog.set(options);
    dialog.show();
  }

  selectCity(id, name) {
    this.setState({city: this.props.cities[id]}, () => {
      NavigationActions.refresh({title: name})
      this.refs._map.fitToElements(false)
    })
  }

  selectCityButton() {
    return (
      <TouchableOpacity onPress={this.showSelector}>
        <Icon name='sliders'
          style={styles.navButtonRight}
          size={Metrics.icons.small}
          color={Colors.black}
        />
      </TouchableOpacity>
    )
  }

  componentWillMount() {
    NavigationActions.refresh({title: this.props.city.name, renderRightButton: this.selectCityButton})
  }

  componentDidMount() {
    setTimeout(() => this.refs._map.fitToElements(false), 1000)
  }

  renderMarker(data, ind) {
    return (
      <MapView.Marker
        coordinate={{
          latitude: parseFloat(data.lat),
          longitude: parseFloat(data.lng)
        }}
        image={Images.pin}
        title={data.address}
        key={data.id}  />
    )
  }


  render () {
    const shops = this.props.shops.filter(s => s.city_id === this.state.city.id)
    const firstShop = shops[0]
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            ...this.state.region,
            latitude: parseFloat(firstShop.lat),
            longitude: parseFloat(firstShop.lng)
          }}
          ref='_map'
          loadingEnabled
          showsScale
          showCompas
          showsUserLocation={true}
          style={styles.map}>
          {shops.map(this.renderMarker)}
        </MapView>

      </View>
    )
  }

}

const mapStateToProps = (state) => {
  const city = state.cities.payload.find((c) => state.account.payload.city_id === c.id)
  return {
    city: (!!city ? city : state.cities.payload[0]),
    cities: state.cities.payload,
    shops: state.shops.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shops)
