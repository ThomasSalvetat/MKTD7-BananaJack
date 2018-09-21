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
                <section>
                <ul  class="rooms">
                  {this.roomsList.map(room => (
                    <li>
                      <div class="room">
                          <div class="name">
                              <h2>{room.name}</h2>
                              <div class="players">Tata, Titi</div>
                          </div>
                          <div class="status ">2 / 4</div>
                          <div class="action">
                              <ion-button onClick={() => this.handleOnClick(room.id)} class="join">Join {room.name}</ion-button>
                          </div>
                      </div>
                    </li>
                  ))}

                </ul>
              </section>
            </ion-content>
        ];
    }
}
