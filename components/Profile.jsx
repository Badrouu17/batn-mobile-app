import React from "react";
import { Image, View, ScrollView } from "react-native";
import { css } from "@emotion/native";
import { List, ListItem, Text, Left, Body } from "native-base";

const Profile = () => {
  return (
    <View style={container}>
      <View style={imgSection}>
        <Image
          source={require("./../img/01.jpg")}
          style={{ height: 150, width: null, flex: 1 }}
        />
      </View>
      <View style={listSection}>
        <ScrollView>
          <List>
            <ListItem>
              <Left>
                <Text style={textStyle}>Title</Text>
              </Left>
              <Body>
                <Text style={textStyle}>Fasty</Text>
              </Body>
            </ListItem>
          </List>
        </ScrollView>
      </View>
    </View>
  );
};

const container = css`
  flex: 1;
`;

const imgSection = css`
  flex: 2;
`;

const listSection = css`
  flex: 3;
`;

const textStyle = css`
  font-size: 20px;
  font-weight: 500;
`;

export default Profile;
