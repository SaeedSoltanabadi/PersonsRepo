import { addressInfo } from '../person/person';

export class details{


  description:string;
  children:[];
  addressInfo:addressInfo;

  constructor( description:string, children:[],addressInfo:addressInfo){
    this.description=description;
    this.children=children;
    this.addressInfo=addressInfo;


  }}
