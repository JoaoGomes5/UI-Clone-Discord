import React from 'react';

 import { Button } from './styles';

 import Logo from '../../assets/logo.svg';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,

}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}

    >
      {isHome && <img src={Logo} width='100' height='100' alt="LogoServer"/>}
    </Button>
  )
};

export default ServerButton;