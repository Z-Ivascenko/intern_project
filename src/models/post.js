class Post {
  constructor({ id, userId, title, content, createdAt }) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
  }
}

module.exports = Post;

