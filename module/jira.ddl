/***** BEGIN USERS *****/

/*
CREATE FOREIGN TABLE JIRA_USER_ACCOUNT
(
  identifier string OPTIONS(val_pk 'accountId'),
  accountId string,
  key string,
  username string,
  PRIMARY KEY(identifier)
)
OPTIONS(updatable true);
*/

CREATE FOREIGN TABLE JIRA_USER
(
  identifier string OPTIONS(val_pk 'accountId+emailAddress'),
  accountId string,
  accountType string,
  active boolean,
  applicationRoles json OPTIONS(parser_format 'asJsonPretty'),
  displayName string,
  emailAddress string,
  expand string,
  groups json OPTIONS(parser_format 'asJsonPretty'),
  key string,
  locale string,
  name string,
  timeZone string,
  PRIMARY KEY(identifier)
)
OPTIONS(updatable true);

/***** END USERS *****/

/***** BEGIN BOARDS *****/

CREATE FOREIGN TABLE JIRA_BOARD
(
  project string, /* NRMBA */
  id long,
  identifier string OPTIONS(val_pk 'project+id'),
  self string,
  platformIdentifier string,
  name string not null,
  type string,
  location json OPTIONS(parser_format 'asJsonPretty'),
  PRIMARY KEY(identifier)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE JIRA_BOARD_EPIC
(
  identifier string OPTIONS(val_pk 'boardId+id'),
  boardId long, /* NRMBA */
  id integer,
  self string,
  key string,
  summary string,
  done boolean,
  PRIMARY KEY(identifier),
  UNIQUE(identifier)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE JIRA_BOARD_ISSUE
(
  identifier string OPTIONS(val_pk 'boardId+id'),
  boardId long, /* NRMBA */
  changelog json OPTIONS(parser_format 'asJsonPretty'),
  editmeta json OPTIONS(parser_format 'asJsonPretty'),
  expand string,
  fields json OPTIONS(parser_format 'asJsonPretty'),
  fieldsToInclude json OPTIONS(parser_format 'asJsonPretty'),
  id string,
  self string,
  key string,
  names json OPTIONS(parser_format 'asJsonPretty'),
  operations json OPTIONS(parser_format 'asJsonPretty'),
  properties json OPTIONS(parser_format 'asJsonPretty'),
  renderedFields json OPTIONS(parser_format 'asJsonPretty'),
  schema json OPTIONS(parser_format 'asJsonPretty'),
  transitions json OPTIONS(parser_format 'asJsonPretty'),
  versionedRepresentations json OPTIONS(parser_format 'asJsonPretty'),

  UNIQUE(boardId, id, key),
  PRIMARY KEY(identifier)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE JIRA_BOARD_SPRINT
(
  identifier string OPTIONS(val_pk 'originBoardId+id'),
  originBoardId long,
  id long,
  name string,
  completeDate string,
  createdDate string,
  startDate string,
  endDate string,
  goal string,
  state string,
  PRIMARY KEY(identifier)
)
OPTIONS(updatable true);

/***** END BOARDS *****/

/***** BEGIN PROJECTS *****/

CREATE FOREIGN TABLE JIRA_PROJECT
(
  identifier string OPTIONS(val_pk 'id'),
  id long,
  key string,
  uuid string,
  name string,
  email string,
  description string,
  archived boolean,
  archivedDate long,
  components json OPTIONS(parser_format 'asJsonPretty'),
  deleted boolean,
  isPrivate boolean,
  landingPageInfo json OPTIONS(parser_format 'asJsonPretty'),
  url string,
  properties string,
  permissions json OPTIONS(parser_format 'asJsonPretty'),
  projectCategory string,
  projectTypeKey string,
  lead__accountId string,
  lead json OPTIONS(parser_format 'asJsonPretty'),
  PRIMARY KEY(identifier),
  UNIQUE(id)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE JIRA_PROJECT_CATEGORY
(
  id string,
  identifier string OPTIONS(val_pk 'id'),    
  name string,
  description string,
  self string,

  PRIMARY KEY(identifier)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE JIRA_PROJECT_COMPONENT
(
  project string,
  projectId long,
  id string,
  identifier string OPTIONS(val_pk 'project+id'),  
  ari string,
  assignee json OPTIONS(parser_format 'asJsonPretty'),
  assigneeType string,
  description string,
  isAssigneeTypeValid boolean,
  lean json OPTIONS(parser_format 'asJsonPretty'),
  leadAccountId string,
  leadUserName string,
  metadata string,
  realAssigneeType string,
  realAssignee json OPTIONS(parser_format 'asJsonPretty'),
  self string,

  PRIMARY KEY(identifier)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE JIRA_PROJECT_EMAIL
(
  projectId long, /* NRMBA */
  identifier string OPTIONS(val_pk 'projectId'),    
  emailAddress string,
  emailAddressStatus string,

  PRIMARY KEY(identifier)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE JIRA_PROJECT_FEATURE
(
  projectId long,
  feature string,
  identifier string OPTIONS(val_pk 'projectId+feature'),    
  imageUri string,
  localisedDescription string,
  localisedName string,
  prerequisites string,
  state string,
  toggleLocked boolean,

  PRIMARY KEY(identifier)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE JIRA_PROJECT_PERMISSION_SCHEME
(
  project string, /* NRMBA */
  id integer,
  name string,
  identifier string OPTIONS(val_pk 'project+name'),    
  description string,
  expand string,
  permissions json OPTIONS(parser_format 'asJsonPretty'),
  scope json OPTIONS(parser_format 'asJsonPretty'),

  PRIMARY KEY(identifier),
  UNIQUE(project, id, name)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE JIRA_PROJECT_ISSUE_SECURITY_SCHEME
(
  project string, /* NRMBA */
  id integer,
  name string,
  identifier string OPTIONS(val_pk 'project+name'),    
  defaultSecurityLevelId integer,  
  levels json OPTIONS(parser_format 'asJsonPretty'),

  PRIMARY KEY(identifier),
  UNIQUE(project, id, name)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE JIRA_PROJECT_SECURITY_LEVEL
(
  project string, /* NRMBA */
  id string,
  name string,
  description string,
  identifier string OPTIONS(val_pk 'project+name'),    
  isDefault boolean,
  issueSecuritySchemeId string,

  PRIMARY KEY(identifier),
  UNIQUE(project, id, name)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE JIRA_PROJECT_PROPERTY
(
  project string, /* NRMBA */
  key string,
  identifier string OPTIONS(val_pk 'project+key'),
  "value" string,

  PRIMARY KEY(identifier)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE JIRA_PROJECT_ROLE
(
  project string, /* NRMBA */
  id integer,
  name string,
  identifier string OPTIONS(val_pk 'project+name'),
  description string,
  admin boolean,
  actors json OPTIONS(parser_format 'asJsonPretty'),
  currentUserRole boolean,
  default boolean,
  roleConfigurable boolean,
  scope json OPTIONS(parser_format 'asJsonPretty'),
  translatedName string,

  PRIMARY KEY(identifier)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE JIRA_PROJECT_VERSION
(
  project string,
  projectId long,
  id string,
  name string,
  identifier string OPTIONS(val_pk 'projectId+id'),
  approvers json OPTIONS(parser_format 'asJsonPretty'),
  archived boolean,
  description string,
  driver string,
  expand string,
  issuesStatusForFixVersion json OPTIONS(parser_format 'asJsonPretty'),
  moveUnfixedIssuesTo string,
  operations json OPTIONS(parser_format 'asJsonPretty'),
  overdue boolean,
  releaseDate string,
  released boolean,
  startDate string,
  userReleaseDate string,
  userStartDate string,

  PRIMARY KEY(identifier)
)
OPTIONS(updatable true);

CREATE FOREIGN TABLE JIRA_PROJECT_VERSION_RELATED_WORK
(
  version string, /* NRMBA */
  issueId integer,
  identifier string OPTIONS(val_pk 'project+version+issueId'),
  category string,
  relatedWorkId string,
  title string,
  url string,

  PRIMARY KEY(identifier)
)
OPTIONS(updatable true);

/***** END PROJECTS *****/
