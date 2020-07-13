var showLinea1 = 0;
$('.lvl0alcance').css('display', 'none');
$('.lvl1l1alcance').css('display', 'none');
$('.lvl1l2alcance').css('display', 'none');
$('.lvl1l3alcance').css('display', 'none');
$('.lvl2l1alcance').css('display', 'none');
$('.lvl2l2alcance').css('display', 'none');
$('.lvl2l3alcance').css('display', 'none');
var hideLinea1Nivel1var = 0;
var hideLinea2Nivel1var = 0;
var hideLinea3Nivel1var = 0;

function consolelog(data){
    console.log(data);
}

function stopVideo(){
    $('video')[0].pause();
}

function removeClassFunction(x) {
    if (x.matches) {
        $('.genealogia').removeClass('justify-content-center');
    }
    else{
        $('.genealogia').addClass('justify-content-center');
    }
}

var x = window.matchMedia("(max-width: 1200px)");
removeClassFunction(x);
x.addListener(removeClassFunction);

function addProd(prod){
    var actual = $('#' + prod).val();
    var nuevo = (parseInt(actual) + parseInt(1));
    $('#' + prod).val(nuevo);
}

function remProd(prod){
    $('#' + prod).val(($('#' + prod).val() - 1));
}

var contador = 0;
var counter = 0;
var countAct = 0;

var kDoblel1lvl0 = false;
var kDoblel2lvl0 = false;
var kDoblel3lvl0 = false;

var kDoblel1lvl1 = false;
var kDoblel2lvl1 = false;
var kDoblel3lvl1 = false;

function setPzKitIni(KitSelect, inppzpiw, inppzwa, inppzop){
    var numkitIni = $("#"+ KitSelect).val();
    var countInfluencerslvl0 = $("#countInfluencerslvl0").val();

    if(numkitIni == 1 ){
        $("#" + inppzpiw).val(1);
        $("#" + inppzwa).val('0');
        $("#" + inppzop).val('0');
        
        if(kDoblel1lvl0 == true && inppzpiw == "lvl1l1pzpiw"){
            if($("#countInfluencerslvl0").val() > 0 && $("#lvl1l2Registro").prop('checked') || $("#countInfluencerslvl0").val() > 0 && $("#lvl1l3Registro").prop('checked')){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
                kDoblel1lvl0 = false;
            }
            else{
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 1)
                kDoblel1lvl0 = false;
            }
        }
        if(kDoblel2lvl0 == true && inppzpiw == "lvl1l2pzpiw"){
            if($("#countInfluencerslvl0").val() > 0 && $("#lvl1l1Registro").prop('checked') || $("#countInfluencerslvl0").val() > 0 && $("#lvl1l3Registro").prop('checked')){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
                kDoblel2lvl0 = false;
            }
            else{
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 1)
                kDoblel2lvl0 = false;
            }
        }
        if(kDoblel3lvl0 == true && inppzpiw == "lvl1l3pzpiw"){
            if($("#countInfluencerslvl0").val() > 0 && $("#lvl1l1Registro").prop('checked') || $("#countInfluencerslvl0").val() > 0 && $("#lvl1l2Registro").prop('checked')){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
                kDoblel3lvl0 = false;
            }
            else{
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 1)
                kDoblel3lvl0 = false;
            }
        }

        $("#countInfluencerslvl0txt").text($("#countInfluencerslvl0").val());

        if(kDoblel1lvl1 == true && inppzpiw == "lvl2l1pzpiw"){
            $("#countInfluencerslvl1l1").val(1)
            kDoblel1lvl1 = false;
        }
        if(kDoblel2lvl1 == true && inppzpiw == "lvl2l2pzpiw"){
            $("#countInfluencerslvl1l2").val(1)
            kDoblel2lvl1 = false;
        }
        if(kDoblel3lvl1 == true && inppzpiw == "lvl2l3pzpiw"){
            $("#countInfluencerslvl1l3").val(1)
            kDoblel3lvl1 = false;
        }

        $("#countInfluencerslvl1l1txt").text($("#countInfluencerslvl1l1").val());
        $("#countInfluencerslvl1l2txt").text($("#countInfluencerslvl1l2").val());
        $("#countInfluencerslvl1l3txt").text($("#countInfluencerslvl1l3").val());
    }

    if(numkitIni == 2 ){
        $("#" + inppzpiw).val('0');
        $("#" + inppzwa).val(1);
        $("#" + inppzop).val('0');

        if(kDoblel1lvl0 == true && inppzpiw == "lvl1l1pzpiw"){
            if($("#countInfluencerslvl0").val() > 0 && $("#lvl1l2Registro").prop('checked') || $("#countInfluencerslvl0").val() > 0 && $("#lvl1l3Registro").prop('checked')){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
                kDoblel1lvl0 = false;
            }
            else{
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 1)
                kDoblel1lvl0 = false;
            }
        }
        if(kDoblel2lvl0 == true && inppzpiw == "lvl1l2pzpiw"){
            if($("#countInfluencerslvl0").val() > 0 && $("#lvl1l1Registro").prop('checked') || $("#countInfluencerslvl0").val() > 0 && $("#lvl1l3Registro").prop('checked')){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
                kDoblel2lvl0 = false;
            }
            else{
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 1)
                kDoblel2lvl0 = false;
            }
        }
        if(kDoblel3lvl0 == true && inppzpiw == "lvl1l3pzpiw"){
            if($("#countInfluencerslvl0").val() > 0 && $("#lvl1l1Registro").prop('checked') || $("#countInfluencerslvl0").val() > 0 && $("#lvl1l2Registro").prop('checked')){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
                kDoblel3lvl0 = false;
            }
            else{
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 1)
                kDoblel3lvl0 = false;
            }
        }

        $("#countInfluencerslvl0txt").text($("#countInfluencerslvl0").val());

        if(kDoblel1lvl1 == true && inppzpiw == "lvl1l1pzpiw"){
            $("#countInfluencerslvl1l1").val(1)
            kDoblel1lvl1 = false;
        }
        if(kDoblel2lvl1 == true && inppzpiw == "lvl1l2pzpiw"){
            $("#countInfluencerslvl1l2").val(1)
            kDoblel2lvl1 = false;
        }
        if(kDoblel3lvl1 == true && inppzpiw == "lvl1l3pzpiw"){
            $("#countInfluencerslvl1l3").val(1)
            $("#countInfluencerslvl1l3txt").text($("#countInfluencerslvl1l3").val());
            kDoblel3lvl1 = false;
        }

        $("#countInfluencerslvl1l1txt").text($("#countInfluencerslvl1l1").val());
        $("#countInfluencerslvl1l2txt").text($("#countInfluencerslvl1l2").val());
        $("#countInfluencerslvl1l3txt").text($("#countInfluencerslvl1l3").val());
    }

    if(numkitIni == 3 ){
        $("#" + inppzpiw).val(1);
        $("#" + inppzwa).val('0');
        $("#" + inppzop).val(1);

        if(inppzpiw == "lvl1l1pzpiw"){
            if(kDoblel1lvl0 == false && $("#countInfluencerslvl0").val() != 0){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
                $("#countInfluencerslvl0txt").text($("#countInfluencerslvl0").val());
            }
            kDoblel1lvl0 = true;
        }
        if(inppzpiw == "lvl1l2pzpiw"){
            if(kDoblel2lvl0 == false && $("#countInfluencerslvl0").val() != 0){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
                $("#countInfluencerslvl0txt").text($("#countInfluencerslvl0").val());
            }
            kDoblel2lvl0 = true;
        }
        if(inppzpiw == "lvl1l3pzpiw"){
            if(kDoblel3lvl0 == false && $("#countInfluencerslvl0").val() != 0){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
                $("#countInfluencerslvl0txt").text($("#countInfluencerslvl0").val());
            }
            kDoblel3lvl0 = true;
        }

        if(inppzpiw == "lvl2l1pzpiw"){
            if(kDoblel1lvl1 == false){
                $("#countInfluencerslvl1l1").val(2)
            }
            kDoblel1lvl1 = true;
        }
        if(inppzpiw == "lvl2l2pzpiw"){
            if(kDoblel2lvl1 == false){
                $("#countInfluencerslvl1l2").val(2)
            }
            kDoblel2lvl1 = true;
        }
        if(inppzpiw == "lvl2l3pzpiw"){
            if(kDoblel3lvl1 == false){
                $("#countInfluencerslvl1l3").val(2)
            }
            kDoblel3lvl1 = true;
        }

        $("#countInfluencerslvl1l1txt").text($("#countInfluencerslvl1l1").val());
        $("#countInfluencerslvl1l2txt").text($("#countInfluencerslvl1l2").val());
        $("#countInfluencerslvl1l3txt").text($("#countInfluencerslvl1l3").val());
    }

    if(numkitIni == 4 ){
        $("#" + inppzpiw).val('0');
        $("#" + inppzwa).val(1);
        $("#" + inppzop).val(1);

        if(inppzpiw == "lvl1l1pzpiw"){
            if(kDoblel1lvl0 == false && $("#countInfluencerslvl0").val() != 0){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
            }
            else if(kDoblel1lvl0 == false && $("#countInfluencerslvl0").val() == 0){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(2))
            }
            kDoblel1lvl0 = true;
        }
        if(inppzpiw == "lvl1l2pzpiw"){
            if(kDoblel2lvl0 == false && $("#countInfluencerslvl0").val() != 0){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
            }
            else{
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(2))
            }
            kDoblel2lvl0 = true;
        }
        if(inppzpiw == "lvl1l3pzpiw"){
            if(kDoblel3lvl0 == false && $("#countInfluencerslvl0").val() != 0){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
            }
            else{
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(2))
            }
            kDoblel3lvl0 = true;
        }

        $("#countInfluencerslvl0txt").text($("#countInfluencerslvl0").val());

        if(inppzpiw == "lvl2l1pzpiw"){
            if(kDoblel1lvl1 == false && $("#countInfluencerslvl1l1").val() != 0){
                $("#countInfluencerslvl1l1").val(2)
            }
            kDoblel1lvl1 = true;
        }
        if(inppzpiw == "lvl2l2pzpiw"){
            if(kDoblel2lvl1 == false && $("#countInfluencerslvl2l2").val() != 0){
                $("#countInfluencerslvl1l2").val(2)
            }
            kDoblel2lvl1 = true;
        }
        if(inppzpiw == "lvl2l3pzpiw"){
            if(kDoblel3lvl1 == false && $("#countInfluencerslvl3l3").val() != 0){
                $("#countInfluencerslvl1l3").val(2)
            }
            kDoblel3lvl1 = true;
        }

        $("#countInfluencerslvl1l1txt").text($("#countInfluencerslvl1l1").val());
        $("#countInfluencerslvl1l2txt").text($("#countInfluencerslvl1l2").val());
        $("#countInfluencerslvl1l3txt").text($("#countInfluencerslvl1l3").val());
    }

    if(numkitIni == 5 ){
        $("#" + inppzpiw).val('0');
        $("#" + inppzwa).val('0');
        $("#" + inppzop).val(1);
        
        if(kDoblel1lvl0 == true && inppzpiw == "lvl1l1pzpiw"){
            if($("#countInfluencerslvl0").val() > 0 && $("#lvl1l2Registro").prop('checked') || $("#countInfluencerslvl0").val() > 0 && $("#lvl1l3Registro").prop('checked')){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
                kDoblel1lvl0 = false;
            }
            else{
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 1)
                kDoblel1lvl0 = false;
            }
        }
        if(kDoblel2lvl0 == true && inppzpiw == "lvl1l2pzpiw"){
            if($("#countInfluencerslvl0").val() > 0 && $("#lvl1l1Registro").prop('checked') || $("#countInfluencerslvl0").val() > 0 && $("#lvl1l3Registro").prop('checked')){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
                kDoblel2lvl0 = false;
            }
            else{
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 1)
                kDoblel2lvl0 = false;
            }
        }
        if(kDoblel3lvl0 == true && inppzpiw == "lvl1l3pzpiw"){
            if($("#countInfluencerslvl0").val() > 0 && $("#lvl1l1Registro").prop('checked') || $("#countInfluencerslvl0").val() > 0 && $("#lvl1l2Registro").prop('checked')){
                $("#countInfluencerslvl0").val(parseInt($("#countInfluencerslvl0").val()) + parseInt(1))
                kDoblel3lvl0 = false;
            }
            else{
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 1)
                kDoblel3lvl0 = false;
            }
        }

        $("#countInfluencerslvl0txt").text($("#countInfluencerslvl0").val());

        if(kDoblel1lvl1 == true && inppzpiw == "lvl2l1pzpiw"){
            $("#countInfluencerslvl1l1").val(1)
            kDoblel1lvl1 = false;
        }
        if(kDoblel2lvl1 == true && inppzpiw == "lvl2l2pzpiw"){
            $("#countInfluencerslvl1l2").val(1)
            kDoblel2lvl1 = false;
        }
        if(kDoblel3lvl1 == true && inppzpiw == "lvl2l3pzpiw"){
            $("#countInfluencerslvl1l3").val(1)
            kDoblel3lvl1 = false;
        }

        $("#countInfluencerslvl1l1txt").text($("#countInfluencerslvl1l1").val());
        $("#countInfluencerslvl1l2txt").text($("#countInfluencerslvl1l2").val());
        $("#countInfluencerslvl1l3txt").text($("#countInfluencerslvl1l3").val());
    }

    if(numkitIni == 6 ){
        $("#" + inppzpiw).val('0');
        $("#" + inppzwa).val('0');
        $("#" + inppzop).val('0');

        var couninflvl0 = $("#countInfluencerslvl0").val();
        if(inppzpiw == "lvl1l1pzpiw"){
            if(couninflvl0 == 2 || couninflvl0 == 4 || couninflvl0 == 6){
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 2)
                kDoblel1lvl0 = true;
            }
            else if($("#countInfluencerslvl0").val() > 0){
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 1)
                kDoblel1lvl0 = true;
            }
        }
        if(inppzpiw == "lvl1l2pzpiw"){
            if(couninflvl0 == 2 || couninflvl0 == 4 || couninflvl0 == 6){
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 2)
                kDoblel2lvl0 = true;
                consolelog("descuento kit doble")
            }
            else if($("#countInfluencerslvl0").val() > 0){
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 1)
                kDoblel2lvl0 = true;
            }
        }
        if( inppzpiw == "lvl1l3pzpiw"){
            if(couninflvl0 == 2 || couninflvl0 == 4 || couninflvl0 == 6){
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 2)
                kDoblel3lvl0 = true;
            }
            else if($("#countInfluencerslvl0").val() > 0){
                $("#countInfluencerslvl0").val($("#countInfluencerslvl0").val() - 1)
                kDoblel3lvl0 = true;
            }
        }

        $("#countInfluencerslvl0txt").text($("#countInfluencerslvl0").val());

        if(inppzpiw == "lvl2l1pzpiw"){
            $("#countInfluencerslvl1l1").val('0')
            kDoblel1lvl1 = true;
        }
        if(inppzpiw == "lvl2l2pzpiw"){
            $("#countInfluencerslvl1l2").val('0')
            kDoblel2lvl1 = true;
        }
        if(inppzpiw == "lvl2l3pzpiw"){
            $("#countInfluencerslvl1l3").val('0')
            kDoblel3lvl1 = true;
        }

        $("#countInfluencerslvl1l1txt").text($("#countInfluencerslvl1l1").val());
        $("#countInfluencerslvl1l2txt").text($("#countInfluencerslvl1l2").val());
        $("#countInfluencerslvl1l3txt").text($("#countInfluencerslvl1l3").val());
    }

    if(numkitIni == 0){
        $("#" + inppzpiw).val('0');
        $("#" + inppzwa).val('0');
        $("#" + inppzop).val('0');
        var countInfluencerslvl0 = $("#countInfluencerslvl0").val();
        (inppzpiw == "lvl1l1pzpiw" || inppzpiw == "lvl1l2pzpiw" || inppzpiw == "lvl1l3pzpiw") ? $("#countInfluencerslvl0").val((parseInt(countInfluencerslvl0) - parseInt(1))) : null;
        (inppzpiw == "lvl1l1pzwa" || inppzpiw == "lvl1l2pzwa" || inppzpiw == "lvl1l3pzwa") ? $("#countInfluencerslvl0").val((parseInt(countInfluencerslvl0) - parseInt(1))) : null;
        (inppzpiw == "lvl1l1pzop" || inppzpiw == "lvl1l2pzop" || inppzpiw == "lvl1l3pzop") ? $("#countInfluencerslvl0").val((parseInt(countInfluencerslvl0) - parseInt(1))) : null;
        $("#countInfluencerslvl0txt").text($("#countInfluencerslvl0").val());

        (inppzpiw == "lvl2l1pzpiw" || inppzwa == "lvl2l1pzwa" || inppzop == "lvl2l1pzop") ? $("#countInfluencerslvl1l1").val(0) : null;
        (inppzpiw == "lvl2l2pzpiw" || inppzwa == "lvl2l2pzwa" || inppzop == "lvl2l2pzop") ? $("#countInfluencerslvl1l2").val(0) : null;
        (inppzpiw == "lvl2l3pzpiw" || inppzwa == "lvl2l3pzwa" || inppzop == "lvl2l3pzop") ? $("#countInfluencerslvl1l3").val(0) : null;

        $("#countInfluencerslvl1l1txt").text($("#countInfluencerslvl1l1").val());
        $("#countInfluencerslvl1l2txt").text($("#countInfluencerslvl1l2").val());
        $("#countInfluencerslvl1l3txt").text($("#countInfluencerslvl1l3").val());

        kDoblel1lvl0 = false
        kDoblel2lvl0 = false
        kDoblel3lvl0 = false
        kDoblel1lvl1 = false
        kDoblel2lvl1 = false
        kDoblel3lvl1 = false
    }

    lvl0pzpiwf($("#lvl0pzpiw"));
    lvl0pzwaf($("#lvl0pzwa"));
    lvl0pzopf($("#lvl0pzop"));

    lvl1l1pzpiwf($("#lvl1l1pzpiw"));
    lvl1l1pzwaf($("#lvl1l1pzwa"));
    lvl1l1pzopf($("#lvl1l1pzop"));
    lvl2l1pzpiwf($("#lvl2l1pzpiw"));
    lvl2l1pzwaf($("#lvl2l1pzwa"));
    lvl2l1pzopf($("#lvl2l1pzop"));

    lvl1l2pzpiwf($("#lvl1l2pzpiw"));
    lvl1l2pzwaf($("#lvl1l2pzwa"));
    lvl1l2pzopf($("#lvl1l2pzop"));
    lvl2l2pzpiwf($("#lvl2l2pzpiw"));
    lvl2l2pzwaf($("#lvl2l2pzwa"));
    lvl2l2pzopf($("#lvl2l2pzop"));

    lvl1l3pzpiwf($("#lvl1l3pzpiw"));
    lvl1l3pzwaf($("#lvl1l3pzwa"));
    lvl1l3pzopf($("#lvl1l3pzop"));
    lvl2l3pzpiwf($("#lvl2l3pzpiw"));
    lvl2l3pzwaf($("#lvl2l3pzwa"));
    lvl2l3pzopf($("#lvl2l3pzop"));
    contador = 0;
    contComp = 0;
}

