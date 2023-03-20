import React from "react";
import { View, Text, Pressable, Image } from "react-native";

// types
import { ScreenHeaderBtnProps } from "../../../typings";

// styles
import styles from "./screenheader.style";

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
}: ScreenHeaderBtnProps) => {
  return (
    <Pressable style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </Pressable>
  );
};

export default ScreenHeaderBtn;
