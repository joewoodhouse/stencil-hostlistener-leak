import { Component, h, Listen, Host } from '@stencil/core';

@Component({
  tag: 'app-child'
})
export class AppChild {

  @Listen('testEvent', { target: 'window' }) testListener(ev: Event) {
    console.log('Child Listener', ev)
  }


  render() {
    return <Host />;
  }
}
