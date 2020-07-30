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

  handleNoteInputChange = (e)=>{
    this.setState({noteInputValue:e.target.value})
  }
  handleAddButtonClick = (e)=>{
    e.preventDefault()
    var note = {
      id:Date.now(),
      text:this.state.noteInputValue
    }
    var newNotes = [note, ...this.state.notes]

    this.setState({
      notes:newNotes,
      noteInputValue : ''
    })
  }
  handleNoteDelete = (e)=>{
    var noteIdToDelete = parseInt(e.target.id)
    var notes = this.state.notes

    var filteredNotes = notes.filter((item)=>{
      return item.id != noteIdToDelete
    })

    this.setState({notes:filteredNotes})
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
                            <i id={note.id} className="fa fa-times note-remove" aria-hidden="remove" onClick={this.handleNoteDelete}></i>
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
					    	<input type="text" class="form-control" id="note-input" value={this.state.noteInputValue} onChange={this.handleNoteInputChange}/>
					  	</div>
				
					  	<button type="submit" class="btn btn-primary" onClick={this.handleAddButtonClick}>Add</button>
					</form>
					
			</div>
                
            </div>
        </div>
    </div>
    );
  }

}

export default App;
