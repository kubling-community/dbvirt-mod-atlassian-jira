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
import SecurityWorkspaceIds from '../model/SecurityWorkspaceIds';
import SecurityWorkspaceResponse from '../model/SecurityWorkspaceResponse';
import SubmitVulnerabilitiesResponse from '../model/SubmitVulnerabilitiesResponse';
import VulnerabilityDetails from '../model/VulnerabilityDetails';

/**
* SecurityInformation service.
* @module api/SecurityInformationApi
* @version 1001.0.0
*/
export default class SecurityInformationApi {

    /**
    * Constructs a new SecurityInformationApi. 
    * @alias module:api/SecurityInformationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteLinkedWorkspaces operation.
     * @callback module:api/SecurityInformationApi~deleteLinkedWorkspacesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete linked Security Workspaces
     * Bulk delete all linked Security Workspaces that match the given request.  Only Connect apps that define the `jiraSecurityInfoProvider` module can access this resource. This resource requires the 'DELETE' scope for Connect apps.  e.g. DELETE /bulk?workspaceIds=111-222-333,444-555-666 
     * @param {String} authorization All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read [understanding jwt](https://developer.atlassian.com/blog/2015/01/understanding-jwt/) for more details. 
     * @param {module:api/SecurityInformationApi~deleteLinkedWorkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteLinkedWorkspaces(authorization, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteLinkedWorkspaces");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/security/1.0/linkedWorkspaces/bulk', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVulnerabilitiesByProperty operation.
     * @callback module:api/SecurityInformationApi~deleteVulnerabilitiesByPropertyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Vulnerabilities by Property
     * Bulk delete all Vulnerabilities that match the given request.  One or more query params must be supplied to specify Properties to delete by. If more than one Property is provided, data will be deleted that matches ALL of the Properties (e.g. treated as an AND). Read the POST bulk endpoint documentation for more details.  e.g. DELETE /bulkByProperties?accountId=account-123&createdBy=user-456  Deletion is performed asynchronously. The GET vulnerability endpoint can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraSecurityInfoProvider` module can access this resource. This resource requires the 'DELETE' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/). 
     * @param {module:api/SecurityInformationApi~deleteVulnerabilitiesByPropertyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteVulnerabilitiesByProperty(authorization, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteVulnerabilitiesByProperty");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/security/1.0/bulkByProperties', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVulnerabilityById operation.
     * @callback module:api/SecurityInformationApi~deleteVulnerabilityByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Vulnerability by ID
     * Delete the Vulnerability data currently stored for the given ID.  Deletion is performed asynchronously. The GET vulnerability endpoint can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraSecurityInfoProvider` module can access this resource. This resource requires the 'DELETE' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/). 
     * @param {String} vulnerabilityId The ID of the Vulnerability to delete. 
     * @param {module:api/SecurityInformationApi~deleteVulnerabilityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteVulnerabilityById(authorization, vulnerabilityId, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteVulnerabilityById");
      }
      // verify the required parameter 'vulnerabilityId' is set
      if (vulnerabilityId === undefined || vulnerabilityId === null) {
        throw new Error("Missing the required parameter 'vulnerabilityId' when calling deleteVulnerabilityById");
      }

      let pathParams = {
        'vulnerabilityId': vulnerabilityId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/security/1.0/vulnerability/{vulnerabilityId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLinkedWorkspaceById operation.
     * @callback module:api/SecurityInformationApi~getLinkedWorkspaceByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecurityWorkspaceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a linked Security Workspace by ID
     * Retrieve a specific Security Workspace linked to the Jira site for the given workspace ID.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the `jiraSecurityInfoProvider` module can access this resource. This resource requires the 'READ' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/). 
     * @param {String} workspaceId The ID of the workspace to fetch. 
     * @param {module:api/SecurityInformationApi~getLinkedWorkspaceByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecurityWorkspaceResponse}
     */
    getLinkedWorkspaceById(authorization, workspaceId, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getLinkedWorkspaceById");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling getLinkedWorkspaceById");
      }

      let pathParams = {
        'workspaceId': workspaceId
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
      let returnType = SecurityWorkspaceResponse;
      return this.apiClient.callApi(
        '/rest/security/1.0/linkedWorkspaces/{workspaceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLinkedWorkspaces operation.
     * @callback module:api/SecurityInformationApi~getLinkedWorkspacesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecurityWorkspaceIds} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get linked Security Workspaces
     * Retrieve all Security Workspaces linked with the Jira site.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the `jiraSecurityInfoProvider` module can access this resource. This resource requires the 'READ' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/). 
     * @param {module:api/SecurityInformationApi~getLinkedWorkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecurityWorkspaceIds}
     */
    getLinkedWorkspaces(authorization, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getLinkedWorkspaces");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SecurityWorkspaceIds;
      return this.apiClient.callApi(
        '/rest/security/1.0/linkedWorkspaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVulnerabilityById operation.
     * @callback module:api/SecurityInformationApi~getVulnerabilityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VulnerabilityDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Vulnerability by ID
     * Retrieve the currently stored Vulnerability data for the given ID.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the `jiraSecurityInfoProvider` module can access this resource. This resource requires the 'READ' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/). 
     * @param {String} vulnerabilityId The ID of the Vulnerability to fetch. 
     * @param {module:api/SecurityInformationApi~getVulnerabilityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VulnerabilityDetails}
     */
    getVulnerabilityById(authorization, vulnerabilityId, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getVulnerabilityById");
      }
      // verify the required parameter 'vulnerabilityId' is set
      if (vulnerabilityId === undefined || vulnerabilityId === null) {
        throw new Error("Missing the required parameter 'vulnerabilityId' when calling getVulnerabilityById");
      }

      let pathParams = {
        'vulnerabilityId': vulnerabilityId
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
      let returnType = VulnerabilityDetails;
      return this.apiClient.callApi(
        '/rest/security/1.0/vulnerability/{vulnerabilityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitVulnerabilities operation.
     * @callback module:api/SecurityInformationApi~submitVulnerabilitiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubmitVulnerabilitiesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit Vulnerability data
     * Update / Insert Vulnerability data.  Vulnerabilities are identified by their ID, any existing Vulnerability data with the same ID will be replaced if it exists and the updateSequenceNumber of the existing data is less than the incoming data.  Submissions are performed asynchronously. Most updates are available within a short period of time but may take some time during peak load and/or maintenance times. The GET vulnerability endpoint can be used to confirm that data has been stored successfully (if needed).  In the case of multiple Vulnerabilities being submitted in one request, each is validated individually prior to submission. Details of Vulnerabilities that failed submission (if any) are available in the response object.  A maximum of 1000 vulnerabilities can be submitted in one request.  Only Connect apps that define the `jiraSecurityInfoProvider` module can access this resource. This resource requires the 'WRITE' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/). 
     * @param {module:model/SubmitVulnerabilitiesRequest} submitVulnerabilitiesRequest Vulnerability data to submit. 
     * @param {module:api/SecurityInformationApi~submitVulnerabilitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubmitVulnerabilitiesResponse}
     */
    submitVulnerabilities(authorization, submitVulnerabilitiesRequest, callback) {
      let postBody = submitVulnerabilitiesRequest;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling submitVulnerabilities");
      }
      // verify the required parameter 'submitVulnerabilitiesRequest' is set
      if (submitVulnerabilitiesRequest === undefined || submitVulnerabilitiesRequest === null) {
        throw new Error("Missing the required parameter 'submitVulnerabilitiesRequest' when calling submitVulnerabilities");
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
      let returnType = SubmitVulnerabilitiesResponse;
      return this.apiClient.callApi(
        '/rest/security/1.0/bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitWorkspaces operation.
     * @callback module:api/SecurityInformationApi~submitWorkspacesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit Security Workspaces to link
     * Insert Security Workspace IDs to establish a relationship between them and the Jira site the app is installed on. If a relationship between the workspace ID and Jira already exists then the workspace ID will be ignored and Jira will process the rest of the entries.  Only Connect apps that define the `jiraSecurityInfoProvider` module can access this resource. This resource requires the 'WRITE' scope for Connect apps. 
     * @param {String} authorization All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read [understanding jwt](https://developer.atlassian.com/blog/2015/01/understanding-jwt/) for more details. 
     * @param {module:model/SubmitSecurityWorkspacesRequest} submitSecurityWorkspacesRequest Security Workspace IDs to submit. 
     * @param {module:api/SecurityInformationApi~submitWorkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    submitWorkspaces(authorization, submitSecurityWorkspacesRequest, callback) {
      let postBody = submitSecurityWorkspacesRequest;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling submitWorkspaces");
      }
      // verify the required parameter 'submitSecurityWorkspacesRequest' is set
      if (submitSecurityWorkspacesRequest === undefined || submitSecurityWorkspacesRequest === null) {
        throw new Error("Missing the required parameter 'submitSecurityWorkspacesRequest' when calling submitWorkspaces");
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
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/security/1.0/linkedWorkspaces/bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
