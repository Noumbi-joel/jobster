import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";

// styles
import styles from "./nearbyjobs.style";

// comp
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

// assets
import { COLORS } from "../../../constants";

// hooks
import useFetch from "../../../hooks/useFetch";
import { Job } from "../../../typings";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch({
    endpoint: "search",
    query: {
      query: "React developer",
      num_pages: 1,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Nearby jobs</Text>
      <Pressable>
        <Text style={styles.headerBtn}>Show all</Text>
      </Pressable>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job: Job) => (
            <NearbyJobCard
              key={job?.job_title}
              job={job}
              handleNavigate={() => router.push(`job-details/${job?.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
