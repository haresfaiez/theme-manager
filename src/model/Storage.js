const data = require('../data');
const Theme = require('./Theme');

class Storage {
  constructor(storage, key) {
    this.key = key;
    this.storage = storage;
  }

  saveTheme(theme) {
    this.storage.setItem(this.key, JSON.stringify(theme.configurations));
  }

  getTheme() {
    const savedTheme = this.storage.getItem(this.key);
    const theme = new Theme(savedTheme ? JSON.parse(savedTheme) : data);
    return theme;
  }
}

module.exports = Storage;
