import React from 'react';

const defaultProps = {
    id: undefined,
    layerName:undefined,
    out_channel: "None",
    in_channel: "None"
    
}

export const Conv1DProps = {
    ...defaultProps,
    layerName: "Conv1D",
    in_channel: 3,
    out_channel: 64,
    kernel_size: "3",
    stride: "1",
    padding: "0"

}

export const Conv2DProps = {
    ...defaultProps,
    layerName: "Conv2D",
    in_channel: 3,
    out_channel: 64,
    kernel_size: "3 x 3",
    stride: "1 x 1",
    padding: "1 x 1"
}

export const MaxProps = {
    ...defaultProps,
    layerName: "MaxPooling",
    kernel_size: "2 x 2",
    stride: "2 x 2",
    padding: "valid"
}

export const AvgProps = {
    ...defaultProps,
    layerName: "AVGPooling",
    kernel_size: "2 x 2",
    stride: "2 x 2",
    padding: "valid"
}

