import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { css } from "@emotion/native";

import { Card, CardItem, Text, Left, Body } from "native-base";

const ProfileCard = ({ navi }) => {
  return (
    <TouchableOpacity style={cardStyle} onPress={() => navi("Profile")}>
      <Card>
        <CardItem cardBody>
          <Image
            source={require("./../img/01.jpg")}
            style={{ height: 150, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Body>
              <Text>NativeBase</Text>
              <Text note>GeekyAnts</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

const cardStyle = css`
  flex: 1;
  margin: 10px 10px;
`;

export default ProfileCard;
