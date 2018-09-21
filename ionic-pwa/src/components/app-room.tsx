import { Component, Prop } from '@stencil/core';

// import BackendApi from '../api';

@Component({
    tag: 'app-room',
    styles: `

    `,
})
export class AppRoom {
    @Prop() roomId: number;

    componentWillLoad() {
        // console.log('getRooms', BackendApi.join(this.roomId, 'username'));
    }

    render() {
        return [
          <app-header title="Rooms"></app-header>,
          <ion-content padding>
            Room {this.roomId} page
          </ion-content>
        ];
    }
}
