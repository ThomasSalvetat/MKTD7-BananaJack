import { Component, Prop } from '@stencil/core';
import { Player } from '../../model'

@Component({
  tag: 'my-first-component',
  styleUrl: 'my-first-component.scss'
})
export class Room {

  // Indicate that name should be a public property on the component
  @Prop() name: string;
  @Prop() full: boolean;
  @Prop() players: Player[]=[
    { id: '1', name: 'John', score: 4 },
    { id: '2', name: 'Jane', score: 8 },
    { id: '3', name: 'Cheetah', score: 123 }
  ];

  render() {
    return (
      <p>
        Room name =  {this.name}
        nbPalyer= {this.players.length}
        Full =  {this.full}
      </p>
    );
  }
}
