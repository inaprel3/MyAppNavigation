/*     8
Створіть мобільний застосунок з 3 екранами та навігацією по ним. Додайте основні компоненти на екрани і створіть книгу контактів, галерею або будь-який інший простий додаток.  */

import * as React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//головний екран
function HomeChooseScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./HomeTravel.jpg')} 
      style={{flex: 1}}>
    <View 
      style = {{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
      }}>
      <Text style={{backgroundColor: 'white', marginBottom: 20}}>Оберіть країну: Україна, Франція, США</Text>
      
      <Text style={{backgroundColor: 'white'}}>Україна:</Text>
      <Button
        title="Go to Ukraine"
        onPress={() => {
          navigation.navigate('Ukraine');
        }}
        style={{ marginBottom: 20 }}
      />

      <Text style={{backgroundColor: 'white'}}>Франція:</Text>
      <Button
        title="Go to France"
        onPress={() => {
          navigation.navigate('France');
        }}
        style={{ marginBottom: 20 }}
      />

      <Text style={{backgroundColor: 'white'}}>США:</Text>
      <Button
        title="Go to USA"
        onPress={() => {
          navigation.navigate('USA');
        }}
        style={{ marginBottom: 20 }}
      />  
    </View>
    </ImageBackground>
  );
}

//перший екран
function UkraineScreen({ route, navigation }) {
  return (
    <ImageBackground
      source={require('./UkraineTravel.jpg')}
      style={{flex: 1}}>
    <View 
      style = {{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' }}
      >
      <Text style={{backgroundColor: 'white'}}>Україна</Text>
      <Text style={{backgroundColor: 'white', marginBottom: 20}}>
        держава, розташована у Східній Європі, охоплює південний захід Східноєвропейської рівнини, частину Східних Карпат і Кримські гори. Межує з Румунією і Молдовою на південному заході, з Угорщиною, Словаччиною та Польщею на заході, з Білоруссю на півночі та з Росією на сході й північному сході. На півдні омивається Чорним та Азовським морями. Площа становить 603 700 км². Найбільша за площею країна серед повністю розташованих у Європі.
      </Text>
      <Button
        title="Go to Ukraine again"
        onPress={() =>
          navigation.push('Ukraine', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
        style={{ marginBottom: 20 }}
      />
      <Button 
        title="Go to Home" 
        onPress={() => navigation.navigate('Home')} 
        style={{ marginBottom: 20 }}
      />
      <Button 
        title="Go to France" 
        onPress={() => navigation.navigate('France')} 
        style={{ marginBottom: 20 }}
      />
      <Button 
        title="Go to USA" 
        onPress={() => navigation.navigate('USA')} 
        style={{ marginBottom: 20 }}
      />
      <Button 
        title="Go back" 
        onPress={() => navigation.goBack()} 
      />
    </View>
    </ImageBackground>
  );
}

//другий екран
function FranceDetailsScreen({ route, navigation }) {
  return (
    <ImageBackground
      source={require('./FranceTravel.jpg')}
      style={{flex: 1}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{backgroundColor: 'white'}}>Франція</Text>
    <Text style={{backgroundColor: 'white', marginBottom: 20}}>
      держава, територія якої простягається з півдня на північ від Середземного моря до Ла-Маншу та Північного моря, а зі сходу на захід — від Рейну до Атлантичного океану. Межує на північному сході з Бельгією, Люксембургом і Німеччиною, південному заході з Іспанією та Андоррою, на сході з Швейцарією, на південному сході з Італією та Монако. Франція — унітарна змішана республіка зі столицею у місті Париж, найбільшим містом країни і її головним культурним та економічним центром. Іншими основними міськими територіями є Ліон, Марсель, Тулуза, Бордо, Лілль та Ніцца.
    </Text>
      <Button
        title="Go to France... again"
        onPress={() =>
          navigation.push('France', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
        style={{ marginBottom: 20 }}
      />
      <Button 
        title="Go to Home" 
        onPress={() => navigation.navigate('Home')} 
        style={{ marginBottom: 20 }}
      />
      <Button 
        title="Go to Ukraine" 
        onPress={() => navigation.navigate('Ukraine')} 
        style={{ marginBottom: 20 }}
      />
      <Button 
        title="Go to USA" 
        onPress={() => navigation.navigate('USA')} 
        style={{ marginBottom: 20 }}
      />
      <Button 
        title="Go back"   
        onPress={() => navigation.goBack()} 
      />
    </View>
    </ImageBackground>
  );
}

//третій екран
function USADetailsScreen({ route, navigation }) {
  return (
    <ImageBackground
      source={require('./USATravel.jpg')}
      style={{flex: 1}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{backgroundColor: 'white'}}>США</Text>
    <Text style={{backgroundColor: 'white', marginBottom: 20}}>
      федеративна республіка в Північній Америці, що складається з 50 штатів: Аляски, Гаваїв, 48 штатів на території між Атлантичним і Тихим океанами і між Канадою і Мексикою та федерального (столичного) округу Колумбія. Окрім того, США належать частина Віргінських островів (Американські Віргінські Острови) та Пуерто-Рико у Вест-Індії, Східне Самоа, Гуам, Північні Маріанські Острови та інші острови в Океанії. Столиця — місто Вашингтон.
    </Text>
      <Button
        title="Go to USA... again"
        onPress={() =>
          navigation.push('USA', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
        style={{ marginBottom: 20 }}
      />
      <Button 
        title="Go to Home" 
        onPress={() => navigation.navigate('Home')} 
        style={{ marginBottom: 20 }}
      />
      <Button 
        title="Go to Ukraine" 
        onPress={() => navigation.navigate('Ukraine')} 
        style={{ marginBottom: 20 }}
      />
      <Button 
        title="Go to France" 
        onPress={() => navigation.navigate('France')} 
        style={{ marginBottom: 20 }}
      />
      <Button 
        title="Go back" 
        onPress={() => navigation.goBack()} 
      />
    </View>
    </ImageBackground>
  );
}
  
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">

    <Stack.Screen 
      name="Home" 
      component={HomeChooseScreen} 
      options={{ title: 'Overview' }}
    />

    <Stack.Screen 
      name="Ukraine" 
      component={UkraineScreen} 
    />

    <Stack.Screen 
      name="France"
      component={FranceDetailsScreen} 
    />

    <Stack.Screen 
      name="USA"
      component={USADetailsScreen} 
    />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;



/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;*/


/*import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import About from './screens/About';
import Help from './screens/Help';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './screens/Settings';
import Password from './screens/Password';
import Notifications from './screens/Notifications';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

// Call Stack Navigator
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}

export default function HomeScreen(props) {
  props.navigation.setOptions({ // <<< Add this line
    title: 'My Custom Title',
    headerStyle: { backgroundColor: '#00d2d3' },
  });

  function AfterLogin() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#00d2d3',
          inactiveTintColor: 'gray',
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'hammer-outline' : 'cog-outline';
            }
  
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    );
  }

  return (
    <Tab.Navigator
  tabBarOptions={{ // Add these lines
    activeTintColor: '#00d2d3',
    inactiveTintColor: 'gray',
  }}>
  <Tab.Screen name="Home" component={HomeStack} />
  <Tab.Screen name="Settings" component={SettingsStack} />
</Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <HomeStack /> 
      {
        <Button
        onPress={() => props.navigation.navigate('About', { username: 'Stasiia' })}
    title="Go to About"

        //onPress={() => props.navigation.goBack()} {}
        //title="Back to Home"
    />
      }
      <Text>{props.route.params.username}</Text>
      <Tabs /> {}
    </NavigationContainer>
  );
}*/


/*import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {

      }
    </NavigationContainer>
  );
};

export default App;*/