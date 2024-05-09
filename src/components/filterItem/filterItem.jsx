import "./filterItem.css";

const FilterItem = ({ text, className, onClick }) => {

    return (
        <li onClick={onClick} className={className}>
            { text }
        </li>
    )
};

export default FilterItem;