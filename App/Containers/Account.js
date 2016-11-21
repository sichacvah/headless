// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import AccountActions from '../Redux/AccountRedux'
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import TextInputWidget from '../Components/TextInputWidget'
import FormWidget from '../Components/FormWidget'
import SpacerWidget from '../Components/SpacerWidget'
import SelectWidget from '../Components/SelectWidget'
import RoundedButton from '../Components/RoundedButton'
import DatePickerWidget from '../Components/DatePickerWidget'
import moment from 'moment'
// Styles
import styles from './Styles/AccountStyle'

// I18n
import I18n from 'react-native-i18n'

class Account extends React.Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
    this.cities = this.cities.bind(this)
    this.city = this.city.bind(this)
    this.state = {}
  }

  componentWillMount() {
    this.setState({...this.props.account})
  }

  componentWillUnmount() {
    this.setState({...this.props.account})
  }

  cities() {
    return this.props.cities
  }

  city() {
    return this.cities().find(city => city.id === this.state.city_id)
  }

  sexs() {
    return [
      {id: 1, name: 'мужской'},
      {id: 2, name: 'женский'}
    ]
  }

  sex() {
    return this.sexs().find(u => u.id === this.state.sex_id)
  }

  submit() {
    const { birth_day } = this.state
    this.props.updateAccount({
      ...this.state,
      birth_day: (birth_day ? moment(birth_day).format('YYYY-MM-DD') : null)
    })
  }

  render () {
    const regex = /(\+\d{1}|\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/
    return (
      <ScrollView style={styles.container} contentContainerStyle={{justifyContent: 'center'}}>
        <KeyboardAvoidingView behavior='position'>
          <SpacerWidget />
          <FormWidget>
            <TextInputWidget
              ref='first_name'
              value={this.state.first_name}
              title='Имя'
              returnKeyType='next'
              onSubmitEditing={() => this.refs.patronymic_name.focus()}
              onChangeText={first_name => this.setState({first_name})} />
            <TextInputWidget
              ref='patronymic_name'
              value={this.state.patronymic_name}
              title='Отчество'
              returnKeyType='next'
              onSubmitEditing={() => this.refs.birth_day.showDialog()}
              onChangeText={patronymic_name => this.setState({patronymic_name})} />
            <DatePickerWidget
              ref='birth_day'
              value={this.state.birth_day}
              title='Дата рожденья'
              selectDateCallback={(birth_day) => {
                this.setState({birth_day}, () => this.refs.select_sex.showDialog())
              }}
              maxDate={new Date()} />
            <SelectWidget
              ref="select_sex"
              title="Пол"
              itemsCallback={(ind) => this.setState({sex_id: this.sexs()[ind].id}, () => this.refs.phone.focus()) }
              value={this.sex() && this.sex().name}
              values={this.sexs().map((i) => i.name)}  />
            <TextInputWidget
              ref='phone'
              title='Телефон'
              value={this.state.phone}
              onChangeText={phone => this.setState({phone: phone.replace(regex, '+7 ($2) $3-$4-$5')})}
              returnKeyType='next'
              keyboardType='phone-pad'
              onSubmitEditing={() => this.refs.select.showDialog()}
              placeholder='+7 999 000 00 00'/>
            <SelectWidget
              last
              ref="select"
              title="Город"
              itemsCallback={(ind) => this.setState({city_id: this.cities()[ind].id})}
              value={this.city() && this.city().name}
              values={this.cities().map((i) => i.name)}  />
          </FormWidget>
          <SpacerWidget />
        </KeyboardAvoidingView>
        <View style={styles.buttonWrapper}>
          {this.props.isLoading ? <ActivityIndicator animating={true} /> :
          <RoundedButton onPress={this.submit}>
            Сохранить
          </RoundedButton>}
        </View>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    account: state.account.payload,
    isLoading: state.account.fetching,
    cities: state.cities.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccount: (data) => dispatch(AccountActions.accountUpdate(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
