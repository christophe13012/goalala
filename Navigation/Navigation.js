import React from "react"; // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image !
import { StyleSheet, Image, Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import Splash from "../Components/Splash";
import Home from "../Components/Home";
import MatchDetail from "../Components/MatchDetail";
import Settings from "../Components/Settings";
import Favorites from "../Components/Favorites";
import Live from "../Components/Live";
import Recents from "../Components/Recents";

const CustomHeader = ({ title, subtitle }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

const TabNav = createMaterialTopTabNavigator(
  {
    Tab1: {
      screen: Recents,
      navigationOptions: {
        title: "Terminés",
        tabBarOptions: {
          upperCaseLabel: false,
          style: {
            backgroundColor: "#1565c0"
          }
        }
      }
    },
    Tab2: {
      screen: Home,
      navigationOptions: {
        title: "Récents",
        tabBarOptions: {
          upperCaseLabel: false,
          style: {
            backgroundColor: "#1565c0"
          }
        }
      }
    },
    Tab3: {
      screen: Live,
      navigationOptions: {
        title: "En cours",
        tabBarOptions: {
          upperCaseLabel: false,
          style: {
            backgroundColor: "#1565c0"
          }
        }
      }
    }
  },
  {
    initialRouteName: "Tab2"
  }
);

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: TabNav,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#311b92"
      },
      headerTitle: <CustomHeader title="Goalala" subtitle="livescore" />,
      headerBackTitle: "Retour"
    }
  },
  MatchDetail: {
    screen: MatchDetail
  }
});

const SettingsStackNavigator = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: "Réglages",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#311b92"
      }
    }
  }
});

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: "Favoris",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#311b92"
      }
    }
  },
  MatchDetail: {
    screen: MatchDetail
  }
});

const LiveScoreTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        title: "Livescore",
        tabBarIcon: () => {
          // On définit le rendu de nos icônes par les images récemment ajoutés au projet
          return (
            <Image
              source={require("../Images/soccer-ball.png")}
              style={styles.icon}
            />
          ); // On applique un style pour les redimensionner comme il faut
        }
      }
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        title: "Favoris",
        tabBarIcon: () => {
          // On définit le rendu de nos icônes par les images récemment ajoutés au projet
          return (
            <Image
              source={require("../Images/favorites.png")}
              style={styles.icon}
            />
          ); // On applique un style pour les redimensionner comme il faut
        }
      }
    },
    Settings: {
      screen: SettingsStackNavigator,
      navigationOptions: {
        title: "Réglages",
        tabBarIcon: () => {
          // On définit le rendu de nos icônes par les images récemment ajoutés au projet
          return (
            <Image
              source={require("../Images/settings.png")}
              style={styles.icon}
            />
          ); // On applique un style pour les redimensionner comme il faut
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#311b92", // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: "white", // Couleur d'arrière-plan des onglets non sélectionnés
      showLabel: true,
      showIcon: true,
      tabStyle: { paddingTop: 10 },
      activeTintColor: "white",
      inactiveTintColor: "black",
      labelStyle: {
        fontSize: 16,
        paddingTop: 5
      }
    }
  }
);

const InitialNavigator = createSwitchNavigator({
  Splash: Splash,
  App: LiveScoreTabNavigator
});

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20
  },
  header: {
    backgroundColor: "#311b92",
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 2
  },
  subtitle: {
    fontSize: 14,
    color: "white"
  }
});

export default createAppContainer(InitialNavigator);
