import React from "react";
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import StateCarousel from "./components/StateCarousel";

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StateCarousel />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});