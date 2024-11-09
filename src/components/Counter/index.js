import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class Counter extends Component {
  state = {textInput: '', isEmpty: true, paragraphs: []}

  onChangeInputValue = event => {
    this.setState({textInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState(prevState => ({
      paragraphs: [...prevState.paragraphs, prevState.textInput],
      isEmpty: false,
      textInput: '',
    }))
  }

  render() {
    const {textInput, isEmpty, paragraphs} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="card-1">
            <div className="heading-container">
              <h1 className="main-heading">
                Count the characters like a Boss...
              </h1>
            </div>
            {isEmpty ? (
              <div className="empty-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
                  alt="no user inputs"
                  className="no-input-img"
                />
              </div>
            ) : (
              <ul className="list-container">
                {paragraphs.map(paragraph => (
                  <li className="item" key={uuidv4()} id={uuidv4()}>
                    <p>
                      {paragraph} : {paragraph.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="card-2">
            <h1>Character Counter</h1>
            <form className="input-container" onSubmit={this.onSubmitForm}>
              <input
                className="input"
                type="text"
                placeholder="Enter the Characters here"
                value={textInput}
                onChange={this.onChangeInputValue}
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
