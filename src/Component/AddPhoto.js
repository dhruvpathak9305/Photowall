import React, { Component } from 'react'

export class AddPhoto extends Component {
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
const imageLink=event.target.elements.imageLink.value;
const description=event.target.elements.description.value;
const post={
    id:Number(new Date()),
    description:description,
    imageLink:imageLink
}
if(imageLink && description){
this.props.startAddingPost(post);
this.props.onHistory.push('/');

}
    }
    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit} className='form'>
                    <input type='text' placeholder='link' name='imageLink'/>
                    <input type='text' placeholder='description' name='description'/>
                    <button>Post</button>
                </form>

            </div>
        )
    }
}

export default AddPhoto
