
import { saludar } from './js/componentes';
import './styles.css';

import logoImg from './assets/webpack-small.png';

const imgen = document.createElement('img');
imgen.src = logoImg;

document.getElementById('imgContainer').appendChild(imgen);

saludar('Orlando González');