function showKit(chk, idDivKit, KitSelect, selectRango, inppzpiw, inppzwa, inppzop){
    check = $("#" + chk);

    var lvl1l1Inf = false;
    var lvl1l2Inf = false;
    var lvl1l3Inf = false;

    var lvl2l1Inf = false;
    var lvl2l2Inf = false;
    var lvl2l3Inf = false;
    
    if(check.prop("checked")) {
        $("." + idDivKit).show();
        $("#" + selectRango).val('1');
        $("#" + KitSelect).val('1');
        //activeLevel3(chk);
        if($('#lvl1l1Registro').prop("checked") || $('#lvl2l1Registro').prop("checked") || $('#lvl1l2Registro').prop("checked") || $('#lvl2l2Registro').prop("checked") || $('#lvl1l3Registro').prop("checked") || $('#lvl2l3Registro').prop("checked")){
            $("#type").val(1);
        }

        var countInfluencerslvl0 = $("#countInfluencerslvl0").val();
        var countInfluencerslvl1l1 = $("#countInfluencerslvl1l1").val();
        var countInfluencerslvl1l2 = $("#countInfluencerslvl1l2").val();
        var countInfluencerslvl1l3 = $("#countInfluencerslvl1l3").val();

        if(inppzpiw == "lvl1l1pzpiw"){
            if($("#countInfluencerslvl0").val() < 6 && lvl1l1Inf != true){
                $("#countInfluencerslvl0").val((parseInt(countInfluencerslvl0) + parseInt(1))); 
            }
            lvl1l1Inf = true;
        }

        if(inppzpiw == "lvl1l2pzpiw"){
            if($("#countInfluencerslvl0").val() < 6 && lvl1l2Inf != true){
                $("#countInfluencerslvl0").val((parseInt(countInfluencerslvl0) + parseInt(1))); 
            }
            lvl1l2Inf = true;
        }

        if(inppzpiw == "lvl1l3pzpiw"){
            if($("#countInfluencerslvl0").val() < 6 && lvl1l3Inf != true){
                $("#countInfluencerslvl0").val((parseInt(countInfluencerslvl0) + parseInt(1))); 
            }
            lvl1l3Inf = true;
        }

        if(inppzpiw == "lvl2l1pzpiw" && lvl2l1Inf != true){
            $("#countInfluencerslvl1l1").val((parseInt(countInfluencerslvl1l1) + parseInt(1)));
            lvl2l1Inf = true;
        }
        
        if(inppzpiw == "lvl2l2pzpiw" && lvl2l2Inf != true){
            $("#countInfluencerslvl1l2").val((parseInt(countInfluencerslvl1l2) + parseInt(1)));
            lvl2l2Inf = true;
        }

        if(inppzpiw == "lvl2l3pzpiw" && lvl2l3Inf != true){
            $("#countInfluencerslvl1l3").val((parseInt(countInfluencerslvl1l3) + parseInt(1)));
            lvl2l3Inf = true;
        }

        $("#countInfluencerslvl0txt").text($("#countInfluencerslvl0").val());
        $("#countInfluencerslvl1l1txt").text($("#countInfluencerslvl1l1").val());

        setPzKitIni(KitSelect, inppzpiw, inppzwa, inppzop);
    }
    else if(!check.prop("checked")){
        lvl1l1Inf = false;
        lvl1l2Inf = false;
        lvl1l3Inf = false;

        kDoblel1lvl0 = false;
        kDoblel2lvl0 = false;
        kDoblel3lvl0 = false;

        kDoblel1lvl1 = false;
        kDoblel2lvl1 = false;
        kDoblel3lvl1 = false;

        $("." + idDivKit).hide();
        $("#" + KitSelect).val('0');
        //unActiveLevel3(chk)
        if(!$('#lvl1l1Registro').prop("checked") && !$('#lvl2l1Registro').prop("checked") && !$('#lvl1l2Registro').prop("checked") && !$('#lvl2l2Registro').prop("checked") && !$('#lvl1l3Registro').prop("checked") && !$('#lvl2l3Registro').prop("checked")){
            $("#type").val(0);
        }
        $("#" + inppzpiw).val('0');
        $("#" + inppzwa).val('0');
        $("#" + inppzop).val('0');
        setPzKitIni(KitSelect, inppzpiw, inppzwa, inppzop);
    }
}

function activeLevel3(chk){
    if (chk == "lvl1l1Registro") {
        $("#lvl2l1Registro").prop("checked", true);
        $(".lvl2l1kitDiv").show();
        $("#lvl2l1rango").val('1');
        //$("#lvl2l1KitInicio").val('1');
    }
    else if(chk == "lvl1l2Registro"){
        $("#lvl2l2Registro").prop("checked", true);
        $(".lvl2l2kitDiv").show();
        $("#lvl2l2rango").val('1');
        //$("#lvl2l2KitInicio").val('1');
    }
    else if(chk == "lvl1l3Registro"){
        $("#lvl2l3Registro").prop("checked", true);
        $(".lvl2l3kitDiv").show();
        $("#lvl2l3rango").val('1');
        //$("#lvl2l3KitInicio").val('1');
    }
}

function unActiveLevel3(chk){
    if (chk == "lvl1l1Registro") {
        $("#lvl2l1Registro").prop("checked", false);
        $(".lvl2l1kitDiv").hide();
        $("#lvl2l1rango").val('1');
        $("#lvl2l1KitInicio").val('0');
    }
    else if(chk == "lvl1l2Registro"){
        $("#lvl2l2Registro").prop("checked", false);
        $(".lvl2l2kitDiv").hide();
        $("#lvl2l2rango").val('1');
        $("#lvl2l2KitInicio").val('0');
    }
    else if(chk == "lvl1l3Registro"){
        $("#lvl2l3Registro").prop("checked", false);
        $(".lvl2l3kitDiv").hide();
        $("#lvl2l3rango").val('1');
        $("#lvl2l3KitInicio").val('0');
    }
}

$().ready(function(){
    showLinea1 = 0;

    $('#nivel1linea1').hide();
    $('#nivel1linea2').hide();
    $('#nivel1linea3').hide();
    $('#nivel2linea1').hide();
    $('#nivel2linea2').hide();
    $('#nivel2linea3').hide();
    $(".lvl0kitDiv").hide();
    $(".lvl1l1kitDiv").hide();
    $(".lvl2l1kitDiv").hide();
    $(".lvl1l2kitDiv").hide();
    $(".lvl2l2kitDiv").hide();
    $(".lvl1l3kitDiv").hide();
    $(".lvl2l3kitDiv").hide();

    //$(".labelbonoLvl0").hide();
    //$(".labelbonoLvl1l1").hide();
    $(".labelbonoLvl2l1").hide();
    //$(".labelbonoLvl1l2").hide();
    $(".labelbonoLvl2l2").hide();
    //$(".labelbonoLvl1l3").hide();
    $(".labelbonoLvl2l3").hide();

    $("#gralForm").trigger("reset");

    //////// nivel 0 //////////
    var rango = $("#lvl0rango option:selected").text();
    $("#lvl0rangoText").text(rango);
    //////// Linea 1 nivel 1 //////////
    var rango = $("#lvl1l1rango option:selected").text();
    $("#lvl1l1rangoText").text(rango);
    //////// Linea 1 nivel 2 //////////
    var rango = $("#lvl1l1rango option:selected").text();
    $("#lvl2l1rangoText").text(rango);
    //////// Linea 2 nivel 1 //////////
    var rango = $("#lvl1l2rango option:selected").text();
    $("#lvl1l2rangoText").text(rango);
    //////// Linea 2 nivel 2 //////////
    var rango = $("#lvl2l2rango option:selected").text();
    $("#lvl2l2rangoText").text(rango);
    //////// Linea 3 nivel 1 //////////
    var rango = $("#lvl1l3rango option:selected").text();
    $("#lvl1l3rangoText").text(rango);
    //////// Linea 3 nivel 2 //////////
    var rango = $("#lvl2l3rango option:selected").text();
    $("#lvl2l3rangoText").text(rango);

    $('.lvl0NCHtotal').text(monedaSelec);
    $('.lvl0kinya').text(monedaSelec);
    $('.lvl0bonificaciones').text(monedaSelec);
    $('.lvl0kinyal1').text(monedaSelec);
    $('.lvl0venta').text(monedaSelec);
    $('.lvl0kinyal2').text(monedaSelec);
    $('.lvl0bonoGP').text(monedaSelec);
    $('.lvl0kintai').text(monedaSelec);
    $('.lvl0retail').text(monedaSelec);
    $('.lvl0BonoInfluencer').text(monedaSelec);

    $('.lvl1l1NCHtotal').text(monedaSelec);
    $('.lvl1l1kinya').text(monedaSelec);
    $('.lvl1l1bonificaciones').text(monedaSelec);
    $('.lvl1l1kinyal1').text(monedaSelec);
    $('.lvl1l1venta').text(monedaSelec);
    $('.lvl1l1kinyal2').text(monedaSelec);
    $('.lvl1l1bonoGP').text(monedaSelec);
    $('.lvl1l1kintai').text(monedaSelec);
    $('.lvl1l1retail').text(monedaSelec);
    $('.lvl1l1BonoInfluencer').text(monedaSelec);

    $('.lvl2l1NCHtotal').text(monedaSelec);
    $('.lvl2l1kinya').text(monedaSelec);
    $('.lvl2l1bonificaciones').text(monedaSelec);
    $('.lvl2l1kinyal1').text(monedaSelec);
    $('.lvl2l1venta').text(monedaSelec);
    $('.lvl2l1kinyal2').text(monedaSelec);
    $('.lvl2l1bonoGP').text(monedaSelec);
    $('.lvl2l1kintai').text(monedaSelec);
    $('.lvl2l1retail').text(monedaSelec);
    $('.lvl2l1BonoInfluencer').text(monedaSelec);

    $('.lvl1l2NCHtotal').text(monedaSelec);
    $('.lvl1l2kinya').text(monedaSelec);
    $('.lvl1l2bonificaciones').text(monedaSelec);
    $('.lvl1l2kinyal1').text(monedaSelec);
    $('.lvl1l2venta').text(monedaSelec);
    $('.lvl1l2kinyal2').text(monedaSelec);
    $('.lvl1l2bonoGP').text(monedaSelec);
    $('.lvl1l2kintai').text(monedaSelec);
    $('.lvl1l2retail').text(monedaSelec);
    $('.lvl1l2BonoInfluencer').text(monedaSelec);
    
    $('.lvl2l2NCHtotal').text(monedaSelec);
    $('.lvl2l2kinya').text(monedaSelec);
    $('.lvl2l2bonificaciones').text(monedaSelec);
    $('.lvl2l2kinyal1').text(monedaSelec);
    $('.lvl2l2venta').text(monedaSelec);
    $('.lvl2l2kinyal2').text(monedaSelec);
    $('.lvl2l2bonoGP').text(monedaSelec);
    $('.lvl2l2kintai').text(monedaSelec);
    $('.lvl2l2retail').text(monedaSelec);
    $('.lvl2l2BonoInfluencer').text(monedaSelec);
    
    $('.lvl1l3NCHtotal').text(monedaSelec);
    $('.lvl1l3kinya').text(monedaSelec);
    $('.lvl1l3bonificaciones').text(monedaSelec);
    $('.lvl1l3kinyal1').text(monedaSelec);
    $('.lvl1l3venta').text(monedaSelec);
    $('.lvl1l3kinyal2').text(monedaSelec);
    $('.lvl1l3bonoGP').text(monedaSelec);
    $('.lvl1l3kintai').text(monedaSelec);
    $('.lvl1l3retail').text(monedaSelec);
    $('.lvl1l3BonoInfluencer').text(monedaSelec);
    
    $('.lvl2l3NCHtotal').text(monedaSelec);
    $('.lvl2l3kinya').text(monedaSelec);
    $('.lvl2l3bonificaciones').text(monedaSelec);
    $('.lvl2l3kinyal1').text(monedaSelec);
    $('.lvl2l3venta').text(monedaSelec);
    $('.lvl2l3kinyal2').text(monedaSelec);
    $('.lvl2l3bonoGP').text(monedaSelec);
    $('.lvl2l3kintai').text(monedaSelec);
    $('.lvl2l3retail').text(monedaSelec);
    $('.lvl2l3BonoInfluencer').text(monedaSelec);
});

function addNodeLinea1(){
    showLinea1++;
    switch (showLinea1) {
        case 1:
            $('#nivel1linea1').show(1000); 
            hideLinea1Nivel1var = 1;
            $(".labelbonoLvl0").show();
            break;
        case 2:
            $('#nivel1linea2').show(1000);
            hideLinea2Nivel1var = 1;
            $(".labelbonoLvl0").show();
            break;
        case 3:
            $('#nivel1linea3').show(1000);
            hideLinea3Nivel1var = 1;
            $(".labelbonoLvl0").show();
            showLinea1 = 0;
            break;
    }
}

function addLinea3(nodo, lvlBonoInf){
    $('#' + nodo).show(1000);
    $('.' + lvlBonoInf).show();
}

