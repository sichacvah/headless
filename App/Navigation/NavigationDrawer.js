// @flow

import React, { PropTypes, Component } from 'react'
// import Drawer from 'react-native-drawer'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import DrawerContent from '../Containers/DrawerContent'
import { connect } from 'react-redux'
import Styles from './Styles/NavigationDrawerStyle'
import DrawerLayout from 'react-native-drawer-layout';
import {Colors} from '../Themes/'
/* *******************
* Documentation: https://github.com/root-two/react-native-drawer
********************/

class NavigationDrawer extends Component {
  componentWillReceiveProps(nextProps) {
    const state = this.props.navigationState;
    const nextState = nextProps.navigationState;
    if (nextState.open && !state.open) {
      this.refs.navigation.openDrawer();
    }
    if (!nextState.open && state.open) {
      this.refs.navigation.closeDrawer();
    }
  }

  render () {
    const state = this.props.navigationState
    const children = state.children
    return (
      <DrawerLayout
        ref='navigation'
        drawerBackgroundColor={Colors.menu}
        drawerWidth={300}
        open={state.open}
        onDrawerOpen={() => NavigationActions.refresh({key: state.key, open: true})}
        onDrawerClose={() => NavigationActions.refresh({key: state.key, open: false})}
        renderNavigationView={() => <DrawerContent drawer={this.refs.navigation} />}
        style={Styles}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </DrawerLayout>
    )
  }
}

NavigationDrawer.propTypes = {
  navigationState: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)
