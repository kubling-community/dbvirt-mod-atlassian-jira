# dbvirt-mod-atlassian-jira

[![Kubling license](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](LICENSE)

Official ready-to-use module that contains the schema and logic for interacting with Atlassian JIRA APIs.

## Some considerations before usage

* `JavaScript` client delegates are generated [using our template](https://github.com/kubling-community/javascript-gen-clients) as a starting point, but bear in mind that some of them
need special adaptations, therefore if you are planning to create your own version of this module, you would need to adapt the client yourself.

* If this module's schema does not contain a specific `TABLE`, it does not mean that the entity or endpoint is not supported. In case you detect that, please create an issue or open a PR.

* Building and Publishing still run on our private infra, however we will soon migrate to GitHub Actions. We kept the pipeline as simple as possible, with just `sh` tasks running the cli in Docker form, just in case you want to fork and have your own Module based on this one, so steps are clear and easily adaptable to a different CICD platform.  

## Queries fetching time

Expected based on our benchmarks: `[600-3000]ms` **per single query**

When using a JavaScript Module Data Source, there are some factors that may affect the overall performance and response/fetch time.

The most important one, which exceeds the Engine, is the time it takes by the API itself to reply to the requests. In case of problems with that, we recommend you to contact the provider.

However, there are other factors you can control:
* Resources assigned to the container:
  * Each JavaScript thread runs on a single OS thread/single CPU, therefore, the more available CPU the more parallel active JS threads you can have, including complex subqueries.
  * Once a Source (a JS file) is loaded the first time, it is kept in memory, therefore new queries do not reload the Source. However, a parsed Source generates an AST that is replicated per thread and consumes memory, then the simpler the Source the less memory will be consumed.
* Official modules we release are not designed around performance in mind but full compatibility with the API. If you use Kubling in mission-critical scenarios, please consider writing custom modules, without relying on auto-generators. If you need assistance, just contact us.
* If queries take longer than usual, it is likely to have enqueued Jobs waiting for their free threads, you can track some metrics exposed by the Engine and adjust limits via configuration when needed. Contact us if you need assistance with this topic.