$(function(){
    $('#gralForm').submit(function(e){
        e.preventDefault();

        $('#sendForm').text('Recalcular');
        $('#sendForm').prepend('<i class="fa fa-calculator"></i> ');
        var route = $('#gralForm').data('route');
        
        var form_data = $(this);

        if (pzvendidasnivel1l1 < 3 && pzvendidasnivel2l1 >= 3) {
            var rangolinea1 = $("#lvl1l1rangoText").text();
            $("#lvl1l1rangoText").text($("#lvl2l1rangoText").text());
            $("#lvl2l1rangoText").text(rangolinea1);

            var selectRangolinea1 = $("#lvl1l1rango").prop('selectedIndex');
            $("select#lvl1l1rango")[0].selectedIndex = $("#lvl2l1rango").prop('selectedIndex');
            $("select#lvl2l1rango")[0].selectedIndex = selectRangolinea1;
            $("#lvl2l1rangoText").text($("#lvl2l1rango option:selected").text());

            var selectPaislinea1 = $("#lvl1l1pais").prop('selectedIndex');
            $("select#lvl1l1pais")[0].selectedIndex = $("#lvl2l1pais").prop('selectedIndex');
            $("select#lvl2l1pais")[0].selectedIndex = selectPaislinea1;

            var piwLinea1 = $('#lvl1l1pzpiw').val();
            $("#lvl1l1pzpiw").val($('#lvl2l1pzpiw').val());
            $('#lvl2l1pzpiw').val(piwLinea1);

            var waLinea1 = $('#lvl1l1pzwa').val();
            $("#lvl1l1pzwa").val($('#lvl2l1pzwa').val());
            $('#lvl2l1pzwa').val(waLinea1);

            var aqpLinea1 = $('#lvl1l1pzaqp').val();
            $("#lvl1l1pzaqp").val($('#lvl2l1pzaqp').val());
            $('#lvl2l1pzaqp').val(aqpLinea1);

            var opLinea1 = $('#lvl1l1pzop').val();
            $("#lvl1l1pzop").val($('#lvl2l1pzop').val());
            $('#lvl2l1pzop').val(opLinea1);

            var pzVenta = pzvendidasnivel2l1;
            $('#lvl1l1pz_vendidas').text( $('#lvl2l1pz_vendidas').text());
            $('#lvl2l1pz_vendidas').text(opLinea1);
            
            pzvendidasnivel1l1 = pzvendidasnivel2l1;
            pzvendidasnivel2l1 = pzVenta;
            if(pzvendidasnivel1l1 >= 3){
                $("#lvl1l1Avatar").attr("src","../SimuladorNC/img/ninja1.png");
                if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3){
                    $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
                    $('#lvl0AlcanceImg').attr('src', '../SimuladorNC/img/kinya+.png');
                    $('.lvl0alcance').css('display', 'block');
                    $('.lvl0Alcancekinya').text('+1');
                    if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel2l1 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel2l2 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l3 >= 3){
                        $('.lvl0Alcancekinya').text('+2');
                    }
                }
            }
            $('.lvl1l1Alcancekinya').text('');

            $("#lvl2l1Avatar").attr("src","../simuladornc/img/asesor.png");
            $('.productos11').css('background-color', '#bebebe');
            $('.productos1').css('background-color', '#ff9900');
            $('.4').css('border-top-width', '0px');
            $('.1').css('border-top-width', '10px');
            $('.1').css('border-top-color', '#ff9900');
            $('.lvl1l1alcance').css('display', 'block');
            $('.lvl2l1alcance').css('display', 'none');
            $('#lvl1l1AlcanceImg').attr('src', '../SimuladorNC/img/kinya.png');
        }

        if (pzvendidasnivel1l2 < 3 && pzvendidasnivel2l2 >= 3) {
            var rangolinea2 = $("#lvl2l2rangoText").text();
            $("#lvl1l2rangoText").text($("#lvl2l2rangoText").text());
            $("#lvl2l2rangoText").text(rangolinea2)

            var selectRangoLinea2 = $("#lvl1l2rango").prop('selectedIndex');
            $("select#lvl1l2rango")[0].selectedIndex = $("#lvl2l2rango").prop('selectedIndex');
            $("select#lvl2l2rango")[0].selectedIndex = selectRangoLinea2;
            $("#lvl2l2rangoText").text($("#lvl2l2rango option:selected").text());

            var selectPaislinea2 = $("#lvl1l2pais").prop('selectedIndex');
            $("select#lvl1l2pais")[0].selectedIndex = $("#lvl2l2pais").prop('selectedIndex');
            $("select#lvl2l2pais")[0].selectedIndex = selectPaislinea2;

            var piwLinea2 = $("#lvl1l2pzpiw").val();
            $("#lvl1l2pzpiw").val($('#lvl2l2pzpiw').val());
            $('#lvl2l2pzpiw').val(piwLinea2);

            var waLinea2 = $("#lvl1l2pzwa").val();
            $("#lvl1l2pzwa").val($('#lvl2l2pzwa').val());
            $('#lvl2l2pzwa').val(waLinea2);

            var aqpLinea2 = $("#lvl1l2pzaqp").val();
            $("#lvl1l2pzaqp").val($('#lvl2l2pzaqp').val());
            $('#lvl2l2pzaqp').val(aqpLinea2);

            var opLinea2 = $("#lvl1l2pzop").val();
            $("#lvl1l2pzop").val($('#lvl2l2pzop').val());
            $('#lvl2l2pzop').val(opLinea2);

            var pzVenta = pzvendidasnivel2l2;
            $('#lvl1l2pz_vendidas').text( $('#lvl2l2pz_vendidas').text());
            $('#lvl2l2pz_vendidas').text(pzVenta);

            $('#lvl2l2retail').text('0.00');

            pzvendidasnivel1l2 = pzvendidasnivel2l2;
            pzvendidasnivel2l2 = pzVenta;
            if(pzvendidasnivel1l2 >= 3){
                $("#lvl1l2Avatar").attr("src","../SimuladorNC/img/ninja1.png");
                if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3){
                    $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
                    $('#lvl0AlcanceImg').attr('src', '../SimuladorNC/img/kinya+.png');
                    $('.lvl0alcance').css('display', 'block');
                    $('.lvl0Alcancekinya').text('+1');
                    if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel2l1 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel2l2 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l3 >= 3){
                        $('.lvl0Alcancekinya').text('+2');
                    }
                }
            }
            $('.lvl1l2Alcancekinya').text('');

            $("#lvl2l2Avatar").attr("src","../simuladornc/img/asesor.png");
            $('.productos22').css('background-color', '#bebebe');
            $('.productos2').css('background-color', '#ff9900');
            $('.5').css('border-top-width', '0px');
            $('.2').css('border-top-width', '10px');
            $('.2').css('border-top-color', '#ff9900');
            $('.lvl1l2alcance').css('display', 'block');
            $('.lvl2l2alcance').css('display', 'none');
            $('#lvl1l2AlcanceImg').attr('src', '../SimuladorNC/img/kinya.png');
        }

        if (pzvendidasnivel1l3 < 3 && pzvendidasnivel2l3 >= 3) {
            var rangoLinea3 = $("#lvl1l3rangoText").text();
            $("#lvl1l3rangoText").text($("#lvl2l3rangoText").text());
            $("#lvl2l3rangoText").text(rangoLinea3);

            var selectRangoLinea3 = $("#lvl1l3rango").prop('selectedIndex');
            $("select#lvl1l3rango")[0].selectedIndex = $("#lvl2l3rango").prop('selectedIndex');
            $("select#lvl2l3rango")[0].selectedIndex = selectRangoLinea3;
            $("#lvl2l3rangoText").text($("#lvl2l3rango option:selected").text());

            var selectPaislinea3 = $("#lvl1l3pais").prop('selectedIndex')
            $("select#lvl1l3pais")[0].selectedIndex = $("#lvl2l3pais").prop('selectedIndex');
            $("select#lvl2l3pais")[0].selectedIndex = 0;

            var piwLinea3 = $("#lvl1l3pzpiw").val();
            $("#lvl1l3pzpiw").val($('#lvl2l3pzpiw').val());
            $('#lvl2l3pzpiw').val(piwLinea3);

            var waLinea3 = $("#lvl1l3pzwa").val();
            $("#lvl1l3pzwa").val($('#lvl2l3pzwa').val());
            $('#lvl2l3pzwa').val(waLinea3);

            var aqpLinea3 = $("#lvl1l3pzaqp").val();
            $("#lvl1l3pzaqp").val($('#lvl2l3pzaqp').val());
            $('#lvl2l3pzaqp').val(aqpLinea3);
 
            var opLinea3 = $("#lvl1l3pzop").val();     
            $("#lvl1l3pzop").val($('#lvl2l3pzop').val());  
            $('#lvl2l3pzop').val(opLinea3); 

            var pzVenta = pzvendidasnivel2l3;
            $('#lvl1l3pz_vendidas').text( $('#lvl2l3pz_vendidas').text());
            $('#lvl2l3pz_vendidas').text(pzVenta); 

            $('#lvl2l3retail').text('0.00');

            pzvendidasnivel1l3 = pzvendidasnivel2l3;
            pzvendidasnivel2l3 = pzVenta;
            if(pzvendidasnivel1l3 >= 3){
                $("#lvl1l3Avatar").attr("src","../SimuladorNC/img/ninja1.png");
                if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3){
                    $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
                    $('#lvl0AlcanceImg').attr('src', '../SimuladorNC/img/kinya+.png');
                    $('.lvl0alcance').css('display', 'block');
                    $('.lvl0Alcancekinya').text('+1');
                    if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel2l1 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel2l2 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l3 >= 3){
                        $('.lvl0Alcancekinya').text('+2');
                    }
                }
            }
            $('.lvl1l3Alcancekinya').text('');

            $("#lvl2l3Avatar").attr("src","../simuladornc/img/asesor.png");
            $('.productos33').css('background-color', '#bebebe');
            $('.productos3').css('background-color', '#ff9900');
            $('.6').css('border-top-width', '0px');
            $('.3').css('border-top-width', '10px');
            $('.3').css('border-top-color', '#ff9900');
            $('.lvl1l3alcance').css('display', 'block');
            $('.lvl2l3alcance').css('display', 'none');
            $('#lvl1l3AlcanceImg').attr('src', '../SimuladorNC/img/kinya.png');
        }

        $.ajax({
            type: 'POST',
            url: route,
            data:form_data.serialize(),
            success: function(Response){
                // Linea 0 - Nivel 0
                //if (Response[0].TotalAmount != '.00') {

                var suma0 = 0;
                var suma1 = 0;
                var suma2 = 0;
                var suma3 = 0;
                var suma4 = 0;
                var suma5 = 0;

                var lvl0pzpiw = $("#lvl0pzpiw").val();
                var lvl0pzwa = $("#lvl0pzwa").val();
                var lvl0pzaqp = $("#lvl0pzaqp").val();
                var lvl0pzop = $("#lvl0pzop").val();

                var lvl1l1pzpiw = $("#lvl1l1pzpiw").val();
                var lvl1l1pzwa = $("#lvl1l1pzwa").val();
                var lvl1l1pzaqp = $("#lvl1l1pzaqp").val();
                var lvl1l1pzop = $("#lvl1l1pzop").val();

                var lvl1l2pzpiw = $("#lvl1l2pzpiw").val();
                var lvl1l2pzwa = $("#lvl1l2pzwa").val();
                var lvl1l2pzaqp = $("#lvl1l2pzaqp").val();
                var lvl1l2pzop = $("#lvl1l2pzop").val();

                var lvl1l3pzpiw = $("#lvl1l3pzpiw").val();
                var lvl1l3pzwa = $("#lvl1l3pzwa").val();
                var lvl1l3pzaqp = $("#lvl1l3pzaqp").val();
                var lvl1l3pzop = $("#lvl1l3pzop").val();

                var countInfluencerslvl0 = $("#countInfluencerslvl0").val();

                suma0 = parseInt(lvl0pzpiw) + parseInt(lvl0pzwa) + parseInt(lvl0pzaqp) + parseInt(lvl0pzop);
                suma1 = parseInt(lvl1l1pzpiw) + parseInt(lvl1l1pzwa) + parseInt(lvl1l1pzaqp) + parseInt(lvl1l1pzop);
                suma3 = parseInt(lvl1l2pzpiw) + parseInt(lvl1l2pzwa) + parseInt(lvl1l2pzaqp) + parseInt(lvl1l2pzop);
                suma5 = parseInt(lvl1l3pzpiw) + parseInt(lvl1l3pzwa) + parseInt(lvl1l3pzaqp) + parseInt(lvl1l3pzop);
                //countInfluencerslvl0 >= 3 || 
                //if(suma1 >= 3 || suma3 >= 3 || suma5 >= 3 || suma0 > 0){
                    if (Response[0].TotalAmount == '.00') {
                        Response[0].TotalAmount = parseFloat(Response[0].TotalAmount) + parseFloat(Response[0].KinyaL1) + parseFloat(Response[0].KinyaL2);
                    }

                    var totalfinal = (parseFloat(Response[0].Ganancias_Sugerido) + parseFloat(Response[0].Ganancias_Compras) + parseFloat(Response[0].TotalAmount) + parseFloat((Response[0].VGP > 1500 ? Response[0].Total_Adicional : 0)) + parseFloat(typeof Response[0].Gan_Influencer === 'undefined' || Response[0].Gan_Influencer === null ? 0 : Response[0].Gan_Influencer));
                    $('#lvl0retail').text(formatCurrency(totalfinal));

                    if (typeof Response[0].Gan_Influencer === 'undefined' || Response[0].Gan_Influencer === null) {
                        $("#lvl0BonoInfluencer").text('0.00');
                    }
                    else{
                        (Response[0].Gan_Influencer != '.00' ? $('#lvl0BonoInfluencer').text(formatCurrency(Response[0].Gan_Influencer)) : $('#lvl0BonoInfluencer').text(formatCurrency('0')));
                    }
                    (Response[0].VC != '.00' ? $('#lvl0vc').text(Response[0].VGP) : null);
                    (Response[0].Puntos != '.00' ? (Response[0].Puntos > 100 ? $('#lvl0puntaje').text(Response[0].Puntos) : 0.00) : 0.00);
                    (Response[0].Kinya != '.00' ? $('#lvl0kinya').text(formatCurrency(Response[0].Kinya)) : $('#lvl0kinya').text(formatCurrency('0')));
                    (Response[0].KinyaL1 != '.00' ? $('#lvl0kinyal1').text(formatCurrency(Response[0].KinyaL1)) : $('#lvl0kinyal1').text(formatCurrency('0')));
                    (Response[0].KinyaL2 != '.00' ? $('#lvl0kinyal2').text(formatCurrency(Response[0].KinyaL2)) : $('#lvl0kinyal2').text(formatCurrency('0')));
                    (Response[0].Kintai != '.00' ? $('#lvl0kintai').text(formatCurrency(Response[0].Kintai)) : $('#lvl0kintai').text(formatCurrency('0')));
                    (Response[0].TotalAmount != '.00' ? $('#lvl0NCHtotal').text(formatCurrency(Response[0].TotalAmount)) : null);
                    $('#lvl0bonoGP').text(formatCurrency(Response[0].Total_Adicional));
                    $('#lvl0bonificaciones').text(formatCurrency(Response[0].Ganancias_Sugerido));
                    $('#lvl0venta').text(formatCurrency(Response[0].Ganancias_Compras));
                /*}
                else{
                    $('#lvl0kinya').text(formatCurrency(0));
                    $('#lvl0kinyal1').text(formatCurrency(0));
                    $('#lvl0kinyal2').text(formatCurrency(0));
                    $('#lvl0kintai').text(formatCurrency(0));
                    $('#lvl0NCHtotal').text(formatCurrency(0));
                    $('#lvl0vc').text(formatCurrency(0));
                    $('#lvl0bonoGP').text(formatCurrency(Response[0].Total_Adicional));
                    $('#lvl0bonificaciones').text(formatCurrency(Response[0].Ganancias_Sugerido));
                    $('#lvl0venta').text(formatCurrency(Response[0].Ganancias_Compras));
                    var totalfinal = (parseFloat(Response[0].Ganancias_Sugerido) + parseFloat(Response[0].Ganancias_Compras));
                    $("#lvl0BonoInfluencer").text('0.00');
                    $('#lvl0retail').text(formatCurrency(totalfinal));
                    $("#lvl0puntaje").text('0.00')
                }*/

                // Linea 1 - Nivel 1
                var lvl2l1pzpiw = $("#lvl2l1pzpiw").val();
                var lvl2l1pzwa = $("#lvl2l1pzwa").val();
                var lvl2l1pzaqp = $("#lvl2l1pzaqp").val();
                var lvl2l1pzop = $("#lvl2l1pzop").val();
                var countInfluencerslvl1l1 = $("#countInfluencerslvl1l1").val();

                suma2 = parseInt(lvl2l1pzpiw) + parseInt(lvl2l1pzwa) + parseInt(lvl2l1pzaqp) + parseInt(lvl2l1pzop);

                if(suma2 >= 3 || suma1 > 0){
                    if (Response[1].TotalAmount != '.00') {
                        var totalfinal = (parseFloat(Response[1].Ganancias_Sugerido) + parseFloat(Response[1].Ganancias_Compras) + parseFloat(Response[1].TotalAmount) + parseFloat((Response[1].VGP > 1500 ? Response[1].Total_Adicional : 0)) + parseFloat(typeof Response[1].Gan_Influencer === 'undefined' || Response[0].Gan_Influencer === null ? 0 : Response[1].Gan_Influencer));
                        $('#lvl1l1retail').text(formatCurrency(totalfinal));
                    }
                    if (typeof Response[1].Gan_Influencer === 'undefined' || Response[0].Gan_Influencer === null) {
                        $("#lvl1l1BonoInfluencer").text('0.00');
                    }
                    else{
                        (Response[1].Gan_Influencer != '.00' ? $('#lvl1l1BonoInfluencer').text(formatCurrency(Response[1].Gan_Influencer)) : $('#lvl1l1BonoInfluencer').text(formatCurrency('0')));
                    }
                    (Response[1].VC != '.00' ? $('#lvl1l1vc').text(Response[1].VGP) : null);
                    (Response[1].Puntos != '.00' ? $('#lvl1l1puntaje').text(Response[1].Puntos) : null);
                    (Response[1].Kinya != '.00' ? $('#lvl1l1kinya').text(formatCurrency(Response[1].Kinya)) : null);
                    (Response[1].KinyaL1 != '.00' ? $('#lvl1l1kinyal1').text(formatCurrency(Response[1].KinyaL1)) : null);
                    (Response[1].KinyaL2 != '.00' ? $('#lvl1l1kinyal2').text(formatCurrency(Response[1].KinyaL2)) : null);
                    (Response[1].Kintai != '.00' ? $('#lvl1l1kintai').text(formatCurrency(Response[1].Kintai)) : null);
                    (Response[1].TotalAmount != '.00' ? $('#lvl1l1NCHtotal').text(formatCurrency(Response[1].TotalAmount)) : null);
                    $('#lvl1l1bonoGP').text(formatCurrency(Response[1].Total_Adicional));
                    $('#lvl1l1bonificaciones').text(formatCurrency(Response[1].Ganancias_Sugerido));
                    $('#lvl1l1venta').text(formatCurrency(Response[1].Ganancias_Compras));
                }
                else{
                    $('#lvl1l1retail').text('0.00');
                    $('#lvl1l1vc').text('0.00');
                    $('#lvl1l1BonoInfluencer').text('0.00');
                    $('#lvl1l1puntaje').text('0.00');
                    $('#lvl1l1kinya').text('0.00');
                    $('#lvl1l1kinyal1').text('0.00');
                    $('#lvl1l1kinyal2').text('0.00');
                    $('#lvl1l1kintai').text('0.00')
                    $('#lvl1l1NCHtotal').text('0.00')
                    $('#lvl1l1bonoGP').text('0.00');
                    $('#lvl1l1bonificaciones').text('0.00');
                    $('#lvl1l1venta').text('0.00');
                }

                // Linea 1 - Nivel 2
                if (Response[2].TotalAmount != '.00') {
                    var totalfinal = (parseFloat(Response[2].Ganancias_Sugerido) + parseFloat(Response[2].Ganancias_Compras) + parseFloat(Response[2].TotalAmount) + parseFloat((Response[2].VGP > 1500 ? Response[2].Total_Adicional : 0)));
                    $('#lvl2l1retail').text(formatCurrency(totalfinal));
                }
                (Response[2].VC != '.00' ? $('#lvl2l1vc').text(Response[2].VGP) : null);
                (Response[2].Puntos != '.00' ? $('#lvl2l1puntaje').text(Response[2].Puntos) : null);
                (Response[2].Kinya != '.00' ? $('#lvl2l1kinya').text(formatCurrency(Response[2].Kinya)) : null);
                (Response[2].KinyaL1 != '.00' ? $('#lvl2l1kinyal1').text(formatCurrency(Response[2].KinyaL1)) : null);
                (Response[2].KinyaL2 != '.00' ? $('#lvl2l1kinyal2').text(formatCurrency(Response[2].KinyaL2)) : null);
                (Response[2].Kintai != '.00' ? $('#lvl2l1kintai').text(formatCurrency(Response[2].Kintai)) : null);
                (Response[2].TotalAmount != '.00' ? $('#lvl2l1NCHtotal').text(formatCurrency(Response[2].TotalAmount)) : null);
                $('#lvl2l1bonoGP').text(formatCurrency(Response[2].Total_Adicional));
                $('#lvl2l1bonificaciones').text(formatCurrency(Response[2].Ganancias_Sugerido));
                $('#lvl2l1venta').text(formatCurrency(Response[2].Ganancias_Compras));

                // Linea 2 - Nivel 1
                var lvl2l2pzpiw = $("#lvl2l2pzpiw").val();
                var lvl2l2pzwa = $("#lvl2l2pzwa").val();
                var lvl2l2pzaqp = $("#lvl2l2pzaqp").val();
                var lvl2l2pzop = $("#lvl2l2pzop").val();
                var countInfluencerslvl1l2 = $("#countInfluencerslvl1l2").val();

                suma4 = parseInt(lvl2l2pzpiw) + parseInt(lvl2l2pzwa) + parseInt(lvl2l2pzaqp) + parseInt(lvl2l2pzop);

                if(suma4 >= 3 || suma3 > 0){
                    if (Response[3].TotalAmount != '.00') {
                        var totalfinal = (parseFloat(Response[3].Ganancias_Sugerido) + parseFloat(Response[3].Ganancias_Compras) + parseFloat(Response[3].TotalAmount) + parseFloat((Response[3].VGP > 1500 ? Response[3].Total_Adicional : 0)) + parseFloat(typeof Response[3].Gan_Influencer === 'undefined' || Response[0].Gan_Influencer === null ? 0 : Response[3].Gan_Influencer));
                        $('#lvl1l2retail').text(formatCurrency(totalfinal));
                    }
                    if (typeof Response[3].Gan_Influencer === 'undefined' || Response[0].Gan_Influencer === null) {
                        $("#lvl1l2BonoInfluencer").text('0.00');
                    }
                    else{
                        (Response[3].Gan_Influencer != '.00' ? $('#lvl1l2BonoInfluencer').text(formatCurrency(Response[3].Gan_Influencer)) : $('#lvl1l2BonoInfluencer').text(formatCurrency('0')));
                    }
                    (Response[3].VC != '.00' ? $('#lvl1l2vc').text(Response[3].VGP) : null);
                    (Response[3].Puntos != '.00' ? $('#lvl1l2puntaje').text(Response[3].Puntos) : null);
                    (Response[3].Kinya != '.00' ? $('#lvl1l2kinya').text(formatCurrency(Response[3].Kinya)) : null);
                    (Response[3].KinyaL1 != '.00' ? $('#lvl1l2kinyal1').text(formatCurrency(Response[3].KinyaL1)) : null);
                    (Response[3].KinyaL2 != '.00' ? $('#lvl1l2kinyal2').text(formatCurrency(Response[3].KinyaL2)) : null);
                    (Response[3].Kintai != '.00' ? $('#lvl1l2kintai').text(formatCurrency(Response[3].Kintai)) : null);
                    (Response[3].TotalAmount != '.00' ? $('#lvl1l2NCHtotal').text(formatCurrency(Response[3].TotalAmount)) : null);
                    $('#lvl1l2bonoGP').text(formatCurrency(Response[3].Total_Adicional));
                    $('#lvl1l2bonificaciones').text(formatCurrency(Response[3].Ganancias_Sugerido));
                    $('#lvl1l2venta').text(formatCurrency(Response[3].Ganancias_Compras));
                }
                else{
                    $('#lvl1l2vc').text('0.00');
                    $('#lvl1l2BonoInfluencer').text('0.00');
                    $('#lvl1l2puntaje').text('0.00');
                    $('#lvl1l2kinya').text('0.00');
                    $('#lvl1l2kinyal1').text('0.00');
                    $('#lvl1l2kinyal2').text('0.00');
                    $('#lvl1l2kintai').text('0.00')
                    $('#lvl1l2NCHtotal').text('0.00')
                    $('#lvl1l2bonoGP').text('0.00');
                    $('#lvl1l2bonificaciones').text('0.00');
                    $('#lvl1l2venta').text('0.00');
                }

                // Linea 2 - Nivel 2
                if (Response[4].TotalAmount != '.00') {
                    var totalfinal = (parseFloat(Response[4].Ganancias_Sugerido) + parseFloat(Response[4].Ganancias_Compras) + parseFloat(Response[4].TotalAmount) + parseFloat((Response[4].VGP > 1500 ? Response[4].Total_Adicional : 0)));
                    $('#lvl2l2retail').text(formatCurrency(totalfinal));
                }
                (Response[4].VC != '.00' ? $('#lvl2l2vc').text(Response[4].VGP) : null);
                (Response[4].Puntos != '.00' ? $('#lvl2l2puntaje').text(Response[4].Puntos) : null);
                (Response[4].Kinya != '.00' ? $('#lvl2l2kinya').text(formatCurrency(Response[4].Kinya)) : null);
                (Response[4].KinyaL1 != '.00' ? $('#lvl2l2kinyal1').text(formatCurrency(Response[4].KinyaL1)) : null);
                (Response[4].KinyaL2 != '.00' ? $('#lvl2l2kinyal2').text(formatCurrency(Response[4].KinyaL2)) : null);
                (Response[4].Kintai != '.00' ? $('#lvl2l2kintai').text(formatCurrency(Response[4].Kintai)) : null);
                (Response[4].TotalAmount != '.00' ? $('#lvl2l2NCHtotal').text(formatCurrency(Response[4].TotalAmount)) : null);
                $('#lvl2l2bonoGP').text(formatCurrency(Response[4].Total_Adicional));
                $('#lvl2l2bonificaciones').text(formatCurrency(Response[4].Ganancias_Sugerido));
                $('#lvl2l2venta').text(formatCurrency(Response[4].Ganancias_Compras));

                // Linea 3 - Nivel 1
                var lvl2l3pzpiw = $("#lvl2l3pzpiw").val();
                var lvl2l3pzwa = $("#lvl2l3pzwa").val();
                var lvl2l3pzaqp = $("#lvl2l3pzaqp").val();
                var lvl2l3pzop = $("#lvl2l3pzop").val();
                var countInfluencerslvl1l2 = $("#countInfluencerslvl1l2").val();

                suma6 = parseInt(lvl2l3pzpiw) + parseInt(lvl2l3pzwa) + parseInt(lvl2l3pzaqp) + parseInt(lvl2l3pzop);

                if(suma6 >= 3 || suma5 > 0){
                if (Response[5].TotalAmount != '.00') {
                    var totalfinal = (parseFloat(Response[5].Ganancias_Sugerido) + parseFloat(Response[5].Ganancias_Compras) + parseFloat(Response[5].TotalAmount) + parseFloat((Response[5].VGP > 1500 ? Response[5].Total_Adicional : 0)) + parseFloat(typeof Response[5].Gan_Influencer === 'undefined' || Response[0].Gan_Influencer === null ? 0 : Response[5].Gan_Influencer));
                    $('#lvl1l3retail').text(formatCurrency(totalfinal));
                }
                if (typeof Response[5].Gan_Influencer === 'undefined' || Response[0].Gan_Influencer === null) {
                    $("#lvl1l3BonoInfluencer").text('0.00');
                }
                else{
                    (Response[5].Gan_Influencer != '.00' ? $('#lvl1l3BonoInfluencer').text(formatCurrency(Response[5].Gan_Influencer)) : $('#lvl1l3BonoInfluencer').text(formatCurrency('0')));
                }
                (Response[5].VC != '.00' ? $('#lvl1l3vc').text(Response[5].VGP) : null);
                (Response[5].Puntos != '.00' ? $('#lvl1l3puntaje').text(Response[5].Puntos) : null);
                (Response[5].Kinya != '.00' ? $('#lvl1l3kinya').text(formatCurrency(Response[5].Kinya)) : null);
                (Response[5].KinyaL1 != '.00' ? $('#lvl1l3kinyal1').text(formatCurrency(Response[5].KinyaL1)) : null);
                (Response[5].KinyaL2 != '.00' ? $('#lvl1l3kinyal2').text(formatCurrency(Response[5].KinyaL2)) : null);
                (Response[5].Kintai != '.00' ? $('#lvl1l3kintai').text(formatCurrency(Response[5].Kintai)) : null);
                (Response[5].TotalAmount != '.00' ? $('#lvl1l3NCHtotal').text(formatCurrency(Response[5].TotalAmount)) : null);
                $('#lvl1l3bonoGP').text(formatCurrency(Response[5].Total_Adicional));
                $('#lvl1l3bonificaciones').text(formatCurrency(Response[5].Ganancias_Sugerido));
                $('#lvl1l3venta').text(formatCurrency(Response[5].Ganancias_Compras));
                }
                else{
                    $('#lvl1l3vc').text('0.00');
                    $('#lvl1l3BonoInfluencer').text('0.00');
                    $('#lvl1l3puntaje').text('0.00');
                    $('#lvl1l3kinya').text('0.00');
                    $('#lvl1l3kinyal1').text('0.00');
                    $('#lvl1l3kinyal2').text('0.00');
                    $('#lvl1l3kintai').text('0.00')
                    $('#lvl1l3NCHtotal').text('0.00')
                    $('#lvl1l3bonoGP').text('0.00');
                    $('#lvl1l3bonificaciones').text('0.00');
                    $('#lvl1l3venta').text('0.00');
                }

                // Linea 3 - Nivel 2
                
                if (Response[6].TotalAmount != '.00') {
                    var totalfinal = (parseFloat(Response[6].Ganancias_Sugerido) + parseFloat(Response[6].Ganancias_Compras) + parseFloat(Response[6].TotalAmount) + parseFloat((Response[6].VGP > 1500 ? Response[6].Total_Adicional : 0)));
                    $('#lvl2l3retail').text(formatCurrency(totalfinal));
                }
                (Response[6].VC != '.00' ? $('#lvl2l3vc').text(Response[6].VGP) : null);
                (Response[6].Puntos != '.00' ? $('#lvl2l3puntaje').text(Response[6].Puntos) : null);
                (Response[6].Kinya != '.00' ? $('#lvl2l3kinya').text(formatCurrency(Response[6].Kinya)) : null);
                (Response[6].KinyaL1 != '.00' ? $('#lvl2l3kinyal1').text(formatCurrency(Response[6].KinyaL1)) : null);
                (Response[6].KinyaL2 != '.00' ? $('#lvl2l3kinyal2').text(formatCurrency(Response[6].KinyaL2)) : null);
                (Response[6].Kintai != '.00' ? $('#lvl2l3kintai').text(formatCurrency(Response[6].Kintai)) : null);
                (Response[6].TotalAmount != '.00' ? $('#lvl2l3NCHtotal').text(formatCurrency(Response[6].TotalAmount)) : null);
                $('#lvl2l3bonoGP').text(formatCurrency(Response[6].Total_Adicional));
                $('#lvl2l3bonificaciones').text(formatCurrency(Response[6].Ganancias_Sugerido));
                $('#lvl2l3venta').text(formatCurrency(Response[6].Ganancias_Compras));
            }
        })

        lvl0pzpiwf($("#lvl0pzpiw"));
        lvl0pzwaf($("#lvl0pzwa"));
        lvl0pzopf($("#lvl0pzop"));

        lvl1l1pzpiwf($("#lvl1l1pzpiw"));
        lvl1l1pzwaf($("#lvl1l1pzwa"));
        lvl1l1pzopf($("#lvl1l1pzop"));
        lvl2l1pzpiwf($("#lvl2l1pzpiw"));
        lvl2l1pzwaf($("#lvl2l1pzwa"));
        lvl2l1pzopf($("#lvl2l1pzop"));

        lvl1l2pzpiwf($("#lvl1l2pzpiw"));
        lvl1l2pzwaf($("#lvl1l2pzwa"));
        lvl1l2pzopf($("#lvl1l2pzop"));
        lvl2l2pzpiwf($("#lvl2l2pzpiw"));
        lvl2l2pzwaf($("#lvl2l2pzwa"));
        lvl2l2pzopf($("#lvl2l2pzop"));

        lvl1l3pzpiwf($("#lvl1l3pzpiw"));
        lvl1l3pzwaf($("#lvl1l3pzwa"));
        lvl1l3pzopf($("#lvl1l3pzop"));
        lvl2l3pzpiwf($("#lvl2l3pzpiw"));
        lvl2l3pzwaf($("#lvl2l3pzwa"));
        lvl2l3pzopf($("#lvl2l3pzop"));
    });
})

