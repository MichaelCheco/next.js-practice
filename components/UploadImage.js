import React, { Component } from 'react'

class UploadImage extends Component {
    state = {
        image: '',
        largeImage: ''
    }
    uploadFile = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'test')

        const res = await fetch('https://api.cloudinary.com/v1_1/username/image/upload',
        {
            method: 'POST',
            body: data
        })
        const file = await res.json()
        this.setState({
            image: file.secure_url,
            largeImage: file.eager[0].secure_url
        })
    }
    render() {
        return (
            <div>
                <h2>Upload an Image</h2>
                <input 
                type="file"
                name="file"
                placeholder="upload an image"
                onChange={this.uploadFile}
                required
                />
            </div>
        )
    }
}

export default UploadImage;