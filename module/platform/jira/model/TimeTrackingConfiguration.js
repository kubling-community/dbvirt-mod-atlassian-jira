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
 * The TimeTrackingConfiguration model module.
 * @module model/TimeTrackingConfiguration
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class TimeTrackingConfiguration {
    /**
     * Constructs a new <code>TimeTrackingConfiguration</code>.
     * Details of the time tracking configuration.
     * @alias module:model/TimeTrackingConfiguration
     * @param defaultUnit {module:model/TimeTrackingConfiguration.DefaultUnitEnum} The default unit of time applied to logged time.
     * @param timeFormat {module:model/TimeTrackingConfiguration.TimeFormatEnum} The format that will appear on an issue's *Time Spent* field.
     * @param workingDaysPerWeek {Number} The number of days in a working week.
     * @param workingHoursPerDay {Number} The number of hours in a working day.
     */
    constructor(defaultUnit, timeFormat, workingDaysPerWeek, workingHoursPerDay) { 
        
        TimeTrackingConfiguration.initialize(this, defaultUnit, timeFormat, workingDaysPerWeek, workingHoursPerDay);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, defaultUnit, timeFormat, workingDaysPerWeek, workingHoursPerDay) { 
        obj['defaultUnit'] = defaultUnit;
        obj['timeFormat'] = timeFormat;
        obj['workingDaysPerWeek'] = workingDaysPerWeek;
        obj['workingHoursPerDay'] = workingHoursPerDay;
    }

    /**
     * Constructs a <code>TimeTrackingConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeTrackingConfiguration} obj Optional instance to populate.
     * @return {module:model/TimeTrackingConfiguration} The populated <code>TimeTrackingConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeTrackingConfiguration();

            if (data.hasOwnProperty('defaultUnit')) {
                obj['defaultUnit'] = ApiClient.convertToType(data['defaultUnit'], 'String');
            }
            if (data.hasOwnProperty('timeFormat')) {
                obj['timeFormat'] = ApiClient.convertToType(data['timeFormat'], 'String');
            }
            if (data.hasOwnProperty('workingDaysPerWeek')) {
                obj['workingDaysPerWeek'] = ApiClient.convertToType(data['workingDaysPerWeek'], 'Number');
            }
            if (data.hasOwnProperty('workingHoursPerDay')) {
                obj['workingHoursPerDay'] = ApiClient.convertToType(data['workingHoursPerDay'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeTrackingConfiguration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeTrackingConfiguration</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TimeTrackingConfiguration.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['defaultUnit'] && !(typeof data['defaultUnit'] === 'string' || data['defaultUnit'] instanceof String)) {
            throw new Error("Expected the field `defaultUnit` to be a primitive type in the JSON string but got " + data['defaultUnit']);
        }
        // ensure the json data is a string
        if (data['timeFormat'] && !(typeof data['timeFormat'] === 'string' || data['timeFormat'] instanceof String)) {
            throw new Error("Expected the field `timeFormat` to be a primitive type in the JSON string but got " + data['timeFormat']);
        }

        return true;
    }


}

TimeTrackingConfiguration.RequiredProperties = ["defaultUnit", "timeFormat", "workingDaysPerWeek", "workingHoursPerDay"];

/**
 * The default unit of time applied to logged time.
 * @member {module:model/TimeTrackingConfiguration.DefaultUnitEnum} defaultUnit
 */
TimeTrackingConfiguration.prototype['defaultUnit'] = undefined;

/**
 * The format that will appear on an issue's *Time Spent* field.
 * @member {module:model/TimeTrackingConfiguration.TimeFormatEnum} timeFormat
 */
TimeTrackingConfiguration.prototype['timeFormat'] = undefined;

/**
 * The number of days in a working week.
 * @member {Number} workingDaysPerWeek
 */
TimeTrackingConfiguration.prototype['workingDaysPerWeek'] = undefined;

/**
 * The number of hours in a working day.
 * @member {Number} workingHoursPerDay
 */
TimeTrackingConfiguration.prototype['workingHoursPerDay'] = undefined;





/**
 * Allowed values for the <code>defaultUnit</code> property.
 * @enum {String}
 * @readonly
 */
TimeTrackingConfiguration['DefaultUnitEnum'] = {

    /**
     * value: "minute"
     * @const
     */
    "minute": "minute",

    /**
     * value: "hour"
     * @const
     */
    "hour": "hour",

    /**
     * value: "day"
     * @const
     */
    "day": "day",

    /**
     * value: "week"
     * @const
     */
    "week": "week"
};


/**
 * Allowed values for the <code>timeFormat</code> property.
 * @enum {String}
 * @readonly
 */
TimeTrackingConfiguration['TimeFormatEnum'] = {

    /**
     * value: "pretty"
     * @const
     */
    "pretty": "pretty",

    /**
     * value: "days"
     * @const
     */
    "days": "days",

    /**
     * value: "hours"
     * @const
     */
    "hours": "hours"
};



export default TimeTrackingConfiguration;

