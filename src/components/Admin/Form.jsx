import React, { useState } from 'react';
import axios from 'axios';

const HeroForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        paragraph: '',
        img: null, // Holds the file object
    });

    const handleChange = (e) => {
        if (e.target.name === 'img') {
            // If the input is a file, update img using the file object
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object to send the file and other form data
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('title', formData.title);
        formDataToSend.append('paragraph', formData.paragraph);
        formDataToSend.append('image', formData.img);

        try {
            // Make a POST request to your server endpoint
            const response = await axios.post('http://localhost:7000/creator',
                {
                    method: "POST",
                    body: formDataToSend
                });
            // Handle the response (you can redirect or display a success message)
            console.log('Response:', response.data);
        } catch (error) {
            // Handle errors (display an error message)
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </label>
            <br />
            <label>
                Paragraph:
                <textarea name="paragraph" value={formData.paragraph} onChange={handleChange} />
            </label>
            <br />
            <label>
                Image:
                <input type="file" name="img" onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default HeroForm;
