<<<<<<< HEAD
export function manageFriends(state, action) {
  switch(action.type) {
    case "ADD_FRIEND":
      return {
        friends: [...state.friends, action.friend]
      };
    case "REMOVE_FRIEND":
      let friends = [...state.friends];

      let filteredFriends = friends.filter(function(friend, index, array) {
        return friend.id !== action.id;
      });

      return { friends: filteredFriends };

=======
export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      let newFriends = state.friends;
      newFriends.push(action.friend);
      return {friends: newFriends};
    case 'REMOVE_FRIEND':
      return {friends: state.friends.filter(friend => friend.id !== action.id)};
>>>>>>> 508688c56517ee09040b48272ac93157a95ddf37
    default:
      return state;
  }
}
}