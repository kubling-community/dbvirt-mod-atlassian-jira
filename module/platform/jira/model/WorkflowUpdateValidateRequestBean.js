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
import ValidationOptionsForUpdate from './ValidationOptionsForUpdate';
import WorkflowUpdateRequest from './WorkflowUpdateRequest';

/**
 * The WorkflowUpdateValidateRequestBean model module.
 * @module model/WorkflowUpdateValidateRequestBean
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class WorkflowUpdateValidateRequestBean {
    /**
     * Constructs a new <code>WorkflowUpdateValidateRequestBean</code>.
     * @alias module:model/WorkflowUpdateValidateRequestBean
     * @param payload {module:model/WorkflowUpdateRequest} 
     */
    constructor(payload) { 
        
        WorkflowUpdateValidateRequestBean.initialize(this, payload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, payload) { 
        obj['payload'] = payload;
    }

    /**
     * Constructs a <code>WorkflowUpdateValidateRequestBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowUpdateValidateRequestBean} obj Optional instance to populate.
     * @return {module:model/WorkflowUpdateValidateRequestBean} The populated <code>WorkflowUpdateValidateRequestBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowUpdateValidateRequestBean();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = WorkflowUpdateRequest.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('validationOptions')) {
                obj['validationOptions'] = ValidationOptionsForUpdate.constructFromObject(data['validationOptions']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkflowUpdateValidateRequestBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowUpdateValidateRequestBean</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WorkflowUpdateValidateRequestBean.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `payload`
        if (data['payload']) { // data not null
          WorkflowUpdateRequest.validateJSON(data['payload']);
        }
        // validate the optional field `validationOptions`
        if (data['validationOptions']) { // data not null
          ValidationOptionsForUpdate.validateJSON(data['validationOptions']);
        }

        return true;
    }


}

WorkflowUpdateValidateRequestBean.RequiredProperties = ["payload"];

/**
 * @member {module:model/WorkflowUpdateRequest} payload
 */
WorkflowUpdateValidateRequestBean.prototype['payload'] = undefined;

/**
 * @member {module:model/ValidationOptionsForUpdate} validationOptions
 */
WorkflowUpdateValidateRequestBean.prototype['validationOptions'] = undefined;






export default WorkflowUpdateValidateRequestBean;

