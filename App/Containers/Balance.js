// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
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

// Styles
import styles from './Styles/BalanceStyle'

// I18n
import I18n from 'react-native-i18n'

class Balance extends React.Component {

  render () {
    const { balance, balance_inactive, balance_temp, balance_temp_expiry, percent, total, total_to_next_level } = this.props.balance
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <SpacerWidget />
          <FormTitleWidget value='КЛУБНЫЕ БАЛЛЫ' />
          <FormWidget>
            <TextInputWidget
              value={balance}
              title='Активные баллы'
              editable={false} />
            <TextInputWidget
              value={balance_inactive}
              title='Неактивные баллы'
              editable={false} />
            <TextInputWidget
              value={percent}
              title='Процент начисления баллов'
              editable={false} />
            <TextInputWidget
              value={`${total} Р`}
              title='Сумма покупок'
              editable={false} />
            <TextInputWidget
              last
              value={`${total_to_next_level} Р`}
              title='До нового уровня осталось'
              editable={false} />
            </FormWidget>
            <SpacerWidget />
            <FormWidget>
              <TextInputWidget
                last
                editable={false}
                value={balance_temp}
                title='Подарочные баллы'
                subTitle={`Активно до ${balance_temp_expiry}`} />
            </FormWidget>
            <SpacerWidget />
            <FormWidget>
              <LinkWidget last title="История операций" onPress={() => NavigationActions.history()} />
            </FormWidget>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    balance: state.balance.payload,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Balance)
