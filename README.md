# dbvirt-mod-atlassian-jira

[![Kubling license](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](LICENSE)

> [!IMPORTANT]
> **This repository is archived and no longer maintained.**
>
> Kubling integrations now use providers. For Atlassian Jira integrations,
> configure the [official OpenAPI provider](https://github.com/kubling-community/kubling-providers/tree/main/providers/openapi)
> when Jira's OpenAPI description covers the required API surface, or implement
> a [custom provider](https://github.com/kubling-community/kubling-providers)
> when Jira-specific behavior is required.
>
> This module remains available for historical reference.

## Historical documentation

The sections below describe the legacy JavaScript module and are not current Kubling integration guidance.

This module contains the schema and logic for interacting with Atlassian Jira APIs.

## Some considerations before usage

* `JavaScript` client delegates were generated with the now-archived [client generator](https://github.com/kubling-community/javascript-gen-clients) and required Jira-specific adaptations.

* Missing tables did not necessarily mean that an entity or endpoint was unsupported. New integrations should add mappings to the OpenAPI provider configuration or implement them in a custom provider.

* The historical build and publishing pipeline ran on private infrastructure. The repository remains available so its implementation can be inspected or forked.

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