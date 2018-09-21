import { Component, Prop, State } from '@stencil/core';
import { Store } from '@stencil/redux';

@Component({
  tag: 'app-header',
  styleUrl: 'header.component.css'
})
export class CardsListComponent {
  @Prop({ context: 'store' }) store: Store;

  @State() user: any;
  @Prop() title: string;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        userReducer : { user }
      } = state;
      return {
        user
      }
    });
  }

  render() {
    return (
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Bien le bonjour monsieur {this.user.name}</ion-title>
        </ion-toolbar>
      </ion-header>
    );
  }
}
