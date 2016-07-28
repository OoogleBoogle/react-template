import 'isomorphic-fetch';

module.exports = {
  changeTitle: () => {
    return dispatch({
      type: "Change_Title",
      title: "GO!"
    })
  }
}