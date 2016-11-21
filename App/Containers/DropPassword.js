// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics, ApplicationStyles } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions as NavigationActions } from 'react-native-router-flux'
import RoundedButton from '../Components/RoundedButton'

import TextInputWidget from '../Components/TextInputWidget'
import FormWidget from '../Components/FormWidget'
import SpacerWidget from '../Components/SpacerWidget'
// Styles
import styles from './Styles/DropPasswordStyle'

import buttonStyles from '../Components/Styles/RoundedButtonStyle'
// I18n
import I18n from 'react-native-i18n'

class DropPassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  render () {
    return (
      <ScrollView style={styles.container} >
        <KeyboardAvoidingView behavior='position' >
          <SpacerWidget />
          <FormWidget>
            <TextInputWidget
              ref='email'
              last
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}
              title='Email'
              keyboardType='email-address'
              placeholder='yourmail@mail.ru'/>
            </FormWidget>
        </KeyboardAvoidingView>
        <SpacerWidget />
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            Введите ваш адрес электронной почты
          </Text>
        </View>
        <SpacerWidget />
        <View style={styles.buttonWrapper}>
          <RoundedButton>
            Сбросить пароль
          </RoundedButton>
        </View>
      </ScrollView>
    )
  }

}

// <Text>DropPassword Container</Text>
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropPassword)
