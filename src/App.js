import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        notes: [
            {
              id:1,
              text: 'Study'
            },
            {
              id:2,
              text: 'Eat'
            },
            {
              id:3,
              text: 'Drink'
            },
            {
              id:4,
              text: 'Sleep'
            },
            {
              id:5,
              text: 'Exercise'
            },
        ],
        noteInputValue:''
    }
    
  }
  render(){
    return (
     
    <div class="wrap">
    <div class="container">
    <div class="notes">

        {
            this.state.notes.map((note)=>{

                return (

                    <div class="note">
                        <div class="note-body">
                            <i class="fa fa-times note-remove" aria-hidden="remove"></i>
                            <i class="fa fa-plus note-plus" aria-hidden="plus"></i>
                            <div class="note-text">
                                {note.text}
                            </div>
                        </div>
                    </div>


                )
            })
        }

           
           

            <div class="note new-note">

					<form class="note-body">
					  	<div class="form-group">
					    	<label for="note-input">New note</label>
					    	<input type="text" class="form-control" id="note-input"/>
					  	</div>
				
					  	<button type="submit" class="btn btn-primary">Add</button>
					</form>
					
			</div>
                
            </div>
        </div>
    </div>
    );
  }

}

export default App;
