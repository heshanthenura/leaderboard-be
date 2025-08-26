import { Octokit } from "@octokit/rest";
import { addCount } from "./utils.js";
export class GitHubAnalyzer {
    constructor(owner, token) {
        this.users = [];
        this.owner = owner;
        this.octokit = new Octokit({ auth: token });
    }
    async getCommits(repoName) {
        const commits = await this.octokit.paginate(this.octokit.rest.repos.listCommits, {
            owner: this.owner,
            repo: repoName,
            per_page: 100,
        });
        for (const c of commits) {
            if (!c.commit.message.startsWith("Merge pull request")) {
                addCount(this.users, c);
            }
        }
    }
    async getAllRepositories() {
        const repositories = await this.octokit.paginate(this.octokit.rest.repos.listForOrg, {
            org: this.owner,
            type: "public",
        });
        return repositories;
    }
}
