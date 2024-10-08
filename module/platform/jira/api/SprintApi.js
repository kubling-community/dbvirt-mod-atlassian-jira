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
* Sprint service.
* @module api/SprintApi
* @version 1001.0.0
*/
export default class SprintApi {

    /**
    * Constructs a new SprintApi. 
    * @alias module:api/SprintApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createSprint operation.
     * @callback module:api/SprintApi~createSprintCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create sprint
     * Creates a future sprint. Sprint name and origin board id are required. Start date, end date, and goal are optional.  Note that the sprint name is trimmed. Also, when starting sprints from the UI, the \"endDate\" set through this call is ignored and instead the last sprint's duration is used to fill the form.
     * @param {module:model/CreateSprintRequest} createSprintRequest 
     * @param {module:api/SprintApi~createSprintCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createSprint(createSprintRequest, callback) {
      let postBody = createSprintRequest;
      // verify the required parameter 'createSprintRequest' is set
      if (createSprintRequest === undefined || createSprintRequest === null) {
        throw new Error("Missing the required parameter 'createSprintRequest' when calling createSprint");
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
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/agile/1.0/sprint', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProperty operation.
     * @callback module:api/SprintApi~deletePropertyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete property
     * Removes the property from the sprint identified by the id. Ths user removing the property is required to have permissions to modify the sprint.
     * @param {String} sprintId the ID of the sprint from which the property will be removed.
     * @param {String} propertyKey the key of the property to remove.
     * @param {module:api/SprintApi~deletePropertyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteProperty(sprintId, propertyKey, callback) {
      let postBody = null;
      // verify the required parameter 'sprintId' is set
      if (sprintId === undefined || sprintId === null) {
        throw new Error("Missing the required parameter 'sprintId' when calling deleteProperty");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling deleteProperty");
      }

      let pathParams = {
        'sprintId': sprintId,
        'propertyKey': propertyKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSprint operation.
     * @callback module:api/SprintApi~deleteSprintCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete sprint
     * Deletes a sprint. Once a sprint is deleted, all open issues in the sprint will be moved to the backlog.
     * @param {Number} sprintId The ID of the sprint to delete.
     * @param {module:api/SprintApi~deleteSprintCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteSprint(sprintId, callback) {
      let postBody = null;
      // verify the required parameter 'sprintId' is set
      if (sprintId === undefined || sprintId === null) {
        throw new Error("Missing the required parameter 'sprintId' when calling deleteSprint");
      }

      let pathParams = {
        'sprintId': sprintId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/agile/1.0/sprint/{sprintId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIssuesForSprint operation.
     * @callback module:api/SprintApi~getIssuesForSprintCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issues for sprint
     * Returns all issues in a sprint, for a given sprint ID. This only includes issues that the user has permission to view. By default, the returned issues are ordered by rank.
     * @param {Number} sprintId The ID of the sprint that contains the requested issues.
     * @param {Object} opts Optional parameters
     * @param {Number} [startAt] The starting index of the returned issues. Base index: 0. See the 'Pagination' section at the top of this page for more details.
     * @param {Number} [maxResults] The maximum number of issues to return per page. See the 'Pagination' section at the top of this page for more details. Note, the total number of issues returned is limited by the property 'jira.search.views.default.max' in your Jira instance. If you exceed this limit, your results will be truncated.
     * @param {String} [jql] Filters results using a JQL query. If you define an order in your JQL query, it will override the default order of the returned issues.   Note that `username` and `userkey` can't be used as search terms for this parameter due to privacy reasons. Use `accountId` instead.
     * @param {Boolean} [validateQuery] Specifies whether to validate the JQL query or not. Default: true.
     * @param {Array.<Object>} [fields] The list of fields to return for each issue. By default, all navigable and Agile fields are returned.
     * @param {String} [expand] A comma-separated list of the parameters to expand.
     * @param {module:api/SprintApi~getIssuesForSprintCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getIssuesForSprint(sprintId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sprintId' is set
      if (sprintId === undefined || sprintId === null) {
        throw new Error("Missing the required parameter 'sprintId' when calling getIssuesForSprint");
      }

      let pathParams = {
        'sprintId': sprintId
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
        '/rest/agile/1.0/sprint/{sprintId}/issue', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPropertiesKeys operation.
     * @callback module:api/SprintApi~getPropertiesKeysCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get properties keys
     * Returns the keys of all properties for the sprint identified by the id. The user who retrieves the property keys is required to have permissions to view the sprint.
     * @param {String} sprintId the ID of the sprint from which property keys will be returned.
     * @param {module:api/SprintApi~getPropertiesKeysCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getPropertiesKeys(sprintId, callback) {
      let postBody = null;
      // verify the required parameter 'sprintId' is set
      if (sprintId === undefined || sprintId === null) {
        throw new Error("Missing the required parameter 'sprintId' when calling getPropertiesKeys");
      }

      let pathParams = {
        'sprintId': sprintId
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
        '/rest/agile/1.0/sprint/{sprintId}/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProperty operation.
     * @callback module:api/SprintApi~getPropertyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get property
     * Returns the value of the property with a given key from the sprint identified by the provided id. The user who retrieves the property is required to have permissions to view the sprint.
     * @param {String} sprintId the ID of the sprint from which the property will be returned.
     * @param {String} propertyKey the key of the property to return.
     * @param {module:api/SprintApi~getPropertyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getProperty(sprintId, propertyKey, callback) {
      let postBody = null;
      // verify the required parameter 'sprintId' is set
      if (sprintId === undefined || sprintId === null) {
        throw new Error("Missing the required parameter 'sprintId' when calling getProperty");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling getProperty");
      }

      let pathParams = {
        'sprintId': sprintId,
        'propertyKey': propertyKey
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
        '/rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSprint operation.
     * @callback module:api/SprintApi~getSprintCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get sprint
     * Returns the sprint for a given sprint ID. The sprint will only be returned if the user can view the board that the sprint was created on, or view at least one of the issues in the sprint.
     * @param {Number} sprintId The ID of the requested sprint.
     * @param {module:api/SprintApi~getSprintCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getSprint(sprintId, callback) {
      let postBody = null;
      // verify the required parameter 'sprintId' is set
      if (sprintId === undefined || sprintId === null) {
        throw new Error("Missing the required parameter 'sprintId' when calling getSprint");
      }

      let pathParams = {
        'sprintId': sprintId
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
        '/rest/agile/1.0/sprint/{sprintId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the moveIssuesToSprintAndRank operation.
     * @callback module:api/SprintApi~moveIssuesToSprintAndRankCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move issues to sprint and rank
     * Moves issues to a sprint, for a given sprint ID. Issues can only be moved to open or active sprints. The maximum number of issues that can be moved in one operation is 50.
     * @param {Number} sprintId The ID of the sprint that you want to assign issues to.
     * @param {module:model/MoveIssuesToBacklogForBoardRequest} moveIssuesToBacklogForBoardRequest 
     * @param {module:api/SprintApi~moveIssuesToSprintAndRankCallback} callback The callback function, accepting three arguments: error, data, response
     */
    moveIssuesToSprintAndRank(sprintId, moveIssuesToBacklogForBoardRequest, callback) {
      let postBody = moveIssuesToBacklogForBoardRequest;
      // verify the required parameter 'sprintId' is set
      if (sprintId === undefined || sprintId === null) {
        throw new Error("Missing the required parameter 'sprintId' when calling moveIssuesToSprintAndRank");
      }
      // verify the required parameter 'moveIssuesToBacklogForBoardRequest' is set
      if (moveIssuesToBacklogForBoardRequest === undefined || moveIssuesToBacklogForBoardRequest === null) {
        throw new Error("Missing the required parameter 'moveIssuesToBacklogForBoardRequest' when calling moveIssuesToSprintAndRank");
      }

      let pathParams = {
        'sprintId': sprintId
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
        '/rest/agile/1.0/sprint/{sprintId}/issue', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the partiallyUpdateSprint operation.
     * @callback module:api/SprintApi~partiallyUpdateSprintCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Partially update sprint
     * Performs a partial update of a sprint. A partial update means that fields not present in the request JSON will not be updated.  Notes:   *  For closed sprints, only the name and goal can be updated; changes to other fields will be ignored.  *  A sprint can be started by updating the state to 'active'. This requires the sprint to be in the 'future' state and have a startDate and endDate set.  *  A sprint can be completed by updating the state to 'closed'. This action requires the sprint to be in the 'active' state. This sets the completeDate to the time of the request.  *  Other changes to state are not allowed.  *  The completeDate field cannot be updated manually.
     * @param {Number} sprintId The ID of the sprint to update.
     * @param {module:model/UpdateSprintRequest} updateSprintRequest 
     * @param {module:api/SprintApi~partiallyUpdateSprintCallback} callback The callback function, accepting three arguments: error, data, response
     */
    partiallyUpdateSprint(sprintId, updateSprintRequest, callback) {
      let postBody = updateSprintRequest;
      // verify the required parameter 'sprintId' is set
      if (sprintId === undefined || sprintId === null) {
        throw new Error("Missing the required parameter 'sprintId' when calling partiallyUpdateSprint");
      }
      // verify the required parameter 'updateSprintRequest' is set
      if (updateSprintRequest === undefined || updateSprintRequest === null) {
        throw new Error("Missing the required parameter 'updateSprintRequest' when calling partiallyUpdateSprint");
      }

      let pathParams = {
        'sprintId': sprintId
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
        '/rest/agile/1.0/sprint/{sprintId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setProperty operation.
     * @callback module:api/SprintApi~setPropertyCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set property
     * Sets the value of the specified sprint's property.  You can use this resource to store a custom data against the sprint identified by the id. The user who stores the data is required to have permissions to modify the sprint.
     * @param {String} sprintId the ID of the sprint on which the property will be set.
     * @param {String} propertyKey the key of the sprint's property. The maximum length of the key is 255 bytes.
     * @param {Object} body The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
     * @param {module:api/SprintApi~setPropertyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    setProperty(sprintId, propertyKey, body, callback) {
      let postBody = body;
      // verify the required parameter 'sprintId' is set
      if (sprintId === undefined || sprintId === null) {
        throw new Error("Missing the required parameter 'sprintId' when calling setProperty");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling setProperty");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setProperty");
      }

      let pathParams = {
        'sprintId': sprintId,
        'propertyKey': propertyKey
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the swapSprint operation.
     * @callback module:api/SprintApi~swapSprintCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Swap sprint
     * Swap the position of the sprint with the second sprint.
     * @param {Number} sprintId The ID of the sprint to swap.
     * @param {module:model/SwapSprintRequest} swapSprintRequest 
     * @param {module:api/SprintApi~swapSprintCallback} callback The callback function, accepting three arguments: error, data, response
     */
    swapSprint(sprintId, swapSprintRequest, callback) {
      let postBody = swapSprintRequest;
      // verify the required parameter 'sprintId' is set
      if (sprintId === undefined || sprintId === null) {
        throw new Error("Missing the required parameter 'sprintId' when calling swapSprint");
      }
      // verify the required parameter 'swapSprintRequest' is set
      if (swapSprintRequest === undefined || swapSprintRequest === null) {
        throw new Error("Missing the required parameter 'swapSprintRequest' when calling swapSprint");
      }

      let pathParams = {
        'sprintId': sprintId
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
        '/rest/agile/1.0/sprint/{sprintId}/swap', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSprint operation.
     * @callback module:api/SprintApi~updateSprintCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update sprint
     * Performs a full update of a sprint. A full update means that the result will be exactly the same as the request body. Any fields not present in the request JSON will be set to null.  Notes:   *  For closed sprints, only the name and goal can be updated; changes to other fields will be ignored.  *  A sprint can be started by updating the state to 'active'. This requires the sprint to be in the 'future' state and have a startDate and endDate set.  *  A sprint can be completed by updating the state to 'closed'. This action requires the sprint to be in the 'active' state. This sets the completeDate to the time of the request.  *  Other changes to state are not allowed.  *  The completeDate field cannot be updated manually.
     * @param {Number} sprintId the ID of the sprint to update.
     * @param {module:model/UpdateSprintRequest} updateSprintRequest 
     * @param {module:api/SprintApi~updateSprintCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateSprint(sprintId, updateSprintRequest, callback) {
      let postBody = updateSprintRequest;
      // verify the required parameter 'sprintId' is set
      if (sprintId === undefined || sprintId === null) {
        throw new Error("Missing the required parameter 'sprintId' when calling updateSprint");
      }
      // verify the required parameter 'updateSprintRequest' is set
      if (updateSprintRequest === undefined || updateSprintRequest === null) {
        throw new Error("Missing the required parameter 'updateSprintRequest' when calling updateSprint");
      }

      let pathParams = {
        'sprintId': sprintId
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
        '/rest/agile/1.0/sprint/{sprintId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
