-- For use only by client: Oxford
-- For use only on Elements version 5.18.0

-- Running this script against any other version may cause harm to your system and is a 
-- contravention of your service agreement with Symplectic. If you wish to run the script
-- against any other version, please contact Symplectic for confirmation that it safe to 
-- do so. Include a copy of this script and the current version number of your Elements
-- system in your message.

-- Purpose: to delete existing "external record resolutions". For example, deletes RT1-RT2 item 
-- associations which have been registered by the DBMigrateRepositoryTools tool.

-- USER VARIABLES --------------------------------------------------------------------------------------------------

-- The category and source name of the source for which to clear out external record resolutions.
DECLARE @Category VARCHAR(50) = 'publication'
DECLARE @Source VARCHAR(50) = 'hyrax'

-- To delete resolutions which were created by the DBMigrateRepositoryTools tool, this should be set to 'import-tools'.
DECLARE @DecisionAgentType NVARCHAR(50) = 'import-tools'

-- Test the script with this variable set to 1 
-- Once you are satisfied with test results, set this variable to 0 and run the script again to action all changes.
DECLARE	@TestMode bit = 1
;

-- DO NOT EDIT BELOW THIS LINE -------------------------------------------------------------------------------------

BEGIN TRANSACTION MainBlock; -- begin main transaction

-- Get various IDs from the string user variables
DECLARE @Category_ID INT
SELECT TOP(1) @Category_ID = ID FROM DEF_tblCategory WHERE Name = @Category

DECLARE @Source_ID INT
SELECT TOP(1) @Source_ID = ID FROM DEF_tblSource WHERE Category_ID = @Category_ID AND Name = @Source

DECLARE @DecisionAgentType_ID INT
SELECT TOP(1) @DecisionAgentType_ID = ID FROM DEF_tblDecisionAgentType WHERE Name = @DecisionAgentType

-- Delete the external record resolutions which map external items of the provided category and source to internal items of the provided category,
-- where the decision agent is the type specified. We should specify the decision agent so that we are able to clear out resolutions registered
-- by import-tools code, but leave in place any which have been created by other parts of the system.
DELETE RESOLUTION_tblExternalRecord
WHERE ExternalCategory_ID = @Category_ID AND ExternalSource_ID = @Source_ID AND InternalCategory_ID = @Category_ID AND DecisionAgentType_ID = @DecisionAgentType_ID

SELECT CAST(@@ROWCOUNT AS VARCHAR(7)) + ' previously imported resolutions deleted.' AS Result

-- diagnostic report - should return all zeroes
DECLARE @Report xml;
EXEC sy_DIAGNOSTICS_SanityCheck @Report = @Report OUTPUT;

-- if any part of the report has failed, output the report, roll back the transaction and raise an error
IF (SELECT @Report.exist('/diagnostics-report/*[not(. = "0")]')) = 1 BEGIN
	SELECT @Report AS [Diagnostic Report (all values should be zero)];
	ROLLBACK TRANSACTION MainBlock;
	RAISERROR('Diagnostic database check failed! All changes have been rolled back.', 18, 0);
END
ELSE BEGIN
-- if @TestMode = 0, commit the transaction 
IF @TestMode = 0 BEGIN
	COMMIT TRANSACTION MainBlock
	PRINT('');
	PRINT('Changes committed');
END
-- otherwise roll back transaction as this is a test run
ELSE BEGIN
	ROLLBACK TRANSACTION MainBlock;
	PRINT('');
	PRINT('This was a test run - all changes have been rolled back.');
END;

END; -- end main transaction
