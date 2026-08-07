class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // 1. loop through the array use a hash map to group the strings
        // 2. use the hash map keys as a array frequency count and the value as a list 
        // of each group of anagrams

        const group = new Map();

        for (let s of strs) {
            const char = new Array(26).fill(0);
            for (let c of s) {
               char[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            const key = char.join(",");

            if (!group.has(key)) {
                group.set(key, []);
            }
            group.get(key).push(s);
        }

        return Array.from(group.values())
    }
}
