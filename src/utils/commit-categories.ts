export interface CommitCategory {
    name: string;
    pattern: RegExp;
    countField: string;
    listField: string;
}

export const commitCategories: CommitCategory[] = [
    { name: "bug", pattern: /^(fix|bug)(\(.*\))?:/i, countField: "bugCount", listField: "bugs" },
    { name: "feature", pattern: /^(feat|feature)(\(.*\))?:/i, countField: "featureCount", listField: "features" },
    { name: "ci", pattern: /^ci(\(.*\))?:/i, countField: "ciCount", listField: "cis" },

];
