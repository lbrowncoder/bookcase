import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Book = (props) => {
  let {title, subtitle, authors, description, imageLinks} = props.book.volumeInfo
    console.log(props.book)

   let {id, saleInfo: {listPrice} } = props.book

   let amount = () => {
     if (props.saleInfo("listPrice")) {
       let amount = (props.saleInfo.listPrice.amount);
       return amount; 
     } else {
       let amount = 'TBC';
       return amount;
     }
   };
  
   
  return (
    <div>
      <div className='box1'>
      <h2 className='bookTitle'>{title}</h2>
      <img className="pic" src= {imageLinks.thumbnail} alt={props.alt}/>
      </div>
      <div className="text">
      <h3 className= 'author'>{authors}</h3>
      <p className='description'>{description}</p> 
      <p>£{listPrice && listPrice.amount}</p>
      </div>
 
    

      
      {props.addBook && (
      <Button className="button" onClick={() => props.addBook(title, id)}>Add To Bookcase</Button>)}
      
      {props.addToBasket && (
      <Button className="button" onClick={() => props.addToBasket(id)}>Buy</Button>)}
      
      {props.removeBook && (
      <Button className="button" onClick={() => props.removeBook(id)}>Remove</Button>)}
    </div>
  );
      }

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
  }),
})}
 

export default Book;
