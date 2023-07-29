import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog_01, blog_02, blog_03, blog_04, blog_05 } from "./imports";

const blogDate = "Sep 26, 2021";

export default function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imageURL={blog_01}
            date={blogDate}
            title="GPT-3 and Open AI is the future. Let us know how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imageURL={blog_02}
            date={blogDate}
            title="GPT-3 and Open AI is the future. Let us know how it is?"
          />
          <Article
            imageURL={blog_03}
            date={blogDate}
            title="GPT-3 and Open AI is the future. Let us know how it is?"
          />
          <Article
            imageURL={blog_04}
            date={blogDate}
            title="GPT-3 and Open AI is the future. Let us know how it is?"
          />
          <Article
            imageURL={blog_05}
            date={blogDate}
            title="GPT-3 and Open AI is the future. Let us know how it is?"
          />
        </div>
      </div>
    </div>
  );
}
