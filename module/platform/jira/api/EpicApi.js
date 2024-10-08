/**
 * Jira Software Cloud API
 * Jira Software Cloud REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* Epic service.
* @module api/EpicApi
* @version 1001.0.0
*/
export default class EpicApi {

    /**
    * Constructs a new EpicApi. 
    * @alias module:api/EpicApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getEpic operation.
     * @callback module:api/EpicApi~getEpicCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get epic
     * Returns the epic for a given epic ID. This epic will only be returned if the user has permission to view it. **Note:** This operation does not work for epics in next-gen projects.
     * @param {String} epicIdOrKey The id or key of the requested epic.
     * @param {module:api/EpicApi~getEpicCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getEpic(epicIdOrKey, callback) {
      let postBody = null;
      // verify the required parameter 'epicIdOrKey' is set
      if (epicIdOrKey === undefined || epicIdOrKey === null) {
        throw new Error("Missing the required parameter 'epicIdOrKey' when calling getEpic");
      }

      let pathParams = {
        'epicIdOrKey': epicIdOrKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/agile/1.0/epic/{epicIdOrKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIssuesForEpic operation.
     * @callback module:api/EpicApi~getIssuesForEpicCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issues for epic
     * Returns all issues that belong to the epic, for the given epic ID. This only includes issues that the user has permission to view. Issues returned from this resource include Agile fields, like sprint, closedSprints, flagged, and epic. By default, the returned issues are ordered by rank. **Note:** If you are querying a next-gen project, do not use this operation. Instead, search for issues that belong to an epic by using the [Search for issues using JQL](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-rest-api-2-search-get) operation in the Jira platform REST API. Build your JQL query using the `parent` clause. For more information on the `parent` JQL field, see [Advanced searching](https://confluence.atlassian.com/x/dAiiLQ#Advancedsearching-fieldsreference-Parent).
     * @param {String} epicIdOrKey The id or key of the epic that contains the requested issues.
     * @param {Object} opts Optional parameters
     * @param {Number} [startAt] The starting index of the returned issues. Base index: 0. See the 'Pagination' section at the top of this page for more details.
     * @param {Number} [maxResults] The maximum number of issues to return per page. Default: 50. See the 'Pagination' section at the top of this page for more details. Note, the total number of issues returned is limited by the property 'jira.search.views.default.max' in your Jira instance. If you exceed this limit, your results will be truncated.
     * @param {String} [jql] Filters results using a JQL query. If you define an order in your JQL query, it will override the default order of the returned issues.   Note that `username` and `userkey` can't be used as search terms for this parameter due to privacy reasons. Use `accountId` instead.
     * @param {Boolean} [validateQuery] Specifies whether to validate the JQL query or not. Default: true.
     * @param {Array.<Object>} [fields] The list of fields to return for each issue. By default, all navigable and Agile fields are returned.
     * @param {String} [expand] A comma-separated list of the parameters to expand.
     * @param {module:api/EpicApi~getIssuesForEpicCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getIssuesForEpic(epicIdOrKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'epicIdOrKey' is set
      if (epicIdOrKey === undefined || epicIdOrKey === null) {
        throw new Error("Missing the required parameter 'epicIdOrKey' when calling getIssuesForEpic");
      }

      let pathParams = {
        'epicIdOrKey': epicIdOrKey
      };
      let queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'jql': opts['jql'],
        'validateQuery': opts['validateQuery'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi'),
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/agile/1.0/epic/{epicIdOrKey}/issue', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIssuesWithoutEpic operation.
     * @callback module:api/EpicApi~getIssuesWithoutEpicCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issues without epic
     * Returns all issues that do not belong to any epic. This only includes issues that the user has permission to view. Issues returned from this resource include Agile fields, like sprint, closedSprints, flagged, and epic. By default, the returned issues are ordered by rank. **Note:** If you are querying a next-gen project, do not use this operation. Instead, search for issues that don't belong to an epic by using the [Search for issues using JQL](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-rest-api-2-search-get) operation in the Jira platform REST API. Build your JQL query using the `parent is empty` clause. For more information on the `parent` JQL field, see [Advanced searching](https://confluence.atlassian.com/x/dAiiLQ#Advancedsearching-fieldsreference-Parent).
     * @param {Object} opts Optional parameters
     * @param {Number} [startAt] The starting index of the returned issues. Base index: 0. See the 'Pagination' section at the top of this page for more details.
     * @param {Number} [maxResults] The maximum number of issues to return per page. See the 'Pagination' section at the top of this page for more details. Note, the total number of issues returned is limited by the property 'jira.search.views.default.max' in your Jira instance. If you exceed this limit, your results will be truncated.
     * @param {String} [jql] Filters results using a JQL query. If you define an order in your JQL query, it will override the default order of the returned issues.
     * @param {Boolean} [validateQuery] Specifies whether to validate the JQL query or not. Default: true.
     * @param {Array.<Object>} [fields] The list of fields to return for each issue. By default, all navigable and Agile fields are returned.
     * @param {String} [expand] A comma-separated list of the parameters to expand.
     * @param {module:api/EpicApi~getIssuesWithoutEpicCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getIssuesWithoutEpic(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'jql': opts['jql'],
        'validateQuery': opts['validateQuery'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi'),
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/agile/1.0/epic/none/issue', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the moveIssuesToEpic operation.
     * @callback module:api/EpicApi~moveIssuesToEpicCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move issues to epic
     * Moves issues to an epic, for a given epic id. Issues can be only in a single epic at the same time. That means that already assigned issues to an epic, will not be assigned to the previous epic anymore. The user needs to have the edit issue permission for all issue they want to move and to the epic. The maximum number of issues that can be moved in one operation is 50. **Note:** This operation does not work for epics in next-gen projects.
     * @param {String} epicIdOrKey The id or key of the epic that you want to assign issues to.
     * @param {module:model/MoveIssuesToBacklogRequest} moveIssuesToBacklogRequest 
     * @param {module:api/EpicApi~moveIssuesToEpicCallback} callback The callback function, accepting three arguments: error, data, response
     */
    moveIssuesToEpic(epicIdOrKey, moveIssuesToBacklogRequest, callback) {
      let postBody = moveIssuesToBacklogRequest;
      // verify the required parameter 'epicIdOrKey' is set
      if (epicIdOrKey === undefined || epicIdOrKey === null) {
        throw new Error("Missing the required parameter 'epicIdOrKey' when calling moveIssuesToEpic");
      }
      // verify the required parameter 'moveIssuesToBacklogRequest' is set
      if (moveIssuesToBacklogRequest === undefined || moveIssuesToBacklogRequest === null) {
        throw new Error("Missing the required parameter 'moveIssuesToBacklogRequest' when calling moveIssuesToEpic");
      }

      let pathParams = {
        'epicIdOrKey': epicIdOrKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/agile/1.0/epic/{epicIdOrKey}/issue', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the partiallyUpdateEpic operation.
     * @callback module:api/EpicApi~partiallyUpdateEpicCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Partially update epic
     * Performs a partial update of the epic. A partial update means that fields not present in the request JSON will not be updated. Valid values for color are `color_1` to `color_9`. **Note:** This operation does not work for epics in next-gen projects.
     * @param {String} epicIdOrKey The id or key of the epic to update.
     * @param {module:model/PartiallyUpdateEpicRequest} partiallyUpdateEpicRequest 
     * @param {module:api/EpicApi~partiallyUpdateEpicCallback} callback The callback function, accepting three arguments: error, data, response
     */
    partiallyUpdateEpic(epicIdOrKey, partiallyUpdateEpicRequest, callback) {
      let postBody = partiallyUpdateEpicRequest;
      // verify the required parameter 'epicIdOrKey' is set
      if (epicIdOrKey === undefined || epicIdOrKey === null) {
        throw new Error("Missing the required parameter 'epicIdOrKey' when calling partiallyUpdateEpic");
      }
      // verify the required parameter 'partiallyUpdateEpicRequest' is set
      if (partiallyUpdateEpicRequest === undefined || partiallyUpdateEpicRequest === null) {
        throw new Error("Missing the required parameter 'partiallyUpdateEpicRequest' when calling partiallyUpdateEpic");
      }

      let pathParams = {
        'epicIdOrKey': epicIdOrKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/agile/1.0/epic/{epicIdOrKey}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the rankEpics operation.
     * @callback module:api/EpicApi~rankEpicsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Rank epics
     * Moves (ranks) an epic before or after a given epic.  If rankCustomFieldId is not defined, the default rank field will be used.  **Note:** This operation does not work for epics in next-gen projects.
     * @param {String} epicIdOrKey The id or key of the epic to rank.
     * @param {module:model/RankEpicsRequest} rankEpicsRequest bean which contains the information where the given epic should be ranked.
     * @param {module:api/EpicApi~rankEpicsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    rankEpics(epicIdOrKey, rankEpicsRequest, callback) {
      let postBody = rankEpicsRequest;
      // verify the required parameter 'epicIdOrKey' is set
      if (epicIdOrKey === undefined || epicIdOrKey === null) {
        throw new Error("Missing the required parameter 'epicIdOrKey' when calling rankEpics");
      }
      // verify the required parameter 'rankEpicsRequest' is set
      if (rankEpicsRequest === undefined || rankEpicsRequest === null) {
        throw new Error("Missing the required parameter 'rankEpicsRequest' when calling rankEpics");
      }

      let pathParams = {
        'epicIdOrKey': epicIdOrKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/agile/1.0/epic/{epicIdOrKey}/rank', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeIssuesFromEpic operation.
     * @callback module:api/EpicApi~removeIssuesFromEpicCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove issues from epic
     * Removes issues from epics. The user needs to have the edit issue permission for all issue they want to remove from epics. The maximum number of issues that can be moved in one operation is 50. **Note:** This operation does not work for epics in next-gen projects. Instead, update the issue using `\\{ fields: \\{ parent: \\{\\} \\} \\}`
     * @param {module:model/MoveIssuesToBacklogRequest} moveIssuesToBacklogRequest 
     * @param {module:api/EpicApi~removeIssuesFromEpicCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeIssuesFromEpic(moveIssuesToBacklogRequest, callback) {
      let postBody = moveIssuesToBacklogRequest;
      // verify the required parameter 'moveIssuesToBacklogRequest' is set
      if (moveIssuesToBacklogRequest === undefined || moveIssuesToBacklogRequest === null) {
        throw new Error("Missing the required parameter 'moveIssuesToBacklogRequest' when calling removeIssuesFromEpic");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/agile/1.0/epic/none/issue', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
