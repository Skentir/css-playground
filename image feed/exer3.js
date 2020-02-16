$(document).ready(function(){
    $("#upload-btn").click(addToFeed);
});

function addToFeed() {
    var reader = new FileReader(),
        file = document.getElementById("upload-img").files[0];
    reader.onload = function(event) {
        var location = event.target.result,
            extension =  file.type.split('/').pop().toLowerCase();

        if (validate(extension))
          $("<li></li>").html('<img src="'+location+'"/>').appendTo("#feed");
        else
          alert("Hey there! This format is not supported. 🥺");
    };

    reader.readAsDataURL(file);

    reader.onerror = function(event) {
        console.error("File could not be read! Code " + event.target.error.code);
    };
}

function validate(fileType) {
  var allowedExtensions = ['jpeg','jpg','png'];
  for (var i in allowedExtensions) {
    if (fileType === allowedExtensions[i]) {
        return true;
    }
  }
  return false;
}
