export const createPost = msg => {
  const { Headline, Post } = msg;
  const post = {
    name: Headline,
    summary: Post,
    author: null,
    alerts: 0,
    involved: 0,
    participants: 1,
    public: true,
    pinned: 0,
    replies: 0,
    trigger: false,
    last_update: new Date()
  };
  return post;
};
