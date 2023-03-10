import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
const BookForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({type: 'ADD_BOOK', payload: {title, author}});
		setTitle('');
		setAuthor('');
	};

	return (
		<form onSubmit={handleSubmit}>
			Title:
			<input
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			></input>
			Author:
			<input
				type='text'
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
			></input>
			<button>Add book</button>
		</form>
	);
};

export default BookForm;
