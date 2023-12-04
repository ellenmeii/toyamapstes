import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App'
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile'
import Callapi from '../Callapi';
import Countnumber from '../Countnumber';

const webmap = require('../peta/map.html');
const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <ScrollView>
            <Text></Text>
            <View>
               <View style={ styles.listitems }>
                    <Image source={require('../peta/PETAWILAYAHDAS.png')} style={ styles.image } />
                    <Text style= { styles.caption }>Peta Wilayah DAS Batulicin</Text>
                </View>
                <View style={ styles.listitems }>
                    <Image source={require('../peta/PETAORDE.png')} style={ styles.image } />
                    <Text style= { styles.caption }>Peta Orde DAS Batulicin</Text>
                </View>
                <View style={ styles.listitems }>
                    <Image source={require('../peta/PETASUBDAS.png')} style={ styles.image } />
                    <Text style= { styles.caption }>Peta Sub DAS Batulicin</Text>
                </View>
            </View>
        </ScrollView>
    );
}
function MapScreen() {
    return (

            <WebView source={ webmap }
      />
    );
}
function ProfileScreen() {
    return (
        <View>
            <Portofolio/>
        </View>
    );
}

function MahasiswaScreen() {
    return (
        <View>
            <Getjsonfile/>
        </View>
    );
}

function MahasiswaAPIScreen() {
    return (
        <View>
            <Callapi/>
        </View>
    );
}
function CountScreen() {
    return (
        <View>
            <Countnumber/>
        </View>
    );
}



function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}  >
        <Tab.Screen name="Home" component={HomeScreen}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
                  <Fontawesome5 name="home" color={color} size={size} />
            ),
        }}
         />
        <Tab.Screen name="Map" component={MapScreen} 
                options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color, size }) => (
                          <Fontawesome5 name="map-marker-alt" color={color} size={size} />
                    ),
                }} 
                />
        <Tab.Screen name="Profile" component={ProfileScreen} 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                          <Fontawesome5 name="user" color={color} size={size} />
                    ),
                }} 
                />
                
        <Tab.Screen name="Mahasiswa" component={MahasiswaScreen} 
                options={{
                    tabBarLabel: 'Mahasiswa',
                    tabBarIcon: ({ color, size }) => (
                          <Fontawesome5 name="users" color={color} size={size} />
                    ),
                }} 
                />
        <Tab.Screen name="Mahasiswa API" component={MahasiswaAPIScreen} 
                options={{
                    tabBarLabel: 'API',
                    tabBarIcon: ({ color, size }) => (
                          <Fontawesome5 name="clipboard-list" color={color} size={size} />
                    ),
                }} 
                />
        <Tab.Screen name="Count Number" component={CountScreen} 
                options={{
                    tabBarLabel: 'Count',
                    tabBarIcon: ({ color, size }) => (
                          <Fontawesome5 name="sort-numeric-up" color={color} size={size} />
                    ),
                }} 
                />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'stretch'
    },
    listitems: {
        padding: 20,
        alignItems: 'center',

    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
    }
    
})