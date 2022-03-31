import { useFilter } from "../context/filter-context"

export function FiltersSidebar() {

    const {dispatch, state} = useFilter()

    const rating = [4,3,2,1]

    const isSelected = (categoriesArray, category) => {
        return categoriesArray.includes(category)
    }

    return (
        <aside class="filters-sidebar flex-col bg-white">

            <div class="sidebar-title">

                <p>Filters</p>
                <span class="right" onClick={() => dispatch({type: "CLEAR"})}>Clear</span>
            </div>

            <div class="all-filters flex-col">

                <div class="filter flex-col" id="price">
                    <label for="slider">Price</label>
                    <div class="slider">
                        <input type="range" min="250" max="2000" step="50" value={state.priceRange} id="slider" onChange={(e) => dispatch({ type: "PRICE-RANGE", payload: e.target.value})} />
                    </div>
                    <div class="price-amount">
                        <p>{state.priceRange}</p>
                    </div>
                </div>

                <div class="filter" id="category">
                    <div class="category-checkbox flex-col">
                        <label>Category</label><br />

                        <span><input type="checkbox" name="category" value="marvel" checked={isSelected(state.categories, "marvel")}
                        onChange={(e) => dispatch({type: "ADD-CAT", payload: e.target.value, status: e.target.checked})}  />Marvel</span>

                        <span><input type="checkbox" name="category" value="dc"
                        checked={isSelected(state.categories, "dc")}
                        onChange={(e) => dispatch({type: "ADD-CAT", payload: e.target.value, status: e.target.checked})}  />DC</span>

                        <span><input type="checkbox" name="category" value="dceu"
                        checked={isSelected(state.categories, "dceu")}
                        onChange={(e) => dispatch({type: "ADD-CAT", payload: e.target.value, status: e.target.checked})}  />DCEU </span>
                        
                        <span><input type="checkbox" name="category" value="others"
                        checked={isSelected(state.categories, "others")}
                        onChange={(e) => dispatch({type: "ADD-CAT", payload: e.target.value, status: e.target.checked})}  />Others </span>

                    </div>
                </div>

                <div class="filter" id="rating">
                    <div class="rating-radio-button flex-col">
                        <label>Rating</label>
                        {rating.map((item) => {
                            return (
                                <span><input type="radio" name="rating" value={item} onChange={(e) => dispatch({type: "RATING", payload: e.target.value})}/>{item}+</span>
                            )
                        })}
                    </div>
                </div>

                <div class="filter" id="sort-by">
                    <div class="sortby-radio-button flex-col">
                        <label>Sort-by</label>
                        <span><input type="radio" name="sortby" value="LOW-TO-HIGH"
                        onChange={(e) => dispatch({type: "SORT", payload: e.target.value})} />Price- Low to High</span>
                        <span><input type="radio" name="sortby" value="HIGH-TO-LOW"
                        onChange={(e) => dispatch({type: "SORT", payload: e.target.value})} />Price- High to Low</span>
                    </div>
                </div>
            </div>

        </aside>
    )
}