import { Component, Prop } from '@stencil/core';
import { Room } from '../../model'

@Component({
  tag: 'rooms-list',
  styleUrl: 'rooms-list.scss'
})
export class RoomsList {

  // Indicate that name should be a public property on the component
  @Prop() roomsList: Room[];

  /*@State() list: TodoItem[] = [
    { uid: 1, text: 'Learn about Web Components', completed: true },
    { uid: 2, text: 'Learn about Stencil', completed: false },
    { uid: 3, text: 'Share my knowledge', completed: false }
];*/

  render() {
    return this.roomsList.map((item) =>
    <room
        name={item.name}
        nb-player={item.players.length}
        full={item.full}
    ></room>
  );
  }
}
