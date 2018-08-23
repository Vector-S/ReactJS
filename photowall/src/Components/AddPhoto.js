import React, {Component} from 'react'

class AddPhoto extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(event.target.elements.link.value);
    }

    render(){
        return <div>
                <h1>Photowall</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type = "text" placeholder="Link" name="link"/>
                        <input type = "text" placeholder="Description" name="description"/>
                        <button> Post </button>
                    </form>
                </div>
            </div>
    }
}

export default AddPhoto;