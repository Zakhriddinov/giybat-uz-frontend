import { POSTS_REQS } from "./api/posts.js";
import { PaginationList } from "./components/pagination-list.js";

document.addEventListener("DOMContentLoaded", () => {
  PaginationList.drawPostContainer({
    container: "post-container",
    apiCall: POSTS_REQS.getAll,
  });
});