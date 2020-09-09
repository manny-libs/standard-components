import { Component, Host, h,  Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'st-modal',
  styleUrl: 'st-modal.css'
})
export class StModal {
  @Prop() header: string;

  @Prop() body: string;

  @Prop() footer: string;

  @Prop() modalName: string;

  @Element() el: HTMLElement;

  @State()
  active = false;

  get modalSelector(): string {
    return this.modalName?.replace(/ /g, '_') || 'some_modal';
  }

  setupModal() {
    const trigger = this.el.querySelector(`#${this.modalSelector}_trigger`);
    const close = this.el.querySelector(`#${this.modalSelector}_close`);

    trigger?.addEventListener('click', () => {
      this.active = true;
      setTimeout(() => {
        (close as HTMLInputElement)?.focus();
      }, 250);
    });

    close?.addEventListener('click', () => {
      this.active = false;
      setTimeout(() => {
        (trigger as HTMLInputElement)?.focus();
      }, 250);
    });

  }

  componentDidLoad() {
    this.setupModal();
  }

  render() {
    return (
      <Host>
        <button id={`${this.modalSelector}_trigger`} class="modal-open"> Open Modal</button>
        <div class={this.active ? 'modal-active': 'modal-inactive'}>
          <div class="back-drop"/>
          <div class="modal-wrapper">
            <button id={`${this.modalSelector}_close`} class="modal-close">Close</button>
            <div class="modal-wrapper-body">
              <div class="modal-header">
                <h2>{this.header}</h2>
              </div>
              <div class="modal-body">
                <p>{this.body}</p>
              </div>
              {
                !!this.footer &&
                <div class="modal-footer">
                  <p>{this.footer}</p>
                </div>
              }
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
