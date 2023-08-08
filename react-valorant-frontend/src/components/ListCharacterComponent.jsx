import React, { Component } from 'react'
import ValorantService from '../services/ValorantService'
import {Link} from 'react-router-dom';



class ListCharacterComponent extends Component {
    
    constructor(props){
        super(props)

        this.state={
            characters:[]
        }
        this.deleteCharacter = this.deleteCharacter.bind(this);
    }

    deleteCharacter(id){
        ValorantService.deleteCharacter(id).then( res => {
            this.setState({characters: this.state.characters.filter(character => character.id !== id)});
        });
    }

    
    componentDidMount(){
        ValorantService.getCharacters().then((res)=>{
            this.setState({characters: res.data});
        });
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Valorant Characters</h2>
                <Link to="/add-character" className="btn btn-primary mb-2">Create a new Character</Link>
                <div className="row">
                    <table className="table table-striped table-bordered"> 
                        <thead> 
                            <tr>
                                <th>Name </th>
                                <th>Country </th>
                                <th>Delete </th>
                                <th>Ability </th>

                            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.characters.map(
                                    character =>
                                    <tr key={character.id}>  

                                        <td>{character.name}</td>
                                        <td>{character.country}</td>
                                        <td>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCharacter(character.id)} 
                                        className="btn btn-danger">Delete </button>
                                        </td>
                                        <td>{character.ability}</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                   
                </div>
            </div>
        )}
}
export default ListCharacterComponent










