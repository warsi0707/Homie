'use client'

export const GetSavedListing=()=>{
    const favorites = localStorage.getItem('savedListings')
    if(favorites){
        return JSON.parse(favorites);
    }else{
        return [];
    }
}

export const SaveListing =(item)=>{
    const favorites = GetSavedListing();
    const isAlreadySaved = favorites.find(fav => fav.id === item.id);
    if(!isAlreadySaved){
        favorites.push(item);
        localStorage.setItem('savedListings', JSON.stringify(favorites));
    }
}
export const RemoveListing =(id)=>{
    const favorites = GetSavedListing();
    const updatedFavorites = favorites.filter(fav => fav.id !== id);
    localStorage.setItem('savedListings', JSON.stringify(updatedFavorites));
}