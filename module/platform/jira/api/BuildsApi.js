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
import BuildData from '../model/BuildData';
import SubmitBuildsResponse from '../model/SubmitBuildsResponse';

/**
* Builds service.
* @module api/BuildsApi
* @version 1001.0.0
*/
export default class BuildsApi {

    /**
    * Constructs a new BuildsApi. 
    * @alias module:api/BuildsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteBuildByKey operation.
     * @callback module:api/BuildsApi~deleteBuildByKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a build by key
     * Delete the build data currently stored for the given `pipelineId` and `buildNumber` combination.  Deletion is performed asynchronously. The `getBuildByKey` operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraBuildInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the 'DELETE' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define `jiraBuildInfoProvider` module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. 
     * @param {String} pipelineId The `pipelineId` of the build to delete. 
     * @param {Number} buildNumber The `buildNumber` of the build to delete. 
     * @param {Object} opts Optional parameters
     * @param {Number} [updateSequenceNumber] This parameter usage is no longer supported.  An optional `_updateSequenceNumber` to use to control deletion.  Only stored data with an `updateSequenceNumber` less than or equal to that provided will be deleted. This can be used help ensure submit/delete requests are applied correctly if issued close together. 
     * @param {module:api/BuildsApi~deleteBuildByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteBuildByKey(authorization, pipelineId, buildNumber, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteBuildByKey");
      }
      // verify the required parameter 'pipelineId' is set
      if (pipelineId === undefined || pipelineId === null) {
        throw new Error("Missing the required parameter 'pipelineId' when calling deleteBuildByKey");
      }
      // verify the required parameter 'buildNumber' is set
      if (buildNumber === undefined || buildNumber === null) {
        throw new Error("Missing the required parameter 'buildNumber' when calling deleteBuildByKey");
      }

      let pathParams = {
        'pipelineId': pipelineId,
        'buildNumber': buildNumber
      };
      let queryParams = {
        '_updateSequenceNumber': opts['updateSequenceNumber']
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/builds/0.1/pipelines/{pipelineId}/builds/{buildNumber}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBuildsByProperty operation.
     * @callback module:api/BuildsApi~deleteBuildsByPropertyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete builds by Property
     * Bulk delete all builds data that match the given request.  One or more query params must be supplied to specify Properties to delete by. Optional param `_updateSequenceNumber` is no longer supported. If more than one Property is provided, data will be deleted that matches ALL of the Properties (e.g. treated as an AND).  See the documentation for the `submitBuilds` operation for more details.  e.g. DELETE /bulkByProperties?accountId=account-123&repoId=repo-345  Deletion is performed asynchronously. The `getBuildByKey` operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraBuildInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the 'DELETE' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define `jiraBuildInfoProvider` module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. 
     * @param {Object} opts Optional parameters
     * @param {Number} [updateSequenceNumber] This parameter usage is no longer supported.  An optional `_updateSequenceNumber` to use to control deletion.  Only stored data with an `updateSequenceNumber` less than or equal to that provided will be deleted. This can be used help ensure submit/delete requests are applied correctly if issued close together.  If not provided, all stored data that matches the request will be deleted. 
     * @param {module:api/BuildsApi~deleteBuildsByPropertyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteBuildsByProperty(authorization, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteBuildsByProperty");
      }

      let pathParams = {
      };
      let queryParams = {
        '_updateSequenceNumber': opts['updateSequenceNumber']
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/builds/0.1/bulkByProperties', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBuildByKey operation.
     * @callback module:api/BuildsApi~getBuildByKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BuildData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a build by key
     * Retrieve the currently stored build data for the given `pipelineId` and `buildNumber` combination.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the `jiraBuildInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the 'READ' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define `jiraBuildInfoProvider` module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. 
     * @param {String} pipelineId The `pipelineId` of the build. 
     * @param {Number} buildNumber The `buildNumber` of the build. 
     * @param {module:api/BuildsApi~getBuildByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BuildData}
     */
    getBuildByKey(authorization, pipelineId, buildNumber, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getBuildByKey");
      }
      // verify the required parameter 'pipelineId' is set
      if (pipelineId === undefined || pipelineId === null) {
        throw new Error("Missing the required parameter 'pipelineId' when calling getBuildByKey");
      }
      // verify the required parameter 'buildNumber' is set
      if (buildNumber === undefined || buildNumber === null) {
        throw new Error("Missing the required parameter 'buildNumber' when calling getBuildByKey");
      }

      let pathParams = {
        'pipelineId': pipelineId,
        'buildNumber': buildNumber
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BuildData;
      return this.apiClient.callApi(
        '/rest/builds/0.1/pipelines/{pipelineId}/builds/{buildNumber}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitBuilds operation.
     * @callback module:api/BuildsApi~submitBuildsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubmitBuildsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit build data
     * Update / insert builds data.  Builds are identified by the combination of `pipelineId` and `buildNumber`, and existing build data for the same build will be replaced if it exists and the `updateSequenceNumber` of the existing data is less than the incoming data.  Submissions are performed asynchronously. Submitted data will eventually be available in Jira; most updates are available within a short period of time, but may take some time during peak load and/or maintenance times. The `getBuildByKey` operation can be used to confirm that data has been stored successfully (if needed).  In the case of multiple builds being submitted in one request, each is validated individually prior to submission. Details of which build failed submission (if any) are available in the response object.  Only Connect apps that define the `jiraBuildInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the 'WRITE' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define `jiraBuildInfoProvider` module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. 
     * @param {module:model/SubmitBuildsRequest} submitBuildsRequest Builds data to submit. 
     * @param {module:api/BuildsApi~submitBuildsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubmitBuildsResponse}
     */
    submitBuilds(authorization, submitBuildsRequest, callback) {
      let postBody = submitBuildsRequest;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling submitBuilds");
      }
      // verify the required parameter 'submitBuildsRequest' is set
      if (submitBuildsRequest === undefined || submitBuildsRequest === null) {
        throw new Error("Missing the required parameter 'submitBuildsRequest' when calling submitBuilds");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SubmitBuildsResponse;
      return this.apiClient.callApi(
        '/rest/builds/0.1/bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
