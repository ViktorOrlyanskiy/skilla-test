import React from 'react';



const MySelect = function ({ options, defaultValue, value, onChange, className }) {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
            className={className}
        >
            <option disabled={true} value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    )
}

export default MySelect;