import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  let {title, subtitle, authors, description, imageLinks,} = props.book.volumeInfo
    console.log(props.book)

   let {id, saleInfo: {listPrice} } = props.book


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
      <p>{listPrice && listPrice.amount}</p>
      <button onClick={() => props.addBook(title, id)}>Add+</button>
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
