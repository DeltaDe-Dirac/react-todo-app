export default class TodoModel {
  constructor(id, text, isCompleted) {
    this.id = "todoItem-".concat(id);
    this.text = text;
    this.isCompleted = isCompleted;
  }
}
