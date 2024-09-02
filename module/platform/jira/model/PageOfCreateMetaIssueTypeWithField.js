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
import FieldCreateMetadata from './FieldCreateMetadata';

/**
 * The PageOfCreateMetaIssueTypeWithField model module.
 * @module model/PageOfCreateMetaIssueTypeWithField
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class PageOfCreateMetaIssueTypeWithField {
    /**
     * Constructs a new <code>PageOfCreateMetaIssueTypeWithField</code>.
     * A page of CreateMetaIssueType with Field.
     * @alias module:model/PageOfCreateMetaIssueTypeWithField
     * @extends Object
     */
    constructor() { 
        
        PageOfCreateMetaIssueTypeWithField.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageOfCreateMetaIssueTypeWithField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageOfCreateMetaIssueTypeWithField} obj Optional instance to populate.
     * @return {module:model/PageOfCreateMetaIssueTypeWithField} The populated <code>PageOfCreateMetaIssueTypeWithField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageOfCreateMetaIssueTypeWithField();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], [FieldCreateMetadata]);
            }
            if (data.hasOwnProperty('maxResults')) {
                obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [FieldCreateMetadata]);
            }
            if (data.hasOwnProperty('startAt')) {
                obj['startAt'] = ApiClient.convertToType(data['startAt'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PageOfCreateMetaIssueTypeWithField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PageOfCreateMetaIssueTypeWithField</code>.
     */
    static validateJSON(data) {
        if (data['fields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['fields'])) {
                throw new Error("Expected the field `fields` to be an array in the JSON data but got " + data['fields']);
            }
            // validate the optional field `fields` (array)
            for (const item of data['fields']) {
                FieldCreateMetadata.validateJSON(item);
            };
        }
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                FieldCreateMetadata.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The collection of FieldCreateMetaBeans.
 * @member {Array.<module:model/FieldCreateMetadata>} fields
 */
PageOfCreateMetaIssueTypeWithField.prototype['fields'] = undefined;

/**
 * The maximum number of items to return per page.
 * @member {Number} maxResults
 */
PageOfCreateMetaIssueTypeWithField.prototype['maxResults'] = undefined;

/**
 * @member {Array.<module:model/FieldCreateMetadata>} results
 */
PageOfCreateMetaIssueTypeWithField.prototype['results'] = undefined;

/**
 * The index of the first item returned.
 * @member {Number} startAt
 */
PageOfCreateMetaIssueTypeWithField.prototype['startAt'] = undefined;

/**
 * The total number of items in all pages.
 * @member {Number} total
 */
PageOfCreateMetaIssueTypeWithField.prototype['total'] = undefined;






export default PageOfCreateMetaIssueTypeWithField;

