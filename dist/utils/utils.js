export function addCount(users, commit) {
    var _a;
    const commit_msg = commit.commit.message.split("\n")[0];
    const author = ((_a = commit.author) === null || _a === void 0 ? void 0 : _a.login) || commit.commit.author.name;
    let user = users.find((u) => u.name === author);
    if (!user) {
        user = {
            name: author,
            commit_count: 0,
            commits: [],
            bug_count: 0,
            bugs: [],
            feature_count: 0,
            features: [],
            ci_count: 0,
            cis: [],
        };
        users.push(user);
    }
    user.commit_count += 1;
    user.commits.push(commit_msg);
    if (isBug(commit_msg)) {
        user.bug_count += 1;
        user.bugs.push(commit_msg);
    }
    else if (isFeature(commit_msg)) {
        user.feature_count += 1;
        user.features.push(commit_msg);
    }
    else if (isCI(commit_msg)) {
        user.ci_count += 1;
        user.cis.push(commit_msg);
    }
}
function isBug(msg) {
    return /^(fix|bug)(\(.*\))?:/i.test(msg);
}
function isFeature(msg) {
    return /^(feat|feature)(\(.*\))?:/i.test(msg);
}
function isCI(msg) {
    return /^ci(\(.*\))?:/i.test(msg);
}
