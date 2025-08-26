import { commitCategories } from "./commit-categories.js";
function createUser(name) {
    const user = { name, commits: [], commitCount: 0 };
    for (const cat of commitCategories) {
        user[cat.countField] = 0;
        user[cat.listField] = [];
    }
    return user;
}
export const AnalyseCommits = (commits) => {
    var _a;
    const results = [];
    for (const commit of commits) {
        const authorName = ((_a = commit.author) === null || _a === void 0 ? void 0 : _a.login) || commit.commit.author.name;
        let user = results.find(u => u.name === authorName);
        if (!user) {
            user = createUser(authorName);
            results.push(user);
        }
        const commitMsg = commit.commit.message.split("\n")[0];
        user.commits.push(commitMsg);
        user.commitCount += 1;
        for (const category of commitCategories) {
            if (category.pattern.test(commitMsg)) {
                user[category.countField] += 1;
                user[category.listField].push(commitMsg);
                break;
            }
        }
    }
    return results;
};
