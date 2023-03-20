import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";
import { ScreenHeaderStyleProps } from "../../../typings";

const styles = StyleSheet.create<ScreenHeaderStyleProps>({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension: string) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
