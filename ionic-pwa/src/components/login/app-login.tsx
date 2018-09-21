import { Component, Prop, State } from '@stencil/core';
import { Action, Store } from '@stencil/redux';
import { UserState } from '../../reducers/user.reducer';
import { loginApi } from '../../singletons/singleton';
import { mergeMap, tap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';

@Component({
    tag: 'app-login'
})
export class AppLogin {
    @Prop({ connect: 'ion-router'}) nav: HTMLIonRouterElement;
    @State() username = '';
    @Prop({context: 'store'}) store: Store;
    loginAction: Action;

    componentWillLoad() {
      this.store.mapDispatchToProps(this, {
        loginAction: (username: string) => async dispatch => dispatch(UserState.actions.login(username))
      });
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    Hello to an Amazin Banana Jack - by Team Capucin
                </ion-toolbar>
            </ion-header>,
            <ion-content padding>
                <ion-item>
                    <ion-input required type="text" placeholder="username" value={this.username} onInput={this.updateUsername}></ion-input>
                </ion-item>
                <ion-button onClick={this.login} expand="block">Login</ion-button>
                {/*<ion-button href="/rooms" expand="block">Rooms page</ion-button>*/}
            </ion-content>
        ];
    }

  updateUsername = (event) => {
      this.username = event.target.value;
      console.log(this.username);
  }

    async redirectToRoom() {
      const navCtrl: HTMLIonRouterElement = await (this.nav as any).componentOnReady();
      navCtrl.push('/rooms');
    }

    login = () => {
      console.log('beroucry le fou ', this.username);
      loginApi.login(this.username)
        .pipe(
          tap((user) =>  this.loginAction(user)),
          mergeMap(() => fromPromise(this.redirectToRoom()))
        )
        .subscribe();
    }
}
