import update from 'react-addons-update';

function changeTitle(state = {title: "Hello"}, action) {
  let newState = null;
  if (action.type === "Change_Title") {
    newState = update(state, {
      $set: {
        title: action.title
      }
    })
  }
  return newState || state;
}

module.exports = {
  changeTitle: changeTitle
}