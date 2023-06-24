import React from 'react';
import Game from './components/Game'
import {createRoot} from 'react-dom/client';
import css from './css/styles.css'
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Game tab="home" />);
