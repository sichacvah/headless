// @flow

import React from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation,
  KeyboardAvoidingView,
  UIManager
} from 'react-native'
import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyle'
import {Images, Metrics, Colors} from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import RoundedButton from '../Components/RoundedButton';
import { Actions as NavigationActions } from 'react-native-router-flux'
import I18n from 'react-native-i18n'

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

type LoginScreenProps = {
  dispatch: () => any,
  fetching: boolean,
  attemptLogin: () => void
}

class LoginScreen extends React.Component {

  props: LoginScreenProps

  state: {
    username: string,
    password: string,
    visibleHeight: number,
    topLogo: {
      width: number
    }
  }

  isAttempting: boolean
  keyboardDidShowListener: Object
  keyboardDidHideListener: Object

  constructor (props: LoginScreenProps) {
    super(props)
    this.state = {
      email: '',
      password: '',
      visibleHeight: Metrics.screenHeight - 60,
      topLogo: { width: Metrics.screenWidth },
      signupButton: true,
      paddingTop: 80
    }
    this.submit = this.submit.bind(this)
    this.isAttempting = false
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      NavigationActions.pop()
    }
  }
  //
  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }
  //
  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 125, height: 87.5 },
      paddingTop: 20,
      signupButton: false
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight - 80,
      paddingTop: 80,
      topLogo: {width: Metrics.screenWidth},
      signupButton: true
    })
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(username, password)
  }

  handleChangeUsername = (text) => {
    this.setState({ email: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  submit() {
    this.setState({email: '', password: ''}, () => this.props.attemptLogin({email: this.state.email, password: this.state.password}))
  }

  render () {
    const { password } = this.state
    const { fetching } = this.props
    const editable = !fetching
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly
    return (
      <Image style={Styles.content} source={Images.bgBlur}>
        <ScrollView
          contentContainerStyle={{justifyContent: 'center'}}
          style={[Styles.container, {height: this.state.visibleHeight, paddingTop: this.state.paddingTop}]}
          keyboardShouldPersistTaps>
          <Image source={Images.logo} style={[Styles.topLogo, this.state.topLogo]} />
          <View style={Styles.form}>
            <View style={[Styles.row, Styles.topRow]}>
              <TextInput
                ref='email'
                style={textInputStyle}
                value={this.state.email}
                keyboardType='email-address'
                returnKeyType='next'
                autoCorrect={true}
                placeholderTextColor={Colors.snow}
                onChangeText={this.handleChangeUsername}
                underlineColorAndroid='transparent'
                onSubmitEditing={() => this.refs.password.focus()}
                placeholder={I18n.t('username')} />
            </View>

            <View style={[Styles.row, Styles.bottomRow]}>
              <TextInput
                ref='password'
                style={textInputStyle}
                placeholderTextColor={Colors.snow}
                value={password}
                autoCapitalize='none'
                secureTextEntry
                onChangeText={this.handleChangePassword}
                onSubmitEditing={this.submit}
                underlineColorAndroid='transparent'
                placeholder={I18n.t('password')} />
            </View>

            <View style={Styles.descriptionWrapper}>
              <Text style={Styles.description}>
                Учётные записи на сайте Чемпион {"\n"}
                и в мобильном приложении совпадают
              </Text>
            </View>

            <View style={Styles.loginButtonWrapper}>
              <RoundedButton onPress={this.submit}>
                Войти
              </RoundedButton>
            </View>

            <View style={Styles.linkWrapper}>
              <TouchableOpacity onPress={NavigationActions.dropPassword}>
                <Text style={Styles.link}>
                  Забыли пароль?
                </Text>
              </TouchableOpacity>
            </View>

          </View>


          </ScrollView>
          {this.state.signupButton && <TouchableOpacity style={Styles.bottomButtonWrapper} onPress={NavigationActions.signupForm}>
            <View style={Styles.bottomButton}>
              <Text style={Styles.link}>
                Зарегистрироваться
              </Text>
            </View>
          </TouchableOpacity>}
      </Image>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
