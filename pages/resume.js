import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: props.color };
  }

  render() {
    return <div style={{ color: this.state.color }}>Hello</div>;
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'blue' };
  }

  render() {
    console.log('this.state.color', this.state.color);
    return (
      <div>
        <Child color={`${this.state.color}`} />
        <button type="button" onClick={() => this.setState({ color: 'green' })}>
          Change Color
        </button>
      </div>
    );
  }
}

function Home() {
  return <Parent />;
}
export default Home;
