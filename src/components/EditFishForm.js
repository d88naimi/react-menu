import React from 'react';

class EditFishForm extends React.Component {

    handleChange = (event) => {
        console.log(event.currentTarget.value);
        //update that fish
        // take a copy of the current fish
            const updatedFish = {
                ...this.props.fish,
                [event.currentTarget.name]: event.currentTarget.value
            };
            this.props.updateFish(this.props.index, updatedFish);
    };
    render() {
        return (
            <div className="fish-edit">
                <input name type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
                <input price type="text" name="price" onChange={this.handleChange}  value={this.props.fish.price}/>
                <select status type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea desc type="text" name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
                <input image type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
            </div>
        );
    }
}

export default EditFishForm;