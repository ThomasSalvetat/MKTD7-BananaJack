/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';

import '@stencil/redux';
import '@ionic/core';
import 'ionicons';
import {
  Card,
} from './model';


export namespace Components {

  interface AppLogin {
    'username': string;
  }
  interface AppLoginAttributes extends StencilHTMLAttributes {
    'username'?: string;
  }

  interface AppRooms {}
  interface AppRoomsAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface CardDetail {
    'card': Card;
  }
  interface CardDetailAttributes extends StencilHTMLAttributes {
    'card'?: Card;
  }

  interface CardsList {
    'cards': Card[];
  }
  interface CardsListAttributes extends StencilHTMLAttributes {
    'cards'?: Card[];
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppLogin': Components.AppLogin;
    'AppRooms': Components.AppRooms;
    'AppRoot': Components.AppRoot;
    'CardDetail': Components.CardDetail;
    'CardsList': Components.CardsList;
  }

  interface StencilIntrinsicElements {
    'app-login': Components.AppLoginAttributes;
    'app-rooms': Components.AppRoomsAttributes;
    'app-root': Components.AppRootAttributes;
    'card-detail': Components.CardDetailAttributes;
    'cards-list': Components.CardsListAttributes;
  }


  interface HTMLAppLoginElement extends Components.AppLogin, HTMLStencilElement {}
  var HTMLAppLoginElement: {
    prototype: HTMLAppLoginElement;
    new (): HTMLAppLoginElement;
  };

  interface HTMLAppRoomsElement extends Components.AppRooms, HTMLStencilElement {}
  var HTMLAppRoomsElement: {
    prototype: HTMLAppRoomsElement;
    new (): HTMLAppRoomsElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLCardDetailElement extends Components.CardDetail, HTMLStencilElement {}
  var HTMLCardDetailElement: {
    prototype: HTMLCardDetailElement;
    new (): HTMLCardDetailElement;
  };

  interface HTMLCardsListElement extends Components.CardsList, HTMLStencilElement {}
  var HTMLCardsListElement: {
    prototype: HTMLCardsListElement;
    new (): HTMLCardsListElement;
  };

  interface HTMLElementTagNameMap {
    'app-login': HTMLAppLoginElement
    'app-rooms': HTMLAppRoomsElement
    'app-root': HTMLAppRootElement
    'card-detail': HTMLCardDetailElement
    'cards-list': HTMLCardsListElement
  }

  interface ElementTagNameMap {
    'app-login': HTMLAppLoginElement;
    'app-rooms': HTMLAppRoomsElement;
    'app-root': HTMLAppRootElement;
    'card-detail': HTMLCardDetailElement;
    'cards-list': HTMLCardsListElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
