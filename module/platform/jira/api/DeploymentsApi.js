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
import DeploymentData from '../model/DeploymentData';
import SubmitDeploymentsResponse from '../model/SubmitDeploymentsResponse';
import SubmitDeploymentsResponse1 from '../model/SubmitDeploymentsResponse1';

/**
* Deployments service.
* @module api/DeploymentsApi
* @version 1001.0.0
*/
export default class DeploymentsApi {

    /**
    * Constructs a new DeploymentsApi. 
    * @alias module:api/DeploymentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteDeploymentByKey operation.
     * @callback module:api/DeploymentsApi~deleteDeploymentByKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a deployment by key
     * Delete the currently stored deployment data for the given `pipelineId`, `environmentId` and `deploymentSequenceNumber` combination.  Deletion is performed asynchronously. The `getDeploymentByKey` operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraDeploymentInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the 'DELETE' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define `jiraDeploymentInfoProvider` module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. 
     * @param {String} pipelineId The ID of the deployment's pipeline. 
     * @param {String} environmentId The ID of the deployment's environment. 
     * @param {Number} deploymentSequenceNumber The deployment's deploymentSequenceNumber. 
     * @param {Object} opts Optional parameters
     * @param {Number} [updateSequenceNumber] This parameter usage is no longer supported.  An optional `_updateSequenceNumber` to use to control deletion.  Only stored data with an `updateSequenceNumber` less than or equal to that provided will be deleted. This can be used help ensure submit/delete requests are applied correctly if issued close together. 
     * @param {module:api/DeploymentsApi~deleteDeploymentByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteDeploymentByKey(authorization, pipelineId, environmentId, deploymentSequenceNumber, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteDeploymentByKey");
      }
      // verify the required parameter 'pipelineId' is set
      if (pipelineId === undefined || pipelineId === null) {
        throw new Error("Missing the required parameter 'pipelineId' when calling deleteDeploymentByKey");
      }
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling deleteDeploymentByKey");
      }
      // verify the required parameter 'deploymentSequenceNumber' is set
      if (deploymentSequenceNumber === undefined || deploymentSequenceNumber === null) {
        throw new Error("Missing the required parameter 'deploymentSequenceNumber' when calling deleteDeploymentByKey");
      }

      let pathParams = {
        'pipelineId': pipelineId,
        'environmentId': environmentId,
        'deploymentSequenceNumber': deploymentSequenceNumber
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
        '/rest/deployments/0.1/pipelines/{pipelineId}/environments/{environmentId}/deployments/{deploymentSequenceNumber}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDeploymentsByProperty operation.
     * @callback module:api/DeploymentsApi~deleteDeploymentsByPropertyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete deployments by Property
     * Bulk delete all deployments that match the given request.  One or more query params must be supplied to specify the Properties to delete by. Optional param `_updateSequenceNumber` is no longer supported. If more than one Property is provided, data will be deleted that matches ALL of the Properties (i.e. treated as AND). See the documentation for the `submitDeployments` operation for more details.  Example operation: DELETE /bulkByProperties?accountId=account-123&createdBy=user-456  Deletion is performed asynchronously. The `getDeploymentByKey` operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraDeploymentInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the 'DELETE' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define `jiraDeploymentInfoProvider` module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. 
     * @param {Object} opts Optional parameters
     * @param {Number} [updateSequenceNumber] This parameter usage is no longer supported.  An optional `updateSequenceNumber` to use to control deletion.  Only stored data with an `updateSequenceNumber` less than or equal to that provided will be deleted. This can be used help ensure submit/delete requests are applied correctly if issued close together.  If not provided, all stored data that matches the request will be deleted. 
     * @param {module:api/DeploymentsApi~deleteDeploymentsByPropertyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteDeploymentsByProperty(authorization, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteDeploymentsByProperty");
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
        '/rest/deployments/0.1/bulkByProperties', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeploymentByKey operation.
     * @callback module:api/DeploymentsApi~getDeploymentByKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeploymentData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a deployment by key
     * Retrieve the currently stored deployment data for the given `pipelineId`, `environmentId` and `deploymentSequenceNumber` combination.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the `jiraDeploymentInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the 'READ' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define `jiraDeploymentInfoProvider` module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. 
     * @param {String} pipelineId The ID of the deployment's pipeline. 
     * @param {String} environmentId The ID of the deployment's environment. 
     * @param {Number} deploymentSequenceNumber The deployment's deploymentSequenceNumber. 
     * @param {module:api/DeploymentsApi~getDeploymentByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeploymentData}
     */
    getDeploymentByKey(authorization, pipelineId, environmentId, deploymentSequenceNumber, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getDeploymentByKey");
      }
      // verify the required parameter 'pipelineId' is set
      if (pipelineId === undefined || pipelineId === null) {
        throw new Error("Missing the required parameter 'pipelineId' when calling getDeploymentByKey");
      }
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getDeploymentByKey");
      }
      // verify the required parameter 'deploymentSequenceNumber' is set
      if (deploymentSequenceNumber === undefined || deploymentSequenceNumber === null) {
        throw new Error("Missing the required parameter 'deploymentSequenceNumber' when calling getDeploymentByKey");
      }

      let pathParams = {
        'pipelineId': pipelineId,
        'environmentId': environmentId,
        'deploymentSequenceNumber': deploymentSequenceNumber
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
      let returnType = DeploymentData;
      return this.apiClient.callApi(
        '/rest/deployments/0.1/pipelines/{pipelineId}/environments/{environmentId}/deployments/{deploymentSequenceNumber}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeploymentGatingStatusByKey operation.
     * @callback module:api/DeploymentsApi~getDeploymentGatingStatusByKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubmitDeploymentsResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get deployment gating status by key
     * Retrieve the  Deployment gating status for the given `pipelineId + environmentId + deploymentSequenceNumber` combination. Only apps that define the `jiraDeploymentInfoProvider` module can access this resource. This resource requires the 'READ' scope. 
     * @param {String} pipelineId The ID of the Deployment's pipeline. 
     * @param {String} environmentId The ID of the Deployment's environment. 
     * @param {Number} deploymentSequenceNumber The Deployment's deploymentSequenceNumber. 
     * @param {module:api/DeploymentsApi~getDeploymentGatingStatusByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubmitDeploymentsResponse1}
     */
    getDeploymentGatingStatusByKey(pipelineId, environmentId, deploymentSequenceNumber, callback) {
      let postBody = null;
      // verify the required parameter 'pipelineId' is set
      if (pipelineId === undefined || pipelineId === null) {
        throw new Error("Missing the required parameter 'pipelineId' when calling getDeploymentGatingStatusByKey");
      }
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getDeploymentGatingStatusByKey");
      }
      // verify the required parameter 'deploymentSequenceNumber' is set
      if (deploymentSequenceNumber === undefined || deploymentSequenceNumber === null) {
        throw new Error("Missing the required parameter 'deploymentSequenceNumber' when calling getDeploymentGatingStatusByKey");
      }

      let pathParams = {
        'pipelineId': pipelineId,
        'environmentId': environmentId,
        'deploymentSequenceNumber': deploymentSequenceNumber
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SubmitDeploymentsResponse1;
      return this.apiClient.callApi(
        '/rest/deployments/0.1/pipelines/{pipelineId}/environments/{environmentId}/deployments/{deploymentSequenceNumber}/gating-status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitDeployments operation.
     * @callback module:api/DeploymentsApi~submitDeploymentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubmitDeploymentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit deployment data
     * Update / insert deployment data.  Deployments are identified by the combination of `pipelineId`, `environmentId` and `deploymentSequenceNumber`, and existing deployment data for the same deployment will be replaced if it exists and the `updateSequenceNumber` of existing data is less than the incoming data.  Submissions are processed asynchronously. Submitted data will eventually be available in Jira. Most updates are available within a short period of time, but may take some time during peak load and/or maintenance times. The `getDeploymentByKey` operation can be used to confirm that data has been stored successfully (if needed).  In the case of multiple deployments being submitted in one request, each is validated individually prior to submission. Details of which deployments failed submission (if any) are available in the response object.  Only Connect apps that define the `jiraDeploymentInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the 'WRITE' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define `jiraDeploymentInfoProvider` module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. 
     * @param {module:model/SubmitDeploymentRequest} submitDeploymentRequest Deployment data to submit. 
     * @param {module:api/DeploymentsApi~submitDeploymentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubmitDeploymentsResponse}
     */
    submitDeployments(authorization, submitDeploymentRequest, callback) {
      let postBody = submitDeploymentRequest;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling submitDeployments");
      }
      // verify the required parameter 'submitDeploymentRequest' is set
      if (submitDeploymentRequest === undefined || submitDeploymentRequest === null) {
        throw new Error("Missing the required parameter 'submitDeploymentRequest' when calling submitDeployments");
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
      let returnType = SubmitDeploymentsResponse;
      return this.apiClient.callApi(
        '/rest/deployments/0.1/bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
