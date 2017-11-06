const { Issue } = require('../../slack/renderer/issue');

module.exports = function unfurlIssue(issue, params) {
  const repository = {
    full_name: `${params.owner}/${params.repo}`,
  };
  const issueMessage = new Issue({
    issue,
    repository,
    unfurl: true,
  });
  return issueMessage.getMainAttachment();
};