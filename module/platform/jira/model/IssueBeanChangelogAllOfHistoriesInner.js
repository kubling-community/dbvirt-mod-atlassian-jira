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

import ApiClient from '../ApiClient';
import ChangelogAuthor from './ChangelogAuthor';
import ChangelogHistoryMetadata from './ChangelogHistoryMetadata';
import ChangelogItemsInner from './ChangelogItemsInner';

/**
 * The IssueBeanChangelogAllOfHistoriesInner model module.
 * @module model/IssueBeanChangelogAllOfHistoriesInner
 * @version 1001.0.0
 */
class IssueBeanChangelogAllOfHistoriesInner {
    /**
     * Constructs a new <code>IssueBeanChangelogAllOfHistoriesInner</code>.
     * A log of changes made to issue fields. Changelogs related to workflow associations are currently being deprecated.
     * @alias module:model/IssueBeanChangelogAllOfHistoriesInner
     */
    constructor() { 
        
        IssueBeanChangelogAllOfHistoriesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueBeanChangelogAllOfHistoriesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueBeanChangelogAllOfHistoriesInner} obj Optional instance to populate.
     * @return {module:model/IssueBeanChangelogAllOfHistoriesInner} The populated <code>IssueBeanChangelogAllOfHistoriesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueBeanChangelogAllOfHistoriesInner();

            if (data.hasOwnProperty('author')) {
                obj['author'] = ChangelogAuthor.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('historyMetadata')) {
                obj['historyMetadata'] = ChangelogHistoryMetadata.constructFromObject(data['historyMetadata']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ChangelogItemsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueBeanChangelogAllOfHistoriesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueBeanChangelogAllOfHistoriesInner</code>.
     */
    static validateJSON(data) {
        // validate the optional field `author`
        if (data['author']) { // data not null
          ChangelogAuthor.validateJSON(data['author']);
        }
        // validate the optional field `historyMetadata`
        if (data['historyMetadata']) { // data not null
          ChangelogHistoryMetadata.validateJSON(data['historyMetadata']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                ChangelogItemsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/ChangelogAuthor} author
 */
IssueBeanChangelogAllOfHistoriesInner.prototype['author'] = undefined;

/**
 * The date on which the change took place.
 * @member {Date} created
 */
IssueBeanChangelogAllOfHistoriesInner.prototype['created'] = undefined;

/**
 * @member {module:model/ChangelogHistoryMetadata} historyMetadata
 */
IssueBeanChangelogAllOfHistoriesInner.prototype['historyMetadata'] = undefined;

/**
 * The ID of the changelog.
 * @member {String} id
 */
IssueBeanChangelogAllOfHistoriesInner.prototype['id'] = undefined;

/**
 * The list of items changed.
 * @member {Array.<module:model/ChangelogItemsInner>} items
 */
IssueBeanChangelogAllOfHistoriesInner.prototype['items'] = undefined;






export default IssueBeanChangelogAllOfHistoriesInner;

