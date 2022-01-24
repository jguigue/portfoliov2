import PropTypes from "prop-types";
import { slugify } from "../../utils";

const Filters = ({ categories }) => {
  return (
    <div className="filter-menu portfolio_filter">
      <ul className="menu-list">
        <li data-filter="*" className="active">
          Tout
        </li>
        {categories?.map((cat, idx) => (
          <li key={idx} data-filter={`.${slugify(cat)}`}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

Filters.propTypes = {
  categories: PropTypes.array,
};

export default Filters;
