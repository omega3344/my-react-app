import PropTypes from 'prop-types';

function List(props) {
  const itemList = props.items;
  const category = props.category;

  //itemList.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
  //itemList.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
  //itemList.sort((a, b) => a.calories - b.calories); // Numeric
  //itemList.sort((a, b) => b.calories - a.calories); // Reverse Numeric

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  /*
  const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  const listItems = lowCalFruits.map((lowCalFruit) => (
    <li key={lowCalFruit.id}>
      {lowCalFruit.name}: &nbsp;
      <b>{lowCalFruit.calories}</b>
    </li>
  ));
  */

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItems}</ul>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: 'Category',
  items: [],
};

export default List;
