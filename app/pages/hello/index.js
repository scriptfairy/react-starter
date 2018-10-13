// @flow

import * as React from 'react';

import Panel from 'app/components/panel';

type Props = {};

type State = {
  greeting: string,
};

class HelloPage extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      greeting: 'hello world',
    };
  }

  render() {
    const { greeting } = this.state;
    return <Panel>{greeting}</Panel>;
  }
}

export default HelloPage;
