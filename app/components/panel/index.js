// @flow

import * as React from 'react';

type Props = {
  children: React.Node,
};

const Panel = ({ children }: Props) => <div>{children}</div>;

export default Panel;
