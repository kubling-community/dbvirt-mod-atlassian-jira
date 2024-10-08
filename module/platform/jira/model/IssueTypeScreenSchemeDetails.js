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
import IssueTypeScreenSchemeMapping from './IssueTypeScreenSchemeMapping';

/**
 * The IssueTypeScreenSchemeDetails model module.
 * @module model/IssueTypeScreenSchemeDetails
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class IssueTypeScreenSchemeDetails {
    /**
     * Constructs a new <code>IssueTypeScreenSchemeDetails</code>.
     * The details of an issue type screen scheme.
     * @alias module:model/IssueTypeScreenSchemeDetails
     * @param issueTypeMappings {Array.<module:model/IssueTypeScreenSchemeMapping>} The IDs of the screen schemes for the issue type IDs and *default*. A *default* entry is required to create an issue type screen scheme, it defines the mapping for all issue types without a screen scheme.
     * @param name {String} The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters.
     */
    constructor(issueTypeMappings, name) { 
        
        IssueTypeScreenSchemeDetails.initialize(this, issueTypeMappings, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, issueTypeMappings, name) { 
        obj['issueTypeMappings'] = issueTypeMappings;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>IssueTypeScreenSchemeDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeScreenSchemeDetails} obj Optional instance to populate.
     * @return {module:model/IssueTypeScreenSchemeDetails} The populated <code>IssueTypeScreenSchemeDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueTypeScreenSchemeDetails();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('issueTypeMappings')) {
                obj['issueTypeMappings'] = ApiClient.convertToType(data['issueTypeMappings'], [IssueTypeScreenSchemeMapping]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueTypeScreenSchemeDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueTypeScreenSchemeDetails</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IssueTypeScreenSchemeDetails.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        if (data['issueTypeMappings']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['issueTypeMappings'])) {
                throw new Error("Expected the field `issueTypeMappings` to be an array in the JSON data but got " + data['issueTypeMappings']);
            }
            // validate the optional field `issueTypeMappings` (array)
            for (const item of data['issueTypeMappings']) {
                IssueTypeScreenSchemeMapping.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

IssueTypeScreenSchemeDetails.RequiredProperties = ["issueTypeMappings", "name"];

/**
 * The description of the issue type screen scheme. The maximum length is 255 characters.
 * @member {String} description
 */
IssueTypeScreenSchemeDetails.prototype['description'] = undefined;

/**
 * The IDs of the screen schemes for the issue type IDs and *default*. A *default* entry is required to create an issue type screen scheme, it defines the mapping for all issue types without a screen scheme.
 * @member {Array.<module:model/IssueTypeScreenSchemeMapping>} issueTypeMappings
 */
IssueTypeScreenSchemeDetails.prototype['issueTypeMappings'] = undefined;

/**
 * The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters.
 * @member {String} name
 */
IssueTypeScreenSchemeDetails.prototype['name'] = undefined;






export default IssueTypeScreenSchemeDetails;

