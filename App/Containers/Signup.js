// @flow

import React from 'react'
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Picker,
  View,
  TouchableOpacity,
  ActivityIndicator

} from 'react-native'
import { connect } from 'react-redux'
const Item = Picker.Item;
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics, ApplicationStyles } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions as NavigationActions } from 'react-native-router-flux'
import TextInputWidget from '../Components/TextInputWidget'
import FormWidget from '../Components/FormWidget'
import SpacerWidget from '../Components/SpacerWidget'
import SelectWidget from '../Components/SelectWidget'
import ParsedText from 'react-native-parsed-text'
import RoundedButton from '../Components/RoundedButton'
// Styles
import styles from './Styles/SignupStyle'
import buttonStyles from '../Components/Styles/RoundedButtonStyle'

// I18n
import I18n from 'react-native-i18n'
// Actions
import SignupActions from '../Redux/SignupRedux'

class Signup extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
        email: '',
        phone: '',
        password: '',
        passwordConfirmation: '',
        cityId: null
    }
  }


  render() {
    const { cities } = this.props;
    const city = cities.find(city => city.id === this.state.cityId);
    const regex = /(\+\d{1}|\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/;
    return (
    <ScrollView style={styles.container} contentContainerStyle={{justifyContent: 'center'}}>
        <KeyboardAvoidingView behavior='position' >
          <SpacerWidget />
          <FormWidget>
            <TextInputWidget
              ref='email'
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}
              title='Email'
              returnKeyType='next'
              keyboardType='email-address'
              onSubmitEditing={() => this.refs.phone.focus()}
              placeholder='yourmail@mail.ru'/>
            <TextInputWidget
              ref='phone'
              title='Телефон'
              value={this.state.phone}
              onChangeText={phone => this.setState({phone: phone.replace(regex, '+7 ($2) $3-$4-$5')})}
              returnKeyType='next'
              keyboardType='phone-pad'
              onSubmitEditing={() => this.refs.password.focus()}
              placeholder='+7 999 000 00 00'/>
            <SelectWidget
              ref="select"
              title="Город"
              itemsCallback={(ind) => this.setState({cityId: cities[ind].id})}
              value={city && city.name}
              values={cities.map((i) => i.name)}  />
            <TextInputWidget
              ref='password'
              title='Пароль'
              returnKeyType='next'
              onSubmitEditing={() => this.refs.passwordConfirmation.focus()}
              placeholder=''
              value={this.state.password}
              onChangeText={password => this.setState({password})}
              secureTextEntry={true} />
            <TextInputWidget
              last
              ref='passwordConfirmation'
              title='Повторите пароль'
              onChangeText={passwordConfirmation => this.setState({passwordConfirmation})}
              value={this.state.passwordConfirmation}
              placeholder=''
              secureTextEntry={true} />
          </FormWidget>
          <SpacerWidget />
          <View style={styles.description}>
            <ParsedText
              parse={
                [{
                  pattern: /Пользовательского соглашения/,
                  style: styles.descriptionLink,
                  onPress: () => {alert(11)}
                }]
              }
              style={styles.descriptionText}>
              Регистрируюясь и устанавливая программу Вы
              соглашаетесь с условиями Пользовательского соглашения
            </ParsedText>
          </View>
          <SpacerWidget />

      </KeyboardAvoidingView>
      <View style={styles.buttonWrapper}>
        {!this.props.fetching ?
        <RoundedButton onPress={() => {
          this.props.attemptSignup(this.state)
        }}>
          Регистрация
        </RoundedButton> :
        <ActivityIndicator animating={true} />}
      </View>
    </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    fetching: state.signup.fetching,
    cities: state.cities.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptSignup: (data) => dispatch(SignupActions.signupRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
