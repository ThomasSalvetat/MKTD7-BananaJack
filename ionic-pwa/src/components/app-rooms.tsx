import { Component, Prop } from '@stencil/core';
import { Room } from '../models/model'

// import BackendApi from '../api';

@Component({
    tag: 'app-rooms'

})
export class AppRooms {
    @Prop({ connect: 'ion-router' }) nav: HTMLIonRouterElement;
    @Prop() roomsList : Room[]=[
      {id: 17, name: "Room n°1", players: null, bank: null, full: false},
      {id: 25, name: "Room n°2", players: null, bank: null, full: false}
    ];

    componentWillLoad() {
        // console.log('getRooms', BackendApi.getRooms());
    }

    async goToRoom(id: number) {
      console.log(id);
        const navCtrl: HTMLIonRouterElement = await (this.nav as any).componentOnReady();
        navCtrl.push('/rooms/' + id)
    }

    handleOnClick = (roomId: number) => this.goToRoom(roomId);

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Rooms</ion-title>
                </ion-toolbar>
            </ion-header>,
            <ion-content padding>
                Liste des pages
                <ul>
                  {this.roomsList.map(room => (
                    <li>
                      <ion-button onClick={() => this.handleOnClick(room.id)}>Go to {room.name}</ion-button>
                    </li>
                  ))}

                </ul>
            </ion-content>
        ];
    }
}
