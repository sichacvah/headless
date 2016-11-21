// @flow

import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'

AppRegistry.registerHeadlessTask('MessagingService', () => (async (args) => {
  console.log("AWDAWDAWDADAWDWDAD")
  console.log(args)
}))
AppRegistry.registerComponent('Champion', () => App)
