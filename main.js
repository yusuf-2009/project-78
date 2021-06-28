var images =
["cheetah.png","elephant.png","jaguar.png","leopard.png","monkey.png"];

var names =
["cheetah","elephant","jaguar","leopard","monkey"];

var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
    {
        i = 0;
    }
    var updateImage = images[i];
    var updateName = names[i];
    document.getElementById(family_member_image).src = updateImage;
    document.getElementById(family_member_name).innerHTML = updateName;
}