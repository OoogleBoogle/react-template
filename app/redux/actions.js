import 'isomorphic-fetch';

module.exports = {
  changeTitle: () => {
    return {
      type: 'Change_Title',
      title: "GO!"
    }
  }
}