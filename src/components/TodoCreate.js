import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from './TodoContext';

const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }
    cursor: pointer;
    width: 80px;
    height: 80px;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in;
    ${props =>
        props.open &&
        css`
            background: #ff6b6b;
            &:hover {
                background: #ff8787;
            }
            &:active {
                background: #fa5252;
            }
            transform: translate(-50%, 50%) rotate(45deg);
        `}
`;

const InsertForm = styled.div`
    background: #f8f9fa;
    padding: 32px;
    padding-bottom: 72px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;
const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;
function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(!open);
    const onChange = e => {
        setValue(e.target.value);
    };
    const onSubmit = e => {
        if (e.keyCode === 13) {
            dispatch({
                type: 'CREATE',
                todo: {
                    id: nextId.current,
                    text: value,
                    done: false
                }
            });
            setValue('');
            setOpen(false);
            nextId.current += 1;
        }
    };
    return (
        <>
            {true && (
                <InsertForm>
                    <Input
                        autoFocus
                        placeholder="Press Enter, after creating new todo item"
                        value={value}
                        onChange={onChange}
                        onKeyDown={onSubmit}
                    />
                </InsertForm>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    );
}

export default React.memo(TodoCreate);
