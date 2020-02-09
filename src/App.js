import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}
`;
function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
            </TodoTemplate>
        </div>
    );
}

export default App;
