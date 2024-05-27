/* eslint-disable prettier/prettier */
import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{name: string}>;

const Icons = ({name}: IconProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} />;
      case 'cross':
      return <Icon name="times" size={38} />;
    default:
      return <Icon name='pencil' size={38} />;
  }
};

export default Icons;
