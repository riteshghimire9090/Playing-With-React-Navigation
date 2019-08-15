import React from "react";
import { View, Text,Button,TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer ,createDrawerNavigator} from "react-navigation";

class HomeScreen extends React.Component {
  static navigationOptions = {
     title: 'Home',
   };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
         title="Go to Details"
         onPress={() => this.props.navigation.navigate('About',{'hello':'I am Here'})}
       />
      </View>
    );
  }
}
class AboutScreen extends React.Component {
  static navigationOptions = {
     title: 'About',
   };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Go to About</Text>
        <Text>{this.props.navigation.getParam('hello')}</Text>
        <Button
         title="Go to Details"
         onPress={() => this.props.navigation.goBack()}
       />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({

  About:AboutScreen
},{
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });
//




class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings</Text>
      </View>
    );
  }
}
class ContactScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings</Text>
      </View>
    );
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    Conact: ContactScreen,
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

const AppContainer= createAppContainer(DrawerNavigator);

export default class App extends React.Component {
  render() {
    /* In the root component we are rendering the app navigator */
    return <AppContainer />;
  }
}
