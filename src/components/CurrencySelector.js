import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';


const CurrencySelector = () => {
    const { currency, changeCurrency } = useContext(AppContext);
    
    return (
        <div className="currency-selector">
    <button className="currency-dropdown">
        Currency (£ Pound)
    </button>
    <div className="currency-dropdown-content">
        <div>$ Dollar</div>
        <div>£ Pound</div>
        <div>€ Euro</div>
        <div>₹ Rupee</div>
    </div>
</div>

    );
};

export default CurrencySelector;
