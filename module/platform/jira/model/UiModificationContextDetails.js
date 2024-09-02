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
 * The UiModificationContextDetails model module.
 * @module model/UiModificationContextDetails
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class UiModificationContextDetails {
    /**
     * Constructs a new <code>UiModificationContextDetails</code>.
     * The details of a UI modification&#39;s context, which define where to activate the UI modification.
     * @alias module:model/UiModificationContextDetails
     */
    constructor() { 
        
        UiModificationContextDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UiModificationContextDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UiModificationContextDetails} obj Optional instance to populate.
     * @return {module:model/UiModificationContextDetails} The populated <code>UiModificationContextDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UiModificationContextDetails();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isAvailable')) {
                obj['isAvailable'] = ApiClient.convertToType(data['isAvailable'], 'Boolean');
            }
            if (data.hasOwnProperty('issueTypeId')) {
                obj['issueTypeId'] = ApiClient.convertToType(data['issueTypeId'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
            if (data.hasOwnProperty('viewType')) {
                obj['viewType'] = ApiClient.convertToType(data['viewType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UiModificationContextDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UiModificationContextDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['issueTypeId'] && !(typeof data['issueTypeId'] === 'string' || data['issueTypeId'] instanceof String)) {
            throw new Error("Expected the field `issueTypeId` to be a primitive type in the JSON string but got " + data['issueTypeId']);
        }
        // ensure the json data is a string
        if (data['projectId'] && !(typeof data['projectId'] === 'string' || data['projectId'] instanceof String)) {
            throw new Error("Expected the field `projectId` to be a primitive type in the JSON string but got " + data['projectId']);
        }
        // ensure the json data is a string
        if (data['viewType'] && !(typeof data['viewType'] === 'string' || data['viewType'] instanceof String)) {
            throw new Error("Expected the field `viewType` to be a primitive type in the JSON string but got " + data['viewType']);
        }

        return true;
    }


}



/**
 * The ID of the UI modification context.
 * @member {String} id
 */
UiModificationContextDetails.prototype['id'] = undefined;

/**
 * Whether a context is available. For example, when a project is deleted the context becomes unavailable.
 * @member {Boolean} isAvailable
 */
UiModificationContextDetails.prototype['isAvailable'] = undefined;

/**
 * The issue type ID of the context. Null is treated as a wildcard, meaning the UI modification will be applied to all issue types. Each UI modification context can have a maximum of one wildcard.
 * @member {String} issueTypeId
 */
UiModificationContextDetails.prototype['issueTypeId'] = undefined;

/**
 * The project ID of the context. Null is treated as a wildcard, meaning the UI modification will be applied to all projects. Each UI modification context can have a maximum of one wildcard.
 * @member {String} projectId
 */
UiModificationContextDetails.prototype['projectId'] = undefined;

/**
 * The view type of the context. Only `GIC`(Global Issue Create) and `IssueView` are supported. Null is treated as a wildcard, meaning the UI modification will be applied to all view types. Each UI modification context can have a maximum of one wildcard.
 * @member {module:model/UiModificationContextDetails.ViewTypeEnum} viewType
 */
UiModificationContextDetails.prototype['viewType'] = undefined;





/**
 * Allowed values for the <code>viewType</code> property.
 * @enum {String}
 * @readonly
 */
UiModificationContextDetails['ViewTypeEnum'] = {

    /**
     * value: "GIC"
     * @const
     */
    "GIC": "GIC",

    /**
     * value: "IssueView"
     * @const
     */
    "IssueView": "IssueView"
};



export default UiModificationContextDetails;

