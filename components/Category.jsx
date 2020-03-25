import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { css } from "@emotion/native";
import { Icon } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const Category = ({ navigation }) => {
  const [category, useCategory] = useState([
    {
      id: "1",
      title: "Commerce",
      icon: "briefcase"
    },
    {
      id: "2",
      title: "Food",
      icon: "coffee"
    },
    {
      id: "3",
      title: "Médcine",
      icon: "stethoscope"
    },
    {
      id: "4",
      title: "University",
      icon: "university"
    },
    {
      id: "5",
      title: "Transport",
      icon: "taxi"
    },
    {
      id: "6",
      title: "Sport",
      icon: "futbol-o"
    },
    {
      id: "7",
      title: "Métier",
      icon: "pencil"
    },
    {
      id: "8",
      title: "Hotels",
      icon: "hotel"
    },
    {
      id: "9",
      title: "Bienfait",
      icon: "thumbs-up"
    },
    {
      id: "10",
      title: "Creativité",
      icon: "video-camera"
    },
    {
      id: "11",
      title: "Evenement",
      icon: "calendar-o"
    },
    {
      id: "12",
      title: "Touriste",
      icon: "tree"
    }
  ]);

  return (
    <View>
      <FlatList
        contentContainerStyle={container}
        numColumns={3}
        data={category}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={itemStyle}
            onPress={() => navigation.navigate("Content")}
          >
            <LinearGradient
              colors={["#43e97b", "#38f9d7"]}
              style={{ padding: 5, borderRadius: 10 }}
            >
              <Icon
                style={iconStyle}
                type="FontAwesome"
                name={item.icon}
              ></Icon>
              <Text style={itemText}>{item.title}</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      ></FlatList>
    </View>
  );
};

const container = css`
  padding-top: 20px;
`;

const itemStyle = css`
  width: 25%;
  margin: 5px 15px;
  padding: 25px 0px;
`;

const itemText = css`
  text-align: center;
  font-size: 15px;
  color: #fff;
`;

const iconStyle = css`
  text-align: center;
  font-size: 30px;
  color: #fff;
  margin: 5px 0px;
`;

export default Category;
