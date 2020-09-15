import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            {/* href 속성으로 경로를 지정할 때 새로고침을 하기 때문에 리액트에 적절하지 않음 */}
            {/* react-route-dom의 Link 를 사용 */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;