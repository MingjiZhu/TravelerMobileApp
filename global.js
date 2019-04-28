
/**
 * File Name: global.js
 *
 * Revision History:
 *       Mingji Zhu, 2019-04-10 : Created
 */


function MZbtnUpdate_click() {
    MZupdateTrip();
}

function MZbtnSave_click() {
    MZAddTrip();
}

function MZbtnDelete_click() {
    MZdeleteTrip();
}

function MZEditTripPage_show() {
    MZshowCurrentTrip();
}

function MZAddTripPage_show() {
    MZshowAddTrip();
}

function MZbtnClearData_click() {
    MZclearDatabase();
}

function MZViewTripPage_show() {
    MZgetTrip();
}

function MZPlanViewPage_show() {
    MZgetPlan();
}

function MZbtnSavePlan_click() {
    MZAddPlan();
}

function MZbtnUpdatePlan_click() {
    MZupdatePlan();
}

function MZbtnDeletePlan_click() {
    MZdeletePlan();
}

function MZbtnCancelEditPlan_click() {
    MZcancelEditPlan();
}

function MZPlanEditPage_show() {
    MZshowCurrentPlan();
}

function btnCapturePhoto_click() {
    capturePhoto();
}

function btnLoadFromLibrary_click() {
    loadFromLibrary();
}

function btnCapturePhotoEdit_click() {
    capturePhotoEdit();
}

function btnLoadFromLibraryEdit_click() {
    loadFromLibraryEdit();
}

function MZinit() {
    console.info("DOM is ready");

    $("#MZbtnSave").on("click", MZbtnSave_click);

    $("#MZbtnClearData").on("click",MZbtnClearData_click);
    $("#MZAddTripPage").on("pageshow",MZAddTripPage_show);
    $("#MZEditTripPage").on("pageshow",MZEditTripPage_show);
    $("#MZViewTripPage").on("pageshow",MZViewTripPage_show);

    $("#MZbtnDelete").on("click",MZbtnDelete_click);
    $("#MZbtnUpdate").on("click", MZbtnUpdate_click);

    $("#MZPlanViewPage").on("pageshow",MZPlanViewPage_show);
    $("#MZPlanEditPage").on("pageshow",MZPlanEditPage_show);

    $("#MZbtnSavePlan").on("click", MZbtnSavePlan_click);
    $("#MZbtnUpdatePlan").on("click", MZbtnUpdatePlan_click);
    $("#MZbtnDeletePlan").on("click", MZbtnDeletePlan_click);
    $("#MZbtnCancelEditPlan").on("click", MZbtnCancelEditPlan_click);

    $("#btnCapturePhoto").on("click", btnCapturePhoto_click);
    $("#btnLoadFromLibrary").on("click", btnLoadFromLibrary_click);

    $("#btnCapturePhotoEdit").on("click", btnCapturePhotoEdit_click);
    $("#btnLoadFromLibraryEdit").on("click", btnLoadFromLibraryEdit_click);

}
function MZinitDB(){
    try{
        DB.MZcreateDatabase();
        if (db) {
            console.info("Creating tables...");
            DB.MZcreateTables();
        }
        else{
            console.error("Error: Cannot create tables: database does not exist");
        }
    }
    catch(e){
        console.error("Error: (Fatal) error in initDB(). Can not proceed.");
    }
}
$(document).ready(function () {
    MZinit();
    MZinitDB();
});