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

/**
 * The WorklogIdsRequestBean model module.
 * @module model/WorklogIdsRequestBean
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class WorklogIdsRequestBean {
    /**
     * Constructs a new <code>WorklogIdsRequestBean</code>.
     * @alias module:model/WorklogIdsRequestBean
     * @param ids {Array.<Number>} A list of worklog IDs.
     */
    constructor(ids) { 
        
        WorklogIdsRequestBean.initialize(this, ids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ids) { 
        obj['ids'] = ids;
    }

    /**
     * Constructs a <code>WorklogIdsRequestBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorklogIdsRequestBean} obj Optional instance to populate.
     * @return {module:model/WorklogIdsRequestBean} The populated <code>WorklogIdsRequestBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorklogIdsRequestBean();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorklogIdsRequestBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorklogIdsRequestBean</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WorklogIdsRequestBean.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['ids'])) {
            throw new Error("Expected the field `ids` to be an array in the JSON data but got " + data['ids']);
        }

        return true;
    }


}

WorklogIdsRequestBean.RequiredProperties = ["ids"];

/**
 * A list of worklog IDs.
 * @member {Array.<Number>} ids
 */
WorklogIdsRequestBean.prototype['ids'] = undefined;






export default WorklogIdsRequestBean;