function hideLinea1Nivel1(){
    if(hideLinea1Nivel1var == 0){
        var nlinea_1 = $('#lvl2l1retail').text();
        $('#lvl1l1retail').text(nlinea_1);
        $('#lvl2l1retail').text('0.00');

        nlinea_1 = $('#lvl2l1NCHtotal').text();
        $('#lvl1l1NCHtotal').text(nlinea_1);
        $('#lvl2l1NCHtotal').text('0.00');

        nlinea_1 = $('#lvl2l1bonificaciones').text();
        $('#lvl1l1bonificaciones').text(nlinea_1);
        $('#lvl2l1bonificaciones').text('0.00');

        nlinea_1 = $('#lvl2l1venta').text();
        $('#lvl1l1venta').text(nlinea_1);
        $('#lvl2l1venta').text('0.00');

        nlinea_1 = $('#lvl2l1bonoGP').text();
        $('#lvl1l1bonoGP').text(nlinea_1);
        $('#lvl2l1bonoGP').text('0.00');

        nlinea_1 = $('#lvl2l1puntaje').text();
        $('#lvl1l1puntaje').text(nlinea_1);
        $('#lvl2l1puntaje').text('0.00');

        nlinea_1 = $('#lvl2l1kinya').text();
        $('#lvl1l1kinya').text(nlinea_1);
        $('#lvl2l1kinya').text('0.00');

        nlinea_1 = $('#lvl2l1kinyal1').text();
        $('#lvl1l1kinyal1').text(nlinea_1);
        $('#lvl2l1kinyal1').text('0.00');

        nlinea_1 = $('#lvl2l1kinyal2').text();
        $('#lvl1l1kinyal2').text(nlinea_1);
        $('#lvl2l1kinyal2').text('0.00');

        nlinea_1 = $('#lvl2l1kintai').text();
        $('#lvl1l1kintai').text(nlinea_1);
        $('#lvl2l1kintai').text('0.00');

        nlinea_1 = $('#lvl2l1vc').text();
        $('#lvl1l1vc').text(nlinea_1);
        $('#lvl2l1vc').text('0.00');

        $("select#lvl1l1rango")[0].selectedIndex = $("#lvl2l1rango").prop('selectedIndex');
        $("select#lvl2l1rango")[0].selectedIndex = 0;
        $("#lvl2l1rangoText").text($("#lvl2l1rango option:selected").text());

        $("select#lvl1l1pais")[0].selectedIndex = $("#lvl2l1pais").prop('selectedIndex');
        $("select#lvl2l1pais")[0].selectedIndex = 0;

        $("#lvl1l1pzpiw").val($('#lvl2l1pzpiw').val());
        $('#lvl2l1pzpiw').val('0');

        $("#lvl1l1pzwa").val($('#lvl2l1pzwa').val());
        $('#lvl2l1pzwa').val('0');

        $("#lvl1l1pzaqp").val($('#lvl2l1pzaqp').val());
        $('#lvl2l1pzaqp').val('0');

        $("#lvl1l1pzop").val($('#lvl2l1pzop').val());
        $('#lvl2l1pzop').val('0');

        $('#lvl1l1pz_vendidas').text( $('#lvl2l1pz_vendidas').text());
        $('#lvl2l1pz_vendidas').text('');
        
        pzvendidasnivel1l1 = pzvendidasnivel2l1;
        pzvendidasnivel2l1 = 0;
        if(pzvendidasnivel1l1 >= 3){
            $("#lvl1l1Avatar").attr("src","../SimuladorNC/img/ninja1.png");
            if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
            }
        }

        $("#lvl2l1Avatar").attr("src","../simuladornc/img/asesor.png");
        $('.productos11').css('background-color', '#bebebe');
        $('.productos1').css('background-color', '#ff9900');
        $('.4').css('border-top-width', '0px');
        $('.1').css('border-top-width', '10px');
        $('.1').css('border-top-color', '#ff9900');
        $('.lvl1l1alcance').css('display', 'block');
        $('.lvl2l1alcance').css('display', 'none');
        $('#lvl1l1AlcanceImg').attr('src', '../SimuladorNC/img/kinya.png');

        setPiezasVendidas()
        setPiezasVendidaslvl1l1();
        setPiezasVendidaslvl1l2();
        setPiezasVendidaslvl1l3();
        setPiezasVendidaslvl2l1();
        setPiezasVendidaslvl2l2();
        setPiezasVendidaslvl2l3();
        $('#nivel2linea1').hide(500);
        
        hideLinea1Nivel1var = 1
    }
    else{
        showLinea1 = 0;
        $(".addLevel1").removeAttr("disabled");
        $('#lvl1l1retail').text('0.00');
        $('#lvl1l1NCHtotal').text('0.00');
        $('#lvl1l1bonificaciones').text('0.00');
        $('#lvl1l1venta').text('0.00');
        $('#lvl1l1bonoGP').text('0.00');
        $('#lvl1l1puntaje').text('0.00');
        $('#lvl1l1kinya').text('0.00');
        $('#lvl1l1kinyal1').text('0.00');
        $('#lvl1l1kinyal2').text('0.00');
        $('#lvl1l1kintai').text('0.00');
        $('#lvl1l1vc').text('0.00');
        $("select#lvl1l1rango")[0].selectedIndex = 0;
        $("#lvl1l1rangoText").text($("#lvl1l1rango option:selected").text());
        $("select#lvl1l1pais")[0].selectedIndex = 0;
        $('#lvl1l1pzpiw').val('0');
        $('#lvl1l1pzwa').val('0');
        $('#lvl1l1pzaqp').val('0');
        $('#lvl1l1pzop').val('0');
        $('#lvl1l1pz_vendidas').text('');
        pzvendidasnivel1l1 = 0;

        setPiezasVendidas()
        setPiezasVendidaslvl1l1();
        setPiezasVendidaslvl1l2();
        setPiezasVendidaslvl1l3();
        setPiezasVendidaslvl2l1();
        setPiezasVendidaslvl2l2();
        setPiezasVendidaslvl2l3();
        $('#nivel1linea1').hide(500);
        hideLinea1Nivel1var = 0;
    }
    hideLinea1Nivel2();
    
    $("#lvl2l1Registro").prop('checked', false);
    $("#lvl1l1Registro").prop('checked', false);

    showKit('lvl2l1Registro', 'lvl2l1kitDiv', 'lvl2l1KitInicio', 'lvl2l1rango', 'lvl2l1pzpiw', 'lvl2l1pzwa', 'lvl2l1pzop')
    showKit('lvl1l1Registro', 'lvl1l1kitDiv', 'lvl1l1KitInicio', 'lvl1l1rango', 'lvl1l1pzpiw', 'lvl1l1pzwa', 'lvl1l1pzop')
}

