// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, ListView, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import TextInputWidget from '../Components/TextInputWidget'
import FormTitleWidget from '../Components/FormTitleWidget'
import FormWidget from '../Components/FormWidget'
import SpacerWidget from '../Components/SpacerWidget'
import LinkWidget from '../Components/LinkWidget'
import Communications from 'react-native-communications'
// Styles
import styles from './Styles/PromosStyle'

// I18n
import I18n from 'react-native-i18n'

class Promos extends React.Component {
  constructor(props) {
    super(props)

    this.renderRow = this.renderRow.bind(this)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(props.promos),
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableOpacity key={rowData.id} onPress={() => Communications.web(rowData.link)}>
        <View style={styles.item}>
          <Image
            resizeMode='cover'
            style={styles.itemImage}
            source={{uri: rowData.image}} />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{rowData.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderHeader() {
    return (
      <View >
        <SpacerWidget />
        <FormWidget>
          <LinkWidget last title="Уведомления об акциях"/>
        </FormWidget>
        <SpacerWidget />
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          renderHeader={this.renderHeader.bind(this)}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          />
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    promos: state.promos.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Promos)
