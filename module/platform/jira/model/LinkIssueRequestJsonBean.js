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
import Comment from './Comment';
import IssueLinkType from './IssueLinkType';
import LinkedIssue from './LinkedIssue';

/**
 * The LinkIssueRequestJsonBean model module.
 * @module model/LinkIssueRequestJsonBean
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class LinkIssueRequestJsonBean {
    /**
     * Constructs a new <code>LinkIssueRequestJsonBean</code>.
     * @alias module:model/LinkIssueRequestJsonBean
     * @param inwardIssue {module:model/LinkedIssue} 
     * @param outwardIssue {module:model/LinkedIssue} 
     * @param type {module:model/IssueLinkType} 
     */
    constructor(inwardIssue, outwardIssue, type) { 
        
        LinkIssueRequestJsonBean.initialize(this, inwardIssue, outwardIssue, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, inwardIssue, outwardIssue, type) { 
        obj['inwardIssue'] = inwardIssue;
        obj['outwardIssue'] = outwardIssue;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>LinkIssueRequestJsonBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkIssueRequestJsonBean} obj Optional instance to populate.
     * @return {module:model/LinkIssueRequestJsonBean} The populated <code>LinkIssueRequestJsonBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkIssueRequestJsonBean();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = Comment.constructFromObject(data['comment']);
            }
            if (data.hasOwnProperty('inwardIssue')) {
                obj['inwardIssue'] = LinkedIssue.constructFromObject(data['inwardIssue']);
            }
            if (data.hasOwnProperty('outwardIssue')) {
                obj['outwardIssue'] = LinkedIssue.constructFromObject(data['outwardIssue']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = IssueLinkType.constructFromObject(data['type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LinkIssueRequestJsonBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinkIssueRequestJsonBean</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LinkIssueRequestJsonBean.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `inwardIssue`
        if (data['inwardIssue']) { // data not null
          LinkedIssue.validateJSON(data['inwardIssue']);
        }
        // validate the optional field `outwardIssue`
        if (data['outwardIssue']) { // data not null
          LinkedIssue.validateJSON(data['outwardIssue']);
        }
        // validate the optional field `type`
        if (data['type']) { // data not null
          IssueLinkType.validateJSON(data['type']);
        }

        return true;
    }


}

LinkIssueRequestJsonBean.RequiredProperties = ["inwardIssue", "outwardIssue", "type"];

/**
 * @member {module:model/Comment} comment
 */
LinkIssueRequestJsonBean.prototype['comment'] = undefined;

/**
 * @member {module:model/LinkedIssue} inwardIssue
 */
LinkIssueRequestJsonBean.prototype['inwardIssue'] = undefined;

/**
 * @member {module:model/LinkedIssue} outwardIssue
 */
LinkIssueRequestJsonBean.prototype['outwardIssue'] = undefined;

/**
 * @member {module:model/IssueLinkType} type
 */
LinkIssueRequestJsonBean.prototype['type'] = undefined;






export default LinkIssueRequestJsonBean;