function hideLinea1Nivel2(){
    $('#lvl2l1retail').text('0.00');
    $('#lvl2l1NCHtotal').text('0.00');
    $('#lvl2l1bonificaciones').text('0.00');
    $('#lvl2l1venta').text('0.00');
    $('#lvl2l1bonoGP').text('0.00');
    $('#lvl2l1puntaje').text('0.00');
    $('#lvl2l1kinya').text('0.00');
    $('#lvl2l1kinyal1').text('0.00');
    $('#lvl2l1kinyal2').text('0.00');
    $('#lvl2l1kintai').text('0.00');
    $('#lvl2l1vc').text('0.00');
    $("select#lvl2l1rango")[0].selectedIndex = 0;
    $("#lvl2l1rangoText").text($("#lvl2l1rango option:selected").text());
    $("select#lvl2l1pais")[0].selectedIndex = 0;
    $('#lvl2l1pzpiw').val('0');
    $('#lvl2l1pzwa').val('0');
    $('#lvl2l1pzaqp').val('0');
    $('#lvl2l1pzop').val('0');
    $('#lvl2l1pz_vendidas').text('');
    pzvendidasnivel2l1 = 0;
    setPiezasVendidas()
    setPiezasVendidaslvl1l1();
    setPiezasVendidaslvl1l2();
    setPiezasVendidaslvl1l3();
    setPiezasVendidaslvl2l1();
    setPiezasVendidaslvl2l2();
    setPiezasVendidaslvl2l3();
    $('#nivel2linea1').hide(500);
    hideLinea1Nivel1var = 1;

    $("#lvl2l1Registro").prop('checked', false);
    
    showKit('lvl2l1Registro', 'lvl2l1kitDiv', 'lvl2l1KitInicio', 'lvl2l1rango', 'lvl2l1pzpiw', 'lvl2l1pzwa', 'lvl2l1pzop')
}

function hideLinea2Nivel1(){
    if(hideLinea2Nivel1var == 0){
        var nlinea_1 = $('#lvl2l2retail').text();
        $('#lvl1l2retail').text(nlinea_1);
        $('#lvl2l2retail').text('0.00');

        nlinea_1 = $('#lvl2l2NCHtotal').text();
        $('#lvl1l2NCHtotal').text(nlinea_1);
        $('#lvl2l2NCHtotal').text('0.00');

        nlinea_1 = $('#lvl2l2bonificaciones').text();
        $('#lvl1l2bonificaciones').text(nlinea_1);
        $('#lvl2l2bonificaciones').text('0.00');

        nlinea_1 = $('#lvl2l2venta').text();
        $('#lvl1l2venta').text(nlinea_1);
        $('#lvl2l2venta').text('0.00');

        nlinea_1 = $('#lvl2l2bonoGP').text();
        $('#lvl1l2bonoGP').text(nlinea_1);
        $('#lvl2l2bonoGP').text('0.00');

        nlinea_1 = $('#lvl2l2puntaje').text();
        $('#lvl1l2puntaje').text(nlinea_1);
        $('#lvl2l2puntaje').text('0.00');

        nlinea_1 = $('#lvl2l2kinya').text();
        $('#lvl1l2kinya').text(nlinea_1);
        $('#lvl2l2kinya').text('0.00');

        nlinea_1 = $('#lvl2l2kinyal1').text();
        $('#lvl1l2kinyal1').text(nlinea_1);
        $('#lvl2l2kinyal1').text('0.00');

        nlinea_1 = $('#lvl2l2kinyal2').text();
        $('#lvl1l2kinyal2').text(nlinea_1);
        $('#lvl2l2kinyal2').text('0.00');

        nlinea_1 = $('#lvl2l2kintai').text();
        $('#lvl1l2kintai').text(nlinea_1);
        $('#lvl2l2kintai').text('0.00');

        nlinea_1 = $('#lvl2l2vc').text();
        $('#lvl1l2vc').text(nlinea_1);
        $('#lvl2l2vc').text('0.00');

        $("select#lvl1l2rango")[0].selectedIndex = $("#lvl2l2rango").prop('selectedIndex');
        $("select#lvl2l2rango")[0].selectedIndex = 0;
        $("#lvl2l2rangoText").text($("#lvl2l2rango option:selected").text());

        $("select#lvl1l2pais")[0].selectedIndex = $("#lvl2l2pais").prop('selectedIndex');
        $("select#lvl2l2pais")[0].selectedIndex = 0;

        $("#lvl1l2pzpiw").val($('#lvl2l2pzpiw').val());
        $('#lvl2l2pzpiw').val('0');

        $("#lvl1l2pzwa").val($('#lvl2l2pzwa').val());
        $('#lvl2l2pzwa').val('0');

        $("#lvl1l2pzaqp").val($('#lvl2l2pzaqp').val());
        $('#lvl2l2pzaqp').val('0');

        $("#lvl1l2pzop").val($('#lvl2l2pzop').val());
        $('#lvl2l2pzop').val('0');

        $('#lvl1l2pz_vendidas').text( $('#lvl2l2pz_vendidas').text());
        $('#lvl2l2pz_vendidas').text('');
        
        pzvendidasnivel1l2 = pzvendidasnivel2l2;
        pzvendidasnivel2l2 = 0;
        if(pzvendidasnivel1l2 >= 3){
            $("#lvl1l2Avatar").attr("src","../SimuladorNC/img/ninja1.png");
            if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
            }
        }

        $("#lvl2l2Avatar").attr("src","../simuladornc/img/asesor.png");
        $('.productos22').css('background-color', '#bebebe');
        $('.productos2').css('background-color', '#ff9900');
        $('.5').css('border-top-width', '0px');
        $('.2').css('border-top-width', '10px');
        $('.2').css('border-top-color', '#ff9900');
        $('.lvl1l2alcance').css('display', 'block');
        $('.lvl2l2alcance').css('display', 'none');
        $('#lvl1l2AlcanceImg').attr('src', '../SimuladorNC/img/kinya.png');

        setPiezasVendidas()
        setPiezasVendidaslvl1l1();
        setPiezasVendidaslvl1l2();
        setPiezasVendidaslvl1l3();
        setPiezasVendidaslvl2l1();
        setPiezasVendidaslvl2l2();
        setPiezasVendidaslvl2l3();
        $('#nivel2linea2').hide(500);
        hideLinea2Nivel1var = 1;
    }
    else{
        showLinea1 = 1;
        $(".addLevel1").removeAttr("disabled");
        $('#lvl1l2retail').text('0.00');
        $('#lvl1l2NCHtotal').text('0.00');
        $('#lvl1l2bonificaciones').text('0.00');
        $('#lvl1l2venta').text('0.00');
        $('#lvl1l2bonoGP').text('0.00');
        $('#lvl1l2puntaje').text('0.00');
        $('#lvl1l2kinya').text('0.00');
        $('#lvl1l2kinyal1').text('0.00');
        $('#lvl1l2kinyal2').text('0.00');
        $('#lvl1l2kintai').text('0.00');
        $('#lvl1l2vc').text('0.00');
        $("select#lvl1l2rango")[0].selectedIndex = 0;
        $("#lvl1l2rangoText").text($("#lvl1l2rango option:selected").text());
        $("select#lvl1l2pais")[0].selectedIndex = 0;
        $('#lvl1l2pzpiw').val('0');
        $('#lvl1l2pzwa').val('0');
        $('#lvl1l2pzaqp').val('0');
        $('#lvl1l2pzop').val('0');
        $('#lvl1l2pz_vendidas').text('');
        pzvendidasnivel1l2 = 0;
        setPiezasVendidas()
        setPiezasVendidaslvl1l1();
        setPiezasVendidaslvl1l2();
        setPiezasVendidaslvl1l3();
        setPiezasVendidaslvl2l1();
        setPiezasVendidaslvl2l2();
        setPiezasVendidaslvl2l3();
        $('#nivel1linea2').hide(500);
        hideLinea2Nivel1var = 0;
    }
    hideLinea2Nivel2();

    $("#lvl2l2Registro").prop('checked', false);
    $("#lvl1l2Registro").prop('checked', false);

    showKit('lvl2l2Registro', 'lvl2l2kitDiv', 'lvl2l2KitInicio', 'lvl2l2rango', 'lvl2l2pzpiw', 'lvl2l2pzwa', 'lvl2l2pzop')
    showKit('lvl1l2Registro', 'lvl1l2kitDiv', 'lvl1l2KitInicio', 'lvl1l2rango', 'lvl1l2pzpiw', 'lvl1l2pzwa', 'lvl1l2pzop')
}

function hideLinea2Nivel2(){
    $('#lvl2l2retail').text('0.00');
    $('#lvl2l2NCHtotal').text('0.00');
    $('#lvl2l2bonificaciones').text('0.00');
    $('#lvl2l2venta').text('0.00');
    $('#lvl2l2bonoGP').text('0.00');
    $('#lvl2l2puntaje').text('0.00');
    $('#lvl2l2kinya').text('0.00');
    $('#lvl2l2kinyal1').text('0.00');
    $('#lvl2l2kinyal2').text('0.00');
    $('#lvl2l2kintai').text('0.00');
    $('#lvl2l2vc').text('0.00');
    $("select#lvl2l2rango")[0].selectedIndex = 0;
    $("#lvl2l2rangoText").text($("#lvl2l2rango option:selected").text());
    $("select#lvl2l2pais")[0].selectedIndex = 0;
    $('#lvl2l2pzpiw').val('0');
    $('#lvl2l2pzwa').val('0');
    $('#lvl2l2pzaqp').val('0');
    $('#lvl2l2pzop').val('0');
    $('#lvl2l2pz_vendidas').text('');
    pzvendidasnivell2 = 0;
    setPiezasVendidas()
    setPiezasVendidaslvl1l1();
    setPiezasVendidaslvl1l2();
    setPiezasVendidaslvl1l3();
    setPiezasVendidaslvl2l1();
    setPiezasVendidaslvl2l2();
    setPiezasVendidaslvl2l3();
    $('#nivel2linea2').hide(500);
    hideLinea2Nivel1var = 1;

    $("#lvl2l2Registro").prop('checked', false);

    showKit('lvl2l2Registro', 'lvl2l2kitDiv', 'lvl2l2KitInicio', 'lvl2l2rango', 'lvl2l2pzpiw', 'lvl2l2pzwa', 'lvl2l2pzop')
}

