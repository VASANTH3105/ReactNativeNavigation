import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Pdf from "react-native-pdf";

export default function PDFViewer() {
  const source = {
    uri: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    cache: true,
  };

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numPages, filePath) => console.log(`Loaded: ${numPages} pages`)}
        onError={(error) => console.log(error)}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
