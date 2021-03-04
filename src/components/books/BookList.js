import { useState, useEffect } from "react";
import BookItem from "./BookItem";
import { API } from "../../constants/api";

function BookList() {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(API);

				if (response.ok) {
					const json = await response.json();
					console.log(json);
					setBooks(json.data);
				} else {
					setError("An error occured");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

	return (
		<div className="books">
			{books.map(function (book) {
				const { id, title, published } = book;
				return <BookItem key={id} id={id} title={title} published={published} />;
			})}
		</div>
	);
}

export default BookList;
