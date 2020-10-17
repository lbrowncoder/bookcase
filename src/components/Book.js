import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
// import { ScrollView } from 'react-native';


const Book = (props) => {
  let {title, subtitle, authors, description, imageLinks,} = props.book.volumeInfo
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
      <div className="title">
      <h2>{title}</h2>
      </div>
      <div className="text">
      <p>{subtitle}</p>
      <h3>{authors.join(',')}</h3>
      </div>
      <img className="pic" src= {imageLinks.thumbnail} alt={props.alt}/>

      <p>{description}</p> 
      <p>£{listPrice && listPrice.amount}</p>
      {props.addBook && (
      <Button className="button" onClick={() => props.addBook(title, id)}>Add To Basket</Button>)}
      {props.removeBook && (
      <Button className="button" onClick={() => props.removeBook(id)}>Remove</Button>)}

    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
  }),
})}

// const App = (props) => {
//   const [books] = useState(data);
//   function addBook(title) {
//  console.log(`The Book ${title} was clicked`);
//   }
//   return <BookList books={books} />
//  }
 

export default Book;
