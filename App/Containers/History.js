// @flow

import React from 'react'
import { ScrollView, View, Text, KeyboardAvoidingView, ListView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics, Fonts } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import SpacerWidget from '../Components/SpacerWidget'
import FormWidget from '../Components/FormWidget'
import FormTitleWidget from '../Components/FormTitleWidget'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/HistoryStyle'

// I18n
import I18n from 'react-native-i18n'

class History extends React.Component {
  constructor(props) {
    super(props)

    this.renderRow = this.renderRow.bind(this)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(props.history),
    };
  }

  renderRow(rowData, sectionID, rowID) {
    const style = () => {
      if (rowData.balance_change > 0) {
        return styles.positive
      } else if (rowData.balance_change < 0) {
        return styles.negative
      } else {
        return styles.neutral
      }
    }
    const sym = () => {
      if (rowData.balance_change > 0) {
        return '+';
      }
      return '';
    }
    return (
      <View style={styles.rowWrapper}>
        <View style={[styles.row, rowID == this.props.history.length - 1 && { borderBottomWidth: 0}]}>
          <View style={styles.firstCol}>
            <Text style={[styles.label, {fontSize: Fonts.size.regular}]}>{rowData.date}</Text>
          </View>

          <View style={styles.col}>
            <Text style={styles.sum}>{rowData.total_change} Р</Text>
          </View>
          <View style={[styles.col, {flex: 0}]}>
            <Text style={style()}>{sym()}{rowData.balance_change} {rowData.balance_type}</Text>
          </View>
        </View>
      </View>
    )
  }


  render () {
    return (
      <ScrollView style={styles.container}>
        <SpacerWidget />
        <View style={styles.tableLabel}>
          <View style={[styles.row, {borderBottomWidth: 0}]}>
            <View style={styles.firstCol}>
              <Text style={styles.label}>ДАТА</Text>
            </View>
            <View style={[styles.col]}>
              <Text style={[styles.label]}>СУММА ПОКУПКИ</Text>
            </View>
            <View style={[styles.col, {flex: 0}]}>
              <Text style={styles.label}>БАЛЛЫ*</Text>
            </View>
          </View>
        </View>
        <FormWidget>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            />
        </FormWidget>
        <FormTitleWidget value='*КБ - Клубные баллы, ПБ - подарочные баллы' />
        <SpacerWidget />

      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    history: state.history.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
