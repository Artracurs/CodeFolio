require('dotenv').config();

const express = require('express');
const axios = require('axios');
const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

app.get('/github-languages/:username', async (req, res) => {
    const username = req.params.username;
    const token = process.env.GITHUB_TOKEN;
    const headers = { 'Authorization': `token ${token}` };

    try {
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`, { headers });
        const repos = reposResponse.data;

        const formattedData = await Promise.all(repos.map(async (repo) => {
            const languagesResponse = await axios.get(repo.languages_url, { headers });

            // Fetch releases data
            const releasesResponse = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/releases`, { headers });
            const releases = releasesResponse.data.map(release => ({
                published_at: release.published_at,
                tag_name: release.tag_name,
                html_url: release.html_url,
            }));

            return {
                name: repo.name,
                stargazers_count: repo.stargazers_count,
                forks_count: repo.forks_count,
                main_language: repo.language || 'None',
                all_languages: Object.keys(languagesResponse.data),
                pushed_at: repo.pushed_at,
                description: repo.description || 'No description',
                html_url: repo.html_url,
                license: repo.license ? repo.license.spdx_id : 'No license',
                releases: releases, // Add releases data
            };
        }));

        res.json(formattedData);
    } catch (error) {
        res.status(500).send('Error fetching data from GitHub');
    }
});



app.listen(port, host, () => {
    console.log(`Server running on port http://${host}:${port}`);
});
