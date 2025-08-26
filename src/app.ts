// import dotenv from "dotenv";
// dotenv.config()

import { GitHubAPI } from "./utils/github-api.js";
import { AnalyseCommits } from "./utils/analyse-commits.js";
import {db} from "./utils/firebase-config.js"


const OWNER = "Mozilla-Campus-Club-of-SLIIT";
const TOKEN = process.env.GIT_TOKEN!.trim();

const github = new GitHubAPI(TOKEN, OWNER);

const repos = ["official-web"];

let allCommits: any[] = [];

for (const repo of repos) {
  const commits = await github.getCommits(repo);
  allCommits = allCommits.concat(commits);
}


const results = AnalyseCommits(allCommits);

console.log(results);

for (const r of results) {
  await db.collection("results").doc(r.name).set(r, { merge: true });
}