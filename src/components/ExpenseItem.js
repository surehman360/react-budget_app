import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import '../App.css';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return ( <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td>
            <button className="budget-button increase" onClick={() => increaseAllocation(props.name)}>
                +
            </button>
        </td>
        <td>
            <button className="budget-button decrease" onClick={() => decreaseAllocation(props.name)}>
                -
            </button>
        </td>
        <td>
            <TiDelete className="budget-button decrease" size='1.5em' onClick={handleDeleteExpense} />
        </td>
    </tr>
);
};

export default ExpenseItem;