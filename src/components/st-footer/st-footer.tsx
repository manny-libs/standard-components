import { Component, h, Method, Prop } from '@stencil/core';
import { Link } from '../../utils/types';

@Component({
  tag: 'st-footer',
  styleUrl: 'st-footer.css'
})
export class StFooter {
  @Prop({
    mutable: false,
    reflect: true,
  })
  links: Link[];

  @Prop({
    attribute: 'copy-right',
    reflect: false,
    })
  copy: string;

  @Method()
  async doStuff() {
    console.log('stuff');
    console.log(this);
  }

  doOtherStuff() {
    console.log('do other stuff');
    console.log(this);
  }

  render() {
    return (
      <footer>
        <ul>
          <li>{ this.copy }</li>
          {this.links.map((link, i) => {
            return <li key={i}><a href={link.url}>{link.label}</a></li>
          })}
        </ul>
      </footer>
    );
  }
}
