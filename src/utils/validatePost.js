function validatePost(data) {
  const errors = [];
  const title = data?.title?.trim();
  const content = data?.content?.trim();

  if (!title || title.length < 3) errors.push("Title must be at least 3 characters");
  if (!content) errors.push("Content is required");

  return errors;
}

module.exports = validatePost;
