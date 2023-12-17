import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import App from './App';
// import store from './Store/store';

// const Old = () => {
//     return (
//         <Provider store={store}>
//             <App />
//         </Provider>
//     )
// }

const New = () => {
    return (
        <div style={{
            display: "flex",
            background: "red"
        }}>
            Its my new portfolio...!
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// const isNew = true;
root.render(
    <New />
);

