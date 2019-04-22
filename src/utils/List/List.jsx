import React from 'react';

export default function List({ data, renderItem, renderEmpty }) {
  return (
    <React.Fragment>
      { data.length === 0 && renderEmpty() }
      { data.map(renderItem) }
    </React.Fragment>
  );
}
