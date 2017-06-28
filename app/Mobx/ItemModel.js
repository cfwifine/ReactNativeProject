import {observable} from 'mobx'
import Item from './Item'

export default class ItemModel {
	@observable
	items = [];

	@observable
	selectedItem = null;

	constructor(props) {
	  super(props);
	
	  this.state = {};

	  for(let i=0; i<20; i++) {
	  	this.items.push(new Item(this));
	  }
	  this.selectedItem = this.items[0];
	  setTimeout(()=>{
	  	for(let i=0; i<20; i++) {
	  		this.items.push(new Item(this));
	  	}
	  },10000);
	}
}