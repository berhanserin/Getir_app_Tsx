import React, {Component} from 'react';
import {ColorValue, FlexAlignType, Text, TouchableOpacity} from 'react-native';

const CustomBottoms: React.FC<{
  text: string;
  width?: number;
  borderColor?: ColorValue;
  borderRadius?: number;
  borderWidth?: number;
  alignItems?: FlexAlignType;
  textColor?: string;
  onPress?: any;
  height?: number;
  justifyContent?: any;
  textBoldSize?: any;
}> = ({
  text,
  width,
  borderColor,
  borderRadius,
  borderWidth,
  alignItems,
  textColor,
  onPress,
  height,
  justifyContent,
  textBoldSize,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height,
        width,
        borderColor,
        borderRadius,
        borderWidth,
        alignItems,
        justifyContent,
      }}>
      <Text style={{color: textColor, fontWeight: textBoldSize}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomBottoms;
