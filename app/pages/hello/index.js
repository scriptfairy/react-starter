// @flow

import * as React from 'react';

type Props = {};

type State = {
  greeting: string,
};

class HelloPage extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      greeting: 'hello',
    };
  }

  render() {
    const { greeting } = this.state;
    return <div>{greeting}</div>;
  }
}

export default HelloPage;
