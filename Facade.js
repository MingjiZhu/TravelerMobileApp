/**
 * File Name: Facade.js
 *
 * Revision History:
 *       Mingji Zhu, 2019-04-10 : Created
 */


function MZclearDatabase(){
    var result = confirm("Really want to clear database?");
    if (result) {
        try {
            DB.MZdropTables();
            alert("Database cleared!");
        } catch (e) {
            alert(e);
        }
    }
}
function MZshowAddTrip(){

    MZupdateTypesDropdown();
}

function MZupdateTypesDropdown(){
    $("#AddStarRate").html("");
    function callback(tx,results) {
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            if (row['name']==="1") {
                $("#AddStarRate").append("<option value='" +row['id']+"' selected>" + row['name'] +"</option>");
            }
            else{
                $("#AddStarRate").append("<option value='" +row['id']+"'>" + row['name'] +"</option>");
            }

        }
        $("#AddStarRate").selectmenu("refresh");

    }
    Rate.MZselectAll(callback);
}

function MZAddTrip(){
    if(MZDoValidate_frmAdd()&&MZCheckPicture())
    {
        console.info("Add Trip Form Validation is successful.");
        var sName = $("#AddSpotName").val();
        var country =$("#AddCountry").val();
        var comments = $("#AddComments").val();
        var vDate = $("#AddTripDate").val();
        var rateNum = $("#AddStarRate").val();

        var photo = $('#imgSnap').attr('src');

        var options =[sName,country,comments,vDate,rateNum,photo];

        Trip.MZinsert(options);
        $("#AddSpotName").val("");
        $("#AddCountry").val("");
        $("#AddComments").val("");
        $("#AddTripDate").val("");
        $("#AddStarRate").val("");
        $("#imgSnap").attr("src",'');
    }
    else{
        console.error("Add Trip Form Validation failed.");
    }
}

function MZgetTrip(){
    function callback(tx, results){
        var htmlCode ="";

        for (var i = 0; i < results.rows.length; i++){
            var row = results.rows[i];

            htmlCode += "<li>" + "<a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                "<h1>Spot Name: " + row['spotName'] + "</h1>" +
                "<p>Country: " + row['country'] + "</p>" +
                "<p>Rating: " + row['rateId'] + "</p>" +
                "</a>" +
                "</li>";
        }

        var lv=$("#MZTripList");
        lv = lv.html(htmlCode);
        lv.listview("refresh");

        function clickHandler(){
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop('href','#MZEditTripPage');
        }
        $("#MZTripList a").on("click", clickHandler);
    }
    Trip.MZselectAll(callback);
}

function MZupdateRateDropdownEdit(typeId){

    $("#EditStarRate").html("");
    function callback(tx,results) {
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            if (row['id']===typeId) {
                $("#EditStarRate").append("<option value='" +row['id']+"' selected>" + row['name'] +"</option>");
            }
            else{
                $("#EditStarRate").append("<option value='" +row['id']+"'>" + row['name'] +"</option>");
            }

        }
        $("#EditStarRate").selectmenu("refresh");

    }
    Rate.MZselectAll(callback);
}
function MZshowCurrentTrip(){
    var id = localStorage.getItem("id");
    var options =[id];

    function callback(tx, results){
        var row = results.rows[0];

        MZupdateRateDropdownEdit(row['rateId']);

        console.info("Spot Name:" + row['spotName']);
        console.info("Country:" + row['country']);
        console.info("Comment:" + row['comment']);
        console.info("Trip Date:" + row['tripDate']);
        console.info("Rate:" + row['rateId']);

        $("#EditSpotName").val(row['spotName']);
        $("#EditCountry").val(row['country']);
        $("#EditComments").val(row['comment']);
        $("#EditTripDate").val(row['tripDate']);
        $("#EditStarRate").val(row['rateId']);
        $("#imgSnapEdit").attr("src",row['photo']);
    }
    Trip.MZselect(callback, options);
}
function MZupdateTrip() {
    if (MZDoValidate_frmEdit()) {
        console.info("Update Validation is successful");
        var id = localStorage.getItem("id");
        var sName = $("#EditSpotName").val();
        var country =$("#EditCountry").val();
        var comments = $("#EditComments").val();
        var vDate = $("#EditTripDate").val();
        var rateNum = $("#EditStarRate").val();
        var photo = $("#imgSnapEdit").attr('src');
        var options = [sName,country,comments,vDate, rateNum, photo, id];
        Trip.MZupdate(options);
        $(location).prop("href", "#MZViewTripPage");
    }
}
function MZdeleteTrip(){
    var id=localStorage.getItem("id");
    var options=[id];
    Trip.MZdelete(options);
    $(location).prop("href", "#MZViewTripPage");
}

