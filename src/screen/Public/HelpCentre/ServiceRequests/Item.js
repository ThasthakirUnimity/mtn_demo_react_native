import React from "react";
import { Text, View } from "react-native";

import { Icon } from "@src/component/Basic";
import styles from "./../styles";
import { __ } from "@src/utility/translation";

export default ({item}) => {
    return (
        <View style={styles.reqContainer}>
            <View style={styles.reqCol}>
                <View style={styles.reqHeader}>
                    <Text style={styles.reqTitle}>{__('Requested')}</Text>
                </View>
                <View style={styles.reqRow}>
                    <Text style={styles.reqName}>{item.requestedDate}</Text>
                </View>
                <View style={styles.reqRow}>
                    <Text style={styles.reqTime}>{item.time}</Text>
                </View>
            </View>
            <View style={styles.reqCol}>
                <View style={styles.reqHeader}>
                    <Text style={styles.reqTitle}>{__('Category')}</Text>
                </View>
                <View style={styles.reqRow}>
                    <Text style={styles.reqName}>{item.category}</Text>
                </View>
            </View>
            <View style={styles.reqCol}>
                <View style={styles.reqHeader}>
                    <Text style={styles.reqTitle}>{__('Status')}</Text>
                </View>
                <View style={styles.reqRow}>
                    <Icon name='clock' type='EvilIcons' style={styles.reqIcon} />
                    <Text style={styles.reqStatus}>{item.status}</Text>
                </View>
            </View>
        </View>
    )
}