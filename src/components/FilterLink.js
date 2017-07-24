import React from 'react';

const FilterLink = ({ filter, children, onFiltering, currentFilter }) => (
filter === currentFilter ? <span>{children}</span> : <a href='#' onClick={e => onFiltering(e, filter)}>{children}</a>
);

export default FilterLink;
