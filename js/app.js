var objRecord = {"ID":1,"Name":"Precious","PhoneNo":08051170615,"Address":"London"}
var arrData = [objRecord];
var currentContact = {};
arrData.push({ "ID": 2, "Name": "locas", "PhoneNo": 08051109615, "Address": "gameondon"})
arrData.push({ "ID": 4, "Name": "locas", "PhoneNo": 08051109615, "Address": "gameondon" })
arrData.push({ "ID": 6, "Name": "locas", "PhoneNo": 08051109615, "Address": "gameondon" })
arrData.push({ "ID": 7, "Name": "locas", "PhoneNo": 08051109615, "Address": "gameondon" })
function GenerateID() {
    var id;
    arrData.forEach(element => {
       id  = element.ID;
    });
    return id +1;
}

 function returnArray(id) {
    //get index of the element
    var idx = GetElementIndex(id);
    return arrData[idx];
}
function  GetElementIndex(id) {
    
    var returnIndex = null;
    for (var i = 0; i < arrData.length; i++) {
        if (arrData[i].ID == id) {
            returnIndex = i
            break;
        }
    }
    return returnIndex;
}
function addContact(name,PhoneNo,Address) {
    var id = GenerateID();
    arrData.push({ "ID": id, "Name": name, "PhoneNo": PhoneNo, "Address": Address});
}

function LoadContact() {
    for(var i=0; i<arrData.length; i++){
        var contact = $(".contact");
        contact.append('<div class="item" id="' + arrData[i].ID +' " >' + arrData[i].Name  + '<a class="view">View</a> <small> ' + arrData[i].PhoneNo + '</small></div>')
    }
}
function clearContact(){
     $(".contact").html("");
}
 function returnArray(id) {
    //get index of the element
    var idx = GetElementIndex(id);
    return arrData[idx];
}
function pushData(id) {
  currentContact = returnArray(id);
}

function removeContact(id) {
    var i = GetElementIndex(id);
    if(arrData.splice(i,1)){
        return true;
    }
    else {
        return false;
    }
}

