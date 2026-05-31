const filter=document.getElementById('priceFilter');

filter.addEventListener('change',function()
{
    const selected=this.value;

    const cards=document.querySelectorAll('.room-card');

    cards.forEach(function(card)
    {
        const price=parseInt(card.dataset.price);

        if(selected==='all')
        {
            card.style.display='';
        }
        else if(price <= Number(selected))
        {
            card.style.display='';
        }
        else
        {
            card.style.display='none';
        }
    });
});