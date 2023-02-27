import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import React from 'react';
const data = [
    { d: 'Mr. jayant', p: 'Cardiologists' },
    { d: 'Mr. om khedkr', p: 'Dermatologists' },
    { d: 'Mr. rutuja', p: 'Hematologists' }
];
const listdoc = ({ navigation }) => {
    const item = ({ item }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '50%', backgroundColor: '#F0F8FF' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 25 }}>{item.d}</Text>
            </View>
            <View style={{ width: '50%', backgroundColor: '#F0F8FF' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 25 }}>{item.p}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '50%', backgroundColor: '#000000' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 25,color:'#FFFFFF' }}>Doctor Name</Text>
                </View>
                <View style={{ width: '50%', backgroundColor: '#000000' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 25 ,color:'#FFFFFF'}}>Speciality</Text>
                </View>
            </View>
            <FlatList data={data} renderItem={item} />
        </View>
    );
}
export default listdoc;


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        direction:'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})