/**
 * File Name: DAL.js
 *
 * Revision History:
 *       Mingji Zhu, 2019-04-10 : Created
 */
var Trip = {
    MZinsert: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("New Trip Added");
        }

        function txFunction(tx) {
            var sql = "";
            sql = "INSERT INTO trip(spotName, country, comment, tripDate, rateId, photo) " +
                "VALUES(?,?,?,?,?,?);";
            tx.executeSql(sql, options, successInsert, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },

    MZselectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records.  ");
            var sql = "SELECT * FROM trip;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    MZselect: function (callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting a record.  ");
            var sql = "SELECT * FROM trip WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    MZupdate: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successUpdate() {
            console.info("Success: Update successful");
            alert("Trip Updated successfully");
        }

        function txFunction(tx) {
            console.info("Updating..  ");
            var sql = "";
            sql = "UPDATE trip " +
                "SET spotName=?, country=?, comment=?, tripDate=?, rateId=?, photo=?"+
                "WHERE id=?;";
            tx.executeSql(sql, options, successUpdate, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },

    MZdelete: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successDelete() {
            console.info("Success: Delete successful");
            alert("Trip Deleted successfully");
        }

        function txFunction(tx) {
            console.info("Deleting..  ");
            var sql = "";
            sql = "DELETE FROM trip " +
                "WHERE id=?;";
            tx.executeSql(sql, options, successDelete, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var Rate = {
    MZselectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records.  ");
            var sql = "SELECT * FROM rate;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var Plan = {
    MZinsert: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("New Plan Added");
        }

        function txFunction(tx) {
            var sql = "";
            sql = "INSERT INTO plan(planName, transport, hotel, departureDate) VALUES(?,?,?,?);";
            tx.executeSql(sql, options, successInsert, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },

    MZselectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records.  ");
            var sql = "SELECT * FROM plan;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    MZselect: function (callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting a record.  ");
            var sql = "SELECT * FROM plan WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    MZupdate: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successUpdate() {
            console.info("Success: Update successful");
            alert("Trip Updated successfully");
        }

        function txFunction(tx) {
            console.info("Updating..  ");
            var sql = "";
            sql = "UPDATE plan " +
                "SET planName=?, transport=?, hotel=?, departureDate=?"+
                "WHERE id=?;";
            tx.executeSql(sql, options, successUpdate, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },

    MZdelete: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successDelete() {
            console.info("Success: Delete successful");
            alert("Plan Deleted successfully");
        }

        function txFunction(tx) {
            console.info("Deleting..  ");
            var sql = "";
            sql = "DELETE FROM plan " +
                "WHERE id=?;";
            tx.executeSql(sql, options, successDelete, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};


