import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";

// styles
import styles from "./popularjobs.style";

import { Job } from "../../../typings";

// comp
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

// assets
import { COLORS, SIZES } from "../../../constants";

// hooks
import useFetch from "../../../hooks/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch({
    endpoint: "search",
    query: {
      query: "React developer",
      num_pages: 1,
    },
  });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item: Job) => {
    router.push(`/job-details/${item?.job_id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Popular jobs</Text>
      <Pressable>
        <Text style={styles.headerBtn}>Show all</Text>
      </Pressable>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                key={item}
                handleCardPress={handleCardPress}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
