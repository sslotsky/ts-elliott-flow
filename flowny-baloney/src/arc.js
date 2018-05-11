// @flow

import * as React from "react";

type Arc<T> = {
  loading: boolean,
  error?: string,
  data?: T
};

type ParentProps<T, P> = {
  initialState: T,
  children: (Arc<T>) => React.Node
} & P;

type Config<T, P> = {
  load: P => Promise<T>
};

export default function arc<T: *, P>(config: Config<T, P>) {
  const { Provider, Consumer } = React.createContext({});

  class Archer extends React.Component<ParentProps<T, P>, Arc<T>> {
    state = {
      loading: false,
      error: undefined,
      data: this.props.initialState
    };

    async componentDidMount() {
      const { initialState: _i, children: _c, ...props } = this.props;

      const response = await config
        .load(props)
        .catch(error => this.setState({ error }));
      this.setState({ data: response });
    }

    render() {
      return (
        <Provider value={this.state}>
          {this.props.children(this.state)}
        </Provider>
      );
    }
  }

  return { Archer, Bullseye: Consumer };
}
