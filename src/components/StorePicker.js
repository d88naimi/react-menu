import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
        <React.Fragment> {/* NO adjacent jsx selector, React fragment allows for multiple elements in jsx */}
            <p> Form</p>
            <form className="store-selector">
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder ="Store Name"/>
                <button type="submit">Visit Store</button>
            </form>
        </React.Fragment>
        )
    }
}

export default StorePicker;