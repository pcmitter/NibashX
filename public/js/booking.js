const form=document.getElementById('bookingForm');

const popup=document.getElementById('popup');

form.addEventListener('submit',function(e)
{
    e.preventDefault();

    popup.style.display='flex';
});

function closePopup()
{
    popup.style.display='none';
}