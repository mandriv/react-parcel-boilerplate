// @flow
import * as React from 'react';

type ListItem = {};

type Props = {|
  data: Array<ListItem>,
  renderItem: (ListItem | void) => React.Node,
  renderEmpty: (void) => React.Node
|};

export default function List({ data, renderItem, renderEmpty }: Props): React.Node {
  return (
    <React.Fragment>
      { data.length === 0 && renderEmpty() }
      { data.map(renderItem) }
    </React.Fragment>
  );
}

List.defaultProps = {
  renderEmpty: (): React.Node => false,
};