function MZgetPlan(){
    function callback(tx, results){
        var htmlCode ="";

        for (var i = 0; i < results.rows.length; i++){
            var row = results.rows[i];

            htmlCode += "<li>" + "<a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                "<h1>Destination: " + row['planName'] + "</h1>" +
                "<p>Transportation Information: " + row['transport'] + "</p>" +
                "<p>Hotel: " + row['hotel'] + "</p>" +
                "<p>Departure Date: " + row['departureDate'] + "</p>" +
                "</a>" +
                "</li>";

        }

        var lv=$("#MZPlanList");
        lv = lv.html(htmlCode);
        lv.listview("refresh");

        function clickHandler(){
            localStorage.setItem("planId", $(this).attr("data-row-id"));
            $(location).prop('href','#MZPlanEditPage');
        }
        $("#MZPlanList a").on("click", clickHandler);
    }
    Plan.MZselectAll(callback);
}

function MZAddPlan(){
    if(MZDoValidate_frmAddPlan())
    {
        console.info("Add Trip Form Validation is successful.");
        var pName = $("#AddPlanName").val();
        var tinfo = $("#AddTransportation").val();
        var hotel = $("#AddHotel").val();
        var dDate = $("#AddDepartureDate").val();


        var options =[pName,tinfo,hotel,dDate];

        Plan.MZinsert(options);
        $("#AddPlanName").val("");
        $("#AddTransportation").val("");
        $("#AddHotel").val("");
        $("#AddDepartureDate").val("");
        $(location).prop("href", "#MZPlanViewPage");
    }
    else{
        console.error("Add Plan Form Validation failed.");
    }
}
function MZupdatePlan(){
    if (MZDoValidate_frmEditPlan()) {
        console.info("Plan Update Validation is successful");
        var id = localStorage.getItem("planId");
        var pName = $("#EditPlanName").val();
        var tranport = $("#EditTransportation").val();
        var hotel = $("#EditHotel").val();
        var dDate =$("#EditDepartureDate").val();
        var options = [pName,tranport,hotel,dDate,id];
        Plan.MZupdate(options);
        $(location).prop("href", "#MZPlanViewPage");
    }
}

function MZdeletePlan(){
    var id=localStorage.getItem("planId");
    var options=[id];
    Plan.MZdelete(options);
    $(location).prop("href", "#MZPlanViewPage");
}

function MZcancelEditPlan(){
    MZshowCurrentPlan();
}
function MZshowCurrentPlan(){
    var id = localStorage.getItem("planId");
    var options =[id];

    function callback(tx, results){
        var row = results.rows[0];

        console.info("Destination:" + row['planName']);
        console.info("Transportation:" + row['transport']);
        console.info("Hotel:" + row['hotel']);
        console.info("Departure Date:" + row['departureDate']);

        $("#EditPlanName").val(row['planName']);
        $("#EditTransportation").val(row['transport']);
        $("#EditHotel").val(row['hotel']);
        $("#EditDepartureDate").val(row['departureDate']);
    }
    Plan.MZselect(callback, options);
}

function capturePhoto() {
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true
    };

    function successCallback(imageData) {
        var image = $("#imgSnap");
        image.prop("src", "data:image/jpeg;base64," + imageData);
    }

    function errorCallback(error) {
        alert("Error: " + error.message);
    }

    navigator.camera.getPicture(successCallback, errorCallback, options);
}

function loadFromLibrary() {
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true
    };

    function successCallback(imageData) {
        var image = $("#imgSnap");
        image.prop("src", "data:image/jpeg;base64," + imageData);
    }

    function errorCallback(error) {
        alert("Error: " + error.message);
    }

    navigator.camera.getPicture(successCallback, errorCallback, options);
}
function capturePhotoEdit() {
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true
    };

    function successCallback(imageData) {
        var image = $("#imgSnapEdit");
        image.prop("src", "data:image/jpeg;base64," + imageData);
    }

    function errorCallback(error) {
        alert("Error: " + error.message);
    }

    navigator.camera.getPicture(successCallback, errorCallback, options);
}

function loadFromLibraryEdit() {
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true
    };

    function successCallback(imageData) {
        var image = $("#imgSnapEdit");
        image.prop("src", "data:image/jpeg;base64," + imageData);
    }

    function errorCallback(error) {
        alert("Error: " + error.message);
    }

    navigator.camera.getPicture(successCallback, errorCallback, options);
}