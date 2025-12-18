import React from 'react';
import useMeta from '../hooks/useMeta';

const Meta = ({ pageKey, customMeta = {} }) => {
    useMeta(pageKey, customMeta);
    return null; // This component doesn't render anything
};

export default Meta;
