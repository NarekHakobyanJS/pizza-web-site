import React, { useCallback, useEffect } from 'react'
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock'
import Categories from '../../components/Categories/Categories'
import SortPopup from '../../components/SortPopup/SortPopup'
import "./Home.scss"
import { useDispatch, useSelector } from "react-redux"
import { setCategory, setSortBy } from '../../redux/actions/filters'
import { fetchPizzas } from '../../redux/actions/pizzas'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{ name: "популярности", type: "popular" }, { name: "цене", type: 'price' }, { name: "алфавиту", type: 'alphabet' }]
let oldFunc = null

function Home() {
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)
    const loading = useSelector((state) => state.pizzas.isLoaded)
    const { category, sortBy } = useSelector((state) => state.filters)

    useEffect(() => {
        dispatch(fetchPizzas( sortBy, category))
    }, [category, sortBy])

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])


    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])


    oldFunc = onSelectCategory

    return (
        <>
            <div className="contentTop">

                <Categories
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                    activeCategory={category}
                />

                <SortPopup
                    activeSortType={sortBy}
                    items={sortItems} 
                    onClickSortType={onSelectSortType}
                    />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {loading ? items && items.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />) : <h4>Loading...</h4>}

            </div>
        </>
    )
}

export default Home