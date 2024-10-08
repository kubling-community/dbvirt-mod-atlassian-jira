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
import CustomFieldReplacement from './CustomFieldReplacement';

/**
 * The DeleteAndReplaceVersionBean model module.
 * @module model/DeleteAndReplaceVersionBean
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class DeleteAndReplaceVersionBean {
    /**
     * Constructs a new <code>DeleteAndReplaceVersionBean</code>.
     * @alias module:model/DeleteAndReplaceVersionBean
     */
    constructor() { 
        
        DeleteAndReplaceVersionBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteAndReplaceVersionBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAndReplaceVersionBean} obj Optional instance to populate.
     * @return {module:model/DeleteAndReplaceVersionBean} The populated <code>DeleteAndReplaceVersionBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteAndReplaceVersionBean();

            if (data.hasOwnProperty('customFieldReplacementList')) {
                obj['customFieldReplacementList'] = ApiClient.convertToType(data['customFieldReplacementList'], [CustomFieldReplacement]);
            }
            if (data.hasOwnProperty('moveAffectedIssuesTo')) {
                obj['moveAffectedIssuesTo'] = ApiClient.convertToType(data['moveAffectedIssuesTo'], 'Number');
            }
            if (data.hasOwnProperty('moveFixIssuesTo')) {
                obj['moveFixIssuesTo'] = ApiClient.convertToType(data['moveFixIssuesTo'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteAndReplaceVersionBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteAndReplaceVersionBean</code>.
     */
    static validateJSON(data) {
        if (data['customFieldReplacementList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['customFieldReplacementList'])) {
                throw new Error("Expected the field `customFieldReplacementList` to be an array in the JSON data but got " + data['customFieldReplacementList']);
            }
            // validate the optional field `customFieldReplacementList` (array)
            for (const item of data['customFieldReplacementList']) {
                CustomFieldReplacement.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * An array of custom field IDs (`customFieldId`) and version IDs (`moveTo`) to update when the fields contain the deleted version.
 * @member {Array.<module:model/CustomFieldReplacement>} customFieldReplacementList
 */
DeleteAndReplaceVersionBean.prototype['customFieldReplacementList'] = undefined;

/**
 * The ID of the version to update `affectedVersion` to when the field contains the deleted version.
 * @member {Number} moveAffectedIssuesTo
 */
DeleteAndReplaceVersionBean.prototype['moveAffectedIssuesTo'] = undefined;

/**
 * The ID of the version to update `fixVersion` to when the field contains the deleted version.
 * @member {Number} moveFixIssuesTo
 */
DeleteAndReplaceVersionBean.prototype['moveFixIssuesTo'] = undefined;






export default DeleteAndReplaceVersionBean;

