export interface User {
    name: string;
    commits: string[];
    commitCount: number;
    [key: string]: any;
}
