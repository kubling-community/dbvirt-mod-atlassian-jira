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
import ProjectComponentAssignee from './ProjectComponentAssignee';
import ProjectComponentLead from './ProjectComponentLead';
import ProjectComponentRealAssignee from './ProjectComponentRealAssignee';

/**
 * The ProjectComponent model module.
 * @module model/ProjectComponent
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class ProjectComponent {
    /**
     * Constructs a new <code>ProjectComponent</code>.
     * Details about a project component.
     * @alias module:model/ProjectComponent
     */
    constructor() { 
        
        ProjectComponent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectComponent} obj Optional instance to populate.
     * @return {module:model/ProjectComponent} The populated <code>ProjectComponent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectComponent();

            if (data.hasOwnProperty('ari')) {
                obj['ari'] = ApiClient.convertToType(data['ari'], 'String');
            }
            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = ProjectComponentAssignee.constructFromObject(data['assignee']);
            }
            if (data.hasOwnProperty('assigneeType')) {
                obj['assigneeType'] = ApiClient.convertToType(data['assigneeType'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isAssigneeTypeValid')) {
                obj['isAssigneeTypeValid'] = ApiClient.convertToType(data['isAssigneeTypeValid'], 'Boolean');
            }
            if (data.hasOwnProperty('lead')) {
                obj['lead'] = ProjectComponentLead.constructFromObject(data['lead']);
            }
            if (data.hasOwnProperty('leadAccountId')) {
                obj['leadAccountId'] = ApiClient.convertToType(data['leadAccountId'], 'String');
            }
            if (data.hasOwnProperty('leadUserName')) {
                obj['leadUserName'] = ApiClient.convertToType(data['leadUserName'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'Number');
            }
            if (data.hasOwnProperty('realAssignee')) {
                obj['realAssignee'] = ProjectComponentRealAssignee.constructFromObject(data['realAssignee']);
            }
            if (data.hasOwnProperty('realAssigneeType')) {
                obj['realAssigneeType'] = ApiClient.convertToType(data['realAssigneeType'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProjectComponent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectComponent</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ari'] && !(typeof data['ari'] === 'string' || data['ari'] instanceof String)) {
            throw new Error("Expected the field `ari` to be a primitive type in the JSON string but got " + data['ari']);
        }
        // validate the optional field `assignee`
        if (data['assignee']) { // data not null
          ProjectComponentAssignee.validateJSON(data['assignee']);
        }
        // ensure the json data is a string
        if (data['assigneeType'] && !(typeof data['assigneeType'] === 'string' || data['assigneeType'] instanceof String)) {
            throw new Error("Expected the field `assigneeType` to be a primitive type in the JSON string but got " + data['assigneeType']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `lead`
        if (data['lead']) { // data not null
          ProjectComponentLead.validateJSON(data['lead']);
        }
        // ensure the json data is a string
        if (data['leadAccountId'] && !(typeof data['leadAccountId'] === 'string' || data['leadAccountId'] instanceof String)) {
            throw new Error("Expected the field `leadAccountId` to be a primitive type in the JSON string but got " + data['leadAccountId']);
        }
        // ensure the json data is a string
        if (data['leadUserName'] && !(typeof data['leadUserName'] === 'string' || data['leadUserName'] instanceof String)) {
            throw new Error("Expected the field `leadUserName` to be a primitive type in the JSON string but got " + data['leadUserName']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['project'] && !(typeof data['project'] === 'string' || data['project'] instanceof String)) {
            throw new Error("Expected the field `project` to be a primitive type in the JSON string but got " + data['project']);
        }
        // validate the optional field `realAssignee`
        if (data['realAssignee']) { // data not null
          ProjectComponentRealAssignee.validateJSON(data['realAssignee']);
        }
        // ensure the json data is a string
        if (data['realAssigneeType'] && !(typeof data['realAssigneeType'] === 'string' || data['realAssigneeType'] instanceof String)) {
            throw new Error("Expected the field `realAssigneeType` to be a primitive type in the JSON string but got " + data['realAssigneeType']);
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }

        return true;
    }


}



/**
 * Compass component's ID. Can't be updated. Not required for creating a Project Component.
 * @member {String} ari
 */
ProjectComponent.prototype['ari'] = undefined;

/**
 * @member {module:model/ProjectComponentAssignee} assignee
 */
ProjectComponent.prototype['assignee'] = undefined;

/**
 * The nominal user type used to determine the assignee for issues created with this component. See `realAssigneeType` for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:   *  `PROJECT_LEAD` the assignee to any issues created with this component is nominally the lead for the project the component is in.  *  `COMPONENT_LEAD` the assignee to any issues created with this component is nominally the lead for the component.  *  `UNASSIGNED` an assignee is not set for issues created with this component.  *  `PROJECT_DEFAULT` the assignee to any issues created with this component is nominally the default assignee for the project that the component is in.  Default value: `PROJECT_DEFAULT`.   Optional when creating or updating a component.
 * @member {module:model/ProjectComponent.AssigneeTypeEnum} assigneeType
 */
ProjectComponent.prototype['assigneeType'] = undefined;

/**
 * The description for the component. Optional when creating or updating a component.
 * @member {String} description
 */
ProjectComponent.prototype['description'] = undefined;

/**
 * The unique identifier for the component.
 * @member {String} id
 */
ProjectComponent.prototype['id'] = undefined;

/**
 * Whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned.
 * @member {Boolean} isAssigneeTypeValid
 */
ProjectComponent.prototype['isAssigneeTypeValid'] = undefined;

/**
 * @member {module:model/ProjectComponentLead} lead
 */
ProjectComponent.prototype['lead'] = undefined;

/**
 * The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
 * @member {String} leadAccountId
 */
ProjectComponent.prototype['leadAccountId'] = undefined;

/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} leadUserName
 */
ProjectComponent.prototype['leadUserName'] = undefined;

/**
 * Compass component's metadata. Can't be updated. Not required for creating a Project Component.
 * @member {Object.<String, String>} metadata
 */
ProjectComponent.prototype['metadata'] = undefined;

/**
 * The unique name for the component in the project. Required when creating a component. Optional when updating a component. The maximum length is 255 characters.
 * @member {String} name
 */
ProjectComponent.prototype['name'] = undefined;

/**
 * The key of the project the component is assigned to. Required when creating a component. Can't be updated.
 * @member {String} project
 */
ProjectComponent.prototype['project'] = undefined;

/**
 * The ID of the project the component is assigned to.
 * @member {Number} projectId
 */
ProjectComponent.prototype['projectId'] = undefined;

/**
 * @member {module:model/ProjectComponentRealAssignee} realAssignee
 */
ProjectComponent.prototype['realAssignee'] = undefined;

/**
 * The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the `assigneeType`. For example, `assigneeType` is set to `COMPONENT_LEAD` but no component lead is set. This property is set to one of the following values:   *  `PROJECT_LEAD` when `assigneeType` is `PROJECT_LEAD` and the project lead has permission to be assigned issues in the project that the component is in.  *  `COMPONENT_LEAD` when `assignee`Type is `COMPONENT_LEAD` and the component lead has permission to be assigned issues in the project that the component is in.  *  `UNASSIGNED` when `assigneeType` is `UNASSIGNED` and Jira is configured to allow unassigned issues.  *  `PROJECT_DEFAULT` when none of the preceding cases are true.
 * @member {module:model/ProjectComponent.RealAssigneeTypeEnum} realAssigneeType
 */
ProjectComponent.prototype['realAssigneeType'] = undefined;

/**
 * The URL of the component.
 * @member {String} self
 */
ProjectComponent.prototype['self'] = undefined;





/**
 * Allowed values for the <code>assigneeType</code> property.
 * @enum {String}
 * @readonly
 */
ProjectComponent['AssigneeTypeEnum'] = {

    /**
     * value: "PROJECT_DEFAULT"
     * @const
     */
    "PROJECT_DEFAULT": "PROJECT_DEFAULT",

    /**
     * value: "COMPONENT_LEAD"
     * @const
     */
    "COMPONENT_LEAD": "COMPONENT_LEAD",

    /**
     * value: "PROJECT_LEAD"
     * @const
     */
    "PROJECT_LEAD": "PROJECT_LEAD",

    /**
     * value: "UNASSIGNED"
     * @const
     */
    "UNASSIGNED": "UNASSIGNED"
};


/**
 * Allowed values for the <code>realAssigneeType</code> property.
 * @enum {String}
 * @readonly
 */
ProjectComponent['RealAssigneeTypeEnum'] = {

    /**
     * value: "PROJECT_DEFAULT"
     * @const
     */
    "PROJECT_DEFAULT": "PROJECT_DEFAULT",

    /**
     * value: "COMPONENT_LEAD"
     * @const
     */
    "COMPONENT_LEAD": "COMPONENT_LEAD",

    /**
     * value: "PROJECT_LEAD"
     * @const
     */
    "PROJECT_LEAD": "PROJECT_LEAD",

    /**
     * value: "UNASSIGNED"
     * @const
     */
    "UNASSIGNED": "UNASSIGNED"
};



export default ProjectComponent;

