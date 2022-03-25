export default function FiltersSidebar() {
    return (
        <aside class="filters-sidebar flex-col bg-white">

            <div class="sidebar-title">

                <p>Filters</p>
                <a href="" class="right">Clear</a>
            </div>

            <div class="all-filters flex-col">

                <div class="filter flex-col" id="price">
                    <label for="slider">Price</label>
                    <div class="slider">
                        <input type="range" min="100" max="4000" step="100" id="slider" />
                    </div>
                    <div class="price-amount">
                        <p>Price Amount</p>
                    </div>
                </div>

                <div class="filter" id="category">
                    <div class="category-checkbox flex-col">
                        <label>Category</label><br />
                        <span><input type="checkbox" name="category" id="batman" />Marvel</span>
                        <span><input type="checkbox" name="category" id="ironman" />DC</span>
                        <span><input type="checkbox" name="category" id="joker" />DCEU </span>
                        <span><input type="checkbox" name="category" id="joker" />Others </span>
                    </div>
                </div>

                <div class="filter" id="rating">
                    <div class="rating-radio-button flex-col">
                        <label>Rating</label>
                        <span><input type="radio" name="rating" id="4+" />4+</span>
                        <span><input type="radio" name="rating" id="3+" />3+</span>
                        <span><input type="radio" name="rating" id="2+" />2+</span>
                        <span><input type="radio" name="rating" id="2+" />1+</span>
                    </div>
                </div>

                <div class="filter" id="sort-by">
                    <div class="sortby-radio-button flex-col">
                        <label>Sort-by</label>
                        <span><input type="radio" name="sortby" id="inc" />Price- Low to High</span>
                        <span><input type="radio" name="sortby" id="dec" />Price- High to Low</span>
                    </div>
                </div>
            </div>

        </aside>
    )
}