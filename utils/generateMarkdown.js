// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
    case "GPL 3.0": 
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)"
    case "BSD 3": 
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
    case "MIT": 
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    default: 
      return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "APACHE 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)"
    case "GPL 3.0": 
      return "(https://www.gnu.org/licenses/gpl-3.0)"
    case "BSD 3": 
    return "(https://opensource.org/licenses/BSD-3-Clause)"
    case "MIT": 
      return "(https://opensource.org/licenses/MIT)"
    default: 
      return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//     if (license) {
//       return ""
//     } else {
//       return ${(renderLicenseBadge(license)renderLicenseLink(license))}
//     } 
    
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, license, description, email, username, dependencies, test}) {
  return `# ${title}

  ${renderLicenseBadge(license)}]${renderLicenseLink(license)}
  
  ## Table of Contents 

  * [Description](#description)
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)

  * [Questions](#questions)

  ## Description

  ${description}
  
  ## Installation 

  To install the necessary dependencies, run the following command:
  
  \`\`\`Dependencies
   ${dependencies}
  \`\`\`\
  
  ## Usage
  
  ## Contributing
  
  ## Tests
  
  To run a test, run the following command: 

  \`\`\`tests
  ${test}
 \`\`\`\
 
  ## Questions
  
  If you have any questions about the repo, open an issue on my github page ${username} or contact me directly at [${email}](mailto:${email})
  
  
`;
}

module.exports = generateMarkdown;
