import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import "./PizzaBlock.scss"
import PropTypes from 'prop-types'
import classNames from "classnames"

function PizzaBlock({ name, imageUrl, price, types, sizes }) {
    const availableTypes = ["тонкое", "традиционное"]
    const availableSizes = [26, 30, 40]
    const [activeType, setActiveType] = useState(types[0])
    const [activeSizes, setActiveSizes] = useState(sizes[0])

    const onSelectType = (index) => {
        setActiveType(index)
    }

    const onSelectSize = (index) => {
        setActiveSizes(index)
    }
    return (
        <div className="pizza-block">
            <img src={imageUrl} />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {availableTypes.map((type, index) => (
                        <li
                            key={type}
                            onClick={() => onSelectType(index)}
                            className={classNames({
                                active: activeType === index,
                                disabled: !types.includes(index)
                            })}
                        >{type}</li>)
                    )}
                </ul>
                <ul>
                    {availableSizes.map((size, index) => (
                        <li
                            key={size}
                            onClick={() => onSelectSize(index)}
                            className={classNames({
                                active: activeSizes === index,
                                disabled: !sizes.includes(size)
                            })}
                        >{size} см.</li>)
                    )}
                </ul>
            </div>

            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--outline button--add">
                    <AiOutlinePlusCircle />
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    )
}

PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default PizzaBlock