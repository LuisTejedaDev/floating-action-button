import {View, Text, SafeAreaView, StyleSheet} from 'react-native'
import {Fab} from './components'
import {Blue} from './colors'

export default () => {
    return(
        <>
            <SafeAreaView style={{flex: 0, backgroundColor: Blue}}/>
            <View style={styles.container}>
                <Text style={styles.title}>Para saber cómo implementarlo mira el vídeo</Text>
                <Text style={[styles.title, {fontSize: 14, color: '#dadada'}]}>https://www.youtube.com/watch?v=Iz9eQl1xVc4&t=70s</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#383838'
    }
})