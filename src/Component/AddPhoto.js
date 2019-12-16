import React, { Component } from 'react'

export class AddPhoto extends Component {
    render() {
        return (
            <div>
                <h1>Photowall</h1>
                <form className='form'>
                    <input type='text' placeholder='link'/>
                    <input type='text' placeholder='description'/>
                    <button>Post</button>
                </form>

            </div>
        )
    }
}

export default AddPhoto
