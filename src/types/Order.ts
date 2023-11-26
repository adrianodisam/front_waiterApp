export interface Order{
  _id : string;
  table: string;
  status: 'WATING'|'IN_PRODUCTION'|'DONE'
  products:  {
    _id : string;
    quantity : number;
    product:{
      name:string;
      imgePath:string;
      price:number;
    };
  }[];
}
