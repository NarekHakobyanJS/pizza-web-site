import React, { useEffect, useRef, useState } from 'react'
import { HiArrowCircleUp } from "react-icons/hi"
import "./SortPopup.scss"

const SortPopup = React.memo(({ items, activeSortType, onClickSortType }) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const activeLabel = items.find(obj => obj.type === activeSortType).name

    const onSelectItem = (index) => {
        onClickSortType(index)
        setVisiblePopup(false)
    }

    const sortRef = useRef()

    const togglevisiblePopup = () => {
        setVisiblePopup(prev => !prev)
    }

    const handleOutSideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutSideClick)
    }, [])

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <HiArrowCircleUp className={visiblePopup ? 'arrow-top rotated' : 'arrow-top'} />
                <b>Сортировка по:</b>
                <span onClick={togglevisiblePopup}>{activeLabel}</span>
            </div>
            {
                visiblePopup && <div className="sort__popup">
                    <ul>
                        {items.map((obj, index) => <li
                            className={activeSortType === obj.type ? 'active' : ''}
                            onClick={() => onSelectItem(obj.type)}
                            key={obj.type}>
                            {obj.name}
                        </li>)}
                    </ul>
                </div>
            }
        </div>
    )
})

export default SortPopup