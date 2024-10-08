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

import ApiClient from '../ApiClient';
import EntityProperty from './EntityProperty';
import Visibility from './Visibility';
import WorklogAuthor from './WorklogAuthor';
import WorklogUpdateAuthor from './WorklogUpdateAuthor';

/**
 * The Worklog model module.
 * @module model/Worklog
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class Worklog {
    /**
     * Constructs a new <code>Worklog</code>.
     * Details of a worklog.
     * @alias module:model/Worklog
     * @extends Object
     */
    constructor() { 
        
        Worklog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Worklog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Worklog} obj Optional instance to populate.
     * @return {module:model/Worklog} The populated <code>Worklog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Worklog();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('author')) {
                obj['author'] = WorklogAuthor.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], Object);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('issueId')) {
                obj['issueId'] = ApiClient.convertToType(data['issueId'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [EntityProperty]);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('started')) {
                obj['started'] = ApiClient.convertToType(data['started'], 'Date');
            }
            if (data.hasOwnProperty('timeSpent')) {
                obj['timeSpent'] = ApiClient.convertToType(data['timeSpent'], 'String');
            }
            if (data.hasOwnProperty('timeSpentSeconds')) {
                obj['timeSpentSeconds'] = ApiClient.convertToType(data['timeSpentSeconds'], 'Number');
            }
            if (data.hasOwnProperty('updateAuthor')) {
                obj['updateAuthor'] = WorklogUpdateAuthor.constructFromObject(data['updateAuthor']);
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], Visibility);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Worklog</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Worklog</code>.
     */
    static validateJSON(data) {
        // validate the optional field `author`
        if (data['author']) { // data not null
          WorklogAuthor.validateJSON(data['author']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['issueId'] && !(typeof data['issueId'] === 'string' || data['issueId'] instanceof String)) {
            throw new Error("Expected the field `issueId` to be a primitive type in the JSON string but got " + data['issueId']);
        }
        if (data['properties']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['properties'])) {
                throw new Error("Expected the field `properties` to be an array in the JSON data but got " + data['properties']);
            }
            // validate the optional field `properties` (array)
            for (const item of data['properties']) {
                EntityProperty.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }
        // ensure the json data is a string
        if (data['timeSpent'] && !(typeof data['timeSpent'] === 'string' || data['timeSpent'] instanceof String)) {
            throw new Error("Expected the field `timeSpent` to be a primitive type in the JSON string but got " + data['timeSpent']);
        }
        // validate the optional field `updateAuthor`
        if (data['updateAuthor']) { // data not null
          WorklogUpdateAuthor.validateJSON(data['updateAuthor']);
        }

        return true;
    }


}



/**
 * @member {module:model/WorklogAuthor} author
 */
Worklog.prototype['author'] = undefined;

/**
 * A comment about the worklog in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/). Optional when creating or updating a worklog.
 * @member {Object} comment
 */
Worklog.prototype['comment'] = undefined;

/**
 * The datetime on which the worklog was created.
 * @member {Date} created
 */
Worklog.prototype['created'] = undefined;

/**
 * The ID of the worklog record.
 * @member {String} id
 */
Worklog.prototype['id'] = undefined;

/**
 * The ID of the issue this worklog is for.
 * @member {String} issueId
 */
Worklog.prototype['issueId'] = undefined;

/**
 * Details of properties for the worklog. Optional when creating or updating a worklog.
 * @member {Array.<module:model/EntityProperty>} properties
 */
Worklog.prototype['properties'] = undefined;

/**
 * The URL of the worklog item.
 * @member {String} self
 */
Worklog.prototype['self'] = undefined;

/**
 * The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog.
 * @member {Date} started
 */
Worklog.prototype['started'] = undefined;

/**
 * The time spent working on the issue as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). Required when creating a worklog if `timeSpentSeconds` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpentSecond` is provided.
 * @member {String} timeSpent
 */
Worklog.prototype['timeSpent'] = undefined;

/**
 * The time in seconds spent working on the issue. Required when creating a worklog if `timeSpent` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpent` is provided.
 * @member {Number} timeSpentSeconds
 */
Worklog.prototype['timeSpentSeconds'] = undefined;

/**
 * @member {module:model/WorklogUpdateAuthor} updateAuthor
 */
Worklog.prototype['updateAuthor'] = undefined;

/**
 * The datetime on which the worklog was last updated.
 * @member {Date} updated
 */
Worklog.prototype['updated'] = undefined;

/**
 * Details about any restrictions in the visibility of the worklog. Optional when creating or updating a worklog.
 * @member {module:model/Visibility} visibility
 */
Worklog.prototype['visibility'] = undefined;






export default Worklog;

