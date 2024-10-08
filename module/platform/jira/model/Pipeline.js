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

/**
 * The Pipeline model module.
 * @module model/Pipeline
 * @version 1001.0.0
 */
class Pipeline {
    /**
     * Constructs a new <code>Pipeline</code>.
     * This object models the Continuous Delivery (CD) Pipeline concept, an automated process (usually comprised of multiple stages)  for getting software from version control right through to the production environment. 
     * @alias module:model/Pipeline
     * @param id {String} The identifier of this pipeline, must be unique for the provider. 
     * @param displayName {String} The name of the pipeline to present to the user. 
     * @param url {String} A URL users can use to link to this deployment pipeline. 
     */
    constructor(id, displayName, url) { 
        
        Pipeline.initialize(this, id, displayName, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, displayName, url) { 
        obj['id'] = id;
        obj['displayName'] = displayName;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>Pipeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pipeline} obj Optional instance to populate.
     * @return {module:model/Pipeline} The populated <code>Pipeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pipeline();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Pipeline</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Pipeline</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Pipeline.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

Pipeline.RequiredProperties = ["id", "displayName", "url"];

/**
 * The identifier of this pipeline, must be unique for the provider. 
 * @member {String} id
 */
Pipeline.prototype['id'] = undefined;

/**
 * The name of the pipeline to present to the user. 
 * @member {String} displayName
 */
Pipeline.prototype['displayName'] = undefined;

/**
 * A URL users can use to link to this deployment pipeline. 
 * @member {String} url
 */
Pipeline.prototype['url'] = undefined;






export default Pipeline;

