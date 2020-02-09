import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding: 32px 48px 32px 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;
function TodoHead() {
    return (
        <TodoHeadBlock>
            <h1>2020 FEB 9</h1>
            <div className="day">SUNDAY</div>
            <div className="tasks-left">YOU HAVE 2 MORE TASKS</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;
