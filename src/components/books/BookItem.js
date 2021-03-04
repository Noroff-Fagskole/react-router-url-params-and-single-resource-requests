import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BookItem({ id, title, published }) {
	return (
		<Link to={`detail/${id}`}>
			<h5>{title}</h5>
			<p>{published}</p>
		</Link>
	);
}

BookItem.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	published: PropTypes.string.isRequired,
};

export default BookItem;
