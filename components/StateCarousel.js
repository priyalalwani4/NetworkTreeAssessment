import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";
import Carousel from "react-native-snap-carousel";
import axios from "axios";

const {width: viewportWidth} = Dimensions.get("window");

const StateCarousel = () => {
    const [states, setStates] = useState([]);
    const [setState, setSelectedState] = useState(null);

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await axios.get("http://localhost:3000/states");
                setStates(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    fetchStates();
    }, []);

    const renderItem = ({item, index}) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemLabel}>{item}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>State picker challenge</Text>
            <Carousel
                data={states}
                renderItem={renderItem}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth}
                onSnapToItem={(index) => setSelectedState(states[index])}
            />
            {setSelectedState && (
                <View style={styles.selectedStateContainer}>
                    <Text style={styles.selectedStateLabel}>{setSelectedState}</Text>
                </View>
            )}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        alignItems: "center",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    itemContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    itemLabel: {
        fontSize: 24,
    },
    selectedStateContainer: {
        marginTop: 20,
    },
    selectedStateLabel: {
        fontSize: 24,
        fontWeight: "bold",
    },
});