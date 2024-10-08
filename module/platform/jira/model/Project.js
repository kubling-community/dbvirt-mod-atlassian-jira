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
import IssueTypeDetails from './IssueTypeDetails';
import ProjectArchivedBy from './ProjectArchivedBy';
import ProjectAvatarUrls from './ProjectAvatarUrls';
import ProjectComponent from './ProjectComponent';
import ProjectDeletedBy from './ProjectDeletedBy';
import ProjectInsight from './ProjectInsight';
import ProjectIssueTypeHierarchy from './ProjectIssueTypeHierarchy';
import ProjectLandingPageInfo from './ProjectLandingPageInfo';
import ProjectLead from './ProjectLead';
import ProjectPermissions from './ProjectPermissions';
import ProjectProjectCategory from './ProjectProjectCategory';
import Version from './Version';

/**
 * The Project model module.
 * @module model/Project
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class Project {
    /**
     * Constructs a new <code>Project</code>.
     * Details about a project.
     * @alias module:model/Project
     */
    constructor() { 
        
        Project.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Project();

            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('archivedBy')) {
                obj['archivedBy'] = ProjectArchivedBy.constructFromObject(data['archivedBy']);
            }
            if (data.hasOwnProperty('archivedDate')) {
                obj['archivedDate'] = ApiClient.convertToType(data['archivedDate'], 'Date');
            }
            if (data.hasOwnProperty('assigneeType')) {
                obj['assigneeType'] = ApiClient.convertToType(data['assigneeType'], 'String');
            }
            if (data.hasOwnProperty('avatarUrls')) {
                obj['avatarUrls'] = ProjectAvatarUrls.constructFromObject(data['avatarUrls']);
            }
            if (data.hasOwnProperty('components')) {
                obj['components'] = ApiClient.convertToType(data['components'], [ProjectComponent]);
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('deletedBy')) {
                obj['deletedBy'] = ProjectDeletedBy.constructFromObject(data['deletedBy']);
            }
            if (data.hasOwnProperty('deletedDate')) {
                obj['deletedDate'] = ApiClient.convertToType(data['deletedDate'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], 'String');
            }
            if (data.hasOwnProperty('favourite')) {
                obj['favourite'] = ApiClient.convertToType(data['favourite'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('insight')) {
                obj['insight'] = ProjectInsight.constructFromObject(data['insight']);
            }
            if (data.hasOwnProperty('isPrivate')) {
                obj['isPrivate'] = ApiClient.convertToType(data['isPrivate'], 'Boolean');
            }
            if (data.hasOwnProperty('issueTypeHierarchy')) {
                obj['issueTypeHierarchy'] = ProjectIssueTypeHierarchy.constructFromObject(data['issueTypeHierarchy']);
            }
            if (data.hasOwnProperty('issueTypes')) {
                obj['issueTypes'] = ApiClient.convertToType(data['issueTypes'], [IssueTypeDetails]);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('landingPageInfo')) {
                obj['landingPageInfo'] = ProjectLandingPageInfo.constructFromObject(data['landingPageInfo']);
            }
            if (data.hasOwnProperty('lead')) {
                obj['lead'] = ProjectLead.constructFromObject(data['lead']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ProjectPermissions.constructFromObject(data['permissions']);
            }
            if (data.hasOwnProperty('projectCategory')) {
                obj['projectCategory'] = ProjectProjectCategory.constructFromObject(data['projectCategory']);
            }
            if (data.hasOwnProperty('projectTypeKey')) {
                obj['projectTypeKey'] = ApiClient.convertToType(data['projectTypeKey'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': Object});
            }
            if (data.hasOwnProperty('retentionTillDate')) {
                obj['retentionTillDate'] = ApiClient.convertToType(data['retentionTillDate'], 'Date');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], {'String': 'String'});
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('simplified')) {
                obj['simplified'] = ApiClient.convertToType(data['simplified'], 'Boolean');
            }
            if (data.hasOwnProperty('style')) {
                obj['style'] = ApiClient.convertToType(data['style'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('versions')) {
                obj['versions'] = ApiClient.convertToType(data['versions'], [Version]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Project</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Project</code>.
     */
    static validateJSON(data) {
        // validate the optional field `archivedBy`
        if (data['archivedBy']) { // data not null
          ProjectArchivedBy.validateJSON(data['archivedBy']);
        }
        // ensure the json data is a string
        if (data['assigneeType'] && !(typeof data['assigneeType'] === 'string' || data['assigneeType'] instanceof String)) {
            throw new Error("Expected the field `assigneeType` to be a primitive type in the JSON string but got " + data['assigneeType']);
        }
        // validate the optional field `avatarUrls`
        if (data['avatarUrls']) { // data not null
          ProjectAvatarUrls.validateJSON(data['avatarUrls']);
        }
        if (data['components']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['components'])) {
                throw new Error("Expected the field `components` to be an array in the JSON data but got " + data['components']);
            }
            // validate the optional field `components` (array)
            for (const item of data['components']) {
                ProjectComponent.validateJSON(item);
            };
        }
        // validate the optional field `deletedBy`
        if (data['deletedBy']) { // data not null
          ProjectDeletedBy.validateJSON(data['deletedBy']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['expand'] && !(typeof data['expand'] === 'string' || data['expand'] instanceof String)) {
            throw new Error("Expected the field `expand` to be a primitive type in the JSON string but got " + data['expand']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `insight`
        if (data['insight']) { // data not null
          ProjectInsight.validateJSON(data['insight']);
        }
        // validate the optional field `issueTypeHierarchy`
        if (data['issueTypeHierarchy']) { // data not null
          ProjectIssueTypeHierarchy.validateJSON(data['issueTypeHierarchy']);
        }
        if (data['issueTypes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['issueTypes'])) {
                throw new Error("Expected the field `issueTypes` to be an array in the JSON data but got " + data['issueTypes']);
            }
            // validate the optional field `issueTypes` (array)
            for (const item of data['issueTypes']) {
                IssueTypeDetails.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // validate the optional field `landingPageInfo`
        if (data['landingPageInfo']) { // data not null
          ProjectLandingPageInfo.validateJSON(data['landingPageInfo']);
        }
        // validate the optional field `lead`
        if (data['lead']) { // data not null
          ProjectLead.validateJSON(data['lead']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `permissions`
        if (data['permissions']) { // data not null
          ProjectPermissions.validateJSON(data['permissions']);
        }
        // validate the optional field `projectCategory`
        if (data['projectCategory']) { // data not null
          ProjectProjectCategory.validateJSON(data['projectCategory']);
        }
        // ensure the json data is a string
        if (data['projectTypeKey'] && !(typeof data['projectTypeKey'] === 'string' || data['projectTypeKey'] instanceof String)) {
            throw new Error("Expected the field `projectTypeKey` to be a primitive type in the JSON string but got " + data['projectTypeKey']);
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }
        // ensure the json data is a string
        if (data['style'] && !(typeof data['style'] === 'string' || data['style'] instanceof String)) {
            throw new Error("Expected the field `style` to be a primitive type in the JSON string but got " + data['style']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        if (data['versions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['versions'])) {
                throw new Error("Expected the field `versions` to be an array in the JSON data but got " + data['versions']);
            }
            // validate the optional field `versions` (array)
            for (const item of data['versions']) {
                Version.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Whether the project is archived.
 * @member {Boolean} archived
 */
Project.prototype['archived'] = undefined;

/**
 * @member {module:model/ProjectArchivedBy} archivedBy
 */
Project.prototype['archivedBy'] = undefined;

/**
 * The date when the project was archived.
 * @member {Date} archivedDate
 */
Project.prototype['archivedDate'] = undefined;

/**
 * The default assignee when creating issues for this project.
 * @member {module:model/Project.AssigneeTypeEnum} assigneeType
 */
Project.prototype['assigneeType'] = undefined;

/**
 * @member {module:model/ProjectAvatarUrls} avatarUrls
 */
Project.prototype['avatarUrls'] = undefined;

/**
 * List of the components contained in the project.
 * @member {Array.<module:model/ProjectComponent>} components
 */
Project.prototype['components'] = undefined;

/**
 * Whether the project is marked as deleted.
 * @member {Boolean} deleted
 */
Project.prototype['deleted'] = undefined;

/**
 * @member {module:model/ProjectDeletedBy} deletedBy
 */
Project.prototype['deletedBy'] = undefined;

/**
 * The date when the project was marked as deleted.
 * @member {Date} deletedDate
 */
Project.prototype['deletedDate'] = undefined;

/**
 * A brief description of the project.
 * @member {String} description
 */
Project.prototype['description'] = undefined;

/**
 * An email address associated with the project.
 * @member {String} email
 */
Project.prototype['email'] = undefined;

/**
 * Expand options that include additional project details in the response.
 * @member {String} expand
 */
Project.prototype['expand'] = undefined;

/**
 * Whether the project is selected as a favorite.
 * @member {Boolean} favourite
 */
Project.prototype['favourite'] = undefined;

/**
 * The ID of the project.
 * @member {String} id
 */
Project.prototype['id'] = undefined;

/**
 * @member {module:model/ProjectInsight} insight
 */
Project.prototype['insight'] = undefined;

/**
 * Whether the project is private from the user's perspective. This means the user can't see the project or any associated issues.
 * @member {Boolean} isPrivate
 */
Project.prototype['isPrivate'] = undefined;

/**
 * @member {module:model/ProjectIssueTypeHierarchy} issueTypeHierarchy
 */
Project.prototype['issueTypeHierarchy'] = undefined;

/**
 * List of the issue types available in the project.
 * @member {Array.<module:model/IssueTypeDetails>} issueTypes
 */
Project.prototype['issueTypes'] = undefined;

/**
 * The key of the project.
 * @member {String} key
 */
Project.prototype['key'] = undefined;

/**
 * @member {module:model/ProjectLandingPageInfo} landingPageInfo
 */
Project.prototype['landingPageInfo'] = undefined;

/**
 * @member {module:model/ProjectLead} lead
 */
Project.prototype['lead'] = undefined;

/**
 * The name of the project.
 * @member {String} name
 */
Project.prototype['name'] = undefined;

/**
 * @member {module:model/ProjectPermissions} permissions
 */
Project.prototype['permissions'] = undefined;

/**
 * @member {module:model/ProjectProjectCategory} projectCategory
 */
Project.prototype['projectCategory'] = undefined;

/**
 * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
 * @member {module:model/Project.ProjectTypeKeyEnum} projectTypeKey
 */
Project.prototype['projectTypeKey'] = undefined;

/**
 * Map of project properties
 * @member {Object.<String, Object>} properties
 */
Project.prototype['properties'] = undefined;

/**
 * The date when the project is deleted permanently.
 * @member {Date} retentionTillDate
 */
Project.prototype['retentionTillDate'] = undefined;

/**
 * The name and self URL for each role defined in the project. For more information, see [Create project role](#api-rest-api-3-role-post).
 * @member {Object.<String, String>} roles
 */
Project.prototype['roles'] = undefined;

/**
 * The URL of the project details.
 * @member {String} self
 */
Project.prototype['self'] = undefined;

/**
 * Whether the project is simplified.
 * @member {Boolean} simplified
 */
Project.prototype['simplified'] = undefined;

/**
 * The type of the project.
 * @member {module:model/Project.StyleEnum} style
 */
Project.prototype['style'] = undefined;

/**
 * A link to information about this project, such as project documentation.
 * @member {String} url
 */
Project.prototype['url'] = undefined;

/**
 * Unique ID for next-gen projects.
 * @member {String} uuid
 */
Project.prototype['uuid'] = undefined;

/**
 * The versions defined in the project. For more information, see [Create version](#api-rest-api-3-version-post).
 * @member {Array.<module:model/Version>} versions
 */
Project.prototype['versions'] = undefined;





/**
 * Allowed values for the <code>assigneeType</code> property.
 * @enum {String}
 * @readonly
 */
Project['AssigneeTypeEnum'] = {

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
 * Allowed values for the <code>projectTypeKey</code> property.
 * @enum {String}
 * @readonly
 */
Project['ProjectTypeKeyEnum'] = {

    /**
     * value: "software"
     * @const
     */
    "software": "software",

    /**
     * value: "service_desk"
     * @const
     */
    "service_desk": "service_desk",

    /**
     * value: "business"
     * @const
     */
    "business": "business"
};


/**
 * Allowed values for the <code>style</code> property.
 * @enum {String}
 * @readonly
 */
Project['StyleEnum'] = {

    /**
     * value: "classic"
     * @const
     */
    "classic": "classic",

    /**
     * value: "next-gen"
     * @const
     */
    "next-gen": "next-gen"
};



export default Project;