function hideLinea3Nivel1(){
    if(hideLinea3Nivel1var == 0){
        var nlinea_1 = $('#lvl2l3retail').text();
        $('#lvl1l3retail').text(nlinea_1);
        $('#lvl2l3retail').text('0.00');

        nlinea_1 = $('#lvl2l3NCHtotal').text();
        $('#lvl1l3NCHtotal').text(nlinea_1);
        $('#lvl2l3NCHtotal').text('0.00');

        nlinea_1 = $('#lvl2l3bonificaciones').text();
        $('#lvl1l3bonificaciones').text(nlinea_1);
        $('#lvl2l3bonificaciones').text('0.00');

        nlinea_1 = $('#lvl2l3venta').text();
        $('#lvl1l3venta').text(nlinea_1);
        $('#lvl2l3venta').text('0.00');

        nlinea_1 = $('#lvl2l3bonoGP').text();
        $('#lvl1l3bonoGP').text(nlinea_1);
        $('#lvl2l3bonoGP').text('0.00');

        nlinea_1 = $('#lvl2l3puntaje').text();
        $('#lvl1l3puntaje').text(nlinea_1);
        $('#lvl2l3puntaje').text('0.00');

        nlinea_1 = $('#lvl2l3kinya').text();
        $('#lvl1l3kinya').text(nlinea_1);
        $('#lvl2l3kinya').text('0.00');

        nlinea_1 = $('#lvl2l3kinyal1').text();
        $('#lvl1l3kinyal1').text(nlinea_1);
        $('#lvl2l3kinyal1').text('0.00');

        nlinea_1 = $('#lvl2l3kinyal2').text();
        $('#lvl1l3kinyal2').text(nlinea_1);
        $('#lvl2l3kinyal2').text('0.00');

        nlinea_1 = $('#lvl2l3kintai').text();
        $('#lvl1l3kintai').text(nlinea_1);
        $('#lvl2l3kintai').text('0.00');

        nlinea_1 = $('#lvl2l3vc').text();
        $('#lvl1l3vc').text(nlinea_1);
        $('#lvl2l3vc').text('0.00');

        $("select#lvl1l3rango")[0].selectedIndex = $("#lvl2l3rango").prop('selectedIndex');
        $("select#lvl2l3rango")[0].selectedIndex = 0;
        $("#lvl2l3rangoText").text($("#lvl2l3rango option:selected").text());

        $("select#lvl1l3pais")[0].selectedIndex = $("#lvl2l3pais").prop('selectedIndex');
        $("select#lvl2l3pais")[0].selectedIndex = 0;

        $("#lvl1l3pzpiw").val($('#lvl2l3pzpiw').val());
        $('#lvl2l3pzpiw').val('0');

        $("#lvl1l3pzwa").val($('#lvl2l3pzwa').val());
        $('#lvl2l3pzwa').val('0');

        $("#lvl1l3pzaqp").val($('#lvl2l3pzaqp').val());
        $('#lvl2l3pzaqp').val('0');

        $("#lvl1l3pzop").val($('#lvl2l3pzop').val());
        $('#lvl2l3pzop').val('0');

        $('#lvl1l3pz_vendidas').text( $('#lvl2l3pz_vendidas').text());
        $('#lvl2l3pz_vendidas').text('');
        
        pzvendidasnivel1l3 = pzvendidasnivel2l3;
        pzvendidasnivel2l3 = 0;
        if(pzvendidasnivel1l3 >= 3){
            $("#lvl1l3Avatar").attr("src","../SimuladorNC/img/ninja1.png");
            if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
            }
        }

        $("#lvl2l3Avatar").attr("src","../simuladornc/img/asesor.png");
        $('.productos33').css('background-color', '#bebebe');
        $('.productos3').css('background-color', '#ff9900');
        $('.6').css('border-top-width', '0px');
        $('.3').css('border-top-width', '10px');
        $('.3').css('border-top-color', '#ff9900');
        $('.lvl1l3alcance').css('display', 'block');
        $('.lvl2l3alcance').css('display', 'none');
        $('#lvl1l3AlcanceImg').attr('src', '../SimuladorNC/img/kinya.png');

        setPiezasVendidas()
        setPiezasVendidaslvl1l1();
        setPiezasVendidaslvl1l2();
        setPiezasVendidaslvl1l3();
        setPiezasVendidaslvl2l1();
        setPiezasVendidaslvl2l2();
        setPiezasVendidaslvl2l3();
        $('#nivel2linea3').hide(500);
        hideLinea3Nivel1var = 1;
    }
    else{
        showLinea1 = 2;
        $(".addLevel1").removeAttr("disabled");
        $('#lvl1l3retail').text('0.00');
        $('#lvl1l3NCHtotal').text('0.00');
        $('#lvl1l3bonificaciones').text('0.00');
        $('#lvl1l3venta').text('0.00');
        $('#lvl1l3bonoGP').text('0.00');
        $('#lvl1l3puntaje').text('0.00');
        $('#lvl1l3kinya').text('0.00');
        $('#lvl1l3kinyal1').text('0.00');
        $('#lvl1l3kinyal2').text('0.00');
        $('#lvl1l3kintai').text('0.00');
        $('#lvl1l3vc').text('0.00');
        $("select#lvl1l3rango")[0].selectedIndex = 0;
        $("#lvl1l3rangoText").text($("#lvl1l3rango option:selected").text());
        $("select#lvl1l3pais")[0].selectedIndex = 0;
        $('#lvl1l3pzpiw').val('0');
        $('#lvl1l3pzwa').val('0');
        $('#lvl1l3pzaqp').val('0');
        $('#lvl1l3pzop').val('0');
        $('#lvl1l3pz_vendidas').text('');
        pzvendidasnivel1l3 = 0;
        setPiezasVendidas()
        setPiezasVendidaslvl1l1();
        setPiezasVendidaslvl1l2();
        setPiezasVendidaslvl1l3();
        setPiezasVendidaslvl2l1();
        setPiezasVendidaslvl2l2();
        setPiezasVendidaslvl2l3();
        $('#nivel1linea3').hide(500);
        hideLinea3Nivel1var = 0;
    }
    hideLinea3Nivel2();

    $("#lvl2l3Registro").prop('checked', false)
    $("#lvl1l3Registro").prop('checked', false)

    showKit('lvl2l3Registro', 'lvl2l3kitDiv', 'lvl2l3KitInicio', 'lvl2l3rango', 'lvl2l3pzpiw', 'lvl2l3pzwa', 'lvl2l3pzop')
    showKit('lvl1l3Registro', 'lvl1l3kitDiv', 'lvl1l3KitInicio', 'lvl1l3rango', 'lvl1l3pzpiw', 'lvl1l3pzwa', 'lvl1l3pzop')
}

function hideLinea3Nivel2(){
    $('#lvl2l3retail').text('0.00');
    $('#lvl2l3NCHtotal').text('0.00');
    $('#lvl2l3bonificaciones').text('0.00');
    $('#lvl2l3venta').text('0.00');
    $('#lvl2l3bonoGP').text('0.00');
    $('#lvl2l3puntaje').text('0.00');
    $('#lvl2l3kinya').text('0.00');
    $('#lvl2l3kinyal1').text('0.00');
    $('#lvl2l3kinyal2').text('0.00');
    $('#lvl2l3kintai').text('0.00');
    $('#lvl2l3vc').text('0.00');
    $("select#lvl2l3rango")[0].selectedIndex = 0;
    $("#lvl2l3rangoText").text($("#lvl2l3rango option:selected").text());
    $("select#lvl2l3pais")[0].selectedIndex = 0;
    $('#lvl2l3pzpiw').val('0');
    $('#lvl2l3pzwa').val('0');
    $('#lvl2l3pzaqp').val('0');
    $('#lvl2l3pzop').val('0');
    $('#lvl2l3pz_vendidas').text('');
    pzvendidasnivel2l3 = 0;
    setPiezasVendidas()
    setPiezasVendidaslvl1l1();
    setPiezasVendidaslvl1l2();
    setPiezasVendidaslvl1l3();
    setPiezasVendidaslvl2l1();
    setPiezasVendidaslvl2l2();
    setPiezasVendidaslvl2l3();
    $('#nivel2linea3').hide(500);
    hideLinea3Nivel1var = 1

    $("#lvl2l3Registro").prop('checked', false)

    showKit('lvl2l3Registro', 'lvl2l3kitDiv', 'lvl2l3KitInicio', 'lvl2l3rango', 'lvl2l3pzpiw', 'lvl2l3pzwa', 'lvl2l3pzop')
}

var monedaMexicana = '$ ';
var monedaColombia = '$ ';
var monedaCostaRica = '₡ ';
var monedaPanama = '$ ';
var monedaEcuador = 'USD ';
var monedaPeru = 'S/. ';
var monedaSalvador = '$ ';
var monedaGuatemala = 'Q ';
var monedaChilena = '$ ';

var monedaSelec = monedaMexicana;

function formatCurrency(total) {
    var neg = false;
    if(total < 0) {
        neg = true;
        total = Math.abs(total);
    }
    return parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
}

function hideProducts(id, aquapour, optimizer){
    if($('#' + id).val() == 'Lat'){
        monedaSelec = monedaMexicana;
        $("#" + aquapour).parent('div').show();
        $("#" + optimizer).parent('div').show();
        $("." + optimizer).show();
        $('.' + optimizer + 'img').show();
    }
    else if($('#' + id).val() == 'Col'){
        monedaSelec = monedaColombia;
        $("#" + aquapour).parent('div').show();
        $("#" + optimizer).parent('div').show();
        $("." + optimizer).show();
        $('.' + optimizer + 'img').show();
    }
    else if($('#' + id).val() == 'Cri'){
        monedaSelec = monedaCostaRica;
        $("#" + aquapour).parent('div').show();
        $("#" + optimizer).parent('div').show();
        $("." + optimizer).show();
        $('.' + optimizer + 'img').show();
    }
    else if($('#' + id).val() == 'Pan'){
        monedaSelec = monedaPanama;
        $("#" + aquapour).parent('div').show();
        $("#" + optimizer).parent('div').show();
        $("." + optimizer).show();
        $('.' + optimizer + 'img').show();
    }
    else if($('#' + id).val() == 'Ecu'){
        monedaSelec = monedaEcuador;
        $("#" + aquapour).parent('div').show();
        $("#" + optimizer).parent('div').show();
        $("." + optimizer).show();
        $('.' + optimizer + 'img').show();
    }
    else if($('#' + id).val() == 'Per'){
        monedaSelec = monedaPeru;
        $("#" + aquapour).parent('div').show();
        $("#" + optimizer).parent('div').show();
        $("." + optimizer).show();
        $('.' + optimizer + 'img').show();
    }
    else if($('#' + id).val() == 'Gtm'){
        $("#" + optimizer).parent('div').hide();
        $("." + optimizer).hide();
        $("#" + optimizer).val(0);
        $('.' + optimizer + 'img').hide();
        monedaSelec = monedaGuatemala;
    }
    else if( $('#' + id).val() == 'Slv'){
        $("#" + optimizer).parent('div').hide();
        $("." + optimizer).hide();
        $("#" + optimizer).val(0);
        $('.' + optimizer + 'img').hide();
        monedaSelec = monedaSalvador;
    }
    else if( $('#' + id).val() == 'Chl'){
        $("#" + aquapour).parent('div').show();
        $("#" + optimizer).parent('div').show();
        $("." + optimizer).show();
        $('.' + optimizer + 'img').show();
        monedaSelec = monedaChilena;
    }

    switch(id){
        case 'lvl0pais':
            $('.lvl0NCHtotal').text(monedaSelec);
            $('.lvl0kinya').text(monedaSelec);
            $('.lvl0bonificaciones').text(monedaSelec);
            $('.lvl0kinyal1').text(monedaSelec);
            $('.lvl0venta').text(monedaSelec);
            $('.lvl0kinyal2').text(monedaSelec);
            $('.lvl0bonoGP').text(monedaSelec);
            $('.lvl0kintai').text(monedaSelec);
            $('.lvl0retail').text(monedaSelec);
            $('.lvl0BonoInfluencer').text(monedaSelec);
            break;
        case 'lvl1l1pais':
            $('.lvl1l1NCHtotal').text(monedaSelec);
            $('.lvl1l1kinya').text(monedaSelec);
            $('.lvl1l1bonificaciones').text(monedaSelec);
            $('.lvl1l1kinyal1').text(monedaSelec);
            $('.lvl1l1venta').text(monedaSelec);
            $('.lvl1l1kinyal2').text(monedaSelec);
            $('.lvl1l1bonoGP').text(monedaSelec);
            $('.lvl1l1kintai').text(monedaSelec);
            $('.lvl1l1retail').text(monedaSelec);
            $('.lvl1l1BonoInfluencer').text(monedaSelec);
            break;
        case 'lvl2l1pais':  
            $('.lvl2l1NCHtotal').text(monedaSelec);
            $('.lvl2l1kinya').text(monedaSelec);
            $('.lvl2l1bonificaciones').text(monedaSelec);
            $('.lvl2l1kinyal1').text(monedaSelec);
            $('.lvl2l1venta').text(monedaSelec);
            $('.lvl2l1kinyal2').text(monedaSelec);
            $('.lvl2l1bonoGP').text(monedaSelec);
            $('.lvl2l1kintai').text(monedaSelec);
            $('.lvl2l1retail').text(monedaSelec);
            $('.lvl2l1BonoInfluencer').text(monedaSelec);
            break;
        case 'lvl1l2pais':
            $('.lvl1l2NCHtotal').text(monedaSelec);
            $('.lvl1l2kinya').text(monedaSelec);
            $('.lvl1l2bonificaciones').text(monedaSelec);
            $('.lvl1l2kinyal1').text(monedaSelec);
            $('.lvl1l2venta').text(monedaSelec);
            $('.lvl1l2kinyal2').text(monedaSelec);
            $('.lvl1l2bonoGP').text(monedaSelec);
            $('.lvl1l2kintai').text(monedaSelec);
            $('.lvl1l2retail').text(monedaSelec);
            $('.lvl1l2BonoInfluencer').text(monedaSelec);
            break;
        case 'lvl2l2pais':
            $('.lvl2l2NCHtotal').text(monedaSelec);
            $('.lvl2l2kinya').text(monedaSelec);
            $('.lvl2l2bonificaciones').text(monedaSelec);
            $('.lvl2l2kinyal1').text(monedaSelec);
            $('.lvl2l2venta').text(monedaSelec);
            $('.lvl2l2kinyal2').text(monedaSelec);
            $('.lvl2l2bonoGP').text(monedaSelec);
            $('.lvl2l2kintai').text(monedaSelec);
            $('.lvl2l2retail').text(monedaSelec);
            $('.lvl2l2BonoInfluencer').text(monedaSelec);
            break;
        case 'lvl1l3pais':
            $('.lvl1l3NCHtotal').text(monedaSelec);
            $('.lvl1l3kinya').text(monedaSelec);
            $('.lvl1l3bonificaciones').text(monedaSelec);
            $('.lvl1l3kinyal1').text(monedaSelec);
            $('.lvl1l3venta').text(monedaSelec);
            $('.lvl1l3kinyal2').text(monedaSelec);
            $('.lvl1l3bonoGP').text(monedaSelec);
            $('.lvl1l3kintai').text(monedaSelec);
            $('.lvl1l3retail').text(monedaSelec);
            $('.lvl1l3BonoInfluencer').text(monedaSelec);
            break;
        case 'lvl2l3pais':
            $('.lvl2l3NCHtotal').text(monedaSelec);
            $('.lvl2l3kinya').text(monedaSelec);
            $('.lvl2l3bonificaciones').text(monedaSelec);
            $('.lvl2l3kinyal1').text(monedaSelec);
            $('.lvl2l3venta').text(monedaSelec);
            $('.lvl2l3kinyal2').text(monedaSelec);
            $('.lvl2l3bonoGP').text(monedaSelec);
            $('.lvl2l3kintai').text(monedaSelec);
            $('.lvl2l3retail').text(monedaSelec);
            $('.lvl2l3BonoInfluencer').text(monedaSelec);
            break;
    }
    
}

function setTextRango(selectRango, target){
    $("#" + target).text($("#" + selectRango + " option:selected").text());
}

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 2000);
    }
});

//------------------------- NIVEL 0 ------------------------------------------------------------

var pzvendidasnivel0 = 0;
var lvl0pzpiw = 0;
var lvl0pzwa = 0;
var lvl0pzaqp = 0;
var lvl0pzop = 0;

function lvl0pzpiwf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl0pzpiw = input.val();
        //pzvendidasnivel0 = (parseInt(lvl0pzpiw) + parseInt(lvl0pzwa) + parseInt(lvl0pzaqp) + parseInt(lvl0pzop));
    }
    setPiezasVendidas();
}

function lvl0pzwaf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl0pzwa = input.val();
        //pzvendidasnivel0 = (parseInt(lvl0pzpiw) + parseInt(lvl0pzwa) + parseInt(lvl0pzaqp) + parseInt(lvl0pzop));
    }
    setPiezasVendidas();
}

$("#lvl0pzaqp").change(function(){
    var inputenter = this.value;
    if(inputenter == ''){
        this.value = 0;
    }
    else{
        lvl0pzaqp = this.value;
        //pzvendidasnivel0 = (parseInt(lvl0pzpiw) + parseInt(lvl0pzwa) + parseInt(lvl0pzaqp) + parseInt(lvl0pzop));
    }
    setPiezasVendidas(); 
});

function lvl0pzopf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl0pzop = input.val();
        //pzvendidasnivel0 = (parseInt(lvl0pzpiw) + parseInt(lvl0pzwa) + parseInt(lvl0pzaqp) + parseInt(lvl0pzop));
    }
    setPiezasVendidas();
}

