export function manageFriends(state = {friends: [],}, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]} 
        case 'REMOVE_FRIEND':
            let array = []
            for(const i of state.friends) {
                if (i.id === action.id) {
                    return array = {friends: state.friends.filter(function(value, index, arr){ return value !== i;})}
                }
            }  
        default:
            return state;
    }
}