import axios from 'axios';

const CHARACTER_URL="https://localhost:7257/api/characters"

class UserService{
    getCharacters(){
        return axios.get(CHARACTER_URL);
    }
    createCharacter(character){
        return axios.post(CHARACTER_URL,character);
    }
    deleteCharacter(characterId){
        return axios.delete(CHARACTER_URL + '/' + characterId);
    }
   
}

export default new UserService()
