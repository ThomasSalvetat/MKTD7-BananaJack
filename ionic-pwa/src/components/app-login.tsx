import { Component, Prop } from '@stencil/core';
import { Action, Store } from '@stencil/redux';
import { UserState } from '../reducers/user.reducer';
import { loginApi } from '../singletons/singleton';

@Component({
    tag: 'app-login'
})
export class AppLogin {

    @Prop() username = '';
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
                    <ion-input required type="text" placeholder="username" value={this.username}></ion-input>
                </ion-item>
                <ion-button href="/rooms" onClick={this.login} expand="block">Login</ion-button>
                {/*<ion-button href="/rooms" expand="block">Rooms page</ion-button>*/}
            </ion-content>
        ];
    }

    login = () => {
      loginApi.login('thomas')
        .subscribe(user => {
          this.loginAction(user.name);
        });
    }
}
