import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ActivityIndicator, Button, Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    minWidth: 100,
    backgroundColor: '#ffcc00',
    borderColor: '#cccccc',
    borderWidth: 1,
  },
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
});

// const headerOptions: StackNavigationOptions = {
//   headerStyle: {
//     backgroundColor: '#F00000',
//     height: 100,
//     borderBottomColor: '#222224',
//     borderBottomWidth: 6,
//   },
//   headerTitleStyle: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: 'white',
//     fontFamily: 'Pokemon Solid',
//   },
//   headerLeft: () => null,
// };

const Stack = createStackNavigator();
const LoadingScreen = ({navigation}) => {
  return (
    <View style={styles.background}>
      <ActivityIndicator />
      <Text>Loading now...</Text>
      <Button
        title="Skip"
        style={styles.button}
        onPress={() => {
          navigation.navigate('NewFeaturesScreen');
        }}
      />
    </View>
  );
};

function NewFeaturesScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome/Help Screen</Text>
      <Button
        title="Skip"
        onPress={() => {
          // navigation.navigate("MainScreen");
          navigation.navigate('AuthScreen');
        }}
      />
    </View>
  );
}

function AuthScreen({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        options={{headerShown: false}}
        component={SignInScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={{headerShown: false}}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
}
function SignInScreen({navigation}) {
  return (
    <View style={styles.background}>
      <Text>SignIn Screen</Text>
      <Text>SignIn Form</Text>
      <Button
        title="Sign Up"
        style={styles.button}
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />

      <Button
        title="Main"
        style={styles.button}
        onPress={() => {
          navigation.navigate('MainScreen');
        }}
      />
    </View>
  );
}
function SignUpScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>SignUp Screen</Text>
      <Button
        title="Sign In"
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();
function MainScreen({navigation, signoutCallback}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Setting') {
            iconName = 'form';
          } else {
            iconName = 'profile';
          }
          // You can return any component that you like here!
          return <Text>test</Text>;
        },
      })}
      tabBarOptions={{
        //font color in tabbar item
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="HomeScreenNewsList"
        options={{headerShown: false}}
        component={HomeScreenNewsList}
      />
      <Stack.Screen
        name="HomeScreenNewsDetail"
        component={HomeScreenNewsDetail}
        options={{
          headerShown: true,
          headerTitle: 'Detail',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#ffcc00"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function HomeScreenNewsList({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>News List</Text>
      <Button
        title="Read News"
        onPress={() => {
          navigation.navigate('HomeScreenNewsDetail');
        }}
      />
    </View>
  );
}

function HomeScreenNewsDetail() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>News Detail</Text>
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Setting Screen</Text>
    </View>
  );
}
function ProfileScreen({navigation, signoutCallback}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button
        title="Logout"
        onPress={() => {
          //   NativeEventEmitter("LogoutEvent");
          navigation.navigate('AuthScreen');
          //   signoutCallback || signoutCallback();
        }}
      />
    </View>
  );
}

const currentVersion = '0.1';

export default function Root() {
  const [loadedState, setLoadedState] = React.useState('loading');
  //Current version app opened times
  const [openedCount, setOpenedCount] = React.useState({0.1: 0});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        {loadedState === 'loading' ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="LoadingScreen"
            component={LoadingScreen}
          />
        ) : null}
        {openedCount[currentVersion] < 1 ? (
          <Stack.Screen
            name="NewFeaturesScreen"
            options={{headerShown: false}}
            component={NewFeaturesScreen}
          />
        ) : null}

        {/* {isLoggedIn ? ( */}
        <Stack.Screen
          name="MainScreen"
          options={{headerShown: false}}
          component={MainScreen}
        />
        {/* ) : ( */}
        <Stack.Screen
          name="AuthScreen"
          options={{headerShown: false}}
          component={AuthScreen}
        />
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
