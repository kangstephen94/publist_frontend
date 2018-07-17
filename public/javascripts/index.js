const React = require('react');
const ReactDOM = require('react-dom');
import News from '../../frontend/news';


document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    ReactDOM.render(<News />, main);
})
