import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TeacherList from '../Pages/TeacherList';
import Favorites from '../Pages/Favorites';


const {Navigator,Screen } = createBottomTabNavigator();

function StudyTabs() {
    return(
        <Navigator>
            <Screen name="TeacherList" component={TeacherList} />
            <Screen name="Favorites" component={Favorites} />
        </Navigator>
    )
}

export default StudyTabs;