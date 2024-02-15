import React, { useContext, useState, useEffect, useCallback } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    const handleBudgetChange = (event) => {
        const value = event.target.value;
        setNewBudget(value);
    };

    // Wrap handleBudgetSubmit with useCallback to memoize it
    const handleBudgetSubmit = useCallback(() => {
        const budgetValue = parseFloat(newBudget);

        // Calculate total expenses for validation
        const totalExpenses = expenses.reduce((acc, curr) => acc + curr.cost, 0);

        if (budgetValue > 20000) {
            alert("Budget cannot exceed £20,000.");
            setNewBudget(budget); // Revert to the last valid budget
            return;
        }

        if (budgetValue < totalExpenses) {
            alert("Budget cannot be less than total spending.");
            setNewBudget(budget); // Revert to the last valid budget
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: budgetValue,
        });
    }, [newBudget, budget, expenses, dispatch]); // Include all dependencies

    // Trigger the validation and potential state update on every change
    useEffect(() => {
        const timer = setTimeout(() => {
            handleBudgetSubmit();
        }, 800); // Adds a delay to reduce frequency of validation checks

        return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts or the value changes again
    }, [newBudget, handleBudgetSubmit]); // Now includes handleBudgetSubmit as a dependency

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            ></input>
        </div>
    );
};

export default Budget;
