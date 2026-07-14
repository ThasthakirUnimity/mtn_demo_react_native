import React from "react";
import { Text, View } from "react-native";

import { __ } from "@src/utility/translation";
import styles from "./../styles";

const Item = ({ item }) => {
    return (
        <View style={styles.cardCol}>
            <View style={styles.cardGroup}>
                <View style={styles.cardGroupRow}>
                    <Text style={styles.cardLabel}>{__('Validity')}</Text>
                </View>
                <View style={styles.cardGroupRow}>
                    <Text style={styles.cardValue}>{item.Validity}</Text>
                </View>
            </View>
            <View style={styles.cardGroup}>
                <View style={styles.cardGroupRow}>
                    <Text style={styles.cardLabel}>{__('Data')}</Text>
                </View>
                <View style={styles.cardGroupRow}>
                    <Text style={styles.cardValue}>{item.DataShareDenomination}</Text>
                </View>
            </View>
            <View style={styles.cardGroup}>
                <View style={styles.cardGroupRow}>
                    <Text style={styles.cardLabel}>{__('Calls')}</Text>
                </View>
                <View style={styles.cardGroupRow}>
                    <Text style={styles.cardValue}>{item.Calls}</Text>
                </View>
            </View>
        </View>
    )
}

export default Item
