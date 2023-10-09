import {useEffect, useState, useRef} from 'react'
import {StyleSheet, Animated, View, TouchableOpacity} from 'react-native'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import {Blue} from '../colors'

export default () => {
    const [toggle, setToggle] = useState(false)
    const options = [
        {
            id: 1,
            icon: 'account-outline',
            action: () => console.log('presionando el boton 1'),
            translation: 'left' /* left, middle, top */
        },
        {
            id: 2,
            icon: 'comment-text-multiple-outline',
            action: () => console.log('presionando el boton 2'),
            translation: 'middle' /* left, middle, top */
        },
        {
            id: 3,
            icon: 'cog-outline',
            action: () => console.log('presionando el boton 3'),
            translation: 'top' /* left, middle, top */
        },
    ]
    
    const animatedValues = {
        animation: useRef(new Animated.Value(0)).current
    }

    const {animation} = animatedValues

    useEffect(() => {
        handleAnimated()
    }, [toggle])
    
    const handleAnimated = () => {
        Animated.spring(animation, {
            toValue: toggle ? 1 : 0,
            friction: toggle ? 4 : 8,
            useNativeDriver: false
        }).start()
    }

    const animatedExpand = {
        transform: [
            {
                scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 5]
                })
            }
        ]
    }

    const animatedClose = {
        transform: [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '45deg']
                })
            }
        ]
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setToggle(!toggle)}
                style={[styles.itemContainer, {zIndex: 20, backgroundColor: toggle ? 'rgba(0,0,0, 0.1)' : Blue}]}>
                <Animated.View style={animatedClose}>
                    <Material name={'plus'} color={'#fff'} size={28}/>
                </Animated.View>
            </TouchableOpacity>

            {
                options.map(x => 
                    <Animated.View
                        key={x.id}
                        style={[
                            styles.itemContainer, 
                            {
                                backgroundColor: toggle ? 'rgba(0,0,0, 0.1)' : Blue,
                                transform: [
                                    {
                                        translateX: animation.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, x.translation === 'left' ? -100 : x.translation === 'middle' ? -70 : 0]
                                        })
                                    },
                                    {
                                        translateY: animation.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, x.translation === 'top' ? -100 : x.translation === 'middle' ? -70 : 0]
                                        })
                                    }
                                ]
                            }
                        ]}
                    >
                        <TouchableOpacity style={styles.itemButton}>
                            <Material name={x.icon} color={'#fff'} size={20}/>
                        </TouchableOpacity>
                    </Animated.View>    
                )
            }

            <Animated.View style={[styles.itemContainer, {zIndex: 0, backgroundColor: Blue}, animatedExpand]} />
        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    itemContainer: {
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        right: 25,
        borderRadius: 100,
        zIndex: 10
    },
    itemButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    }
})