import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'demo-btn',
  styleUrl: 'demo-btn.css',
  shadow: true
})
export class DemoBtnComponent {
  @Element() el!: HTMLElement;
  private inputEl?: HTMLElement;

  onClick = () => {
    if (this.inputEl) {
      this.inputEl.focus();
    }
  }

  render() {
    return (
      <div class="input-container">
        <input ref={el => this.inputEl = el} type="text" />
        <button onClick={this.onClick}>
          Click Me
      </button>
      </div>
    );
  }
}
