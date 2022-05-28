import { userSocialLinks } from './utils.js';

const changeSocialMediaLinks = (() => {
  for(let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://www.${social}.com/${social === 'youtube' ? 'channel/' : ''}${userSocialLinks[social]}`;
  }
})()

const getGithubUserInfo = (async () => {
  const url = `https://api.github.com/users/${userSocialLinks.github}`;

  const response = await fetch(url);
  const userData = await response.json();

  const { name, bio, avatar_url, login } = userData;

  avatar.src = avatar_url;
  avatar.alt = `Avatar do ${name}`;
  userName.textContent = name;
  userLogin.textContent = login;
  userBio.textContent = bio;
})()