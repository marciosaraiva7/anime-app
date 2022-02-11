import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBar, Text } from "react-native";

import Home from "./src/home";
import AnimeDetail from "./src/animeDetail";
import SearchAnime from "./src/searchAnime";




const Stack = createNativeStackNavigator();

export default function App({routes}) {
    return(

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                
            >
                <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={{
                      headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name="Anime"
                    component={AnimeDetail}
                    options={({route}) => ({headerTitle: route.params.name})}
                />
                <Stack.Screen 
                    name="SearchAnime"
                    component={SearchAnime}
                    options={{
                        headerShown:false,
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
        )
    }
