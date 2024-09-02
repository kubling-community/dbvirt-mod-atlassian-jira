import BoardApi from "./platform/jira/api/BoardApi";
import ProjectCategoriesApi from "./platform/jira/api/ProjectCategoriesApi";
import ProjectComponentsApi from "./platform/jira/api/ProjectComponentsApi";
import ProjectEmailApi from "./platform/jira/api/ProjectEmailApi";
import ProjectFeaturesApi from "./platform/jira/api/ProjectFeaturesApi";
import ProjectPermissionSchemesApi from "./platform/jira/api/ProjectPermissionSchemesApi";
import ProjectPropertiesApi from "./platform/jira/api/ProjectPropertiesApi";
import ProjectRolesApi from "./platform/jira/api/ProjectRolesApi";
import ProjectsApi from "./platform/jira/api/ProjectsApi";
import ProjectVersionsApi from "./platform/jira/api/ProjectVersionsApi";
import UsersApi from "./platform/jira/api/UsersApi";
import GetAllBoards200Response from "./platform/jira/model/GetAllBoards200Response";
import PageBeanComponentWithIssueCount from "./platform/jira/model/PageBeanComponentWithIssueCount";
import { addUniqueFieldFilterEqualOrNothing, basePaginatedCallback, getFiltersOfFieldVal, httpCallbackArrayResultSet, httpCallbackResultSet, httpCallbackSingleResultSet, paginationOps, shallReturnEmpty } from "./utils/AtlassianAPIUtils";
import { functionMatches, httpCliResponseContent, isArrayEmpty, isNotUndefinedOrNull, isUndefinedOrNull, responseIsLast } from "./utils/Utils";

const qfJson = JSON.parse(queryFilter.json);
var opts = paginationOps({}, qfJson);

