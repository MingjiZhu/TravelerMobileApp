/**
 * File Name: util.js
 *
 * Revision History:
 *       Mingji Zhu, 2019-04-10 : Created
 */

function MZDoValidate_frmAdd(){
    var form = $("#MZAddForm");
    form.validate({
        rules:{
            AddSpotName:{
                required: true,
                rangelength:[2,20]
            },
            AddCountry:{
                required: true,
                rangelength:[2,20]
            },
            AddComments:{
                required: true,
                rangelength:[2,200]
            },
            AddTripDate:{
                required:true,
                dateCheck: true
            }
        },
        messages:{
            AddSpotName:{
                required: "Name is required",
                rangelength:"Length must be 2-30 characters long"
            },
            AddCountry:{
                required:"Visited country is required",
                rangelength:"Length must be 2-30 characters long"
            },
            AddComments:{
                required:"Visited comment is required",
                rangelength:"Length must be 2-200 characters long"
            },
            AddTripDate:{
                required:"Visited date is required",
                dateCheck:"Visited Date can not be in the future"
            }
        }
    });
    return form.valid();
}
jQuery.validator.addMethod("dateCheck",
    function(value, element)
    {
        if (new Date(value) < new Date(new Date().toDateString())) {
            return true;
        }
        return false;
    },
    "Visited Date Check");

function MZDoValidate_frmEdit(){
    var form = $("#MZEditForm");
    form.validate({
        rules:{
            EditSpotName:{
                required: true,
                rangelength:[2,20]
            },
            EditCountry:{
                required: true,
                rangelength:[2,20]
            },
            EditComments:{
                required: true,
                rangelength:[2,200]
            },
            EditTripDate:{
                required:true,
                dateEditCheck: true
            }
        },
        messages:{
            EditSpotName:{
                required: "Name is required",
                rangelength:"Length must be 2-30 characters long"
            },
            EditCountry:{
                required:"Visited country is required",
                rangelength:"Length must be 2-30 characters long"
            },
            EditComments:{
                required:"Visited comment is required",
                rangelength:"Length must be 2-200 characters long"
            },
            EditTripDate:{
                required:"Visited date is required",
                dateEditCheck:"Visited Date can not be in the future"
            }
        }
    });
    return form.valid();
}
jQuery.validator.addMethod("dateEditCheck",
    function(value, element)
    {
        if (new Date(value) < new Date(new Date().toDateString())) {
            return true;
        }
        return false;
    },
    "Visited Date Check");

function MZCheckPicture() {
    var  imgSrc= $('#imgSnap').attr('src');
    if (imgSrc==="") {
        alert("You forget to upload picture");
        return false;
    }
    return true;
}
function MZDoValidate_frmAddPlan(){
    var form = $("#MZAddPlanForm");
    form.validate({
        rules:{
            AddPlanName:{
                required: true,
                rangelength:[2,20]
            },
            AddTransportation:{
                required: true,
                rangelength:[2,50]
            },
            AddHotel:{
                required: true,
                rangelength:[2,20]
            },
            AddDepartureDate:{
                required:true,
                datePCheck:true
            }
        },
        messages:{
            AddPlanName:{
                required: "Destination is required",
                rangelength:"Length must be 2-30 characters long"
            },
            AddTransportation:{
                required:"Transportation information is required",
                rangelength:"Length must be 2-50 characters long"
            },
            AddHotel:{
                required:"Hotel information is required",
                rangelength:"Length must be 2-30 characters long"
            },
            AddDepartureDate:{
                required:"Departure date is required",
                datePCheck:"Departure date can not be in the past"
            }
        }
    });
    return form.valid();
}
jQuery.validator.addMethod("datePCheck",
    function(value, element)
    {
        if (new Date(value) > new Date(new Date().toDateString())) {
            return true;
        }
        return false;
    },
    "Visited Date Check");

function MZDoValidate_frmEditPlan(){
    var form = $("#MZEditPlanForm");
    form.validate({
        rules:{
            EditPlanName:{
                required: true,
                rangelength:[2,20]
            },
            EditTransportation:{
                required: true,
                rangelength:[2,50]
            },
            EditHotel:{
                required: true,
                rangelength:[2,20]
            },
            EditDepartureDate:{
                required:true,
                datePECheck:true
            }
        },
        messages:{
            EditPlanName:{
                required: "Destination is required",
                rangelength:"Length must be 2-30 characters long"
            },
            EditTransportation:{
                required:"Transportation information is required",
                rangelength:"Length must be 2-50 characters long"
            },
            EditHotel:{
                required:"Hotel information is required",
                rangelength:"Length must be 2-30 characters long"
            },
            EditDepartureDate:{
                required:"Departure date is required",
                datePECheck:"Departure date can not be in the past"
            }
        }
    });
    return form.valid();
}
jQuery.validator.addMethod("datePECheck",
    function(value, element)
    {
        if (new Date(value) > new Date(new Date().toDateString())) {
            return true;
        }

        return false;
    },
    "Visited Date Check");