function setPiezasVendidas(){
    $('#lvl0pz_vendidas').text(pzvendidasnivel0); //lvl0pzpiw
    var countInfluencerslvl0 = $("#countInfluencerslvl0").val();
    pzvendidasnivel0 = 0;
    var lvl0pzpiw = $("#lvl0pzpiw").val();
    var lvl0pzwa = $("#lvl0pzwa").val();
    var lvl0pzaqp = $("#lvl0pzaqp").val();
    var lvl0pzop = $("#lvl0pzop").val();

    pzvendidasnivel0 = parseInt(pzvendidasnivel0) + parseInt(countInfluencerslvl0) + parseInt(lvl0pzpiw) + parseInt(lvl0pzwa) + parseInt(lvl0pzaqp) + parseInt(lvl0pzop);
    
    if(pzvendidasnivel0 >= 3 ){
        $("#lvl0Avatar").attr("src","../SimuladorNC/img/ninja1.png");
        $(".productos0").css('background-color', '#ff9900');
        //$(".productos0").addClass('prodsNinja');
        $('.0').css('border-top-width', '10px');
        $('.0').css('border-top-style', 'solid');
        $('.0').css('border-top-color', '#ff9900');
        $('#lvl0AlcanceImg').attr('src', '../SimuladorNC/img/kinya.png');
        $('.lvl0alcance').css('display', 'block');

        if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3 ){
            $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
            $(".productos0").css('background-color', '#669933');
            $('.0').css('border-top-width', '10px');
            $('.0').css('border-top-style', 'solid');
            $('.0').css('border-top-color', '#669933');
            $('#lvl0AlcanceImg').attr('src', '../SimuladorNC/img/kinya+.png');
            $('.lvl0Alcancekinya').text('+1');
        }

        if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel2l1 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel2l2 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l3 >= 3){
            $('.lvl0Alcancekinya').text('+2');
        }
    }
    else{
        $("#lvl0Avatar").attr("src","../simuladornc/img/asesor.png");
        $(".productos0").css('background-color', '#bebebe');
        $('.0').css('border-top-width', '0px');

        $('#lvl0AlcanceImg').attr('src', '');
        $('.lvl0Alcancekinya').text('');
        $('.lvl0alcance').css('display', 'none');

        if(pzvendidasnivel1l1 >= 3 && pzvendidasnivel0 >= 3){
            $("#lvl0Avatar").attr("src","../SimuladorNC/img/ninja1.png");
            $(".productos0").css('background-color', '#ff9900');
            $('.0').css('border-top-width', '10px');
            $('.0').css('border-top-style', 'solid');
            $('.0').css('border-top-color', '#ff9900');
            $('.lvl0Alcancekinya').text('');
        }
    }

    if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l1 >= 3 && pzvendidasnivel2l2 >= 3 && pzvendidasnivel2l3 >= 3){
        $("#lvl0Avatar").attr("src","../SimuladorNC/img/sensei1.png");
        $(".productos0").css('background-color', '#3333cc');
        $('.0').css('border-top-width', '10px');
        $('.0').css('border-top-style', 'solid');
        $('.0').css('border-top-color', '#3333cc');
        $('#lvl0AlcanceImg').attr('src', '../SimuladorNC/img/kintai.png');
        $('.lvl0Alcancekinya').text('');
    }
}

//------------------------- NIVEL 1 LINEA 1 ------------------------------------------------------------

var pzvendidasnivel1l1 = 0;
var lvl1l1pzpiw = 0;
var lvl1l1pzwa = 0;
var lvl1l1pzaqp = 0;
var lvl1l1pzop = 0;

function lvl1l1pzpiwf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl1l1pzpiw = input.val();
        pzvendidasnivel1l1 = (parseInt(lvl1l1pzpiw) + parseInt(lvl1l1pzwa) + parseInt(lvl1l1pzaqp) + parseInt(lvl1l1pzop));
        setPiezasVendidaslvl1l1();
    }
}

function lvl1l1pzwaf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl1l1pzwa = input.val();
        pzvendidasnivel1l1 = (parseInt(lvl1l1pzpiw) + parseInt(lvl1l1pzwa) + parseInt(lvl1l1pzaqp) + parseInt(lvl1l1pzop));
        setPiezasVendidaslvl1l1();
    }
};

$("#lvl1l1pzaqp").change(function(){
    var inputenter = this.value;
    if(inputenter == ''){
        this.value = 0;
    }
    else{
        lvl1l1pzaqp = this.value;
        pzvendidasnivel1l1 = (parseInt(lvl1l1pzpiw) + parseInt(lvl1l1pzwa) + parseInt(lvl1l1pzaqp) + parseInt(lvl1l1pzop));
        setPiezasVendidaslvl1l1(); 
    }
    
});

function lvl1l1pzopf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl1l1pzop = input.val();
        pzvendidasnivel1l1 = (parseInt(lvl1l1pzpiw) + parseInt(lvl1l1pzwa) + parseInt(lvl1l1pzaqp) + parseInt(lvl1l1pzop));
        setPiezasVendidaslvl1l1();
    }
}

function setPiezasVendidaslvl1l1(){
    $('#lvl1l1pz_vendidas').text(pzvendidasnivel1l1);

    contador++;
    if (contador <= 1) {
        pzvendidasnivel1l1 = parseInt(pzvendidasnivel1l1) + parseInt($("#countInfluencerslvl1l1").val());
        
        if(pzvendidasnivel1l1 >= 3){
            $("#lvl1l1Avatar").attr("src","../SimuladorNC/img/ninja1.png");
            $(".productos1").css('background-color', '#ff9900');
            $('.1').css('border-top-width', '10px');
            $('.1').css('border-top-style', 'solid');
            $('.1').css('border-top-color', '#ff9900');
            $('#lvl1l1AlcanceImg').attr('src', '../SimuladorNC/img/kinya.png');
            $('.lvl1l1alcance').css('display', 'block');
    
            if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
                $(".productos0").css('background-color', '#669933');
                $('.0').css('border-top-width', '10px');
                $('.0').css('border-top-style', 'solid');
                $('.0').css('border-top-color', '#669933');
                $('.lvl0Alcancekinya').text('+1');
                $('#lvl0AlcanceImg').attr('src', '../SimuladorNC/img/kinya+.png');
            }
    
            if(pzvendidasnivel2l1 >= 3 && pzvendidasnivel1l1 >= 3){
                $('#lvl1l1Avatar').attr("src", "../SimuladorNC/img/samurai1.png");
                $(".productos1").css('background-color', '#669933');
                $('.1').css('border-top-width', '10px');
                $('.1').css('border-top-style', 'solid');
                $('.1').css('border-top-color', '#669933');
                $('.lvl1l1Alcancekinya').text('+1');
                $('#lvl1l1AlcanceImg').attr('src', '../SimuladorNC/img/kinya+.png');
            }
    
            if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel2l1 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel2l2 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l3 >= 3){
                $('.lvl0Alcancekinya').text('+2');
                $('#lvl0AlcanceImg').attr('src', '../SimuladorNC/img/kinya+.png');
            }
        }
        else {
            $("#lvl1l1Avatar").attr("src","../simuladornc/img/asesor.png");
            $('#lvl1l1retail').text('0.00');
            $('.1').css('border-top-width', '0px');
            $(".productos1").css('background-color', '#bebebe');
    
            $('.lvl1l1alcance').css('display', 'none');
            $('.lvl1l1Alcancekinya').text('');
            $('#lvl1l1AlcanceImg').attr('src', '');
    
            if(pzvendidasnivel1l1 < 3 && pzvendidasnivel0 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/ninja1.png");
                $(".productos0").css('background-color', '#ff9900');
                $('.0').css('border-top-width', '10px');
                $('.0').css('border-top-style', 'solid');
                $('.0').css('border-top-color', '#ff9900');
                $('.lvl1l1Alcancekinya').text('');
                $('.lvl0Alcancekinya').text('');
                $('#lvl1l1AlcanceImg').attr('src', '../SimuladorNC/img/kinya.png');
            }
            if(pzvendidasnivel1l2 >= 3 && pzvendidasnivel0 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
                $(".productos0").css('background-color', '#99cc33');
                $('.0').css('border-top-width', '10px');
                $('.0').css('border-top-style', 'solid');
                $('.0').css('border-top-color', '#99cc33');
                $('.lvl1l1Alcancekinya').text('+1');
                $('#lvl1l1AlcanceImg').attr('src', '../SimuladorNC/img/kinya+.png');
            }
            if(pzvendidasnivel1l3 >= 3 && pzvendidasnivel0 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
                $('.lvl1l1Alcancekinya').text('+1');
                $('#lvl1l1AlcanceImg').attr('src', '../SimuladorNC/img/kinya+.png');
            }
        }
        
        if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l1 >= 3 && pzvendidasnivel2l2 >= 3 && pzvendidasnivel2l3 >= 3){
            $("#lvl0Avatar").attr("src","../SimuladorNC/img/sensei1.png");
            $(".productos0").css('background-color', '#3333cc');
            $('.0').css('border-top-width', '10px');
            $('.0').css('border-top-style', 'solid');
            $('.0').css('border-top-color', '#3333cc');
            $('#lvl0AlcanceImg').attr('src', '../SimuladorNC/img/kintai.png');
            $('.lvl0Alcancekinya').text('');
        }
    }
    contador = 0;
}

//------------------------- NIVEL 1 LINEA 2 ------------------------------------------------------------

var pzvendidasnivel1l2 = 0;
var lvl1l2pzpiw = 0;
var lvl1l2pzwa = 0;
var lvl1l2pzaqp = 0;
var lvl1l2pzop = 0;

function lvl1l2pzpiwf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl1l2pzpiw = input.val();
        pzvendidasnivel1l2 = (parseInt(lvl1l2pzpiw) + parseInt(lvl1l2pzwa) + parseInt(lvl1l2pzaqp) + parseInt(lvl1l2pzop));
        setPiezasVendidaslvl1l2();
    }
}

function lvl1l2pzwaf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl1l2pzwa = input.val();
        pzvendidasnivel1l2 = (parseInt(lvl1l2pzpiw) + parseInt(lvl1l2pzwa) + parseInt(lvl1l2pzaqp) + parseInt(lvl1l2pzop));
        setPiezasVendidaslvl1l2();
    }
}

$("#lvl1l2pzaqp").change(function(){
    var inputenter = this.value;
    if(inputenter == ''){
        this.value = 0;
    }
    else{
        lvl1l2pzaqp = this.value;
        pzvendidasnivel1l2 = (parseInt(lvl1l2pzpiw) + parseInt(lvl1l2pzwa) + parseInt(lvl1l2pzaqp) + parseInt(lvl1l2pzop));
        setPiezasVendidaslvl1l2(); 
    }
    
});

function lvl1l2pzopf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl1l2pzop = input.val();
        pzvendidasnivel1l2 = (parseInt(lvl1l2pzpiw) + parseInt(lvl1l2pzwa) + parseInt(lvl1l2pzaqp) + parseInt(lvl1l2pzop));
            setPiezasVendidaslvl1l2();
    }   
}

function setPiezasVendidaslvl1l2(){
    $('#lvl1l2pz_vendidas').text(pzvendidasnivel1l2);
    
    contador++;
    if (contador <= 1) {
        pzvendidasnivel1l2 = parseInt(pzvendidasnivel1l2) + parseInt($("#countInfluencerslvl1l2").val());
        if(pzvendidasnivel1l2 >= 3){
            $("#lvl1l2Avatar").attr("src","../SimuladorNC/img/ninja1.png");
            $(".productos2").css('background-color', '#ff9900');
            $('.2').css('border-top-width', '10px');
            $('.2').css('border-top-style', 'solid');
            $('.2').css('border-top-color', '#ff9900');
            $('#lvl1l2AlcanceImg').attr('src', '../SimuladorNC/img/kinya.png');
            $('.lvl1l2alcance').css('display', 'block');

            if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
                $(".productos0").css('background-color', '#669933');
                $('.0').css('border-top-width', '10px');
                $('.0').css('border-top-style', 'solid');
                $('.0').css('border-top-color', '#669933');
                $('.lvl0Alcancekinya').text('+1');
            }

            if(pzvendidasnivel2l2 >= 3 && pzvendidasnivel1l2 >= 3){
                $('#lvl1l2Avatar').attr("src", "../SimuladorNC/img/samurai1.png");
                $(".productos2").css('background-color', '#669933');
                $('.2').css('border-top-width', '10px');
                $('.2').css('border-top-style', 'solid');
                $('.2').css('border-top-color', '#669933');
                $('.lvl1l2Alcancekinya').text('+1');
                $('#lvl1l2AlcanceImg').attr('src', '../SimuladorNC/img/kinya+.png');
            }

            if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel2l1 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel2l2 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l3 >= 3){
                $('.lvl0Alcancekinya').text('+2');
            }
        }
        else{
            $("#lvl1l2Avatar").attr("src","../simuladornc/img/asesor.png");
            $('#lvl1l2retail').text('0.00');
            $('.2').css('border-top-width', '0px');
            
            $('.lvl1l2alcance').css('display', 'none');
            $('.lvl1l2Alcancekinya').text('');
            $('#lvl1l2AlcanceImg').attr('src', '');

            $(".productos2").css('background-color', '#bebebe');
            if(pzvendidasnivel1l1 < 3 && pzvendidasnivel0 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/ninja1.png");
                $(".productos0").css('background-color', '#ff9900');
                $('.0').css('border-top-width', '10px');
                $('.0').css('border-top-style', 'solid');
                $('.0').css('border-top-color', '#ff9900');
            }
            if(pzvendidasnivel1l2 >= 3 && pzvendidasnivel0 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
                $(".productos0").css('background-color', '#ff9900');
                $('.0').css('border-top-width', '10px');
                $('.0').css('border-top-style', 'solid');
                $('.0').css('border-top-color', '#ff9900');
            }
            if(pzvendidasnivel1l3 >= 3 && pzvendidasnivel0 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
                $(".productos0").css('background-color', '#ff9900');
                $('.0').css('border-top-width', '10px');
                $('.0').css('border-top-style', 'solid');
                $('.0').css('border-top-color', '#ff9900');
            }
        }

        if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l1 >= 3 && pzvendidasnivel2l2 >= 3 && pzvendidasnivel2l3 >= 3){
            $("#lvl0Avatar").attr("src","../SimuladorNC/img/sensei1.png");
            $(".productos0").css('background-color', '#3333cc');
            $('.0').css('border-top-width', '10px');
            $('.0').css('border-top-style', 'solid');
            $('.0').css('border-top-color', '#3333cc');
            $('#lvl0AlcanceImg').attr('src', '../SimuladorNC/img/kintai.png');
            $('.lvl0Alcancekinya').text('');
        }
    }
    contador = 0;
}

//------------------------- NIVEL 1 LINEA 3 ------------------------------------------------------------

var pzvendidasnivel1l3 = 0;
var lvl1l3pzpiw = 0;
var lvl1l3pzwa = 0;
var lvl1l3pzaqp = 0;
var lvl1l3pzop = 0;

function lvl1l3pzpiwf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl1l3pzpiw = input.val();
        pzvendidasnivel1l3 = (parseInt(lvl1l3pzpiw) + parseInt(lvl1l3pzwa) + parseInt(lvl1l3pzaqp) + parseInt(lvl1l3pzop));
        setPiezasVendidaslvl1l3();
    }
}

function lvl1l3pzwaf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl1l3pzwa = input.val();
        pzvendidasnivel1l3 = (parseInt(lvl1l3pzpiw) + parseInt(lvl1l3pzwa) + parseInt(lvl1l3pzaqp) + parseInt(lvl1l3pzop));
        setPiezasVendidaslvl1l3();
    }
}

$("#lvl1l3pzaqp").change(function(){
    var inputenter = this.value;
    if(inputenter == ''){
        this.value = 0;
    }
    else{
        lvl1l3pzaqp = this.value;
        pzvendidasnivel1l3 = (parseInt(lvl1l3pzpiw) + parseInt(lvl1l3pzwa) + parseInt(lvl1l3pzaqp) + parseInt(lvl1l3pzop));
        setPiezasVendidaslvl1l3(); 
    }
    
});

function lvl1l3pzopf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl1l3pzop = input.val();
        pzvendidasnivel1l3 = (parseInt(lvl1l3pzpiw) + parseInt(lvl1l3pzwa) + parseInt(lvl1l3pzaqp) + parseInt(lvl1l3pzop));
            setPiezasVendidaslvl1l3();
    }
}

