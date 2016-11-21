// @flow

import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, View, Image, ActivityIndicator } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {
  render () {
    if (this.props.isLoading) {
      return <ActivityIndicator animating={true} />;
    }
    return (
        <Image style={styles.mainContainer} source={Images.bgBlur}>
          <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
          <ScrollView style={styles.container}>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.row}>
                  <View style={styles.balanceItem}>
                    <Text style={styles.balanceValue}>{this.props.balance.percent}</Text>
                    <Text style={styles.balanceLabel}>Начислений</Text>
                  </View>

                  <View style={styles.balanceItem}>
                    <Text style={styles.balanceValue}>{this.props.balance.balance_temp}</Text>
                    <Text style={styles.balanceLabel}>Клубных баллов</Text>
                  </View>

                  <View style={styles.balanceItem}>
                    <Text style={styles.balanceValue}>{this.props.balance.balance}</Text>
                    <Text style={styles.balanceLabel}>Подарочных баллов</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardBody}>
                <View style={styles.numberWrapper}>
                  <Text style={styles.number}>{this.props.balance.card_no}</Text>
                </View>
                <Image style={styles.barcode} source={{uri: 'data:image/jpeg;base64,' + this.props.barcode, scale: 3}} />
              </View>
            </View>
          </ScrollView>
        </Image>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    barcode: state.barcode.payload,
    balance: state.balance.payload,
    isLoading: state.barcode.fetching || state.balance.fetching

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)
