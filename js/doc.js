 $(document).ready( function(){
            LoadContact();
                
                    //remove contact
                     $("#delete").click(function (e){
                         var cid =  $("#Cid").text();
                         console.log(cid);
                          removeContact(cid);
                            clearContact();
                           LoadContact();
                     });
                   //add new contact;
                   $("#addNew").click(function(e){
                       var name = $("#Nname").val();
                       var phone = $("#Nphone").val();
                       var address = $("#Naddress").text();
                       addContact(name,phone,address);
                        clearContact();
                        LoadContact();
                   })
             
        });

         $(".item").click(function (e) {
                     var id = $(this).attr('id');
                     pushData(id);
                       $("#name").text(currentContact["Name"]);
                        $("#address").text(currentContact["Address"]);
                         $("#phoneno").text(currentContact["Phoneno"]);
                         $("#Cid").text(currentContact["ID"]);
                    });
           
        