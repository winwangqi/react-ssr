import express from 'express'
import cors from 'cors'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'

import { fetchPopularRepos } from '../shared/api'

import App from '../shared/App'
import routes from '../shared/routes';

const app = express()

app.use(cors())
app.use(express.static('public'))

app.get('/api', (req, res, next) => {
  res.send({items: [{"id":28457823,"node_id":"MDEwOlJlcG9zaXRvcnkyODQ1NzgyMw==","name":"freeCodeCamp","full_name":"freeCodeCamp/freeCodeCamp","private":false,"owner":{"login":"freeCodeCamp","id":9892522,"node_id":"MDEyOk9yZ2FuaXphdGlvbjk4OTI1MjI=","avatar_url":"https://avatars0.githubusercontent.com/u/9892522?v=4","gravatar_id":"","url":"https://api.github.com/users/freeCodeCamp","html_url":"https://github.com/freeCodeCamp","followers_url":"https://api.github.com/users/freeCodeCamp/followers","following_url":"https://api.github.com/users/freeCodeCamp/following{/other_user}","gists_url":"https://api.github.com/users/freeCodeCamp/gists{/gist_id}","starred_url":"https://api.github.com/users/freeCodeCamp/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/freeCodeCamp/subscriptions","organizations_url":"https://api.github.com/users/freeCodeCamp/orgs","repos_url":"https://api.github.com/users/freeCodeCamp/repos","events_url":"https://api.github.com/users/freeCodeCamp/events{/privacy}","received_events_url":"https://api.github.com/users/freeCodeCamp/received_events","type":"Organization","site_admin":false},"html_url":"https://github.com/freeCodeCamp/freeCodeCamp","description":"The https://www.freeCodeCamp.org open source codebase and curriculum. Learn to code for free together with millions of people.","fork":false,"url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp","forks_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/forks","keys_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/keys{/key_id}","collaborators_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/teams","hooks_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/hooks","issue_events_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/events{/number}","events_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/events","assignees_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/assignees{/user}","branches_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/branches{/branch}","tags_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/tags","blobs_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/refs{/sha}","trees_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/trees{/sha}","statuses_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/statuses/{sha}","languages_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/languages","stargazers_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/stargazers","contributors_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contributors","subscribers_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscribers","subscription_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscription","commits_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/commits{/sha}","git_commits_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/commits{/sha}","comments_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/comments{/number}","issue_comment_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/comments{/number}","contents_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contents/{+path}","compare_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/compare/{base}...{head}","merges_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/merges","archive_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/downloads","issues_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues{/number}","pulls_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls{/number}","milestones_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/milestones{/number}","notifications_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/labels{/name}","releases_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/releases{/id}","deployments_url":"https://api.github.com/repos/freeCodeCamp/freeCodeCamp/deployments","created_at":"2014-12-24T17:49:19Z","updated_at":"2018-11-22T15:29:49Z","pushed_at":"2018-11-22T15:28:00Z","git_url":"git://github.com/freeCodeCamp/freeCodeCamp.git","ssh_url":"git@github.com:freeCodeCamp/freeCodeCamp.git","clone_url":"https://github.com/freeCodeCamp/freeCodeCamp.git","svn_url":"https://github.com/freeCodeCamp/freeCodeCamp","homepage":"","size":101756,"stargazers_count":296191,"watchers_count":296191,"language":"JavaScript","has_issues":true,"has_projects":false,"has_downloads":true,"has_wiki":false,"has_pages":false,"forks_count":20504,"mirror_url":null,"archived":false,"open_issues_count":9292,"license":{"key":"bsd-3-clause","name":"BSD 3-Clause \"New\" or \"Revised\" License","spdx_id":"BSD-3-Clause","url":"https://api.github.com/licenses/bsd-3-clause","node_id":"MDc6TGljZW5zZTU="},"forks":20504,"open_issues":9292,"watchers":296191,"default_branch":"master","score":1},{"id":11730342,"node_id":"MDEwOlJlcG9zaXRvcnkxMTczMDM0Mg==","name":"vue","full_name":"vuejs/vue","private":false,"owner":{"login":"vuejs","id":6128107,"node_id":"MDEyOk9yZ2FuaXphdGlvbjYxMjgxMDc=","avatar_url":"https://avatars1.githubusercontent.com/u/6128107?v=4","gravatar_id":"","url":"https://api.github.com/users/vuejs","html_url":"https://github.com/vuejs","followers_url":"https://api.github.com/users/vuejs/followers","following_url":"https://api.github.com/users/vuejs/following{/other_user}","gists_url":"https://api.github.com/users/vuejs/gists{/gist_id}","starred_url":"https://api.github.com/users/vuejs/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/vuejs/subscriptions","organizations_url":"https://api.github.com/users/vuejs/orgs","repos_url":"https://api.github.com/users/vuejs/repos","events_url":"https://api.github.com/users/vuejs/events{/privacy}","received_events_url":"https://api.github.com/users/vuejs/received_events","type":"Organization","site_admin":false},"html_url":"https://github.com/vuejs/vue","description":"🖖 A progressive, incrementally-adoptable JavaScript framework for building UI on the web.","fork":false,"url":"https://api.github.com/repos/vuejs/vue","forks_url":"https://api.github.com/repos/vuejs/vue/forks","keys_url":"https://api.github.com/repos/vuejs/vue/keys{/key_id}","collaborators_url":"https://api.github.com/repos/vuejs/vue/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/vuejs/vue/teams","hooks_url":"https://api.github.com/repos/vuejs/vue/hooks","issue_events_url":"https://api.github.com/repos/vuejs/vue/issues/events{/number}","events_url":"https://api.github.com/repos/vuejs/vue/events","assignees_url":"https://api.github.com/repos/vuejs/vue/assignees{/user}","branches_url":"https://api.github.com/repos/vuejs/vue/branches{/branch}","tags_url":"https://api.github.com/repos/vuejs/vue/tags","blobs_url":"https://api.github.com/repos/vuejs/vue/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/vuejs/vue/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/vuejs/vue/git/refs{/sha}","trees_url":"https://api.github.com/repos/vuejs/vue/git/trees{/sha}","statuses_url":"https://api.github.com/repos/vuejs/vue/statuses/{sha}","languages_url":"https://api.github.com/repos/vuejs/vue/languages","stargazers_url":"https://api.github.com/repos/vuejs/vue/stargazers","contributors_url":"https://api.github.com/repos/vuejs/vue/contributors","subscribers_url":"https://api.github.com/repos/vuejs/vue/subscribers","subscription_url":"https://api.github.com/repos/vuejs/vue/subscription","commits_url":"https://api.github.com/repos/vuejs/vue/commits{/sha}","git_commits_url":"https://api.github.com/repos/vuejs/vue/git/commits{/sha}","comments_url":"https://api.github.com/repos/vuejs/vue/comments{/number}","issue_comment_url":"https://api.github.com/repos/vuejs/vue/issues/comments{/number}","contents_url":"https://api.github.com/repos/vuejs/vue/contents/{+path}","compare_url":"https://api.github.com/repos/vuejs/vue/compare/{base}...{head}","merges_url":"https://api.github.com/repos/vuejs/vue/merges","archive_url":"https://api.github.com/repos/vuejs/vue/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/vuejs/vue/downloads","issues_url":"https://api.github.com/repos/vuejs/vue/issues{/number}","pulls_url":"https://api.github.com/repos/vuejs/vue/pulls{/number}","milestones_url":"https://api.github.com/repos/vuejs/vue/milestones{/number}","notifications_url":"https://api.github.com/repos/vuejs/vue/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/vuejs/vue/labels{/name}","releases_url":"https://api.github.com/repos/vuejs/vue/releases{/id}","deployments_url":"https://api.github.com/repos/vuejs/vue/deployments","created_at":"2013-07-29T03:24:51Z","updated_at":"2018-11-22T15:05:05Z","pushed_at":"2018-11-22T15:13:50Z","git_url":"git://github.com/vuejs/vue.git","ssh_url":"git@github.com:vuejs/vue.git","clone_url":"https://github.com/vuejs/vue.git","svn_url":"https://github.com/vuejs/vue","homepage":"http://vuejs.org","size":24029,"stargazers_count":119797,"watchers_count":119797,"language":"JavaScript","has_issues":true,"has_projects":true,"has_downloads":true,"has_wiki":false,"has_pages":false,"forks_count":17099,"mirror_url":null,"archived":false,"open_issues_count":288,"license":{"key":"mit","name":"MIT License","spdx_id":"MIT","url":"https://api.github.com/licenses/mit","node_id":"MDc6TGljZW5zZTEz"}}]})
})

app.get('*', (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {}

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()

  promise.then(data => {
    const context = { data }
    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App data={data} />
      </StaticRouter>
    )
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
      </head>
      <body>
        <div id="app">${markup}</div>

        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(data)}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `)
  }).catch(next)
})

app.listen(3000, () => {
  console.log('Server is listening on port:3000')
})