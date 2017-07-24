import React from 'react';

import FilterLink from './FilterLink';

const Filters = ({ currentFilter, onFiltering }) => (
  <div>
    <p><FilterLink filter='SHOW_ALL' currentFilter={currentFilter} onFiltering={onFiltering}>All</FilterLink></p>
    <p><FilterLink filter='SHOW_ACTIVE' currentFilter={currentFilter} onFiltering={onFiltering}>Active</FilterLink></p>
    <p><FilterLink filter='SHOW_COMPLETED' currentFilter={currentFilter} onFiltering={onFiltering}>Completed</FilterLink></p>
  </div>
);

export default Filters;
