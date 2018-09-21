import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'header.component.css'
})
export class CardsListComponent {
  @Prop() title: string;

  render() {
    return (
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>{this.title}</ion-title>
        </ion-toolbar>
      </ion-header>
    );
  }
}
