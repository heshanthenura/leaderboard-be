export const commitCategories = [
    { name: "bug", pattern: /^(fix|bug)(\(.*\))?:/i, countField: "bugCount", listField: "bugs" },
    { name: "feature", pattern: /^(feat|feature)(\(.*\))?:/i, countField: "featureCount", listField: "features" },
    { name: "ci", pattern: /^ci(\(.*\))?:/i, countField: "ciCount", listField: "cis" },
];
