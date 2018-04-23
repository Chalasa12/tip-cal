$(document).ready(function() {
var tipVal=5;
var groupVal=1;

$("#tipplusbtn").click(function(){
    $("#tipinputtext").val((tipVal+=5)+"%");
    updateTipAmounts();
});
$("#tipminusbtn").click(function(){
    $("#tipinputtext").val((tipVal-=5)+"%");
    updateTipAmounts();
});
$("#groupminusbtn").click(function(){
    $("#groupinput").val(groupVal-=1);
    updateTipAmounts();
});
$("#groupplusbtn").click(function(){
    $("#groupinput").val(groupVal+=1);
    updateTipAmounts();
});
$("#billamt").change(function(){
    updateTipAmounts();
})

})
function updateTipAmounts(){
    var billAmt= $("#billamt").val();
    var billVal= parseFloat(billAmt);
    var tip= $("#tipinputtext").val().slice(0,-1);
    var tipVal= parseFloat(tip);
    var group = $("#groupinput").val();
    var groupVal= parseFloat(group);
    var tippp=$("#tipperperson").html()
    var tipppVal= parseFloat(tippp);
    var totalpp= $("#totalperperson").html();
    var totalppVal= parseFloat(totalpp);
    var fullamt=$(".fullamt2").html().slice(1);
    var fullamtVal = parseFloat(fullamt);
var tipPerPerson = (billVal *(tipVal/100))/groupVal;
var totalPerPerson = billVal/groupVal+tipPerPerson ;
var fullAmt = totalPerPerson * groupVal;

$("#tipperperson").html(tipPerPerson.toFixed(2));
$("#totalperperson").html(totalPerPerson.toFixed(2));
$(".fullamt2").html("$"+fullAmt.toFixed(2));
}
