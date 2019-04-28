/**
 * File Name: database.js
 *
 * Revision History:
 *       Mingji Zhu, 2019-04-10 : Created
 */
var db;

function errorHandler(tx, error) {
    console.error("SQL error: " + tx + " (" + error.code + ")--" + error.message);
}

var DB = {
    MZcreateDatabase: function () {
        var shortName = "MZTripDB";
        var version = "1.0";
        var displayName = "DB for Traveler App";
        var dbSize = 2 * 1024 * 1024;

        console.info("Creating database ...");
        //or window.openDatabase()
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

        function dbCreateSuccess() {
            console.info("Success: Database creation successful.");
        }
    },

    MZcreateTables: function () {

        function successDrop() {
            console.info("Success: Dropping Table successful. ");
        }

        function successCreate() {
            console.info("Success: Create Table successful. ");
        }

        function successInsert() {
            console.info("Success: Data insert successful");
        }

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            var options = [];
            //repeat for other tables
            //=======================

            //don't want to drop any table now. only if necessary.
            //=====================================================
            console.info("Dropping Table rate if exists...");
            var sqlDroprate = "DROP TABLE IF EXISTS rate;";


            tx.executeSql(sqlDroprate, options, successDrop, errorHandler);
            //=====================================================
            //uncomment if necessary

            console.info("Creating Table: rate...");
            var sqlCreaterate = "CREATE TABLE IF NOT EXISTS rate("
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";

            tx.executeSql(sqlCreaterate, options, successCreate, errorHandler);

            console.info("Inserting data to Table rate...");
            //'' or "" both works.
            var sqlInsertrate = ["INSERT INTO rate(name) VALUES('1');",
                " INSERT INTO rate(name) VALUES('2');",
                " INSERT INTO rate(name) VALUES('3');",
                " INSERT INTO rate(name) VALUES('4');",
                " INSERT INTO rate(name) VALUES('5');"];

            for (var i = 0; i < sqlInsertrate.length; i++) {
                tx.executeSql(sqlInsertrate[i], options, successInsert, errorHandler);

            }
            //===================================================================

            console.info("Creating trip table:");
            //table with foreign key snippet
            var sqlCreatetrip = "CREATE TABLE IF NOT EXISTS trip(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "spotName VARCHAR(30) NOT NULL," +
                "country TEXT," +
                "comment TEXT," +
                "tripDate DATE," +
                "rateId INTEGER NOT NULL," +
                "photo VARCHAR(50)," +
                "FOREIGN KEY(rateId) REFERENCES rate(id));";
            tx.executeSql(sqlCreatetrip, options, successCreate, errorHandler);

            console.info("Creating plan table:");
            //table with foreign key snippet
            var sqlCreatePlan = "CREATE TABLE IF NOT EXISTS plan(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "planName VARCHAR(30) NOT NULL," +
                "transport TEXT," +
                "hotel TEXT," +
                "departureDate DATE);";
            tx.executeSql(sqlCreatePlan, options, successCreate, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    MZdropTables: function () {
        function successDrop() {
            console.info("Success: Dropping Table successful. ");
        }

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            var options = [];
            //repeat for other tables
            //=======================
            console.info("Dropping Table: rate");
            var sqlrate = "DROP TABLE IF EXISTS rate;";

            tx.executeSql(sqlrate, options, successDrop, errorHandler);
            //=====================================================
            console.info("Dropping Table: trip");
            var sqltrip = "DROP TABLE IF EXISTS trip;";

            tx.executeSql(sqltrip, options, successDrop, errorHandler);

            console.info("Dropping Table: plan");
            var sqlplanp = "DROP TABLE IF EXISTS plan;";

            tx.executeSql(sqlplanp, options, successDrop, errorHandler);

        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
