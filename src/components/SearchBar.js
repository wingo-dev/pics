import React from 'react';
class SearchBar extends React.Component{
    state = {term:''};
    onInputChange = (event) =>{
        // console.log(event.target.value);
        this.setState({term:event.target.value});
    }
    onFormsubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormsubmit}>
                    <div className="field">
                    <label>Image Search</label>
                    <input type='text' value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;