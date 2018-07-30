import React, { Component } from 'react';
import { database } from '../firebase';
import { connect } from 'react-redux';
import { getNotes, saveNote } from '../actions/notes-actions'

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      title: '', 
      content: '', 
      notes: {}, 
    }

    this.handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    this.handleSubmit = (e) => {
      const {title, content} = this.state
      e.preventDefault();
      const note = {
        title: this.state.title,
        content: this.state.content,
      }
      this.props.saveNote(note); 
      this.setState({
        title: '',
        content: '',
      })
    }
  }

  componentDidMount = () => {
    this.props.getNotes()
    this.setState({
      notes: this.props.getNotes,
    })
  }
  render() {
    const { notes } = this.props;
    console.log(notes);
    
    //const data = Object.keys(notes).map(key => notes[key]);
    //console.log(data.map(note => note.title));
    
    return (
      <div className="App">
        <div className="container">
          <div className="content">
            <div>
              <input 
                onChange={this.handleChange}
                value={this.state.title}
                type="text"
                name="title"
                className="title"
                placeholder="title"
                required />
            </div>
            <div>
              <textarea 
                onChange={this.handleChange}
                value={this.state.content}
                type="text"
                name="content"
                className="content"
                placeholder="content..."
                required />
            </div>
            <button
              onClick={this.handleSubmit} >Save</button>
            </div>
            {notes.map((note, index) => (
              <div 
                className="post"
                key={index}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
              </div>
            ))}
          </div>
        <style jsx="true">{`
          .app {
            text-align: center;
          }
          .container {
            width: 50rem;
            margin: 0 auto; 
          }
          div.content {
            background: #d7d7d7;
            padding: 2rem 0;
            margin-top: 4rem; 
            border-radius: 0.5rem; 
          }
          input.title {
            font-size: 1.2rem;
            padding: 0.5rem; 
            margin: 1rem; 
            width: 80%;
            border-radius: 0.3rem; 
            border: none;
          }
          textarea.content {
            font-size: 1.2rem;
            padding: 0.5rem; 
            margin: 1rem; 
            height: 14rem;
            width: 80%;
            border-radius: 0.3rem; 
            border: none;
            resize: none;
          }
          button {
            padding: 1rem 3rem; 
            font-size: 1.2rem; 
            background: #187fff; 
            color: white; 
            border-radius: 0.3rem; 
            border: none;
            margin-top: 3rem; 
          }
          .post {
            border: 1px solid #d7d7d7;
            margin: 0.5rem 0; 
            border-radius: 0.5rem; 
            text-align: left;
            padding: 0 1rem;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('this is stateeeee', state);
  const { notes } = state.notes;
  return {
    notes,
  }
}

export default connect(mapStateToProps, { getNotes, saveNote })(App);
