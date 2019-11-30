export default class List {
  constructor(data) {
    this.id = data.id; // integer
    this.term = data.term; // String
    this.items = data.items || []; // Array
  }
}
