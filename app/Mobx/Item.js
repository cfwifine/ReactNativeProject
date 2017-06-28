import {computed, action} from 'mobx'

constructor(props) {
  super(props);

  this.state = {};

  this.readModel = props.readModel;
}

@action
select = ()=>{
	if (this.readModel.selectedItem==this) {
		this.readModel.selectedItem = null;
	}else {
		this.readModel.selectedItem = this;
	}
}

