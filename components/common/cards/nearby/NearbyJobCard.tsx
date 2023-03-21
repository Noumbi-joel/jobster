import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

// types
import { NearbyJobCardProps } from "../../../../typings";

// utils
import { checkImageURL } from "../../../../utils";

// style
import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, handleNavigate }: NearbyJobCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job?.employer_logo)
              ? job?.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>
        <Text style={styles.jobType} numberOfLines={1}>
          {job?.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
