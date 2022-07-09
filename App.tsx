import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import TabBar from './components/TabBar'
import DataProvider from './contexts'
import HomeScreen from './screens/Home'
import SearchScreen from './screens/Search'
import TasksScreen from './screens/Tasks'

export const BACKGROUND_COLOR = '#18181B'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <TabBar {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Tasks" component={TasksScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </DataProvider>
  )
}
