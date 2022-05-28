const userLinks = {
  github: "martinsgabriel1956",
  youtube: "UCLJWFd14kT4FQReMjowBkjQ",
  instagram: "martinsgabriel99",
  twitter: "martinsgabriel99",
  facebook: "martinsbiel1956",
}

const changeSocialMediaLinks = (() => {
  for(let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://www.${social}.com/${social === 'youtube' ? 'channel/' : ''}${userLinks[social]}`;
  }
})()

