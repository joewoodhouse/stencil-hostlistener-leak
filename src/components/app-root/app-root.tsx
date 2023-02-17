import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-root'
})
export class AppRoot {

  private leakRate = 1000;

  @State() leaks: number = 0;

  componentDidLoad() {
    setInterval(() => {
      document.createElement('app-child');
      window.dispatchEvent(new CustomEvent('testEvent'));
      this.leaks++;
    }, this.leakRate);
  }


  render() {
    return <div>Test Running: {this.leaks} leaks</div>;
  }
}
