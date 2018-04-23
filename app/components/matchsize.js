import React from 'react';
import {
    PixelRatio,
    Dimensions
} from 'react-native';

/**
 * 将UI给的像素值(切图上的px值)，转化为当前设备需要的数值
 * @param n
 * @returns {number}
 */
export default function matchsize(n) {
    const WIDTH = Dimensions.get('window').width;
    return Math.round((n / 2) * (PixelRatio.getPixelSizeForLayoutSize(WIDTH) / PixelRatio.get()) / 360);


}

