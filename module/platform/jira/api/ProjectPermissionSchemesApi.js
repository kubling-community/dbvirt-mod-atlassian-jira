/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import PermissionScheme from '../model/PermissionScheme';
import ProjectIssueSecurityLevels from '../model/ProjectIssueSecurityLevels';
import SecurityScheme from '../model/SecurityScheme';

/**
* ProjectPermissionSchemes service.
* @module api/ProjectPermissionSchemesApi
* @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
*/
export default class ProjectPermissionSchemesApi {

    /**
    * Constructs a new ProjectPermissionSchemesApi. 
    * @alias module:api/ProjectPermissionSchemesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the assignPermissionScheme operation.
     * @callback module:api/ProjectPermissionSchemesApi~assignPermissionSchemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign permission scheme
     * Assigns a permission scheme with a project. See [Managing project permissions](https://confluence.atlassian.com/x/yodKLg) for more information about permission schemes.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {module:model/IdBean} idBean 
     * @param {Object} opts Optional parameters
     * @param {String} [expand] Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
     * @param {module:api/ProjectPermissionSchemesApi~assignPermissionSchemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionScheme}
     */
    assignPermissionScheme(projectKeyOrId, idBean, opts, callback) {
      opts = opts || {};
      let postBody = idBean;
      // verify the required parameter 'projectKeyOrId' is set
      if (projectKeyOrId === undefined || projectKeyOrId === null) {
        throw new Error("Missing the required parameter 'projectKeyOrId' when calling assignPermissionScheme");
      }
      // verify the required parameter 'idBean' is set
      if (idBean === undefined || idBean === null) {
        throw new Error("Missing the required parameter 'idBean' when calling assignPermissionScheme");
      }

      let pathParams = {
        'projectKeyOrId': projectKeyOrId
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PermissionScheme;
      return this.apiClient.callApi(
        '/rest/api/3/project/{projectKeyOrId}/permissionscheme', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAssignedPermissionScheme operation.
     * @callback module:api/ProjectPermissionSchemesApi~getAssignedPermissionSchemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get assigned permission scheme
     * Gets the [permission scheme](https://confluence.atlassian.com/x/yodKLg) associated with the project.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {String} [expand] Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
     * @param {module:api/ProjectPermissionSchemesApi~getAssignedPermissionSchemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionScheme}
     */
    getAssignedPermissionScheme(projectKeyOrId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectKeyOrId' is set
      if (projectKeyOrId === undefined || projectKeyOrId === null) {
        throw new Error("Missing the required parameter 'projectKeyOrId' when calling getAssignedPermissionScheme");
      }

      let pathParams = {
        'projectKeyOrId': projectKeyOrId
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PermissionScheme;
      return this.apiClient.callApi(
        '/rest/api/3/project/{projectKeyOrId}/permissionscheme', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProjectIssueSecurityScheme operation.
     * @callback module:api/ProjectPermissionSchemesApi~getProjectIssueSecuritySchemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecurityScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project issue security scheme
     * Returns the [issue security scheme](https://confluence.atlassian.com/x/J4lKLg) associated with the project.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or the *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {module:api/ProjectPermissionSchemesApi~getProjectIssueSecuritySchemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecurityScheme}
     */
    getProjectIssueSecurityScheme(projectKeyOrId, callback) {
      let postBody = null;
      // verify the required parameter 'projectKeyOrId' is set
      if (projectKeyOrId === undefined || projectKeyOrId === null) {
        throw new Error("Missing the required parameter 'projectKeyOrId' when calling getProjectIssueSecurityScheme");
      }

      let pathParams = {
        'projectKeyOrId': projectKeyOrId
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
      let returnType = SecurityScheme;
      return this.apiClient.callApi(
        '/rest/api/3/project/{projectKeyOrId}/issuesecuritylevelscheme', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSecurityLevelsForProject operation.
     * @callback module:api/ProjectPermissionSchemesApi~getSecurityLevelsForProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectIssueSecurityLevels} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project issue security levels
     * Returns all [issue security](https://confluence.atlassian.com/x/J4lKLg) levels for the project that the user has access to.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project, however, issue security levels are only returned for authenticated user with *Set Issue Security* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project.
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {module:api/ProjectPermissionSchemesApi~getSecurityLevelsForProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectIssueSecurityLevels}
     */
    getSecurityLevelsForProject(projectKeyOrId, callback) {
      let postBody = null;
      // verify the required parameter 'projectKeyOrId' is set
      if (projectKeyOrId === undefined || projectKeyOrId === null) {
        throw new Error("Missing the required parameter 'projectKeyOrId' when calling getSecurityLevelsForProject");
      }

      let pathParams = {
        'projectKeyOrId': projectKeyOrId
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
      let returnType = ProjectIssueSecurityLevels;
      return this.apiClient.callApi(
        '/rest/api/3/project/{projectKeyOrId}/securitylevel', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
