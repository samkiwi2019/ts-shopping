/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import logging from '../../config/logging';
import IPage from '../../interfaces/page';

const Sidebar: React.FC<IPage & RouteComponentProps<any>> = (props) => {
    return <div>siderBar</div>;
};

export default Sidebar;
