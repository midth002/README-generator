const licenseInfo = [
  `Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`,

   `This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.`,

    `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.
    
    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this
     software without specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, 
    INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. 
    IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, 
    OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, 
    OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
    POSSIBILITY OF SUCH DAMAGE.`,

    `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
    to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
    and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
]



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
    default : 
      return ""
  }
}

//TODO: Create a function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
      return `This project is licensed under the ${(license)} license`
    } else {
      return 'There is no license for this project.'
    }
    
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, license, description, email, username, dependencies, tests, using, contributing}) {
  return `# ${title}

  ${renderLicenseBadge(license)}]${renderLicenseLink(license)}
  
  ## Table of Contents 

  * [Description](#description)
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)

  * [License](#License)

  * [Questions](#questions)

  ## Description

  ${description}
  
  ## Installation 

  To install the necessary dependencies, run the following command:
  
  \`\`\`Dependencies
   ${dependencies}
  \`\`\`\
  
  ## Usage

  ${using}
  
  ## Contributing

  ${contributing}
  
  ## Tests
  
  To run a test, run the following command: 

  \`\`\`tests
   ${tests}
  \`\`\`\

  ## License

  ${renderLicenseSection(license)} 

  ## Questions
  
  If you have any questions about the repo, open an issue contact me directly at [${email}](mailto:${email}). You can find more work at [${username}](https://github.com/${username}/)
  
  
`;
}

module.exports = generateMarkdown;
