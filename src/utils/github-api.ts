import { Octokit } from "@octokit/rest";

export class GitHubAPI {
    private octokit: Octokit;
    private owner: string;

    constructor(token: string, owner: string) {
        this.octokit = new Octokit({ auth: token });
        this.owner = owner;
    }

    async getUserRepos() {
        const response = await this.octokit.repos.listForUser({
            username: this.owner,
            per_page: 100,
        });
        return response.data.map((repo) => repo.name);
    }

    async getOrgRepos() {
        const response = await this.octokit.repos.listForOrg({
            org: this.owner,
            per_page: 100,
        });
        return response.data.map(repo => repo.name);
    }

    async getCommits(repo: string) {
        const response = await this.octokit.repos.listCommits({
            owner: this.owner,
            repo,
            per_page: 100,
        });
        return response.data;
    }
}