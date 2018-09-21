import {Component, Prop} from '@stencil/core';

// import BackendApi from '../api';

@Component({
    tag: 'app-login'
})
export class AppLogin {

    @Prop() username = '';

    componentWillLoad() {
        // console.log('login', BackendApi.login('username'));
    }
    render() {
        return [
          <app-header title="Login"></app-header>,,
          <ion-content padding>
            <ion-item>
              <ion-input required type="text" placeholder="username" value={this.username}></ion-input>
            </ion-item>
            <ion-button expand="block">Login</ion-button>
            {/*<ion-button href="/rooms" expand="block">Rooms page</ion-button>*/}
            </ion-content>
        ];
    }
}
