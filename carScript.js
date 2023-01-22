
function changeColors ()
{
   var currentColor = select.value;
   document.getElementById('carImage').src = currentColor + ".jpg";

}
var totalPrice = 0;

function calculatePrice ()
{
   var constantSelection = document.querySelector(".first");
   totalPrice += parseInt(constantSelection.config.value);

   constantSelection = document.querySelector(".second");
   totalPrice += parseInt(constantSelection.factory.value);
   

   constantSelection = document.querySelectorAll('input[name="dealer"]:checked');
   for (item of constantSelection)
   {
      totalPrice += parseInt(item.value);
   }

   var price = document.getElementById("textPrice");
   price.value = totalPrice.toLocaleString();

   totalPrice = 0;
   
}

const select = document.getElementById("slider");
if (select != null)
{
   select.addEventListener('change',changeColors);
   
}

var button = document.getElementById("textButton");
button.addEventListener("click", calculatePrice);



