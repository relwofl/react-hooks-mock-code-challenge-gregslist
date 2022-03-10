import React, { useEffect, useState } from "react";
// import { useEffect } from "react/cjs/react.production.min";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) =>r.json())
    .then((listings) => setListings(listings))
  }, [] )
  
  function handleDelete(id) {
    const updatedlistArray = listings.filter(listing => listing.id !== id)
    setListings(updatedlistArray)

  }

  const filterArray = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

console.log(filterArray)

  const listingCards = filterArray.map(listingObj => {
    return <ListingCard key={listingObj.id} listing={listingObj} onDelete={handleDelete}/>
  })
  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
