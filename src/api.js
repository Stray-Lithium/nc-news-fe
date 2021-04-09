import axios from "axios";

const request = axios.create({
  baseURL: "https://nates-nc-news.herokuapp.com/api",
});

export const fetchTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const fetchArticles = (topic) => {
  return request
    .get(`/articles`, {
      params: {
        topic: topic,
      },
    })
    .then(({ data }) => {
      console.log("b");
      return data.articles;
    });
};
