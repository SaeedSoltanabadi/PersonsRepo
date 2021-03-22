export class person{

id:string;
firstName:string;
lastName:string;
description:string;
children:[];
addressInfo:addressInfo;

constructor(id:string,firstName:string,lastName:string){
  this.id= id;
  this.firstName=firstName;
  this.lastName=lastName;


}}

export class description{
  name:string;
  birthDate:Date;
}
export class addressInfo{
  country:string;
  city:string;
  street:string;
}
