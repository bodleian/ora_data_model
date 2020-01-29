-- For use only by client: Oxford
-- For use only on Elements version 5.18.0

-- Running this script against any other version may cause harm to your system and is a 
-- contravention of your service agreement with Symplectic. If you wish to run the script
-- against any other version, please contact Symplectic for confirmation that it safe to 
-- do so. Include a copy of this script and the current version number of your Elements
-- system in your message.

-- This script enables (or disables) differential harvest for teh Hyrax data source

-- USER VARIABLES --------------------------------------------------------------------------------------------------

-- Test the script with this variable set to 1 
-- Once you are satisfied with test results, set this variable to 0 and run the script again to action all changes.
DECLARE	@TestMode BIT = 1

-- To disable differential harvest, adjust this value to 0 and rerun the script.
DECLARE @HyraxDifferentialHarvestEnabled BIT = 1

;

-- DO NOT EDIT BELOW THIS LINE -------------------------------------------------------------------------------------

BEGIN TRANSACTION MainBlock; -- begin main transaction

UPDATE DEF_tblSource
SET DifferentialHarvestEnabled = @HyraxDifferentialHarvestEnabled
WHERE Category_ID = 1 AND Name = 'hyrax'

UPDATE GLOBAL_tblGlobal
SET Cache_ID = Cache_ID + 1

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