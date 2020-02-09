import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px 48px 32px;
    overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="Creating todolist app" done={false}></TodoItem>
            <TodoItem text="Studying Sass" done={true}></TodoItem>
            <TodoItem
                text="Visiting Korean grocery stores"
                done={false}
            ></TodoItem>
        </TodoListBlock>
    );
}

export default TodoList;
