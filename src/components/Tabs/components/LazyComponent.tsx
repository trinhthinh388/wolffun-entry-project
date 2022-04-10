import React from 'react';

export type LazyComponentProps = Record<string, any>;

const LazyComponent: React.FC<LazyComponentProps> = ({ children }) => children;
export default LazyComponent;
