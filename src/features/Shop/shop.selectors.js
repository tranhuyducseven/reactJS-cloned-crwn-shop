import { createSelector } from "reselect"

const COLLECTION_ID_MAP = {
    'hats': 1,
    'sneakers': 2,
    'jackets': 3,
    'women': 4,
    'men': 5
}


export const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    collection => collection.collections
)
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)