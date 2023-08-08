import React, { Component } from 'react'
import ValorantService from '../services/ValorantService';
import {Link} from 'react-router-dom';

class CreateCharacterComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            country:'',
            ability:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.changeAbilityHandler = this.changeAbilityHandler.bind(this);
        this.saveCharacter = this.saveCharacter.bind(this);
    }
    saveCharacter = (e) => {
        let character = {name: this.state.name,country: this.state.country,ability: this.state.ability};
       

        ValorantService.createCharacter(character).then(res =>{      
            window.location.assign("/getCharacters");
        });
        
    }
    
    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
 
    }
    changeCountryHandler = (event) => {
        this.setState({country: event.target.value});
 
    }

    changeAbilityHandler = (event) => {
        this.setState({ability: event.target.value});
 
    }

    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">New Character</h3>
                            <div className = "card-body">
                                <form>
                                         <div className = "form-group">
                                            <label> Name </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.userName} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                           <label> Country </label>
                                            <input placeholder="Country" name="country" className="form-control" 
                                                value={this.state.country} onChange={this.changeCountryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Ability </label>
                                            <input placeholder="Ability" name="ability" className="form-control" 
                                                value={this.state.ability} onChange={this.changeAbilityHandler}/>
                                        </div>     
                                    

                                        <Link to= "/getCharacters" onClick={this.saveCharacter} className="btn btn-primary mb-2">Add Character</Link>
                                      
                                        
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CreateCharacterComponent