# dbvirt-mod-atlassian-jira (:construction:)

[![Kubling license](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](LICENSE)

Official ready-to-use module that contains the schema and logic for interacting with Atlassian JIRA APIs.

## Some considerations before usage

* `JavaScript` client delegates are generated [using our template](https://github.com/kubling-community/javascript-gen-clients) as a starting point, but bear in mind that some of them
need special adaptations, therefore if you are planning to create your own version of this module, you would need to adapt the client yourself.

* If this module's schema does not contain a specific `TABLE`, it does not mean that the entity or endpoint is not supported. In case you detect that, please create an issue or open a PR.

* Building and Publishing still run on our private infra, however we will soon migrate to GitHub Actions. We kept the pipeline as simple as possible, with just `sh` tasks running the cli in Docker form, just in case you want to fork and have your own Module based on this one, so steps are clear and easily adaptable to a different CICD platform.  