function setPiezasVendidaslvl1l3(){
    $('#lvl1l3pz_vendidas').text(pzvendidasnivel1l3);

    contador++;
    if (contador <= 1) {
        pzvendidasnivel1l3 = parseInt(pzvendidasnivel1l3) + parseInt($("#countInfluencerslvl1l3").val());
        if(pzvendidasnivel1l3 >= 3){
            $("#lvl1l3Avatar").attr("src","../SimuladorNC/img/ninja1.png");
            $(".productos3").css('background-color', '#ff9900');
            $('.3').css('border-top-width', '10px');
            $('.3').css('border-top-style', 'solid');
            $('.3').css('border-top-color', '#ff9900');

            $('.lvl1l3alcance').css('display', 'block');
            $('#lvl1l3AlcanceImg').attr("src","../SimuladorNC/img/kinya.png");

            if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
                $(".productos0").css('background-color', '#669933');
                $('.0').css('border-top-width', '10px');
                $('.0').css('border-top-style', 'solid');
                $('.0').css('border-top-color', '#669933');
                $('.lvl0Alcancekinya').text('+1');
            }
            if(pzvendidasnivel2l3 >= 3 && pzvendidasnivel1l3 >= 3){
                $('#lvl1l3Avatar').attr("src", "../SimuladorNC/img/samurai1.png");
                $(".productos3").css('background-color', '#669933');
                $('.3').css('border-top-width', '10px');
                $('.3').css('border-top-style', 'solid');
                $('.3').css('border-top-color', '#669933');
                $('.lvl1l3Alcancekinya').text('+1');
                $('#lvl1l3AlcanceImg').attr('src', '../SimuladorNC/img/kinya+.png');
            }
            if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel2l1 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel2l2 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l3 >= 3){
                $('.lvl0Alcancekinya').text('+2');
            }
        }
        else{
            $("#lvl1l3Avatar").attr("src","../simuladornc/img/asesor.png");
            $('#lvl1l3retail').text('0.00');
            $('.3').css('border-top-width', '0px');
            $(".productos3").css('background-color', '#bebebe');

            $('.lvl1l3alcance').css('display', 'none');
            $('.lvl1l3Alcancekinya').text('');
            $('#lvl1l3AlcanceImg').attr('src', '');

            if(pzvendidasnivel1l1 < 3 && pzvendidasnivel0 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/ninja1.png");
                $(".productos0").css('background-color', '#ff9900');
                $('.0').css('border-top-width', '10px');
                $('.0').css('border-top-style', 'solid');
                $('.0').css('border-top-color', '#ff9900');
            }
            if(pzvendidasnivel1l2 >= 3 && pzvendidasnivel0 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
                $(".productos0").css('background-color', '#669933');
                $('.0').css('border-top-width', '10px');
                $('.0').css('border-top-style', 'solid');
                $('.0').css('border-top-color', '#669933');
            }
            if(pzvendidasnivel1l3 >= 3 && pzvendidasnivel0 >= 3){
                $("#lvl0Avatar").attr("src","../SimuladorNC/img/samurai1.png");
                $(".productos0").css('background-color', '#669933');
                $('.0').css('border-top-width', '10px');
                $('.0').css('border-top-style', 'solid');
                $('.0').css('border-top-color', '#669933');
            }
        }

        if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l1 >= 3 && pzvendidasnivel2l2 >= 3 && pzvendidasnivel2l3 >= 3){
            $("#lvl0Avatar").attr("src","../SimuladorNC/img/sensei1.png");
            $(".productos0").css('background-color', '#3333cc');
            $('.0').css('border-top-width', '10px');
            $('.0').css('border-top-style', 'solid');
            $('.0').css('border-top-color', '#3333cc');
            $('#lvl0AlcanceImg').attr('src', '../SimuladorNC/img/kintai.png');
            $('.lvl0Alcancekinya').text('');
        }
    }
    contador = 0;
}

//------------------------- NIVEL 2 LINEA 1 ------------------------------------------------------------

var pzvendidasnivel2l1 = 0;
var lvl2l1pzpiw = 0;
var lvl2l1pzwa = 0;
var lvl2l1pzaqp = 0;
var lvl2l1pzop = 0;

function lvl2l1pzpiwf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl2l1pzpiw = input.val();
        pzvendidasnivel2l1 = (parseInt(lvl2l1pzpiw) + parseInt(lvl2l1pzwa) + parseInt(lvl2l1pzaqp) + parseInt(lvl2l1pzop));
        setPiezasVendidaslvl2l1();
    }
}

function lvl2l1pzwaf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl2l1pzwa = input.val();
        pzvendidasnivel2l1 = (parseInt(lvl2l1pzpiw) + parseInt(lvl2l1pzwa) + parseInt(lvl2l1pzaqp) + parseInt(lvl2l1pzop));
        setPiezasVendidaslvl2l1();
    }
}

$("#lvl2l1pzaqp").change(function(){
    var inputenter = this.value;
    if(inputenter == ''){
        this.value = 0;
    }
    else{
        lvl2l1pzaqp = this.value;
        pzvendidasnivel2l1 = (parseInt(lvl2l1pzpiw) + parseInt(lvl2l1pzwa) + parseInt(lvl2l1pzaqp) + parseInt(lvl2l1pzop));
        setPiezasVendidaslvl2l1(); 
    }
    
});

function lvl2l1pzopf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl2l1pzop = input.val();
        pzvendidasnivel2l1 = (parseInt(lvl2l1pzpiw) + parseInt(lvl2l1pzwa) + parseInt(lvl2l1pzaqp) + parseInt(lvl2l1pzop));
            setPiezasVendidaslvl2l1();
    }
}

function setPiezasVendidaslvl2l1(){
    $('#lvl2l1pz_vendidas').text(pzvendidasnivel2l1);

    if(pzvendidasnivel2l1 >= 3){
        $("#lvl2l1Avatar").attr("src","../SimuladorNC/img/ninja1.png");
        $(".productos11").css('background-color', '#ff9900');
        $('.4').css('border-top-width', '10px');
        $('.4').css('border-top-style', 'solid');
        $('.4').css('border-top-color', '#ff9900');
        
        $('.lvl2l1alcance').css('display', 'block');
        $('#lvl2l1AlcanceImg').attr("src","../SimuladorNC/img/kinya.png");

        if(pzvendidasnivel2l1 >= 3 && pzvendidasnivel1l1 >= 3){
            $('#lvl1l1Avatar').attr("src", "../SimuladorNC/img/samurai1.png");
            $(".productos1").css('background-color', '#669933');
            $('.1').css('border-top-width', '10px');
            $('.1').css('border-top-style', 'solid');
            $('.1').css('border-top-color', '#669933');
            $('.lvl1l1Alcancekinya').text('+1');
            $('#lvl1l1AlcanceImg').attr('src', '../SimuladorNC/img/kinya+.png');
        }

        if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel2l1 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel2l2 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l3 >= 3){
            $('.lvl0Alcancekinya').text('+2');
        }
    }
    else{
        $("#lvl2l1Avatar").attr("src","../simuladornc/img/asesor.png");
        $('#lvl2l1retail').text('0.00');
        $('.4').css('border-top-width', '0px');
        $(".productos11").css('background-color', '#bebebe');
        $('.lvl2l1alcance').css('display', 'none');
        $('#lvl2l1AlcanceImg').attr("src","");
        $('.lvl1l1Alcancekinya').text('');
        if(pzvendidasnivel2l1 < 3 && pzvendidasnivel1l1 >= 3){
            $("#lvl1l1Avatar").attr("src","../SimuladorNC/img/ninja1.png");
            $(".productos1").css('background-color', '#ff9900');
            $('.1').css('border-top-width', '10px');
            $('.1').css('border-top-style', 'solid');
            $('.1').css('border-top-color', '#ff9900');
            $('.lvl1l1Alcancekinya').text('');
            $('#lvl1l1AlcanceImg').attr('src', '../SimuladorNC/img/kinya.png');
        }
    }

    if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l1 >= 3 && pzvendidasnivel2l2 >= 3 && pzvendidasnivel2l3 >= 3){
        $("#lvl0Avatar").attr("src","../SimuladorNC/img/sensei1.png");
        $(".productos0").css('background-color', '#3333cc');
        $('.0').css('border-top-width', '10px');
        $('.0').css('border-top-style', 'solid');
        $('.0').css('border-top-color', '#3333cc');
        $('#lvl0AlcanceImg').attr('src', '../SimuladorNC/img/kintai.png');
        $('.lvl0Alcancekinya').text('');
    }
    else{
        setPiezasVendidas();
    }
}

//------------------------- NIVEL 2 LINEA 2 ------------------------------------------------------------

var pzvendidasnivel2l2 = 0;
var lvl2l2pzpiw = 0;
var lvl2l2pzwa = 0;
var lvl2l2pzaqp = 0;
var lvl2l3pzop = 0;

function lvl2l2pzpiwf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl2l2pzpiw = input.val();
        pzvendidasnivel2l2 = (parseInt(lvl2l2pzpiw) + parseInt(lvl2l2pzwa) + parseInt(lvl2l2pzaqp) + parseInt(lvl2l3pzop));
        setPiezasVendidaslvl2l2();
    }
}

function lvl2l2pzwaf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl2l2pzwa = input.val();
        pzvendidasnivel2l2 = (parseInt(lvl2l2pzpiw) + parseInt(lvl2l2pzwa) + parseInt(lvl2l2pzaqp) + parseInt(lvl2l3pzop));
        setPiezasVendidaslvl2l2();
    }
}

$("#lvl2l2pzaqp").change(function(){
    var inputenter = this.value;
    if(inputenter == ''){
        this.value = 0;
    }
    else{
        lvl2l2pzaqp = this.value;
        pzvendidasnivel2l2 = (parseInt(lvl2l2pzpiw) + parseInt(lvl2l2pzwa) + parseInt(lvl2l2pzaqp) + parseInt(lvl2l3pzop));
        setPiezasVendidaslvl2l2(); 
    }
    
});

function lvl2l2pzopf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl2l3pzop = input.val();
        pzvendidasnivel2l2 = (parseInt(lvl2l2pzpiw) + parseInt(lvl2l2pzwa) + parseInt(lvl2l2pzaqp) + parseInt(lvl2l3pzop));
            setPiezasVendidaslvl2l2();
    }
}

function setPiezasVendidaslvl2l2(){
    $('#lvl2l2pz_vendidas').text(pzvendidasnivel2l2);
    if(pzvendidasnivel2l2 >= 3){
        $("#lvl2l2Avatar").attr("src","../SimuladorNC/img/ninja1.png");
        $(".productos22").css('background-color', '#ff9900');
        $('.5').css('border-top-width', '10px');
        $('.5').css('border-top-style', 'solid');
        $('.5').css('border-top-color', '#ff9900');
        $('.lvl2l2alcance').css('display', 'block');
        $('#lvl2l2AlcanceImg').attr("src","../SimuladorNC/img/kinya.png");
        
        if(pzvendidasnivel2l2 >= 3 && pzvendidasnivel1l2 >= 3){
            $('#lvl1l2Avatar').attr("src", "../SimuladorNC/img/samurai1.png");
            $(".productos2").css('background-color', '#669933');
            $('.2').css('border-top-width', '10px');
            $('.2').css('border-top-style', 'solid');
            $('.2').css('border-top-color', '#669933');
            $('#lvl1l2AlcanceImg').attr('src', '../SimuladorNC/img/kinya+.png');
            $('.lvl1l2Alcancekinya').text('+1');
        }

        if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel2l1 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel2l2 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l3 >= 3){
            $('.lvl0Alcancekinya').text('+2');
        }
    }
    else{
        $("#lvl2l2Avatar").attr("src","../simuladornc/img/asesor.png");
        $('#lvl2l2retail').text('0.00');
        $('.5').css('border-top-width', '0px');
        $(".productos22").css('background-color', '#bebebe');
        $('.lvl2l2alcance').css('display', 'none');
        $('#lvl2l2AlcanceImg').attr("src","");
        $('.lvl1l2Alcancekinya').text('');
        if(pzvendidasnivel2l2 < 3 && pzvendidasnivel1l2 >= 3){
            $('#lvl1l2Avatar').attr("src", "../SimuladorNC/img/ninja1.png");
            $(".productos2").css('background-color', '#ff9900');
            $('.2').css('border-top-width', '10px');
            $('.2').css('border-top-style', 'solid');
            $('.2').css('border-top-color', '#ff9900');
            $('#lvl1l2AlcanceImg').attr('src', '../SimuladorNC/img/kinya.png');
            $('.lvl1l2Alcancekinya').text('');
        }
    }

    if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l1 >= 3 && pzvendidasnivel2l2 >= 3 && pzvendidasnivel2l3 >= 3){
        $("#lvl0Avatar").attr("src","../SimuladorNC/img/sensei1.png");
        $(".productos0").css('background-color', '#3333cc');
        $('.0').css('border-top-width', '10px');
        $('.0').css('border-top-style', 'solid');
        $('.0').css('border-top-color', '#3333cc');
        $('#lvl0AlcanceImg').attr('src', '../SimuladorNC/img/kintai.png');
        $('.lvl0Alcancekinya').text('');
    }
    else{
        setPiezasVendidas();
    }
}

//------------------------- NIVEL 2 LINEA 3 ------------------------------------------------------------

var pzvendidasnivel2l3 = 0;
var lvl2l3pzpiw = 0;
var lvl2l3pzwa = 0;
var lvl2l3pzaqp = 0;
var lvl2l3pzop = 0;

function lvl2l3pzpiwf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl2l3pzpiw = input.val();
        pzvendidasnivel2l3 = (parseInt(lvl2l3pzpiw) + parseInt(lvl2l3pzwa) + parseInt(lvl2l3pzaqp) + parseInt(lvl2l3pzop));
        setPiezasVendidaslvl2l3();
    }
}

function lvl2l3pzwaf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl2l3pzwa = input.val();
        pzvendidasnivel2l3 = (parseInt(lvl2l3pzpiw) + parseInt(lvl2l3pzwa) + parseInt(lvl2l3pzaqp) + parseInt(lvl2l3pzop));
        setPiezasVendidaslvl2l3();
    }
}

$("#lvl2l3pzaqp").change(function(){
    var inputenter = this.value;
    if(inputenter == ''){
        this.value = 0;
    }
    else{
        lvl2l3pzaqp = this.value;
        pzvendidasnivel2l3 = (parseInt(lvl2l3pzpiw) + parseInt(lvl2l3pzwa) + parseInt(lvl2l3pzaqp) + parseInt(lvl2l3pzop));
        setPiezasVendidaslvl2l3(); 
    }
    
});

function lvl2l3pzopf(input){
    var inputenter = input.val();
    if(inputenter == ''){
        input.val(0);
    }
    else{
        lvl2l3pzop = input.val();
        pzvendidasnivel2l3 = (parseInt(lvl2l3pzpiw) + parseInt(lvl2l3pzwa) + parseInt(lvl2l3pzaqp) + parseInt(lvl2l3pzop));
            setPiezasVendidaslvl2l3();
    }
}

function setPiezasVendidaslvl2l3(){
    $('#lvl2l3pz_vendidas').text(pzvendidasnivel2l3);
    if(pzvendidasnivel2l3 >= 3){
        $("#lvl2l3Avatar").attr("src","../SimuladorNC/img/ninja1.png");
        $(".productos33").css('background-color', '#ff9900');
        $('.6').css('border-top-width', '10px');
        $('.6').css('border-top-style', 'solid');
        $('.6').css('border-top-color', '#ff9900');

        $('.lvl2l3alcance').css('display', 'block');
        $('#lvl2l3AlcanceImg').attr("src","../SimuladorNC/img/kinya.png");

        if(pzvendidasnivel2l3 >= 3  && pzvendidasnivel1l3 >= 3){
            $('#lvl1l3Avatar').attr("src", "../SimuladorNC/img/samurai1.png");
            $(".productos3").css('background-color', '#669933');
            $('.3').css('border-top-width', '10px');
            $('.3').css('border-top-style', 'solid');
            $('.3').css('border-top-color', '#669933');
            $('#lvl1l3AlcanceImg').attr("src","../SimuladorNC/img/kinya+.png");
            $('.lvl1l3Alcancekinya').text('+1');
        }

        if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel2l1 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel2l2 >= 3 || pzvendidasnivel0 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l3 >= 3){
            $('.lvl0Alcancekinya').text('+2');
        }
    }
    else{
        $("#lvl2l3Avatar").attr("src","../simuladornc/img/asesor.png");
        $('#lvl2l3retail').text('0.00');
        $('.6').css('border-top-width', '0px');
        $(".productos33").css('background-color', '#bebebe');
        if(pzvendidasnivel2l3 < 3 && pzvendidasnivel1l3 >= 3){
            $('#lvl1l3Avatar').attr("src", "../SimuladorNC/img/ninja1.png");
            $(".productos3").css('background-color', '#ff9900');
            $('.3').css('border-top-width', '10px');
            $('.3').css('border-top-style', 'solid');
            $('.3').css('border-top-color', '#ff9900');

            $('.lvl2l3alcance').css('display', 'none');
            $('#lvl1l3AlcanceImg').attr("src","../SimuladorNC/img/kinya.png");
            $('.lvl1l3Alcancekinya').text('');
        }
        else{
            $('.lvl2l3alcance').css('display', 'none');
        }
    }

    if(pzvendidasnivel0 >= 3 && pzvendidasnivel1l1 >= 3 && pzvendidasnivel1l2 >= 3 && pzvendidasnivel1l3 >= 3 && pzvendidasnivel2l1 >= 3 && pzvendidasnivel2l2 >= 3 && pzvendidasnivel2l3 >= 3){
        $("#lvl0Avatar").attr("src","../SimuladorNC/img/sensei1.png");
        $(".productos0").css('background-color', '#3333cc');
        $('.0').css('border-top-width', '10px');
        $('.0').css('border-top-style', 'solid');
        $('.0').css('border-top-color', '#3333cc');
        $('#lvl0AlcanceImg').attr('src', '../SimuladorNC/img/kintai.png');
        $('.lvl0Alcancekinya').text('');
    }
    else{
        setPiezasVendidas();
    }
}