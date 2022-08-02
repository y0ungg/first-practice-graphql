import { graphql } from "@octokit/graphql";
import { useEffect, useState } from "react";
import './App.css';
import Discussions from './Discussions'

async function getRepository() {
  const { repository } = await graphql(
    `
    {
      repository(owner: "codestates-seb", name: "agora-states-fe") {
        discussions(first: 100) {
          edges {
            node {
              id
              title
              createdAt
              url
              author {
                login
                avatarUrl
              }
              category {
                name
              }
              answer {
                author {
                  login
                }
              }
            }
          }
        }
      }
    }`, {
      headers: {
      Authorization: `token ${process.env.REACT_APP_KEY}`
    }
  });
  return repository;
}


function App() {
  const [repository, setRepository] = useState({});
  const { discussions } = repository;

  useEffect(() => {
    getRepository()
    .then(data => setRepository(data))
    .catch(err => console.log(Error, err))
  }, [])

  return (
    <div className="App">
      <h1 className="main">agora states</h1>
      { discussions ? <Discussions discussions={discussions} /> : 'loading...' }
    </div>
  );
}

export default App;
