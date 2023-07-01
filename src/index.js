import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import Routes from './routes/route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Routes/>
<GlobalStyle/>
</>
)