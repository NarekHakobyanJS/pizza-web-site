import React, { useState } from 'react'
import './Categories.scss'

const Categories = React.memo(({activeCategory,  items, onClickCategory }) => {

    const onSelectItem = (index) => {
        onClickCategory(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className='categories-item'>Все</li>
                {items.map((item, index) => <li
                    className={activeCategory === index ? 'active' : 'categories-item'}
                    onClick={() => onSelectItem(index)}
                    key={item}>
                    {item}
                </li>)}
            </ul>
        </div>
    )
})

export default Categories