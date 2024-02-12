require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require('cors'); //
const app = express();

app.use(cors());

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

app.get('/github-avatar/:username', async (req, res) => {
  const username = req.params.username;
  const token = process.env.GITHUB_TOKEN;
  const headers = { 'Authorization': `token ${token}` };

  try {
      const userProfileResponse = await axios.get(`https://api.github.com/users/${username}`, { headers });
      const avatarUrl = userProfileResponse.data.avatar_url;
      
      res.json({ username: username, avatar_url: avatarUrl });
  } catch (error) {
      console.error('Error fetching user profile from GitHub:', error);
      res.status(500).send('Error fetching user avatar from GitHub');
  }
});

app.get('/github-bio/:username', async (req, res) => {
  const username = req.params.username;
  const token = process.env.GITHUB_TOKEN; // Ensure you have a GitHub token set in your environment variables
  const headers = { 'Authorization': `token ${token}` };

  try {
      const userProfileResponse = await axios.get(`https://api.github.com/users/${username}`, { headers });
      const userProfile = userProfileResponse.data;

      // Extracting the biography and GitHub profile URL
      const bio = userProfile.bio || "No biography available";
      const htmlUrl = userProfile.html_url; // Link to the user's GitHub profile

      res.json({ username: username, bio: bio, github_profile: htmlUrl });
  } catch (error) {
      console.error('Error fetching user bio and profile link from GitHub:', error);
      res.status(500).send('Error fetching user information from GitHub');
  }
});


app.listen(port, host, () => {
    console.log(`Server running on port http://${host}:${port}`);
});
