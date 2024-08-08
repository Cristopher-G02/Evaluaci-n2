import React from 'react'
import { View } from 'react-native'

export const BodyComponents = (props: any) => {

    return (
        <View>
            {props.children}
        </View>
    )
}

export default BodyComponents