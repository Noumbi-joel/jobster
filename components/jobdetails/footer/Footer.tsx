import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

// styles
import styles from "./footer.style";

// assets
import { icons } from "../../../constants";

type Props = {
  url: string;
};

const Footer = ({ url }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
