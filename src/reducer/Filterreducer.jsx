const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };

        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };
        case "GET_SORT_VALUE":
            // console.log(action.payload)
            return {
                ...state,
                sorting_value: action.payload,
            };
        case "SORTING_PRODUCTS":
            let newSortData;
            const { filter_products, sorting_value } = state;
            console.log(sorting_value);
            let tempSortProduct = [...filter_products];

            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }
                if (sorting_value === "highest") {
                    return b.price - a.price;
                }
                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }
                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                }
            };
            // console.log(sortingProducts)
            newSortData = tempSortProduct.sort(sortingProducts);
            console.log(newSortData);
            return {
                ...state,
                filter_products: newSortData,
            };
            
        case "UPDATE_FILTER_VALUE":
            const value = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: value,
                },
            };
        case "UPDATE_FILTERS_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text } = state.filters;
            console.log(state);
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((currel) => {
                    return currel.name.toLowerCase().includes(text.toLowerCase());
                });
            }
            return {
                ...state,
                filter_products: tempFilterProduct,
            };

        default:
            return {
                state,
            };
    }
};
export default filterReducer;