const queryHandlers = {

    JIRA_USER: function() {

      const names = getFiltersOfFieldVal("username", "EQUAL", qfJson);
      
      var api = new UsersApi();
      
      if (isArrayEmpty(names)) {
          api.getAllUsers(opts, httpCallbackArrayResultSet);
      } else {
          for (var name of names) {
              opts.username = name;
              api.getUser(opts, httpCallbackSingleResultSet);
          }
      }

    },
    JIRA_BOARD: function() {
      
      const ids = getFiltersOfFieldVal("id", "EQUAL", qfJson);
      opts = addUniqueFieldFilterEqualOrNothing(opts, "project", "projectKeyOrId", qfJson);

      var api = new BoardApi();
      if (isArrayEmpty(ids)) {
        const fEnricher = (err, data, code) => {
          httpCallbackResultSet(err, data, code, (tuple) => { 
            tuple.project = tuple.location.projectName;
            return tuple;
          });
        };
        let resp = api.getAllBoards(opts, fEnricher);
        while (!httpCliResponseContent(resp, GetAllBoards200Response, api.apiClient).isLast) {
            if (isUndefinedOrNull(resp.startAt) || isUndefinedOrNull(resp.maxResults)) break;
            opts.startAt = resp.startAt + resp.maxResults;
            resp = api.getAllBoards(opts, fEnricher);
        }
      } else {
        for (let id of ids) {
            api.getBoard(id, (err, data, code) => {
              httpCallbackResultSet(err, data, code, (tuple) => { 
                tuple.project = tuple.location.projectName;
                return tuple;
              });
            });
        }
      }
    },
    JIRA_BOARD_EPIC: function() {

      const boards = getFiltersOfFieldVal("boardId", "EQUAL", qfJson);
      if (isArrayEmpty(boards)) throw new Error("You must specify at least one 'boardId'.");

      var api = new BoardApi();

      for (var board of boards) {          
        const fEnricher = (err, data, code) => {
          basePaginatedCallback(err, data, code, (tuple) => {
            tuple.boardId = board;
            return tuple;
        })};
        let resp = api.getEpics(board, opts, fEnricher);
        while (!responseIsLast(resp)) {
            opts.startAt = resp.startAt + resp.maxResults;
            resp = api.getEpics(board, opts, fEnricher);
        }
      }

    },
    JIRA_BOARD_ISSUE: function() {

      const boards = getFiltersOfFieldVal("boardId", "EQUAL", qfJson);
      if (isArrayEmpty(boards)) throw new Error("You must specify at least one 'boardId'.");

      var api = new BoardApi();

      for (let board of boards) {          
        const fEnricher = (err, data, code) => {
          if (shallReturnEmpty(err, code)) return;
          if (isUndefinedOrNull(data) || isUndefinedOrNull(data.values)) return;    
          for (var v of data.issues) {
              v.boardId = v;
              resultSet.addRow(JSON.stringify(v));
          }
        };
        let resp = api.getIssuesForBoard(board, opts, fEnricher);
        while (!responseIsLast(resp)) {
            opts.startAt = resp.startAt + resp.maxResults;
            resp = api.getIssuesForBoard(board, opts, fEnricher);
        }
      }

    },
    JIRA_BOARD_SPRINT: function() {

      const boards = getFiltersOfFieldVal("originBoardId", "EQUAL", qfJson);
      if (isArrayEmpty(boards)) throw new Error("You must specify at least one 'originBoardId'.");
      var api = new BoardApi();

      const fHandler = (err, data, code) => {
        if (isNotUndefinedOrNull(err)) {
          // It returns a 400 when 'The board does not support sprints'
          if (code !== 400 && code !== 404)
            throw new Error(`Code: ${code} - Message: ${err}`);
        }
        if (isUndefinedOrNull(data) || isUndefinedOrNull(data.values)) return;
        for (let v of data.values) {
          resultSet.addRow(JSON.stringify(v));
        }
      };

      for (let board of boards) {          
        let resp = api.getAllSprints(board, opts, fHandler);
        while (!responseIsLast(resp)) {
          opts.startAt = resp.startAt + resp.maxResults;
          resp = api.getAllSprints(board, opts, fHandler);
        }
      }
    },
    JIRA_PROJECT: function() {
      
      opts = addUniqueFieldFilterEqualOrNothing(opts, "id", "projectKeyOrId", qfJson);
      opts = addUniqueFieldFilterEqualOrNothing(opts, "key", "projectKeyOrId", qfJson); // << prio

      var api = new ProjectsApi();
      
      if (isNotUndefinedOrNull(opts.projectKeyOrId)) {
        api.getProject(opts.projectKeyOrId, opts, httpCallbackSingleResultSet);
      } else {
        api.getAllProjects(opts, httpCallbackArrayResultSet);
      }
      
    },
    JIRA_PROJECT_CATEGORY: function() {    
      var api = new ProjectCategoriesApi();
      api.getAllProjectCategories(httpCallbackArrayResultSet);
    },
    JIRA_PROJECT_COMPONENT: function() {

      var ids = getFiltersOfFieldVal("projectId", "EQUAL", qfJson);
      if (isArrayEmpty(ids)) {
        ids = getFiltersOfFieldVal("project", "EQUAL", qfJson);
      }
      if (isArrayEmpty(ids)) {
        throw new Error("You must specify at least one 'projectId' or 'project'.");
      }
      
      var api = new ProjectComponentsApi();
      for (let id of ids) {
        let resp = api.getProjectComponentsPaginated(id, opts, httpCallbackResultSet);
        while (!httpCliResponseContent(resp, PageBeanComponentWithIssueCount, api.apiClient).isLast) {
          if (isUndefinedOrNull(resp.startAt) || isUndefinedOrNull(resp.maxResults)) break;
          opts.startAt = resp.startAt + resp.maxResults;
          resp = api.getProjectComponentsPaginated(id, opts, httpCallbackResultSet);
        }
      }

    },
    JIRA_PROJECT_EMAIL: function() {
      const ids = getFiltersOfFieldVal("projectId", "EQUAL", qfJson);
      if (isArrayEmpty(ids)) throw new Error("You must specify at least one 'projectId'.");

      var api = new ProjectEmailApi();
      for (let id of ids) {
        api.getProjectEmail(id, (err, data, code) => {
          httpCallbackSingleResultSet(err, data, code, (tuple) => { 
            tuple.projectId = id;
            return tuple;
          });
        });
      }
    },
    JIRA_PROJECT_FEATURE: function() {
      const ids = getFiltersOfFieldVal("projectId", "EQUAL", qfJson);
      if (isArrayEmpty(ids)) throw new Error("You must specify at least one 'projectId'.");

      var api = new ProjectFeaturesApi();
      for (let id of ids) {
        api.getFeaturesForProject(id, (err, data, code) => {
          httpCallbackArrayResultSet(err, data.features, code, (tuple) => { 
            tuple.projectId = id;
            return tuple;
          });
        });
      }
    },
    JIRA_PROJECT_PERMISSION_SCHEME: function() {
      const ids = getFiltersOfFieldVal("project", "EQUAL", qfJson);
      if (isArrayEmpty(ids)) throw new Error("You must specify at least one 'project'.");
      var api = new ProjectPermissionSchemesApi();
      for (let id of ids) {
        api.getAssignedPermissionScheme(id, opts, (err, data, code) => {
          httpCallbackSingleResultSet(err, data, code, (tuple) => { 
            tuple.project = id;
            return tuple;
          });
        });
      }
    },
    JIRA_PROJECT_ISSUE_SECURITY_SCHEME: function() {
      const ids = getFiltersOfFieldVal("project", "EQUAL", qfJson);
      if (isArrayEmpty(ids)) throw new Error("You must specify at least one 'project'.");
      var api = new ProjectPermissionSchemesApi();
      for (let id of ids) {
        api.getProjectIssueSecurityScheme(id, (err, data, code) => {
          httpCallbackSingleResultSet(err, data, code, (tuple) => { 
            tuple.project = id;
            return tuple;
          });
        });
      }
    },
    JIRA_PROJECT_SECURITY_LEVEL: function() {
      const ids = getFiltersOfFieldVal("project", "EQUAL", qfJson);
      if (isArrayEmpty(ids)) throw new Error("You must specify at least one 'project'.");
      var api = new ProjectPermissionSchemesApi();
      for (let id of ids) {
        api.getSecurityLevelsForProject(id, (err, data, code) => {
          httpCallbackArrayResultSet(err, data.levels, code, (tuple) => { 
            tuple.project = id;
            return tuple;
          });
        });
      }
    },
    JIRA_PROJECT_PROPERTY: function() {
      const ids = getFiltersOfFieldVal("project", "EQUAL", qfJson);
      if (isArrayEmpty(ids)) throw new Error("You must specify at least one 'project'.");
      var api = new ProjectPropertiesApi();
      
      for (let id of ids) {
        let keys;
        api.getProjectPropertyKeys(id, (err, data, code) => {
          if (shallReturnEmpty(err, code)) return;
          if (isUndefinedOrNull(data) || isUndefinedOrNull(data.values)) return;    
          keys = data.keys;
        });
        if (!isArrayEmpty(keys)) {
          for (let key of keys) {
            api.getProjectProperty(id, key, (err, data, code) => {
              httpCallbackSingleResultSet(err, data, code, (tuple) => { 
                tuple.project = id;
                return tuple;
              });
            });
          }
        }
      }
    },
    JIRA_PROJECT_ROLE: function() {
      const ids = getFiltersOfFieldVal("project", "EQUAL", qfJson);
      var api = new ProjectRolesApi();

      if (isArrayEmpty(ids)) {
        api.getAllProjectRoles((err, data, code) => {
          httpCallbackArrayResultSet(err, data, code, (tuple) => { 
            tuple.project = data.scope.project.name;
            return tuple;
          });
        });
      } else {
        for (let id of ids) {
          api.getProjectRoleDetails(id, opts, (err, data, code) => {
            httpCallbackArrayResultSet(err, data, code, (tuple) => { 
              tuple.project = id;
              return tuple;
            });
          });
        }
      }
    },
    JIRA_PROJECT_VERSION: function() {
      var ids = getFiltersOfFieldVal("projectId", "EQUAL", qfJson);
      if (isArrayEmpty(ids)) {
        ids = getFiltersOfFieldVal("project", "EQUAL", qfJson);
      }
      if (isArrayEmpty(ids)) {
        throw new Error("You must specify at least one 'projectId' or 'project'.");
      }

      var api = new ProjectVersionsApi();
      for (let id of ids) {
        api.getProjectVersions(id, opts, httpCallbackArrayResultSet);
      }
    },
    JIRA_PROJECT_VERSION_RELATED_WORK: function() {
      const ids = getFiltersOfFieldVal("version", "EQUAL", qfJson);
      if (isArrayEmpty(ids)) throw new Error("You must specify at least one 'version'.");
      var api = new ProjectVersionsApi();
      for (let id of ids) {
        api.getRelatedWork(id, httpCallbackArrayResultSet);
      }      
    }
}

print('Query received:\n' + queryFilter.json);
const func = Object.values(queryHandlers)
    .find(f => functionMatches(f, queryFilter.table));

if (isNotUndefinedOrNull(func)) func();